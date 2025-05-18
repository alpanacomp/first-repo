const express = require('express');
const app = express();
app.get("/", (req, res) => {
    console.log("Accessing get API");
    res.status(200).send({messge:"Hi there"})
})
app.listen('3000', (req, res) => {
    console.log("App running");
})