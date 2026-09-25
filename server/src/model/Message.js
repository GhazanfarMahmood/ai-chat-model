const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    text : {
        type : String,
        required: true,
        trim : true
    },
    sender: {
        type : String,
        enum : ["customer", "support"],
        required : true
    }
}, {timestamps: true});

module.exports = mongoose.model("Message", messageSchema);