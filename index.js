const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("HGello World");
});

app.listen(port, function() {
    console.log("App running on port " + port);
});