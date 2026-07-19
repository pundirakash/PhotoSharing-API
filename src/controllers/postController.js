const Post=require('../models/postModel');
const cloudinary=require('cloudinary').v2
//Get all post
const getPosts=async (req,res,next)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }catch(err){
        next(err);
    }
}

//Get only a single post

const getPostById=async (req,res,next)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(!post){
            res.status(404);
            throw new Error("Post not available in db");
        }
        res.json(post);
    }catch(err){
        next(err);
    }  
}

//Create a post

const createPost=async (req,res,next)=>{
    try{
        if(!req.file){
            res.status(400);
            throw new Error("Please upload an image");
        }
        const url=req.file.path;

        const newPost=await Post.create({
            caption:req.body.caption,
            imageURL:url
        });

        res.status(201).json(newPost);

    }catch(err){
        next(err);
    }
}

//Update a Post
const updatePost=async (req,res,next)=>{
    try{
        let post=await Post.findById(req.params.id);
        if(!post){
            res.status(404);
            throw new Error("Post not found");
        }
        const updateData={caption:req.body.caption}
        if(req.file){
            updateData.imageURL=req.file.path;
            if(post.imageURL){
                //https://res.cloudinary.com/kyh4ecmd/image/upload/v1784383358/PhotoSharing_API/xuff9rk68eee8txrowkv.png
                //["PhotoSharing_API","xufff.....jpg"]
                //PhotoSharing_API/xufff.....jpg
                //PhotoSharing_API/xuff9rk68eee8txrowkv
                //["PhotoSharing_API/xuff9rk68eee8txrowkv","jpg"]
                const publicID=post.imageURL.split('/').slice(-2).join("/").split(".")[0];
                await cloudinary.uploader.destroy(publicID)

            }
        }
        const updatedPost=await Post.findByIdAndUpdate(req.params.id,updateData,{
            new:true
        });

        res.json(updatedPost);

    }catch(err){
        next(err);
    }
}

//Delete a post

const deletePost=async (req,res,next)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(post.imageURL){
            const publicID=post.imageURL.split('/').slice(-2).join("/").split(".")[0];
            await cloudinary.uploader.destroy(publicID)
        }

        await post.deleteOne();
        res.json({message:"Post and image deleted successfully"})
    }catch(err){
        next(err);
    }
}


module.exports={
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}
