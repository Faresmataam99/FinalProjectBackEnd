const joi = require('joi')


exports.createOrderSchema = joi.object({
adress:joi.string().required(),
email:joi.string().required(),
firstname:joi.string().required(),
lastname:joi.string().required(),
phone: joi.string().pattern(/^\+?[1-9]\d{1,14}$/).required(),
products:joi.array().items(
    joi.object({
        product:joi.string().required(),
        stock:joi.number().positive().required()
    })
).required().min(1),
})


