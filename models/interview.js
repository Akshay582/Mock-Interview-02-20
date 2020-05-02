const mongoose = require('mongoose');

const interview = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    company_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Interview = mongoose.model('Interview', interview);
module.exports = Interview;