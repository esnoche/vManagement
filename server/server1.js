// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Define AdminSchema
const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create Admin model
const Admin = mongoose.model('Admin', AdminSchema);

// Routes
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const newAdmin = new Admin({ email, password });
  newAdmin.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to register admin' });
    } else {
      res.status(200).json({ message: 'Admin registered successfully' });
    }
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  Admin.findOne({ email }, (err, admin) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (!admin) {
      res.status(401).json({ error: 'Admin not found' });
    } else if (admin.password !== password) {
      res.status(401).json({ error: 'Incorrect password' });
    } else {
      res.status(200).json({ message: 'Admin logged in successfully' });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
