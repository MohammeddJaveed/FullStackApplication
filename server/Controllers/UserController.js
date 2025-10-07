const UserModel = require('../Models/UserModel');
const { hashPassword, comparePassword } = require('../Helpers/authHelper'); 
const JWt = require('jsonwebtoken');

//Register Controller
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

        //check user

        const existingUSer = await UserModel.findOne({email});
        if(existingUSer){
            return res.status(200).json({
                success: false,
                message: "user created registered please login"
            })
        }

        // Hash password
        const hashedPassword = await hashPassword(password);
        //save new user
        const newUser = new UserModel({name, email, password: hashedPassword});
        await newUser.save();
        console.log("Saved in DB:", newUser);

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


//Login Controller
// const loginController = async (req, res) => {
//     try{
//         const {email ,password} = req.body;
//         if(!email || !password){
//             console.log(email, password);
//             console.log("Req body:", req.body);
//             res.status(400).json({
//                 success: false,
//                 message: "Please provide email and password"
//             });
//         }
//      //Find USer
//      const user = await UserModel.findOne({email});
//      if(!user){
//         return res.status(500).json({
//             success: false,
//             message: "Email is not registered"
//         })
//      }
//      //Match Password
//      const match = await comparePassword(password, user.password);
//      if(!match){
//         return res.status(500).json({
//             success: false,
//             message: "Invalid username or Password"
//         })
//      }
//      return res.status(200).json({
//         success: true,
//         message: "Login Successful",
//         user,
//      });
//     }catch (error) {
// console.log(error);
// return res.status(500).json({
//     success: false,
//     message: "Error in login API",
//     error
// })
//     }
// }
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      console.log("Req body:", req.body);
      return res.status(400).json({   // 400 Bad Request (not 500)
        success: false,
        message: "Please provide email and password"
      });
    }

    // Find User
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({  
        success: false,
        message: "Email is not registered"
      });
    }

    // Match Password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({   
        success: false,
        message: "Invalid username or password"
      });
    }

    // Generate JWT Token
    const token = await JWt.sign({_id: user._id}, process.env.JWT_SECRET,{expiresIn:'7d'});
    //paswword undefine
    user.password = undefined; // Hide password
    // Success
    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user,
    });

  } catch (error) {
    console.error("Error in loginController:", error);
    return res.status(500).json({
      success: false,
      message: "Error in login API",
      error
    });
  }
};

//UPDATE USER
const updateUserController = async ( req, res) => {
  try{
    const {name, email, password} = req.body;
    //USer Find
        const user = await UserModel.findOne({email});
    //Password Validate
    if(password && password.length < 6){
      return res.status(400).json({
        success: false,
        message: "Password is required and must be minimum of 6 characters long"
      });
    }
   const hashedPassword = password ? await hashPassword(password): undefined;
   // Updated User
   const UpdatedUser = await UserModel.findOneAndUpdate({email},
    {name: name|| user.name,
      password: hashedPassword || user.password
    },{new:true}//to get updated data
   )
   UpdatedUser.password = undefined;
   res.status(200).json({
    success: true,
    message: "Profile Updated Successfully Please login again",
    UpdatedUser
   });
  }catch(error){
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in update user API",
      error
    });
  }

}

module.exports = { registerController , loginController, updateUserController};