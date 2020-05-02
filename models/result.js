const mongoose = require('mongoose');

const result = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    company_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    result: {
        enum: ['pass', 'fail', 'on hold', 'didn"t attempt'],
        default: 'on hold'
    }
});

const Result = mongoose.model('Result', result);
module.exports = Result;