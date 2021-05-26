//User is coming from mongoDB Schema
//in human term - a template to create a user
const User = require("../model/User");
//exporting an object with key and value

// hashing password library
const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("b4c0/\/", salt);

module.exports = {
  getAllUsers: function () {
    
    return new Promise((resolve, reject) => {

      User.find({})
        .then(payload => {
          resolve(payload);
        })
        .catch((error) => {
          reject(error);
        })


    });

  },
  createUser: function (body) {
    return new Promise((resolve, reject) => {
      bcrypt
        .genSalt(10)
        .then((salt) => {
          return bcrypt.hash(body.password, salt);
        })
        .then((hashedPassword) => {
          let savedUser = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            password: hashedPassword,
            email: body.email,
            username: body.username,
          });
          return savedUser.save();
        })
        .then((savedUser) => {
          resolve(savedUser);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateUserByID: function (id, body){
    return new Promise((resolve, reject) =>{
      User.findByIdAndUpdate({_id: id }, body, { new: true })
        .then(updatedPayload => {
          resolve(updatedPayload);
        })
        .catch((error) => {
          reject(error);
        })
    })
  },
  deleteUserByID: function(id) {
    return new Promise((resolve, reject) => {
      User.findByIdAndRemove({_id: id})
        .then(deletedPayload => {
          resolve(deletedPayload);
        })
        .catch((error) => {
          reject(error);
        })
    })
  },
};