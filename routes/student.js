const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student');

// to create a student
router.post('/create', studentController.create);

// to list all students
router.get('/', studentController.listAll);

//to update ?status&phone
router.put('/:id', studentController.update);

//to delete a student
router.delete('/:id', studentController.delete);

module.exports = router;