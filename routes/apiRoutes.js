const router = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

router.get('/notes', (req, res) => {
    res.json('get!');
});

router.post('/notes', (req, res) => {
    const newNote = req.body
    newNote.id = uuidv4();
    readAndAppend(newNote, '.db/db.json');
});

module.exports = router;