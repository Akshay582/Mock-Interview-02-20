const mongoose = require('mongoose');

const result = new mongoose.Schema({
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
    result: {
        type: String,
        enum: ['pass', 'fail', 'on hold', 'didn"t attempt'],
        default: 'on hold'
    }
});

const Result = mongoose.model('Result', result);
module.exports = Result;