const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const user = await User.find();
  return res.json(user);

};
exports.createUser = async (req, res,next) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthdate: req.body.birthdate,
      country: req.body.country,

    });
    return res.json(user);
  } catch (e) {
    next(e)
  }
};
exports.updateUser = async (req, res,next) => {
  try {
    const user = await User.findbyId(req.params.id);
    if (!User) {
      return res.status(404).json({ message: "invalid data" });
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthplace: req.body.birthdate,
      country: req.body.country,
    });
  } catch (e) {
    next(e);
  }
};


exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(user.id);
};
