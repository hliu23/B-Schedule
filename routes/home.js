const express = require("express");
const Handlebars = require("handlebars");

const homeEx = require("../data/home-ex");

var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("home.hbs", homeEx);

})

router.get("/about", function(req, res, next) {
  res.send("about");
});

router.get("/contact", function(req, res, next) {
  res.send("contact us");
})

module.exports = router;
