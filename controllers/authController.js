const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt=require('jsonwebtoken')

exports.register = async (req ,res)=>{
  const user = await User.create ({
    firstname : req.body.Firstname,
    lastname: req.body.Lastname,
    email:req.body.email,
    password:req.body.password
  });
  res.status(201).json(user)
  console.log('A valid client')
}

exports.login = async (req,res)=>{
  
  const user = await User.findOne({
  });
  console.log('existing user')
  if(!user){
    return res.status(400).json({message:'Wrong email or password'})
  }
  const token = jwt.sign({id:user._id},process.env.APP_SECRET)
  res.json({token})
}




