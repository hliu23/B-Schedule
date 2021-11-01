const {OAuth2Client} = require("google-auth-library");
const jwt = require("jsonwebtoken");
const {google} = require("googleapis");

const mongoose = require("mongoose");
const GoogleUser = require("../models/google-user.js");

const CLIENT_ID = "331844839189-btk5imvfr1ju0d9q0bpadr4f72sf28cp.apps.googleusercontent.com";
const CLIENT_SECRET = "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";

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  "http://localhost:3000/account/oauth2callback" // change later
);


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
    const userId = payload["sub"];
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
        if (err) console.error(err);
        session.userId = data.googleId;
        session.username = data.name;
        if (data.refreshToken) {
          // check if token expired

          req.session.refreshToken = data.refreshToken;

          res.redirect("/setup");
        }
        else res.redirect("/account/authorize");
      })
    })
  })
  .catch(err => {
    if (err) console.error(err);
  })
}


exports.logout = function(req, res, next) {
  req.session.destroy();
  res.redirect("/about");
}

exports.authorize = function (res, res, next) {
  const scopes = [
    "https://www.googleapis.com/auth/classroom.courses.readonly", 
    "https://www.googleapis.com/auth/calendar"
  ];
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes
  });
  res.redirect(url);
}

exports.oauth2callback = function (req, res, next) {
  oauth2Client.getToken({code: req.query.code}, (err, data) => {
    if (err) console.error(err);
    let userId = req.session.userId;
    if (userId) {
      GoogleUser.findOne({ googleId: userId })
      .exec((err, doc) => {
        if (err) console.error(err);
        if (doc) {
          doc.refreshToken = data.refresh_token;
          doc.updatedDate = Date.now();
          doc.save((err, data) => {
            if (err) console.error(err);

            req.session.refreshToken = data.refresh_token;
            
            res.redirect("/setup");
          })
        } else res.redirect("/account/please-login");
      })
    }
    else res.redirect("/account/please-login");

    // check here later
    // scopes?
  })

  // event listener?
}

exports.pleaseLogin = function (req, res, next) {
  res.render("info.hbs", {title: "Please Login", message: "Please login with your google account."})
}