const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    learning_style: {
        type: String,
        enum: ['visual', 'auditory', 'kinesthetic'],
        required: true
    },
    progress: {type: Number, default: 0},
    createdAt: {type: Date, default: () => Date.now},
});

const student = mongoose.model('student', studentSchema);
module.exports = student;
