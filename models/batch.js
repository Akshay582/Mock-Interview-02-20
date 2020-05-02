const mongoose = require('mongoose');

const batch = new mongoose.Schema({
    batch_id: {
        type: String,
        required: true,
        unique: true
    },
    batch_name: {
        type: String,
        required: true
    },
    no_of_students: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    current_status: {
        type: String,
        enum: ['running', 'coming soon', 'last month', 'graduated'],
        default: 'coming soon'
    }
});

const Batch = mongoose.model('Batch', batch);
module.exports = Batch;