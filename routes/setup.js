var express = require("express");
var router = express.Router();

var setupController = require("../controllers/setup.js");

router.get("/", setupController.setupPage);
router.post("/", setupController.setupSchool);

// function?


// get info from classroom
// save into mixed object (markmodified)
// get schedule info from database
// generate on calendar
// write on log
// delayed date
// shift back a day

// special classes | special days

module.exports = router;