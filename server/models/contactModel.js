const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"No Logged in User"],
        ref:"User"
    },
    title:{
        type:String,
        required:[true,"Please add contact name"]
    },
    description:{
        type:String,
        required:[true,"Please add Email"]
    },
    image:{
        type:String,
        required:[true,"Please add Phone Number"]
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("Contact",contactSchema)