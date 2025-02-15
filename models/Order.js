const { default: mongoose } = require("mongoose");


const OrderSchema = new mongoose.Schema({
  email:String,
  adress: String,
  firstname: String,
  lastname:String,
  phone: String,
  stock:String,
  totalPrice:Number,
  products: [
    {
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
        stock: Number
    }
],
});
const Order = mongoose.model("orders", OrderSchema);
module.exports = Order; 