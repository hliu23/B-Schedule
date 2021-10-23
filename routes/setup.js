var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("setup.hbs", {title: "Setup | B Schedule"});

})

router.get("/calendar", function(req, res, next) {
  res.render("setup.hbs", {title: "Calendar | B Schedule"});
})

router.get("/schedule", function(req, res, next) {
  res.render("setup.hbs", {title: "Schedule | B Schedule"});
})

router.get("/classes", function(req, res, next) {
  res.render("setup.hbs", {title: "Classes | B Schedule"});
})

router.get("/classes", function(req, res, next) {

})

router.get("/create", function(req, res, next) {

})


module.exports = router;