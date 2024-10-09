const express = require('express');
const Progress = require('../models/Resources');
const resourcesRouter = express.Router();


  
  resourcesRouter.get('/resources', async (req, res) => {
    const { learningStyle } = req.query;
    try {
      const resources = await Resource.find({ learningStyle });
      res.json(resources);
    } catch (error) {
      res.status(500).json({ error: "Could not fetch resources" });
    }
  });
  
  
module.exports = resourcesRouter