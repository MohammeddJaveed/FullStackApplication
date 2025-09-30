const UserModel = require('../Models/UserModel');
const registerController =async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(!name){
            return res.status(401).json({
            success: false,
            message: "Name is required"
        })
    }
        if(!email){
            return res.status(401).json({
            success: false,
            message: "Email is required"
        })
    }
        if(!password || password.length < 6){
            return res.status(500).json({
            success: false,
            message: "Password is required and must be minimum of 6 characters long"
        })
    }

        // //check user

        const existingUSer = await UserModel.findOne({email});
        if(existingUSer){
            return res.status(200).json({
                success: false,
                message: "user created registered please login"
            })
        }
        
        //save new user
        const newUser = new UserModel({name, email, password});
        await newUser.save();

        return res.status(200).json({
            success: true,
            message: "User registered successfully"
        })
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in registration",
            error
        })
    }
}

module.exports = { registerController };