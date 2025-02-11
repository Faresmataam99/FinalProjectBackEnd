const { default: mongoose } = require("mongoose");


const productSchema = new mongoose.Schema({
  title: String,
  image:String,
  price: Number,
description:String,
type:String,
  stock:Number,
  category:String,
  colors:[String],
  sizes:[String],
});


const product = mongoose.model("product", productSchema);
module.exports = product; 