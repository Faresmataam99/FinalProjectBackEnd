const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 16);
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthdate: req.body.birthdate,
      country: req.body.country,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json(user);
    console.log("created succesfuly");
  } catch (e) {
    next(e);
  }
};

exports.login = async (req, res, next) => {
  try {
    // Find user by email
    const user = await User.findOne({ email: req.body.email});
    console.log(user)

    if (!user) {
      return res.status(400).json({ message: "Wrong email or password" });
    }
    const isMatch = bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Create token
    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_KEY,
    );
    // Send response
    res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    next(err); // Pass error to Express error handler
  }
};

exports.account=async(req,res,next)=>{
  try{
    console.log(req.user)
    return res.json(req.user)
  }catch(e){
    next(e)
  }
}
