const mongoose = require("mongoose");
var User = require("../models/user.js");

exports.loginForm = function(req, res, next) {
  var session = req.session;
  if (session.userId) res.redirect("/about");
  else res.render("login.hbs", {title: "Login"});
}

exports.login = function(req, res, next) {
  var myemail = "abc@gmail.com";
  var mypassword = "12345678";
  var email = req.body.email;
  var password = req.body.password;
  var session = req.session;

  if (email == myemail && password == mypassword) {
    session.userId = req.body.email;
    res.send("Logged in successfully!");
  }
  else {
    res.send("Invalid username or password");
  }  
}

exports.logout = function(req, res, next) {
  if (!req.session.userId) res.redirect("login");
  req.session.destroy();
  res.redirect("/about");
}

exports.create = function (req, res) {
  res.send("FILL OUT INFO AND CREATE AN ACCOUNT");
}

exports.modify = function (req, res) {
  res.send("MODIFY ACCOUNT BASIC INFO");
}

exports.delete = function (req, res) {
  res.send("GIVE A WARNING AND DELETE ACCOUNT");
}
