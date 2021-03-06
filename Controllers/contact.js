const path = require('path');

const express = require('express');

const contactConroller = require('../Controller/contact')

const router = express.Router();

router.get('/contact', contactConroller.getContact);
router.post('/contact', contactConroller.getContact);

module.exports = router;