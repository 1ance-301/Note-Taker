const express = require('express');
const router = express.Router();
const path = require('path');
const { notes } = require('../../Develop/db/db.json');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

// displays notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// create new note
router.post('/notes', (req, res) => {
    const newNote = req.body;
    let note = fs.generateUniqueId(newNote);
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../../Develop/db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return res.json(note);
});

module.exports = router;