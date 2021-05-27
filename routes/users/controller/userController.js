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
  const { password, firstName, lastName, email, username } = req.body;

  try{
    let createdSalt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(req.body.password, createdSalt);

    let newUser = new User({
      firstName,
      lastName,
      password: hashedPassword,
      email,
      username,
    });

    let createdUser = await newUser.save();
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

async function deleteUserByID(req, res) {
  try{
    let deletedUser = await User.findByIdAndRemove(req.params.id);

    res.json({message: "Success", deletedUser});
  } catch (e) {
    res.status(500).json({message: "failure", error: e.message })
  }
};


module.exports = {
  getAllUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
};