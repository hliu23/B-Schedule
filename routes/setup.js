var express = require("express");
var router = express.Router();

var classroomController = require("../controllers/classroom.js");

router.get("/", function(req, res, next) {
  res.render("setup.hbs", {title: "Setup"});
})

router.get("/", classroomController.getClasses);

// function?
router.get("/user/:userId/home", function(req, res, next) {
  var userId = req.params.userId;
});


router.get("/user/:userId/calendar", function(req, res, next) {
  var userId = req.params.userId;
  var calendar = {
    title: "Calendar",
    school: ["Brebeuf Jesuit", "Center Grove Community Schools"],
  }
  res.render("setup.hbs", calendar);
})

router.get("/user/:userId/schedule", function(req, res, next) {
  res.render("setup.hbs", {title: "Schedule"});
})

router.get("/user/:userId/classes", function(req, res, next) {
  res.render("setup.hbs", {title: "Classes"});
})

module.exports = router;