const { request } = require("express");
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
module.exports = {createPostController}