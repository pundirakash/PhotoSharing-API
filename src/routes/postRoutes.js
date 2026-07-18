const express=require('express');
const {auth}=require('../middlewares/authMiddleware');
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
    .post(auth,createPost);

//routes with are having id param

router.route("/:id")
    .get(getPostById)
    .put(auth,updatePost)
    .patch(auth,updatePost)
    .delete(auth,deletePost);

module.exports=router;


