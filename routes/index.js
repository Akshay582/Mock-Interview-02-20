const express = require('express');
const router = express.Router();

// for batch
router.use('/batch', require('./batch'));

// for student
router.use('/student', require('./student'));

// for company
router.use('/company', require('./company'));

// for interview
router.use('/interview', require('./interview'));

// for result
router.use('/result', require('./result'));

module.exports = router;