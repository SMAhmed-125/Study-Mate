
const express = require('express');
const Progress = require('../models/Progress');
const progressRouter = express.Router();


progressRouter.get('/', async (req, res) => {
    try {
        const progress = await Progress.find().populate('student');
        res.json(progress);
    } catch (error) {
        res.Status(500).json({ message: "error"});
    }
})

  // Add new progress
  progressRouter.post('/', async (req, res) => {
    const progress = new Progress({
      student: req.body.student,
      progressPercentage: req.body.progressPercentage
    });
  
    try {
      const newProgress = await progress.save();
      res.json(newProgress);
    } catch (error) {
      res.status(400).json({ message: "error" });
    }
  });

  module.exports = progressRouter