const express = require("express");
var router = express.Router();
// const authUrl = require("../temp/google/google.js").url; // delete later?

router.get("/", function(req, res, next) {
  res.redirect("/about");
})

router.get("/about", function(req, res, next) {
  res.render("info.hbs", {title: "About"});
});

router.get("/contact", function(req, res, next) {
  res.render("info.hbs", {title: "Contact Us"});
})

module.exports = router;
