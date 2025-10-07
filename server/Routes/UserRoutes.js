const express = require('express');
const { registerController, loginController, updateUserController } = require('../Controllers/UserController');

//Router object
const router = express.Router();

//Routes

//Register || POST
router.post('/register',registerController);

//Login || POST
router.post('/login', loginController);

//UPDATE || PUT
router.put('/update-user', updateUserController);


module.exports = router;