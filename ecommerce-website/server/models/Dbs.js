const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/EKroom");

const sellerSchema = new mongoose.Schema({
  name: {
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
  },
  productName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  price: {
    type: Number, 
    required: true
  },
  brandName: {
    type: String
   
  },
  yearOfUsage: {
    type: String, 
    required: true
  },
  like:{
    type:Number,
    required:true
  },
  image:{
    type:String,
    required:true
  },

});

const sellerModel = mongoose.model('Seller', sellerSchema);

module.exports = sellerModel;
