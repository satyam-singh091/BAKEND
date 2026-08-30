const express = require("express")

const app = express()

app.use(express.json())

const notes =[]

  app.get("/",(req,res)=>{
    res.send("heloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
  })


  app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.send("notes created")
    console.log(notes);  
  })
  
  app.get("/view",(req,res)=>{
    res.send(notes)
    
  })

  app.delete("/notes/:index", (req,res)=>{
  delete notes[req.params.index]

  res.send("notes deleted")
  })


  app.patch("/notes/:index",(req,res)=>{
     notes[req.params.index].title = req.body.title

     res.send("modified discription")
  })


module.exports = app