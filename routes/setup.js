var express = require("express");
var router = express.Router();

var setupController = require("../controllers/setup.js");

router.get("/", setupController.setupPage);
router.post("/", setupController.setupSchool);

router.get("/calendar", setupController.setupCalendar);

router.get("/data", setupController.data);
module.exports = router;