const express = require('express');
const router = express.Router();
const path = require('path');

// notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../Develop/public/notes.html"));
});

// start page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../Develop/public/index.html"));
});

module.exports = router;