const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");
    }catch (err) {
    console.error(err.name);
    console.error(err.message);
    console.error(err);
}
}

module.exports=connectDB;