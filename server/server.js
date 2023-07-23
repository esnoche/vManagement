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
    "Reg No.": { type: String, required: true, unique: true, uppercase: true, trim: true },
    "Engine No.": { type: String, required: true, unique: true, trim: true },
    "Charge (per shift)": { type: Number, required: true, trim: true },
    "Agent in charge": { type: String, required: true, uppercase: true, trim: true },
    Driver: { type: String, default: "NA", uppercase: true, trim: true }
})
const vehicleModel = mongoose.model("vehicle", vehicleSchema);

const driverSchema = new mongoose.Schema({
    Name: { type: String, required: true, uppercase: true, trim: true },
    Address: { type: String, required: true, uppercase: true, trim: true },
    Contact: { type: Number, required: true, maxlength: 10, trim: true },
    "Aadhar No": { type: Number, required: true, maxlength: 10, trim: true },
    Vehicle: { type: String, required: true, unique: true, uppercase: true, trim: true },
    "Charge (per shift)": { type: Number, required: true, trim: true },
    Due: { type: Number, required: true, trim: true }
})
const driverModel = mongoose.model("driver", driverSchema);


//fetch data from mongodb
app.get("/api/vehicleData", (req, res) => {
    vehicleModel.find({}, (err, data) => {
        if (err) {
            console.error("Error fetching table data.", err);
            return res.status(500).json({ error: "Error fetching table data." });
        }
        res.json(data);
    });
});


//admin
const adminModel = mongoose.model("admin", userSchema);
app.post("/adminlogin", async (req, res) => {
    const { email, password } = req.body;


    const vehicleSchema = new mongoose.Schema({

        "Reg No.": { type: String, required: true, uppercase: true },
        "Engine No.": { type: String, required: true },
    })
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


    const vehicleSchema = new mongoose.Schema({

        "Reg No.": { type: String, required: true, uppercase: true },
        "Engine No.": { type: String, required: true },
    })
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


    const vehicleSchema = new mongoose.Schema({

        "Reg No.": { type: String, required: true, uppercase: true },
        "Engine No.": { type: String, required: true },
    })
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