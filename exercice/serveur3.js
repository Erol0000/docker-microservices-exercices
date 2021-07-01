const express = require('express')
const app = express()
const axios = require('axios');

var port = 8080
var port_serveur1 = 4567
var port_serveur2 = 5372
var host = "localhost" 
app.get(`/`, (req, res) => {
    res.send("serveur 3")
})

app.get(`/serveur1`, (req, res) => {
    res.status(200).json({ serveur: port_serveur1 })
})

app.get(`/serveur2`, (req, res) => {
    res.status(200).json({ serveur: port_serveur2 })
})


app.listen(port, host, () => {
    console.log(`Server3 is running on http://${host}:${port}`);
});