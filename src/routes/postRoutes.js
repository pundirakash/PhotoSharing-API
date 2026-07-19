const express=require('express');
const {auth}=require('../middlewares/authMiddleware');
const upload=require('../config/uploadConfig');

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
    .post(auth,upload.single('image'),createPost);

//routes with are having id param

router.route("/:id")
    .get(getPostById)
    .put(auth,upload.single('image'),updatePost)
    .patch(auth,updatePost)
    .delete(auth,deletePost);

module.exports=router;


