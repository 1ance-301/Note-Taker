const express = require('express');
const router = express.Router();
const path = require('path');
const { notes } = require('../../Develop/db/db.json');

// displays notes
router.get('/notes', (req,res) => {
    console.log(notes);
    res.json(notes);
});

// create new note
router.post('/notes', (req, res) => {

});

module.exports = router;