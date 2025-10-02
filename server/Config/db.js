const mongoose = require('mongoose');
const colors = require('colors');
const { url } = require('inspector');

const connectDB = async() =>{
    try {
await mongoose.connect("mongodb+srv://Javeed:Password@cluster0.f1bzy2r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
console.log(`Mongodb connected: ${mongoose.connection.host}`.bgCyan.white);
    }catch (error) {
        console.log(`Error: ${error.message}`.bgRed.white);
    }
}

module.exports = connectDB;