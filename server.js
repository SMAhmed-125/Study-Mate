require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import individual route files
const learningStyleRoutes = require('./routes/LearningStyleRoutes');
const progressRoutes = require('./routes/ProgressRoutes');
const resourceRoutes = require('./routes/ResourcesRoutes');
const studentRoutes = require('./routes/StudentRoutes');

const app = express();
const port = process.env.PORT || 4000;
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
app.use('/api/learning-style', learningStyleRoutes);   // Prefix for learning styles routes
app.use('/api/progress', progressRoutes);               // Prefix for progress routes
app.use('/api/resources', resourceRoutes);              // Prefix for resources routes
app.use('/api/students', studentRoutes);                // Prefix for student routes

// Root route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is up and running' });
});

// Connect to MongoDB and start the server
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    })
    .catch((error) => console.error('Failed to connect to MongoDB', error));
