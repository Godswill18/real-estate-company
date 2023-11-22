const mongoose =require("mongoose");

const AdminSchema = new mongoose.Schema({
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
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
{timestamps:true}
);

module.exports = mongoose.model("Admin", AdminSchema);