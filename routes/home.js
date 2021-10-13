const express = require("express");
const Handlebars = require("handlebars");

const ex = require("../data/ex");

var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("home.hbs", {title: "home", intro: "hi"});

})

router.get("/about", function(req, res, next) {
  
});

router.get("/contact", function(req, res, next) {
  res.send("contact us");
})

module.exports = router;
