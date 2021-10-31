const mongoose = require("mongoose");
var GoogleUser = require("../models/google-user.js");

const jwt = require("jsonwebtoken");
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = "331844839189-btk5imvfr1ju0d9q0bpadr4f72sf28cp.apps.googleusercontent.com";

exports.loginForm = function(req, res, next) {
  var session = req.session;
  if (session.userId) res.redirect("/about");
  else res.render("login.hbs", {title: "Login"});
}

exports.login = function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({email: email, password: password})
  .exec((err, data) => {
    if (err) console.error(err);
    if (data) console.log(data);
    else console.log("no data");
  })

  var myemail = "abc@gmail.com";
  var mypassword = "12345678";
  var session = req.session;

  if (email == myemail && password == mypassword) {
    session.userId = req.body.email;
    localStorage.setItem("login-status", true); // is there a better way?
    res.send("Logged in successfully!");
  }
  else {
    res.send("Invalid username or password");
  }  
}

exports.logout = function(req, res, next) {
  if (!req.session.userId) res.redirect("/account/login");
  else {
    req.session.destroy();
    res.redirect("/about");
  }
}
// save session?

exports.googleLogin = function (req, res, next) {
  var cookieCsrf = req.cookies.g_csrf_token;
  var bodyCsrf = req.body.g_csrf_token;
  if (!cookieCsrf) createError(400, "No CSRF token in Cookie.");
  if (!bodyCsrf) createError(400, "No CSRF token in post body.");
  if (cookieCsrf !== bodyCsrf) createError(400, "Failed to verify double submit cookie.");
  const client = new OAuth2Client(CLIENT_ID);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.credential,
      audience: CLIENT_ID, 
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];
  }
  verify().catch(console.error);

  var session = req.session;
  var token = jwt.decode(req.body.credential);
  GoogleUser.init()
  .then(() => {
    GoogleUser.findOne({ googleId: token.sub })
    .exec((err, doc) => {
      if (err) console.error(err);
      if (doc) {
        if (doc.name !== token.name) {
          doc.name = token.name;
          doc.updatedDate = Date.now();
        }
      } else {
        doc = new GoogleUser({
            googleId: token.sub,
            name: token.name
        });
        // if access revoked -> user needs to grant access again to use, data not deleted (add option to delete later?)
        // if deleted in db -> functions, but login label looks like the user has already created account
      }
      doc.save((err, data) => {
        session.userId = doc.googleId;
        session.username = doc.name;
        if (err) console.error(err);
        res.redirect("/about");
      })
    })
  })
  .catch(err => {
    if (err) console.error(err);
  })
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
