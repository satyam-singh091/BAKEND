 const express = require("express")

 const server = express()

server.get('/',(req,res)=>{
    res.send("hell0")
})

server.get("/about",(req,res)=>{
    res.send("this is about page")
})





 server.listen(3000)


