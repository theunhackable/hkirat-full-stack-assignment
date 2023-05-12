const express = require('express');

const router = express.Router();

// main page
router.get('/', (req, res) => {
    res.status(200).send('Admin Home page');
});

module.exports = router;