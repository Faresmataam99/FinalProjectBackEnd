const Order = require('../models/Order');


exports.getOrder = async (req, res) => {
  const { date, quantity } = req.body;
  try {
    const showOrder = new Order({ date, quantity });
    const savedOrder = await showOrder.save();
    console.log(savedOrder);
    res.status(200).json({ message: 'Order retrieved successfully', order: savedOrder });
  } catch (err) {
    console.error('Error loading order:', err.message);
    res.status(500).json({ message: 'Error retrieving order', error: err.message });
  }
};
exports.addOrder = async (req, res) => {
  const { date, quantity } = req.body;
  try {
    const newOrder = new Order({ date, quantity });
    const savedOrder = await newOrder.save();
    console.log('Order saved:', savedOrder);
    res.status(201).json({ message: 'Order added successfully', order: savedOrder });
  } catch (err) {
    console.error('Error saving order:', err.message);
    res.status(500).json({ message: 'Error adding order', error: err.message });
  }
};


exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOrder = await Order.findByIdAndRemove(id);
    if (!deletedOrder) {
      console.log('No order found with the given ID.');
      return res.status(404).json({ message: 'No order found with the given ID' });
    }
    console.log('Order removed:', deletedOrder);
    res.status(200).json({ message: 'Order deleted successfully', order: deletedOrder });
  } catch (err) {
    console.error('Error deleting order:', err.message);
    res.status(500).json({ message: 'Error deleting order', error: err.message });
  }
};