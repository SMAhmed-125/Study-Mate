const mongoose = require('mongoose');

// Learning Style Schema
const learningStyleSchema = new mongoose.Schema({
  style: {
    type: String,
    enum: ['visual', 'auditory', 'kinesthetic'],
    required: true,
  },
  description: { type: String },
});

// Export the model
const LearningStyle = mongoose.model('LearningStyle', learningStyleSchema);
module.exports = LearningStyle;