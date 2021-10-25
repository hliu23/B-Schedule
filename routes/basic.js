const express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.redirect("/about");
})

router.get("/about", function(req, res, next) {
  res.render("info.hbs", {title: "About | B Schedule"});
});

router.get("/contact", function(req, res, next) {
  res.render("info.hbs", {title: "Contact Us | B Schedule"});
})

module.exports = router;
