const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("Welcome to Photo Sharing API")
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})