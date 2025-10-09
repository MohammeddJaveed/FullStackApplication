const express = require('express');
const { requireSignIn } = require('../Controllers/UserController');
const { createPostController, getAllPostController, getUserPosts, getUserPostsController, deleteUserPosts } = require('../Controllers/postController');

//router object
const router = express.Router();


//Create POST || POST
router.post('/create-post',requireSignIn,createPostController)

//GEt ALL POST
router.get('/get-all-posts',getAllPostController)

//Get USER POST
router.get('/get-user-posts',requireSignIn,getUserPostsController)

//Delete Post
router.delete('/delete-post/:id',requireSignIn,deleteUserPosts)

//export
module.exports = router;