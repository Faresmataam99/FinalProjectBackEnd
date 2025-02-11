const joi = require ('joi')


exports.CreateUserSchema = joi.object({
    email:joi.string().required(),
    password:joi.string().required(),
    firstname:joi.string().required(),
    lastname:joi.string().required(),
    birthdate:joi.string().required(),
    country:joi.string().required(),
})


exports.UpdateUserSchema = joi.object({
    email:joi.string().required(),
    password:joi.string().required(),
    firstname:joi.string().required(),
    lastname:joi.string().required(),
    birthdate:joi.string().required(),
    country:joi.string().required(),
})

