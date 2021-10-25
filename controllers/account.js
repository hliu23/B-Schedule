const mongoose = require("mongoose");
var User = require("./models/user.js");

exports.checkLogin = function (req, res) {
  res.send("RETURN USERID IF LOGGED IN?");
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