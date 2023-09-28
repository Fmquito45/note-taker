const router = require('express').router();

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/api/notes', async (req, res) => {

});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
router.post('/api/notes', (req, res) => {

})



module.exports = router;