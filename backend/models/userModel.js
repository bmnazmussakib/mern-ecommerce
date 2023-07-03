const mongoose = require('mongoose')
const validator = require("validator")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter user name"],
        maxLength: [30, "Name can not exceed over maximum 30 characters"],
        minLength: [4, "Name should over minimum 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Please enter user Email"],
        unique: true,
        validate: [validator.isEmail, "Please enter valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please enter Password"],
        minLength: [8, "Password should over minimum 8 characters"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

userSchema.pre("save", async function(next){
    if (!this.isModified("password")) {
        next()       
    }
    this.password = await bcrypt.hash(this.password, 10)
})

module.exports = mongoose.models.User || mongoose.model("User", userSchema)
