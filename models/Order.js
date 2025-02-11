const { default: mongoose } = require("mongoose");


const OrderSchema = new mongoose.Schema({
  email:String,
  adress: String,
  name: String,
  phone: String,
  products:[


  ]
});
const Order = mongoose.model("orders", OrderSchema);
module.exports = Order; 