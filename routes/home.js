const express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.redirect("/about");
})

router.get("/about", function(req, res, next) {
  res.render("info.hbs", {title: "About | B Schedule", intro: "about"});
});

router.get("/contact", function(req, res, next) {
  res.render("info.hbs", {title: "Contact Us | B Schedule", intro: "contact"});
})

module.exports = router;
