var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ index: "index path" });
});
module.exports = router;