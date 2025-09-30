const express = require('express');
const { registerController } = require('../Controllers/UserController');

//Router object
const router = express.Router();

//Routes
router.post('/register',registerController);



module.exports = router;