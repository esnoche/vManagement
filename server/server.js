const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

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

const dbSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
})


//admin
const adminModel = mongoose.model("admin", dbSchema);
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
const managerModel = mongoose.model("manager", dbSchema);
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
const agentModel = mongoose.model("agent", dbSchema);
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