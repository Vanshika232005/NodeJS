const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();

const port = process.env.PORT || 6002;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'about.html'));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'about.html'));
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});
