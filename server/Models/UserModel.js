const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim : true,
        kMaxLength: [40, 'Name should not be more than 40 characters']
    },
    email: {
        type: String,
        required: [true,'Please provide an email'],
        unique: true,
        trim : true,
        kMaxLength: [40, 'Email should not be more than 40 characters']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
          trim : true,
          min: 6,
        kMaxLength: [65, 'Password should not be more than 40 characters']
    },
    role: {
        type: String,
        default: 'user',
    },
},
   {timestamps: true},);


  const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;