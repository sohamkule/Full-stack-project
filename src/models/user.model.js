const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "User name already exists"],
        required: [true, "User name is required"],
    },
    email: {
        type: String,
        unique: [true, "email already exists"],
        required: [true, "email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/sohamkule/images.jpg"
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel;