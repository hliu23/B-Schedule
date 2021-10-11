var express = require("express");
var router = express.Router();

router.get("/create", function(req, res, next) {
  res.send("your profile is being created");
})

router.get("/user/:userId", function(req, res, next) {
  if (true) res.send("user: " + req.params.userId);
});
// modify profile
// another router?
router.get("/user/:userId/modify", function(req, res, next) {
  if (true) res.send("modify user: " + req.params.userId);
});

module.exports = router;
