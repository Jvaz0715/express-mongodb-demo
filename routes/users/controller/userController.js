//User is coming from mongoDB Schema
//in human term - a template to create a user
const User = require("../model/User");
//exporting an object with key and value

// hashing password library
const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("b4c0/\/", salt);

module.exports = {
  getAllUsers: function (callback) {
    
  },
  createUser: function (body, callback) {
   
  },
  updateUserByID: function (id, body, callback){
    
  },
  deleteUserByID: function(id, callback) {
    
  },
};