const joi = require('joi')

exports.createProductSchema = joi.object({
    name:joi.string().required(),
    price:joi.number().required().positive(),
    description:joi.string(),
    quantity:joi.number().required(),
    category:joi.string().required(),
    colors:joi.array().items(joi.string()).required().min(1),
    sizes:joi.array().items(joi.string()).required().min(1),
})


exports.updateProductSchema = joi.object({
    name:joi.string().required(),
    price:joi.number().required(),
    description:joi.string(),
    quantity:joi.number().required(),
category:joi.string().required(),
colors:joi.array().items(joi.string()).required().min(1),
sizes:joi.array().items(joi.string()).required().min(1),
})