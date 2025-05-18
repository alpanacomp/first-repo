const express = require('express');
const app = express();

app.get("/", (req, res) => {
    console.log("Accessing GET API");
    res.status(200).send({ message: "Hi there" });
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});

module.exports = app; // Export the app to be used in tests
