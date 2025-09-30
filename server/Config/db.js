const mongoose = require('mongoose');
const colors = require('colors');
const { url } = require('inspector');

const connectDB = async() =>{
    try {
await mongoose.connect(process.env.MONGO_URL)
console.log(`Mongodb connected: ${mongoose.connection.host}`.bgCyan.white);
    }catch (error) {
        console.log(`Error: ${error.message}`.bgRed.white);
    }
}

module.exports = connectDB;