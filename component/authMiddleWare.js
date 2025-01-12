const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = async (req,res,next)=>{
try {
  const token = req.headers.authorization && req.headers.authorization.split('')[1];
  const {id} = await jwt.verify(token,'Nikeee')
  req.user = await User.findByid(id);
  next();
}
catch(error){
  console.log(error);
return res.status(403).json({message:'unvalid credentials'})
}
}