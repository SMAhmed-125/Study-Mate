const mongoose = require('mongoose');

const resourcesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  learningStyle: { type: String, enum: ['visual', 'auditory', 'kinesthetic'], required: true },
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  tags: [String],  // Example tags like "Math", "Science", "History"
  createdAt: { type: Date, default: Date.now },
});

const resources = mongoose.model('resources', resourcesSchema);
module.exports = resources;
