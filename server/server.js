const express = require('express');
const app = express();
const dotEnv = require('dotenv').config()
const contactRoute = require('./routes/contactRoute');
const errorHandler = require('./middleware/errorHandler');
const { connect } = require('mongoose');
const connectDb = require('./config/dbConnection');
const port = 5001
const userRoute = require('./routes/userRoute');
const passport = require('./config/passport');
const userRoutes = require('./routes/testUserRoute');
const cityRoutes = require('./routes//testCityRoute');
const { registerUser, loginUser } = require('./controllers/testAuthController');
const authRoutes = require('./routes/testAuthRoute')
const cors = require('cors')
const cookieSession = require('cookie-session')

connectDb()
app.use(express.json());
app.use(cors())
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:"GET,POST,PUT,DELETE",
//     credentials:true
// }
//))
app.use(cookieSession({
    name:"session",
    keys:["mohammed umer"],
    maxAge:24*60*60*100
}))
app.use(passport.initialize());
app.use(passport.session())
// app.use("/contacts",contactRoute)
// app.use("/users",userRoute)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next(); // dont forget this
  });


app.use('/auth', authRoutes);

app.use('/user', userRoutes);
app.use('/city', cityRoutes);

app.use(errorHandler)

app.listen(port,()=>{
    console.log("i am listening to the server")
})