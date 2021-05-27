const User = require("../model/User");
const bcrypt = require("bcryptjs");


async function getAllUsers(req, res) {

  try{
    let foundAllUsers = await User.find({});

    res.json({message: "Success",  foundAllUsers})

  } catch (e) {
    res.status(500).json({message: "failure", error: e.message })
  }
};

async function createUser(req, res) {

  try{
    let createdSalt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(req.body.password, createdSalt);

    let savedUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashedPassword,
      email: req.body.email,
      username: req.body.username,
    });

    let createdUser = await savedUser.save();
    res.json({message: "Success", createdUser})
   
  } catch (e) {
    res.status(500).json({message: "failure", error: e.message })
  }


};

async function updateUserByID(req, res) {
  try{
    let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);

    res.json({message: "Success", updatedUser});

  } catch (e) {
    res.status(500).json({message: "failure", error: e.message })
  };
};

async function deleteUserByID() {};


module.exports = {
  getAllUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
};