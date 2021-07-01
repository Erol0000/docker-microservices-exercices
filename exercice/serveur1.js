const express = require('express')
const app = express()
const axios = require('axios');

var port = 4567
var port_bis = 5372
var host = "localhost" 

app.get(`/ping`, (req, res) => {
    res.status(200).json({ req: 'pong' })
})

app.get(`/pong`, (req, res) => {
    setTimeout(() => {
        axios.get(`http://${host}:${port_bis}/pong`)
        .then(response=>{
            console.log(' reponse :',response.data);
            setTimeout(() => {
                axios.get(`http://${host}:${port_bis}/pong`)
            }, 500);

        }).catch(error=>{
            console.log(error)
        })
    }, 500);
})

app.listen(port, host, () => {
    console.log(`Server1 is running on http://${host}:${port}`);
});