const express = require("express");

var router = express.Router();
var accountController = require("../controllers/account.js");

router.post("/google-login", accountController.googleLogin);
router.get("/logout", accountController.logout);
router.get("/authorize", accountController.authorize);
router.get("/oauth2Callback", accountController.oauth2callback);
router.get("/please-login", accountController.pleaseLogin);

module.exports = router;