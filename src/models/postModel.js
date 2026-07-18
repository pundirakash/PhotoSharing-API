const mongoose=require('mongoose');
const upload=require('../config/uploadConfig');
const postSchema= new mongoose.Schema({
    caption:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:false
    }
},{
    timestamps:true
});

const Post=mongoose.model('Post',postSchema);

module.exports=Post;