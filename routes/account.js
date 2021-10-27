const express = require("express");
var router = express.Router();
var accountController = require("../controllers/account.js");

router.get("/login", accountController.loginForm);

router.post("/login", accountController.login);

router.get("/logout", accountController.logout);


router.get("/sign-up", function(req, res, next) {
  res.render("info.hbs", {title: "Sign Up"});
})




router.get("/", function(req, res, next) {
  var loggedIn = false;
  if (!loggedIn) res.redirect("/account/user/0");
  // else
})



router.get("/user/:userId", function(req, res, next) {
  var userId = req.params.userId;
  var testObj = {
    topic: "brebeuf schedule",
    explanation: "the schedule of brebeuf",
    list: [
      {name: "fall break", startDate: "2342-234-234", endDate: "1234-2314-23"},
      {name: "christmas break", startDate: "123-134-134"}
    ],
    select: "name"
  };
  res.render("list.hbs", testObj);
  // res.render("account.hbs", {title: userId});

  // foreach in array "list"
  // push object into new array; object; choose name
});

module.exports = router;