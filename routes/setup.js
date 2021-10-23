var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("setup.hbs", {title: "Setup | Brebeuf Schedule"});

})

router.get("/calendar", function(req, res, next) {
  res.render("setup.hbs", {title: "Calendar | Brebeuf Schedule"});
})

router.get("/schedule", function(req, res, next) {
  res.render("setup.hbs", {title: "Schedule | Brebeuf Schedule"});
})

router.get("/classes", function(req, res, next) {
  res.render("setup.hbs", {title: "Classes | Brebeuf Schedule"});
})

router.get("/classes", function(req, res, next) {

})

router.get("/create", function(req, res, next) {

})


module.exports = router;