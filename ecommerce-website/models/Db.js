const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/EKroom");

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
        required: true
    }
});

const userModel = mongoose.model("sales", userSchema);
module.exports = userModel;



