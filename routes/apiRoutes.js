const router = require('express').Router();
const store = require('../db/store');

router.get('/notes', (req, res) => {
    res.json('get!');
});

router.post('/notes', (req, res) => {
    store.addNote();
    res.json('post!');
});

module.exports = router;