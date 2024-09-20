const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://elangouser:elango%40143@elangocsd.vuq8ykq.mongodb.net/EKroom");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    }
});

const userModel = mongoose.model("sales", userSchema);
module.exports = userModel;



