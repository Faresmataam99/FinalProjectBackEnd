const { query } = require("express");
const Product = require("../models/Product");
const ProductResource = require("../resources/ProductResource");
const { search } = require("../routes/userRoutes");

exports.getProducts = async (req, res, next) => {
const products = await Product.find()
  const filters = {};

  if (req.query.category) {
    filters.category = req.query.category;
  }


  if(req.body.search){
    filters.title={
$regex: new RegExp(search,'i')
    }


  }
  if (req.query.title) {
    // so we put the stars in order to give options as a max or min to any specific word we
    //intend to write for example as max we surround the filtering input
    // with max meaning wether we start or finish with max

    filters.title = { $regex: `.*${req.query.title}.*`, $options: "i"};
  }


if(req.query.type){
  filters.type =req.query.type
}

if(req.query.brand){
  filters.brand=req.query.brand
}

  const sort = {};
  if (req.query.sortBy && req.query.sortDirection) {
    sort[req.query.sortby] = parseInt(req.sortDirection);
  }



  try {
    const products = await Product.find(filters).sort(sort);
    return res.json(products.map((product) => ProductResource(product)));
  } catch (e) {
    next(e);
  }
};


exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create({
      title: req.body.title,
      price: req.body.price,
     image: req.file?.path,
      description: req.body.description,
      stock: req.body.stock,
      colors: req.body.colors,
      sizes:req.body.sizes,
      category: req.body.category,
      brand:req.body.brand,
    });

    return res.status(201).json(ProductResource(product));

  } catch (e) {
    next(e);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    return product
      ? res.json(ProductResource(product))
      : res.status(404).json({ message: "item not found" });
  } catch (e) {
    next(e);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(422).json({ message: "the image is required" });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        price: req.body.price,
        image: req.file.path,
        description: req.file.description,
        detailedimages:req.file.description,
        quantity: req.file.quantity,
        category: req.file.category,
        sizes: req.file.sizes,
        colors: req.file.colors,
        brand:req.file.colors
      },
      { new: true }
    );
    return res.json(ProductResource(updatedProduct));
  } catch (e) {
    next(e);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    await Product.deleteOne();
  } catch (e) {
    next(e);
  }
};
