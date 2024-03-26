const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const sample = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    profileImage:String,
    role:{type: String, default:"USER"},
    courceId:[{
        type: ObjectId,
        ref: "Course"
    }],
    verified:{
        type: Boolean,
        default: false
    },
    transactions: [{
        type: ObjectId,
        ref: "Transactions"
    }],
    conversationId: [{
        type: ObjectId,
        ref: "Conversation"
    }],   
},{timestamps: true});

module.exports = mongoose.model("USER", sample);

