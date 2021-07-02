const express = require('express')
const app = express()
var port = 5372
var port_serveur3 = 8080
var port_serveur4 = 1111
var host = "localhost" 
const axios = require('axios');


app.get(`/pong`, (req, res) => {
    res.status(200).json({ req: 'ping' })
    console.log("requete : /pong");
    setTimeout(() => {
        axios.get(`http://${host}:${port_serveur3}/serveur1`).then( response => {
            var port_serveur1 = response.data.serveur
            axios.get(`http://${host}:${port_serveur4}/${port_serveur1}/pong`)
            .then(response=>{
                console.log(response.data);
            }).catch(error=>{
                console.log(error)
            })
        })
    }, 500);
})

// app.get(`/ping`, (req, res) => {
//     setTimeout(() => {
//         axios.get(`http://${host}:${port_serveur3}/serveur1`).then( response => {
//             var port_serveur1 = response.data.serveur
//             axios.get(`http://${host}:${port_serveur4}/${port_serveur1}/ping`)
//             .then(response=>{
//                 console.log(response.data);
//             }).catch(error=>{
//                 console.log(error)
//             })
//         })
//     }, 500);
// })

app.listen(port, host, () => {
    console.log(`Server2 is running on http://${host}:${port}`);
});