const express = require('express');
const Student = require('../models/Student');
const studentRouter = express.Router();


studentRouter.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.Status(500).json({ message: "error" });
    }
})

// Add a new student
studentRouter.post('/', async (req, res) => {
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
  

  

  
  // Update a student's progress
  studentRouter.patch('/:id', async (req, res) => {
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
  studentRouter.delete('/:id', async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });
  
      await student.remove();
      res.json({ message: 'Deleted student' });
    } catch (error) {
      res.status(500).json({ message: "error" });
    }
  });

  module.exports = studentRouter