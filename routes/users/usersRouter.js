var express = require("express");
var router = express.Router();
//bring in the User controller
var userController = require("./controller/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    test: true,
  });
});

router.get("/get-all-users", function (req, res) {
  
});

router.post("/create-user", function (req, res) {
  
});

router.put('/update-user-by-id/:id', function(req, res) {
  
});

router.delete("/delete-user-by-id/:id", function (req, res) {
  
});

module.exports = router;