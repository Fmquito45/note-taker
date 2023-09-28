const router = require('express').Router();
const fs = require("fs");
const {v4: uuidv4} = require('uuid');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/api/notes', async (req, res) => {
    const dbNotes = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(dbNotes);
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
router.post('/api/notes', (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newNotes = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbNotes.push(newNotes);
    fs.writeFileSync("db/db.json", JSON.stringify(dbNotes));
    res.json(dbNotes);
});



module.exports = router;