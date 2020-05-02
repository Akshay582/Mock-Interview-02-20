const express = require('express');
const router = express.Router();

// for batch
router.use('/batch', require('./batch'));

// for student
router.use('/student', require('./student'));

module.exports = router;