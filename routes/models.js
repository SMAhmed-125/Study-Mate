const express = require('express');
const Student = require('../models/Student');
const LearningStyle = require('../models/LearningStyle');
const Progress = require('../models/Progress');
const router = express.Router();

router.get('/LearningStyle', async (req, res) => {
    try {
        const learning_styles = await LearningStyle.find();
        res.json(learning_styles);
    } catch (error) {
        res.sendStatus(500).json({ message: "error"});
    }

})

router.get('/Progress', async (req, res) => {
    try {
        const progress = await Progress.find().populate('student');
        res.json(progress);
    } catch (error) {
        res.sendStatus(500).json({ message: "error"});
    }
})

router.get('/Student', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.sendStatus(500).json({ message: "error" });
    }
})

// Add a new student
router.post('/Student', async (req, res) => {
    const student = new Student({
      name: req.body.name,
      email: req.body.email,
      learning_style: req.body.learning_style,
      progress: req.body.progress
    });
  
    try {
      const newStudent = await student.save();
      res.json(newStudent);
    } catch (error) {
      res.status(400).json({ message: "error" });
    }
  });
  
  // Add a new learning style
  router.post('/LearningStyle', async (req, res) => {
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
  
  // Add new progress
  router.post('/Progress', async (req, res) => {
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
  
  // Update a student's progress
  router.patch('/Student/:id', async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });
  
      if (req.body.progress !== undefined) {
        student.progress = req.body.progress;
      }
  
      const updatedStudent = await student.save();
      res.json(updatedStudent);
    } catch (error) {
      res.status(400).json({ message: "error" });
    }
  });
  
  // Delete a student
  router.delete('/Student/:id', async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });
  
      await student.remove();
      res.json({ message: 'Deleted student' });
    } catch (error) {
      res.status(500).json({ message: "error" });
    }
  });
  
module.exports = router