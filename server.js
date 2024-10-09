require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const modelRouter = require('./routes/models');

const app = express();
const port = process.env.PORT || 5000;
const dbURI = process.env.DB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Routes
app.use('/models', modelRouter);

// Root route
app.get('/', (req, res) => {
    res.status(200).json({ message: "Server is up and running" });
});

// Connect to MongoDB and start the server
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
      console.log('Connected to MongoDB');
      app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((error) => console.error('Failed to connect to MongoDB', error));
