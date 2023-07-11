/*
const express = require('express');
const mongoose = require('mongoose');
const Admin = require('./db'); // Assuming you have the admin schema and model in the 'db.js' file

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    startServer(); // Start the server after successful database connection
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

app.post('/admin/login', async (req, res) => {
  // Your login endpoint logic goes here
});

function startServer() {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

*/

const express = require("express");
const mongoose = require("mongoose");
const adminModel = require("../dataModels/AdminSchema");


const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/vManagement", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("connected to mongodb");
        startServer();
    })
    .catch((err) => {
        console.error("Failed to connect to mongodb", err);
    });

app.post("/adminlogin", async (req, res) => {
    /*
    const{email, password} = req.body;

    usrModel.findOne({email})
    .then(existingUser => {
        if(!existingUser) {
            return res.status(404).json({error: "User not found, please signup"});
        }
        if(existingUser.password !== password) {
            return res.status(401).json({error: "Incorrect password"});
        }
        res.json({message: "Login Successful"});
    })
    .catch(err => {
        res.status(500).json({error: err.message});
    })
    */
    const {email, password} = req.body;

    adminModel.findOne({email})
    .then(existingUser => {
        if(!existingUser) {
            return res.status(404).json({error: "you are not an admin"});
        }
        if(existingUser.password !== password) {
            return res.status(401).json({error: "Incorrect password"});
        }
        res.json({message: "Login successful"});
    })
    .catch(err => {
        res.status(500).json({error: err.message1});
    })
})

function startServer() {
    app.listen(3001, () => {
        console.log("server is running on post 3001");
    });
}