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

router.get("/login", function(req, res, next) {
  res.render("login.hbs", {title: "Login | B Schedule"});
})

router.post("/login", function(req, res, next) {
  res.send("login");
})

router.get("/sign-up", function(req, res, next) {
  res.render("info.hbs", {title: "Sign Up | B Schedule"});
})

module.exports = router;
