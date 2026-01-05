const express = require('express');
const router = express.Router();
const { submitContact, getAllContacts } = require('../controllers/contactController');

// Submit contact form
router.post('/', submitContact);

// Get all contacts (admin only)
router.get('/', getAllContacts);

module.exports = router; 