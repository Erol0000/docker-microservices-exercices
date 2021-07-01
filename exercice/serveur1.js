const express = require('express')
const app = express()
const axios = require('axios');
const { response } = require('express');

var port = 4567
var port_serveur3 = 8080
var host = "localhost" 

app.get(`/ping`, (req, res) => {
    res.status(200).json({ req: 'pong' })
})

app.get(`/pong`, (req, res) => {
    setTimeout(() => {
        axios.get(`http://${host}:${port_serveur3}/serveur2`).then( response => {
            var port_serveur2 = response.data.serveur
            console.log(response.data);
            axios.get(`http://${host}:${port_serveur2}/pong`)
            .then(response=>{
                console.log(' reponse :',response.data);
                setTimeout(() => {
                    axios.get(`http://${host}:${port_serveur2}/pong`)
                }, 500);
            })
        }).catch(error=>{
            console.log(error)
        })
    }, 500);
})

app.listen(port, host, () => {
    console.log(`Server1 is running on http://${host}:${port}`);
});