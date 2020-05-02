const express = require('express');
const router = express.Router();

const resultController = require('../controllers/result');

// to create a result
router.post('/create', resultController.create);

// to list all the results
router.get('/', resultController.listAll);

// to deleted the result record
router.delete('/:id', resultController.delete);

module.exports = router;