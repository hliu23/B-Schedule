const express = require("express");
var router = express.Router();

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
  // res.render("account.hbs", {title: userId + " | B Schedule"});

  // foreach in array "list"
  // push object into new array; object; choose name
});

module.exports = router;