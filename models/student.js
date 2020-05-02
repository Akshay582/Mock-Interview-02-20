const mongoose = require('mongoose');

// This problem can be solved by creating the normalization schema in mongodb

const course = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    score: {
        type: Number,
        required: true,
        default: 0
    },
    deadline: {
        type: Date,
        required: true
    }
})

const student = new mongoose.Schema({
    batch_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Batch'
    },
    student_id: {
        type: String,
        required: true,
        unique: true
    },
    student_name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    college: {
        type: String, 
        required: true,
        default: 'Other'
    },
    status: {
        type: String,
        enum: ['placed', 'not placed'],
        default: 'not placed'
    },
    course: {
        type: [course]
    }
});

const Student = mongoose.model('Student', student);
module.exports = Student;