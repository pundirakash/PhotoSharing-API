const express=require('express');
const postRoutes=require("./src/routes/postRoutes")
const app=express();

//Inbuilt Middleware
app.use(express.json());

app.use("/api/posts",postRoutes);
//Method: GET localhost:3000/api/posts

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})