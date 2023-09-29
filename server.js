//import modules needed
const express = require('express');
const apiRoute = require('./routes/apiRoute.js');
const htmlRoute = require('./routes/htmlRoute.js');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.use(htmlRoute);
app.use(apiRoute);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});