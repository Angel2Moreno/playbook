//usando obj express
const express = require('express')
//app de express 
const app = express()
//puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000
//path inicial, respondera a la url localhost:3000
app.get('/',(req, res)=>{
    res.send('helloworld')
})
//con esto inicializamos esta app 
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
//respondiendo texto
//localhost:3000/launchx
app.get('/launchx',(req,res)=>{
    res.send('Bienvenidos a launchX')
})
//regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode',(req,res)=>{
    const explorer = {name: "Explore", msg:"Hello"}
    res.send(explorer)
})
//Query params: Recibir parametros por la url
//https://localhost:3000/explorers/angel2dm

app.get('/explorers/explorerName',(req,res)=>{
    req.params = {"explorerName":"angel2dm"}
    res.send(req.params)
})
