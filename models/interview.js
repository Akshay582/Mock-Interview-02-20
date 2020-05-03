const mongoose = require('mongoose');

const interview = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Student'
    },
    company_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Company'
    },
    date: {
        type: Date,
        required: true
    }
});

const Interview = mongoose.model('Interview', interview);
module.exports = Interview;