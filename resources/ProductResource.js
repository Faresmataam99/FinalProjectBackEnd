module.exports = (product)=>{
    return(
id:product._id,
name:product.name,
price:product.price,
image:generateUrl(roduct.image)
category:product.cateory,
description:product.description,
quantity:product.quantity,
colors:product.quantity,
sizes:product.sizes,
    )
}