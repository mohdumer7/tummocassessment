const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const registerUser = asyncHandler( async(req,res)=>{
    const {username,email,password} = req.body

    if(!username||!email||!password){
       res.status(400);
       throw new Error("All fields are mandatory") 
    }

    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400);
        throw new Error("User already Exists")
    }

    //create hash password
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,email,password:hashedPassword
    })
    console.log("user created",user)
    if(user){
        res.status(201).json({_id:user.id,email:user.email})
    }else{
        res.status(400);
        throw new Error("User data not valid")
    }
    res.json({message:"Register the User"})
})

const loginUser = asyncHandler( async(req,res)=>{
    const {email,password} = req.body;
    if(!email|| !password){
        res.status(400)
        throw new Error("All fields are Mandatory")
    }
    const user = await User.findOne({email});
    //compare with hashed password
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id},
        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"15m"})

        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("email or password is not valid")
    }
    res.json({message:"login the User"})
})

const currentUser = asyncHandler( async(req,res)=>{
    res.json(req.user)
})

module.exports = {registerUser,loginUser,currentUser}


