const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    student: {type: mongoose.Types.ObjectId, required: true, ref: 'student'},
    progressPercentage: {type: Number, default: 0},
    lastUpdated: {type: Date, default: () => Date.now}
})

const progress = mongoose.model('progress', progressSchema);
module.exports = progress;