const express = require('express');
const { requireSignIn } = require('../Controllers/UserController');
const { createPostController, getAllPostController, getUserPosts, getUserPostsController } = require('../Controllers/postController');

//router object
const router = express.Router();


//Create POST || POST
router.post('/create-post',requireSignIn,createPostController)

//GEt ALL POST
router.get('/get-all-posts',getAllPostController)

//GEt USER POST
router.get('/get-user-posts',requireSignIn,getUserPostsController)


//export
module.exports = router;