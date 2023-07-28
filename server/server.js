const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


//connecting mongodb
mongoose.connect("mongodb://localhost:27017/vManagement", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.error("failed to connect", err);
    })


//schemae
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
})

const vehicleSchema = new mongoose.Schema({
    regNo: { type: String, required: true, unique: true, },
    engNo: { type: String, required: true, unique: true },
    shiftCharge: { type: Number, required: true },
    agent: { type: String, required: true },
    driver: { type: String, required: true }
})
const vehicleModel = mongoose.model("vehicle", vehicleSchema);

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: Number, required: true },
    aadharNo: { type: Number, required: true },
    allotedVehicle: { type: String, required: true },
    shift: { type: Number, required: true },
    due: { type: Number, required: true }
})
const driverModel = mongoose.model("driver", driverSchema);


//store vehicle data to mongodb
app.post("/addvehicle", async (req, res) => {
    const { regNo, engNo, shiftCharge, agent, driver } = req.body;
    try {
        const existingVehicle = await vehicleModel.findOne({ $or: [{ regNo }, { engNo }] });
        if (existingVehicle) {
            return res.status(400).json({ error: "vehicle already exists" });
        }
        const newVehicle = new vehicleModel({ regNo, engNo, shiftCharge, agent, driver });
        await newVehicle.save();

        return res.status(201).json({ message: "vehicle created successfully!" });
    } catch (error) {
        console.error("error while adding a new vehicle", error);
        return res.status(500).json({ error: "Internal server error." });
    }
})


app.get("/showvehicles", async (req, res) => {
    try {
        const vehicles = await vehicleModel.find();
        return res.status(200).json(vehicles);
    } catch (error) {
        console.error("Error while fetching vehicles", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});




//store driver data to mongodb
app.post("/adddriver", async (req, res) => {
    const { name, address, contact, aadharNo, allotedVehicle, shift, due } = req.body;
    try {
        const existingDriver = await driverModel.findOne({ $or: [{ aadharNo }, { contact }] });
        if (existingDriver) {
            return res.status(400).json({ error: "driver already exists" });
        }
        const newDriver = new driverModel({ name, address, contact, aadharNo, allotedVehicle, shift, due });
        await newDriver.save();

        return res.status(201).json({ message: "driver added successfully!" });
    } catch (error) {
        console.error("error while adding a new driver", error);
        return res.status(500).json({ error: "Internal server error." });
    }
})


app.get("/showdrivers", async (req, res) => {
    try {
        const drivers = await driverModel.find();
        return res.status(200).json(drivers);
    } catch (error) {
        console.error("Error while fetching drivers", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

//admin
const adminModel = mongoose.model("admin", userSchema);
app.post("/adminlogin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingAdmin = await adminModel.findOne({ email });
        if (!existingAdmin) {
            return res.status(401).json({ error: "Invalid email id" });
        }
        if (existingAdmin.password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }
        return res.status(200).json({ message: "login successful" });
    } catch (error) {
        console.error("error during login", error);
        return res.status(500).json({ error: "server error" });
    }
});


//manager
const managerModel = mongoose.model("manager", userSchema);
app.post("/managerlogin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingManager = await managerModel.findOne({ email });
        if (!existingManager) {
            return res.status(401).json({ error: "Invalid email id" });
        }
        if (existingManager.password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }
        return res.status(200).json({ message: "login successful" });
    } catch (error) {
        console.error("error during login", error);
        return res.status(500).json({ error: "server error" });
    }
});


//agents
const agentModel = mongoose.model("agent", userSchema);
app.post("/agentlogin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingAgent = await agentModel.findOne({ email });
        if (!existingAgent) {
            return res.status(401).json({ error: "Invalid email id" });
        }
        if (existingAgent.password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }
        return res.status(200).json({ message: "login successful" });
    } catch (error) {
        console.error("error during login", error);
        return res.status(500).json({ error: "server error" });
    }
});

app.listen(3001, () => {
    console.log("server is running at port 3001");
});