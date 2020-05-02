const mongoose = require('mongoose');

const company = new mongoose.Schema({
    company_name: {
        type: String,
        required: true,
        unique: true
    },
    locations: {
        type: String,
        required: true
    },
    no_of_students_recruited: {
        type: Number,
        required: true,
        default: 0
    },
    job_designations: {
        type: String,
        required: true
    }
});

const Company = mongoose.model('Company', company);
module.exports = Company;