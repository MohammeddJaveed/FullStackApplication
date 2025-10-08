const express = require('express');
const { registerController, loginController, updateUserController, requireSignIn } = require('../Controllers/UserController');

//Router object
const router = express.Router();

//Routes

//Register || POST
router.post('/register',registerController);

//Login || POST
router.post('/login', loginController);

//UPDATE || PUT
router.put('/update-user',requireSignIn, updateUserController);


module.exports = router;