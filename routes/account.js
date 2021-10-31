const express = require("express");

var router = express.Router();
var accountController = require("../controllers/account.js");

router.get("/logout", accountController.logout);
router.post("/google-login", accountController.googleLogin);

router.get("/oauth2callback", function (req, res, next) {
  oauth2Client.getToken({code: req.query.code}, (err, data) => {
    console.log(data);
    if (err) console.error(err);
    oauth2Client.setCredentials(data);
    oauth2Client.on("tokens", (tokens) => {
      console.log(tokens);
      if (tokens.refresh_token) {
        // var refresh = tokens.refresh_token;
        console.log(tokens.refresh_token);
        // oauth2Client.setCredentials({
        //   refresh_token: refresh
        // });
      }
      console.log(tokens.access_token);
    });
  })
  
});

router.get("/sign-up", function(req, res, next) {
  res.render("info.hbs", {title: "Sign Up"});
})

router.get("/", function(req, res, next) {
  res.send("PROFILE");
})

module.exports = router;