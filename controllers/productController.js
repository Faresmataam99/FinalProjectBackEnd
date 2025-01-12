const Product = require('../models/product')

exports.getProducts = async(req,res)=>{
  const{category,search}=req.query;


  const filters={};
  if(category){
    filters.category=category;
  }
  if(search){
    filters.name = {
      $regex:`.*${search}.*`,$options:'i'
    };
  }
  const products= await Product.find(filters);
  return res.json(products);

}
exports.createProduct = async (req,res)=>{
  const product = await Product.create({
    name:req.body.name,
    price:req.body.price,
    category:req.body.category
  });
  return res.json(product)
}

exports.updateProduct = async (req,res) => {
  const product = await Product.findbyIdandUpdate(req.params.id,{
    name:req.body.name,
    price:req.body.price,
    category:req.body.category,

  },{new:true});

  return res.json(product)
}

exports.deleteProduct= async (req,res)=>{
  const product = await Product.findByIdAndDelete(req.params.id)
  return res.json ({message:'product deleted succefully'})
}


