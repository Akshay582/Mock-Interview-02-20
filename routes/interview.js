const express = require('express');
const router = express.Router();

const interviewController = require('../controllers/interview');

// to create a interview
router.post('/create', interviewController.create);

// to list all the interview
router.get('/', interviewController.listAll);

// to deleted the interview record
router.delete('/:id', interviewController.delete);

module.exports = router;