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
router.get("/get-all-users",  async function (req, res) {
  try{
    let foundAllUsers = await getAllUsers();
    res.json({ message: "success", foundAllUsers})
  } catch (error) {
    res.status(500).json({message: "Error", error});
  }
});

// create a user
router.post("/create-user", async function (req, res) {

  try{
    let createdUser = await createUser(req.body);

    res.json({message: "Success", createdUser})
  } catch (error) {
    res.json({message: "failure", error: error.message })
  }

});


//update a user by id
router.put('/update-user-by-id/:id', async function(req, res) {
  
  try{
    let updatedUser = await updateUserByID(req.params.id, req.body);

    res.json({message: "Success", updatedUser});

  } catch (error) {
    res.json({message: "failure", error: error.message });
  }
});


//delete user by id
router.delete("/delete-user-by-id/:id", async function (req, res) {

  try{
    let deletedUser = await deleteUserByID(req.params.id);

    res.json({message: "Success", deletedUser});

  } catch (error) {
    res.json({message: "failure", error: error.message });    
  }

});

module.exports = router;