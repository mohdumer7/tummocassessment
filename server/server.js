const express = require('express');
const app = express();
const dotEnv = require('dotenv').config()
const contactRoute = require('./routes/contactRoute');
const errorHandler = require('./middleware/errorHandler');
const { connect } = require('mongoose');
const connectDb = require('./config/dbConnection');
const port = 5000 || process.env.PORT
const userRoute = require('./routes/userRoute');
const passport = require('./config/passport');
const userRoutes = require('./routes/testUserRoute');
const cityRoutes = require('./routes//testCityRoute');
const { registerUser, loginUser } = require('./controllers/testAuthController');
const authRoutes = require('./routes/testAuthRoute')
const cors = require('cors')

connectDb()
app.use(express.json());
app.use(passport.initialize());
// app.use("/contacts",contactRoute)
// app.use("/users",userRoute)
app.use(cors())



app.use('/auth', authRoutes);

app.use('/user', userRoutes);
app.use('/city', cityRoutes);

app.use(errorHandler)

app.listen(port,()=>{
    console.log("i am listening to the server")
})