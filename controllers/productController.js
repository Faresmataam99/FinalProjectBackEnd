const Product = require('../models/Product')

const ProductResource = require('../resources/ProductResource')
const {CreateProductSchema} = require('../validations/peroductValidations')

exports.getProducts= async (req,res,next)=>{
  const filters = {}

  if(req.query.category){
    filters.category = req.query.category
  }
  if(req.query.name){
    // so we put the stars in order to give options as a max or min to any specific word we
     //intend to write for example as max we surroung th efiltering input
     // with max meaning wether we start or finish with max
    filters.name = {$regex:`.*${req.query.name}.*`,$options:"i"}
  }
const sort = {}
if(req.query.sortBy && req.query.sortDirection){
  sort[req.query.sortby]=parseInt(req.sortDirection)
}
try{
  const products =await Product.find(filters).sort(sort)
  return res.json(products.map(product =>ProductResource(product)))
}catch(e){
  next(e)
}
}
exports.createProduct = async (req,res,next)=>{
  try{
    if(!req.file){
      return res.status(422).json({message:'the image is required'})
    }
console.log(req.file)
const product = await Product.create({
name:req.body.name,
price:req.body.price,
image:req.file.path,
description:req.body.description,
quantity:req.body.quantity,
colors:req.body.colors,
sizes:req.body.sizes
})
return res.status(201).json(ProductResource(product))
  }catch(e){
    next(e)
  }
}

exports.getProduct = async (req,res,next)=>{
  try{
    const product = await Product.findById(req.params.id)
    return product ? res.json(ProductResource(product)): res.status(404).json({message:'item not found'})
  }catch(e){
    next(e)
  }
}


exports.updateProduct = async (req,res,next)=>{
  try{
if(!req.file){
  return res.status(422).json({message:'the image is required'})
}
const product = await Product.findById(req.params.id)
if(!product){
  return res.status(404).json({message:"Product not found"})
}
const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
  name:req.body.name,
  price:req.body.price,
  image:req.file.path,
  description:req.file.description,
  quantity:req.file.quantity,
  category:req.file.category,
  sizes:req.file.sizes,
  colors:req.file.colors,
},{new:true})
return res.json(ProductResource(updatedProduct))
  }catch(e){
    next(e)
  }
}


exports.deleteProduct = async (req,res,next)=>{
  try{
    const product = await Product.findById(req.params.id)
    if(!product){
      return res.status(404).json({message:'product not found'})
    }
    await Product.deleteOne()
  }catch(e){
    next(e)
  }
}

