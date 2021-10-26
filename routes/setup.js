var express = require("express");
var router = express.Router();

var loggedIn = false;

router.get("/", function(req, res, next) {
  if (!loggedIn) res.redirect("/setup/user/0/home");
  // else
})

// function?
router.get("/user/:userId/home", function(req, res, next) {
  var userId = req.params.userId;
  res.render("setup.hbs", {title: userId + " | B Schedule"});
});


router.get("/user/:userId/calendar", function(req, res, next) {
  var userId = req.params.userId;
  var calendar = {
    title: "Calendar | B Schedule",
    school: ["Brebeuf Jesuit", "Center Grove Community Schools"],
  }
  res.render("setup.hbs", calendar);
})

router.get("/user/:userId/schedule", function(req, res, next) {
  res.render("setup.hbs", {title: "Schedule | B Schedule"});
})

router.get("/user/:userId/classes", function(req, res, next) {
  res.render("setup.hbs", {title: "Classes | B Schedule"});
})

router.get("/user/:userId/create", function(req, res, next) {

})


module.exports = router;

function loginStatus () {
  
}