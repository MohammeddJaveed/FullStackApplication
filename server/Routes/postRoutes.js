const express = require('express');
const { requireSignIn } = require('../Controllers/UserController');
const { createPostController, getAllPostController } = require('../Controllers/postController');

//router object
const router = express.Router();


//Create POST || POST
router.post('/create-post',requireSignIn,createPostController)

//GEt ALL POST
router.get('/get-all-posts',getAllPostController)
//export
module.exports = router;