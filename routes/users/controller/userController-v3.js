const User = require("../model/User");
//exporting an object with key and value

// hashing password library
const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("b4c0/\/", salt);

async function getAllUsers() {
  try {
    let foundAllUsers = await User.find({});
    return foundAllUsers;
  } catch (error) {
    return error;
  }
};

async function createUser(body) {
  try{
    let createdSalt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(body.password, createdSalt);

    let savedUser = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      password: hashedPassword,
      email: body.email,
      username: body.username,
    });

    return await savedUser.save();

  } catch (error) {
    return error;
  }
};

// update user by id takes two parameters : 
//    the user id and 
//    the body from the put request
// we don't need a callback anymore *avoids "callback hell"*
async function updateUserByID(id, body) {
  try{
    let updatedUser = await User.findByIdAndUpdate({_id:id}, body, {new: true});
  
    return updatedUser;

  } catch (error) {
    return error;
  }
}

async function deleteUserByID(id) {
  try {
    let deletedUser = await User.findByIdAndRemove({_id:id});
      return deletedUser;
  } catch (error) {
    return error;
  }
}


module.exports = {
  getAllUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
};