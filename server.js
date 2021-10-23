const express = require('express');

const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const { notes } = require('./Develop/db/db.json')

// notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

// start page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

// default for unknown path
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

// // middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // displays notes
// app.get('/notes', (req,res) => {
//     let results = notes;
//     res.json(results);
// });

// app.post('/api/notes', (req, res) => {

// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});