const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: {
        type:String,
        default:"",
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,

    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    phonenumber: {
        type:String,
        default:""
    },
    profilePicture: {
        type:String,
        default:""
    },
});

const UserModel = model('User', UserSchema);

model.exports = UserModel;