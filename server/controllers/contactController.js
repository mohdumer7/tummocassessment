//get all contacts
//api route
//access public
const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')

const getContact = asyncHandler( async(req,res)=>{
    const contacts =await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts)
}
)
const getOneContact =asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }
    res.status(200).json(contact)
})

const createContact =asyncHandler( async(req,res)=>{
    const {name,email,phone} = req.body
    if(!name||!email||!phone){
        res.status(401)
        throw new Error("Please fill all the fields")
    }
    const contact = await Contact.create({
        name,email,phone,
        user_id:req.user.id
    })

    res.status(201).json(contact)
})

const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("Access denied")
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
    
    res.status(200).json(updatedContact)
})

const deleteContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found")
    }
    const deleteContact = await Contact.findByIdAndDelete(req.params.id)
    
    res.status(200).json({message:"delete contacts:"+`${req.params.id}`})
})


module.exports = {getContact,getOneContact,createContact,updateContact,deleteContact}