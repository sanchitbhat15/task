const path = require('path');

const express = require('express');

const contactConroller = require('../Controller/contact')

const router = express.Router();

router.get('/success',contactConroller.getSuccess);

module.exports = router;