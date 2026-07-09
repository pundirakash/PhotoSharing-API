
let dummyPosts=[
    {id:1,caption:"My first photo!"},
    {id:2,caption:"Another Cool pic"}
]

//Get all post
const getPosts=(req,res)=>{
    res.json(dummyPosts);
}

//Get only a single post

const getPostById=(req,res)=>{
    const id=req.params.id;
    const post=dummyPosts.find(p=>p.id === Number(req.params.id));
    if(!post){
        return res.json(404).json({message:"page not found"})
    }
    res.json(post);
}

//Create a post

const createPost=(req,res)=>{
    const newPost={
        id:dummyPosts.length+1,
        caption:req.body.caption
    }

    dummyPosts.push(newPost);
    res.status(201).json(newPost);
}

//Update aPost
const updatePost=(req,res)=>{
    const postIndex=dummyPosts.findIndex(p=>p.id===Number(req.params.id));

    dummyPosts[postIndex].caption=req.body.caption;
    res.json(dummyPosts[postIndex]);
}

//Delete a post

const deletePost=(req,res)=>{
    const postIndex=dummyPosts.findIndex(p=>p.id===Number(req.params.id));
    dummyPosts.splice(postIndex,1);
    res.json({message:"Post deleted Successfully"});
}


module.exports={
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}
