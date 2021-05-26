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

router.get("/get-all-users", function (req, res) {
  getAllUsers()
    .then(payload => {
      res.json({message: "success", data: payload})
    })
    .catch(error => {
      res.status(500).json({message: "Error", error})
    })
});

router.post("/create-user", function (req, res) {
  createUser(req.body)
    .then((payload) => {
      res.json({ message: "success", data: payload });
    })
    .catch((error) => {
      res.status(500).json({ message: "error", error });
    });
});

router.put('/update-user-by-id/:id', function(req, res) {
  updateUserByID(req.params.id, req.body, { new: true })
  .then((payload) => {
    res.json({ message: "success", data: payload });
  })
  .catch((error) => {
    res.status(500).json({ message: "error", error });
  });
});

router.delete("/delete-user-by-id/:id", function (req, res) {
  deleteUserByID(req.params.id)
    .then((payload) => {
      res.json({message: "Success", data: payload});
    })
    .catch(error => {
      res.status(500).json({message: "error", error});
    })
});

module.exports = router;