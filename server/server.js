const express = require('express');
const cors = require('cors'); 
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const { connect } = require('http2');
const connectDB = require('./Config/db');


// DOTENV CONFIG
dotenv.config();

//MONGO_DB CONNECTION
connectDB();

// REST OBJECTS
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//ROUTES
app.use('/api/v1/user', require('./Routes/UserRoutes')); 
app.use('/api/v1/post', require('./Routes/postRoutes'))

// Port
const PORT = process.env.PORT || 8080;


//LINK
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`.bgGreen.white);
})