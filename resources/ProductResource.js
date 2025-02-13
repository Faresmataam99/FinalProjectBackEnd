
const {generateUrl} = require('../helper/url')

module.exports = (product) => {
  return {
    id: product._id,
    title: product.title,
    price: product.price,
    image: generateUrl(product.image?.replaceAll("\\", "/")),
    category: product.category,
    type:product.type,
    description: product.description,
    stock: product.stock,
    colors: product.colors,
    brand:product.brand,
    sizes: product.sizes,
  };
};

