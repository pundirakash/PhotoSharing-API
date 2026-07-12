const express=require('express');
require('dotenv').config();
const postRoutes=require("./src/routes/postRoutes")
const logger=require("./src/middlewares/logger")
const errorHandler=require("./src/middlewares/errorHandler");
const connectDB=require('./src/config/db');

connectDB();

const app=express();

//Inbuilt Middleware
app.use(express.json());
//Application level middleware
app.use(logger);

app.use("/api/posts",postRoutes);

app.use(errorHandler);



app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})