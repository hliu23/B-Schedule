const express = require("express");
const Handlebars = require("handlebars");

const ex = require("../data/ex");

var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("home.hbs", {title: "Home | Brebeuf Schedule", intro: "home"});

})

router.get("/about", function(req, res, next) {
  res.render("home.hbs", {title: "About | Brebeuf Schedule", intro: "about"});
});

router.get("/contact", function(req, res, next) {
  res.render("home.hbs", {title: "Contact Us | Brebeuf Schedule", intro: "contact"});
})

module.exports = router;
