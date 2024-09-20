const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://elangouser:elango%40143@elangocsd.vuq8ykq.mongodb.net/EKroom");

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
    required: false
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
