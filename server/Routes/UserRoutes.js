const express = require('express');
const { registerController, loginController } = require('../Controllers/UserController');

//Router object
const router = express.Router();

//Routes

//Register || POST
router.post('/register',registerController);

//Login || POST
router.post('/login', loginController);



module.exports = router;