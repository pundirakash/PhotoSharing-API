const express=require('express');
require('dotenv').config();
const cors=require('cors');
const postRoutes=require("./src/routes/postRoutes")
const userRoutes=require("./src/routes/userRoutes")
const logger=require("./src/middlewares/logger")
const errorHandler=require("./src/middlewares/errorHandler");
const connectDB=require('./src/config/db');


connectDB();

const app=express();
app.use(cors());
//Inbuilt Middleware
app.use(express.json());
//Application level middleware
app.use(logger);

app.use("/api/posts",postRoutes);
app.use("/api/users",userRoutes);

app.use(errorHandler);



app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})

module.exports=app;