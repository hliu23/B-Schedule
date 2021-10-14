var express = require("express");
var router = express.Router();

router.get("/create", function(req, res, next) {
  res.render("home.hbs", {title: "Create Profile | Brebeuf Schedule", intro: "creating"});
})

router.get("/user/:userId", function(req, res, next) {
  res.render("home.hbs", {title: "User | Brebeuf Schedule", intro: req.params.userId});
});
// modify profile
// another router?
router.get("/user/:userId/modify", function(req, res, next) {
  res.render("home.hbs", {title: "User | Brebeuf Schedule", intro: "modify"});

});

module.exports = router;
