const router = require('express').Router();
const fs = require("fs");

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/api/notes', async (req, res) => {
    const dbNotes = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(dbNotes);
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
router.post('/api/notes', (req, res) => {

})



module.exports = router;