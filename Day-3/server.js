 const express = require("express")

 const app = express()

 app.use(express.json())   //middle ware hai ye jo ki capable bana ta hai req. body ka data ko phadne ke liye

const notes = []

app.post("/notes",(req,res)=>{  
    
    console.log(req.body);
    notes.push(req.body)
    //server se jo bi data aae ga wo req.body me hoga
    res.send("notes created")
})


app.get("/notes", (req,res)=>{
    res.send(notes)
})



 app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
    
 })