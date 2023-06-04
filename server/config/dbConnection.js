const mongoose = require('mongoose')

const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_CONNECT)
        console.log("Connection to DB has been established",connect.connection.host,connect.connection.name )
    }catch(err){
      console.log(err);
      process.exit(1)  
    }
}

module.exports = connectDb