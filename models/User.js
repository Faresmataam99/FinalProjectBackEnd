const mongoose = require('mongoose');
module.exports=mongoose.model('User',{
  firstname:String,
  lastname:String,
  birthdate:String,
  email:String,
  password:String,
  country:String,
  type:String
})
