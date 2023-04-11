
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    user:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    didVote:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)