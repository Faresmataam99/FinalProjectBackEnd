const Order = require('../models/Order');
const ordersResources = require('../resources/ordersResources');

exports.getOrders = async (req,res,next)=>{
  const filters = {};

  try{
    const sort ={}
    const orders = await Order.find(filters).sort(sort);
    return res.json(orders.map((order)=>ordersResources(order)))
  }catch(e){
    next(e)
  }
}


exports.createOrder = async(req,res,next)=>{
try{
  let totalPrice =0
  for (const item of req.body.items){
    const product = await Product.findById(item.product)
    totalPrice += product.price * product.stock
  }


  const order = await Order.create({
    email:req.body.email,
    adress:req.body.adress,
    phone:req.body.phone,
    name:req.body.name,
    totalPrice:totalPrice,
    date:new Date(),
    products:req.body.name,
  });
  
  res.status(201).json(ordersResources(Order))
}catch(e){
  next(e)
}
}

exports.validateOrder=async(req,res,next)=>{
  try{
const {id}=req.params
const order = await Order.findByIdAndUpdate(id, {validated:true},{new:true})
  }catch(e){
    next(e)
  }
}

exports.getOrder= async (req,res,next)=>{
  try{
    const order =await Order.findById(req.params.id).populate('items.product')
return res.json(order)
  }catch(e){
    next(e)
  }
}



// if(req.query.orders){
  //   filters.orders = req.query.orders;
  // }
  // if(req.query.name){
  //   filters.name = {$regex : `.*${req.query.name}.*`,$options:"i"}
  // }
  // const sort = {};
  // if(req.query.sortBy && req.query.sortDirection){
  //   sort[req.query.sortBy]=parseInt(req.sortDirection)
  // }