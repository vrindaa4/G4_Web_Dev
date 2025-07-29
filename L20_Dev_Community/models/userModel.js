const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName : {type : String},
    lastName : {type : String},
    email : {type : String , unique: true, required: true},
    password : {type : String, required: true},
    
})

module.exports = mongoose.model('User', userSchema)