const express = require('express');
const personController = require('../controllers/personController');

const router = express.Router();

router.get('/',personController.generatePersonProfile)

module.exports = router;