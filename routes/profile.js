const express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  var loggedIn = false;
  if (!loggedIn) res.redirect("/profile/user/0");
  // else
})

router.get("/user/:userId", function(req, res, next) {
  var userId = req.params.userId
  res.render("info.hbs", {title: userId + " | B Schedule"});
});

module.exports = router;
