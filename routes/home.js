const express = require("express");
const Handlebars = require("handlebars");

const ex = require("../data/ex");

var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("home.hbs", {title: "Home | B Schedule", intro: "home"});

})

router.get("/about", function(req, res, next) {
  res.render("home.hbs", {title: "About | B Schedule", intro: "about"});
});

router.get("/contact", function(req, res, next) {
  res.render("home.hbs", {title: "Contact Us | B Schedule", intro: "contact"});
})

module.exports = router;
