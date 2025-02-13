const joi = require('joi')

exports.createProductSchema = joi.object({
    title:joi.string().required(),
    price:joi.number().required().positive(),
    description:joi.string(),
    stock:joi.number().required(),
    category:joi.string().required().valid('men','women','kids'), 
    type:joi.string(),
    brand:joi.string(),
    colors:joi.array().items(joi.string()).required().min(1),
    sizes:joi.array().items(joi.string()).required().min(1),
})

exports.updateProductSchema = joi.object({
    title:joi.string().required(),
    price:joi.number().required(),
    description:joi.string(),
    type:joi.string(),
    brand:joi.string(),
    stock:joi.number().required(),
category:joi.string().required(),
colors:joi.array().items(joi.string()).required().min(1),
sizes:joi.array().items(joi.string()).required().min(1),
})
