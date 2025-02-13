const jwt = require("jsonwebtoken");
const User =require("../models/User")
module.exports = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
    console.log(token)
  if (!token) return res.status(401).json({ message: "invalid hash" });
  try {
    const decoded = jwt.verify(token,process.env.JWT_KEY);
    console.log(decoded)
    req.user = await User.findOne(decoded._id);
    next();
  } catch (e) {
    next(e);
  }
};
