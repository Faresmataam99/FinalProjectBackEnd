const joi = require('joi')


exports.createOrderSchema = joi.object({
adress:joi.string().required(),
email:joi.string().required(),
name:joi.string().required(),
phone:joi.string().required(),
products:joi.array().items(
    joi.object({
        product:joi.string().required(),
        quantity:joi.number().positive().required()
    })
).required().min(1)
})


