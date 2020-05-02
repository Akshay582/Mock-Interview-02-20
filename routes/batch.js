const express = require('express');
const router = express.Router();

const batchController = require('../controllers/batch');

// create a batch
router.post('/create', batchController.create);

// list all batches
router.get('/', batchController.listAll);

//update branch with batch_id
router.put('/:id', batchController.update);

module.exports = router;