const express = require('express')
const app = express()
const axios = require('axios');

var port = 1111
var port_serveur1 = 4567
var port_serveur2 = 5372
var host = "localhost" 
app.get(`/`, (req, res) => {
    res.send("serveur 4")
})

app.get(`/:port_dest/:message`, (req, res) => {
    axios.get(`http://${host}:${req.params.port_dest}/${req.params.message}`)
    .then(response => {
        res.send(response.data)
    })
})

app.listen(port, host, () => {
    console.log(`Server4 is running on http://${host}:${port}`);
});