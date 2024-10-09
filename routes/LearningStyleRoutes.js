const express = require('express');
const LearningStyle = require('../models/LearningStyle');
const learningstyleRouter = express.Router();

learningstyleRouter.get('/', async (req, res) => {
    try {
        const learning_styles = await LearningStyle.find();
        res.json(learning_styles);
    } catch (error) {
        res.Status(500).json({ message: "error"});
    }

})

  // Add a new learning style
  learningstyleRouter.post('/', async (req, res) => {
    const learningStyle = new LearningStyle({
      style: req.body.style,
      description: req.body.description
    });
  
    try {
      const newLearningStyle = await learningStyle.save();
      res.json(newLearningStyle);
    } catch (error) {
      res.status(400).json({ message: "error" });
    }
  });

  module.exports = learningstyleRouter