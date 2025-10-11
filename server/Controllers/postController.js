const PostModel = require("../Models/PostModel");

//Create Post
const createPostController = async(req,res) =>{
    try{
        const {title,description} = req.body;
        //validate
        if(!title || !description){
            res.status(500).send(
                {
                 success: true,
                 message: "Please provide all the fields"
                }
            )
        }
        const post = await PostModel({
            title,
            description,
            postedBy: req.auth._id
        }).save();

        res.status(201).send(
            {
                success: true,
                message: "Post created successfully",
                post
            }
        )
        console.log(req)

    }catch(error){
        console.log(error)
        res.status(500).send(
            {
                success : true,
                message : "error in Create post API",
                error
            }
        )

    }

};
// Get All Posts
const getAllPostController = async(req,res)=>{
    try{
        const posts = await PostModel.find().
        populate("postedBy", "_id name").
        sort({createdAt: -1})
         res.status(200).send({
            success: true,
            message: "ALL POSTS DATA",
            posts
         })
    }catch(error){
        console.log(error)
        res.status(500).send(
            {
                success: false,
                message:"Error in GETALLPOSTS API"
            }
        )
    }

}

//Get User Posts
const getUserPostsController =async(req,res)=>{
    try{
     const userPosts = await PostModel.find({postedBy:req.auth._id})
     res.status(200).send({
        success: true,
        message:"user Posts",
        userPosts
     })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in GetUSerPosts API",
            error
        })
    }

}

//DElete user posts
const deleteUserPosts = async(req,res) =>{
    try{
        const {id} = req.params;
        await PostModel.findByIdAndDelete({_id:id})
        res.status(200).send({
            success:true,
            message: "Your Post has been deleted"
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Delete post API",
            error
        })
    }

}

//Update Post
const updateUserPost = async(req,res)=>{

        const post = await PostModel.findById({_id: req.params.id})
        try{
        const {title, description}= req.body
        if(!title || !description){
            res.status(500).send(
                {
                 success: true,
                 message: "Please provide all the fields"
                }
            )} 
            const updatePost = await PostModel.findByIdAndUpdate (
                {_id: req.params.id},
                {
                    title : title || post?.title,
                    description : description || post?.description
                },
                {new:true}
            );
            res.status(200).send({
                success:true,
                message: "Post updated successfully",
                updatePost
            })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in UpdatePost API"
        })
    }

}
module.exports = {createPostController, updateUserPost,getAllPostController,getUserPostsController,deleteUserPosts}