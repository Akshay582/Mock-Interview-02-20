const express = require('express');
const router = express.Router();

const companyController = require('../controllers/company');

// to create a company
router.post('/create', companyController.create);

// to list all the companies
router.get('/', companyController.listAll);

// to update the no_of_students_recruited&job_designations
router.put('/:name', companyController.update);

// to deleted the company record
router.delete('/:name', companyController.delete);

module.exports = router;