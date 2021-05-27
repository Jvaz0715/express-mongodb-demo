const express = require("express");
const router = express.Router();
//bring in the User controller
const { getAllUsers, createUser, updateUserByID, deleteUserByID } = require("./controller/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    test: true,
  });
});

// get all users
router.get("/get-all-users", getAllUsers);

// create a user
router.post("/create-user", createUser);

//update a user by id
router.put('/update-user-by-id/:id', updateUserByID);

//delete user by id
router.delete("/delete-user-by-id/:id", async function (req, res) {});

module.exports = router;