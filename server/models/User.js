const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    whatsappNo: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    referralCode: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("UserSchema", userSchema);