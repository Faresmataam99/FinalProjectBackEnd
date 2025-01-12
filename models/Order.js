const { default: mongoose } = require("mongoose");


const OrderSchema = new mongoose.Schema({
  id: Number,
  title: String,
  date: Date,
  quantity: Number,
});

const Order = mongoose.model("orders", OrderSchema);

module.exports = Order; 