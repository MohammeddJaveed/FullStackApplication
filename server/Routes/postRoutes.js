const express = require('express');
const { requireSignIn } = require('../Controllers/UserController');
const { createPostController } = require('../Controllers/postController');

//router object
const router = express.Router();


//Create POST || POST
router.post('/create-post',requireSignIn,createPostController)


//export
module.exports = router;