const User = require("../models/User");


// exports.createUser = async (req, res) => {
//   const { name, age, email, country, placeofliving } = req.body; 
//   const existingUser = await User.findOne({email});
//   if(existingUser){
//     return res.status(400).json({json:"user already exists"})
//   }
//   const newUser = new User({
//     name,
//     email,
//     age,
//     country,
//     placeofliving,
//   }) ;

//   await newUser.save();

//   const JWT_SECRET = APP_SECRET;

//   const token = jwt.sign({id:newUser._id},JWT_SECRET)

// res.status(201).json({
//   token,
//   user:{
//     name:newUser.name,
//     email:newUser.email,
//     age:newUser.age,
//     placeofliving:newUser.age,
//     country:newUser.country,
//   }
// });

//   try {
//     const user = new User({ name, age, email, country, placeofliving });
//     const savedUser = await user.save();
//     console.log("User created:", savedUser);
//     res.status(201).json({ message: "User created successfully", user: savedUser });
//   } catch (err) {
//     console.error("Error creating user:", err.message);
//     res.status(500).json({ message: "Error creating user", error: err.message });
//   }
// };


// exports.updateUser = async (req, res) => {
//   const { id } = req.params;
//   const newData = req.body;  
//   try {
//     const updatedUser = await User.findByIdAndUpdate(id, newData, { new: true });
//     if (!updatedUser) {
//       console.log("No user found with the given ID.");
//       return res.status(404).json({ message: "No user found with the given ID" });
//     }
//     console.log("User updated:", updatedUser);
//     res.status(200).json({ message: "User updated successfully", user: updatedUser });
//   } catch (err) {
//     console.error("Error updating user:", err.message);
//     res.status(500).json({ message: "Error updating user", error: err.message });
//   }
// };


// exports.deleteUser = async (req, res) => {
//   const { id } = req.params; 
//   try {
//     const deletedUser = await User.findByIdAndRemove(id);
//     if (!deletedUser) {
//       console.log("No user found with the given ID.");
//       return res.status(404).json({ message: "No user found with the given ID" });
//     }
//     console.log("User deleted:", deletedUser);
//     res.status(200).json({ message: "User deleted successfully", user: deletedUser });
//   } catch (err) {
//     console.error("Error deleting user:", err.message);
//     res.status(500).json({ message: "Error deleting user", error: err.message });
//   }
// };




exports.getUsers= async(req,res)=>{
  const user = await users.find();
  return res.json(User)
}



exports.createUser =async(req,res)=>{
  const user = await User.create();
  return res.json(User)
}




exports.updateUser =async(req,res)=>{
const user = await User.findbyIdandUpdate()

}

exports.deleteUser = async (req,res)=>{
  const user = await User.findByIdAndUpdate();
  
}