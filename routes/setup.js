var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("home.hbs", {title: "Setup | Brebeuf Schedule", intro: "setup"});

})

router.get("/schedule", function(req, res, next) {

})

router.get("/classes", function(req, res, next) {

})

router.get("/create", function(req, res, next) {

})





module.exports = router;