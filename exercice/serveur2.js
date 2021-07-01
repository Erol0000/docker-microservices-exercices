const express = require('express')
const app = express()
var port = 5372
var port_bis = 4567
var host = "localhost" 

app.get(`/pong`, (req, res) => {
    res.status(200).json({ req: 'ping' })
    console.log("requete : /pong");

})

app.get(`/ping`, (req, res) => {
    setTimeout(() => {
        axios.get(`http://${host}:${port_bis}/ping`)
        .then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }, 500);
})

app.listen(port, host, () => {
    console.log(`Server2 is running on http://${host}:${port}`);
});