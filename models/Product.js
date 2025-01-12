const { default: mongoose } = require("mongoose");


const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  releaseDate: Date, 
  stock:Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product; 