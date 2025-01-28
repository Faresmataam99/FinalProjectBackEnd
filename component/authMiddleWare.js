const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = async (req,res,next)=>{
try {
  const token = req.headers.authorization && req.headers.authorization.split('')[1];
  const {id} = jwt.verify(token,'Nike')
  req.user = await User.findByid(id);
  next();
}
catch(e){
  next(e)
}
}