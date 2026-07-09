const express=require('express');
const router=express.Router();

const {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
}=require('../controllers/postController');

//routes which are without ID param
router.route("/")
    .get(getPosts)
    .post(createPost);

//routes with are having id param

router.route("/:id")
    .get(getPostById)
    .put(updatePost)
    .patch(updatePost)
    .delete(deletePost);

module.exports=router;


