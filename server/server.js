const express = require('express');
const app = express();
const dotEnv = require('dotenv').config()
const contactRoute = require('./routes/contactRoute');
const errorHandler = require('./middleware/errorHandler');
const { connect } = require('mongoose');
const connectDb = require('./config/dbConnection');
const port = 5000 || process.env.PORT
const userRoute = require('./routes/userRoute');

connectDb()
app.use(express.json())
app.use("/contacts",contactRoute)
app.use("/users",userRoute)
app.use(errorHandler)

app.listen(port,()=>{
    console.log("i am listening to the server")
})