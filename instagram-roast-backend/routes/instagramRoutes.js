const express = require('express');
const { getRoast } = require('../controllers/instagramController');

const router = express.Router();

// Define the POST route for /roast
router.post('/roast', getRoast);

module.exports = router;
