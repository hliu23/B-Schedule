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


function getRefreshToken (req, res) {
  // check refreshToken?
  var refreshToken = req.session.refreshToken;
  if (!refreshToken) {
    GoogleUser.findOne({ googleId: req.session.userId })
    .select("refreshToken")
    .exec((err, data) => {
      if (err) console.error(err);
      if (data) refreshToken = data.refreshToken;
    })
  }
  if (!refreshToken) {
    return null; 
  } else {
    oauth2Client.setCredentials({refresh_token: refreshToken});
    const classroom = google.classroom({ version: "v1", auth: oauth2Client});
    return classroom;
  }
}

exports.getClasses = function (req, res, next) {
  const classroom = getRefreshToken(req, res);
  if (!classroom) res.redirect("/account/please-login");
  else {
    const params = {
      "courseStates": "ACTIVE",
      "studentId": "me"
    };
    
    // classroom.courses.list(params, (err, data) => {
    //   if (err) console.error(err);
    //   var courses = data.data.courses;
    //   for (let i = 0; i < courses.length; i++) {
    //     if (courses[i].section !== undefined) {
    //       let info = courses[i].section.match(classroomFormat);
    //       if (info !== null) {
    //         classes[letterToNum(info.groups.period)] = {
    //           "name": courses[i].name,
    //           "lunch": parseInt(info.groups.lunch, 10)
    //         }
    //       }
    //     } 
    //   }

     
    // });
    res.render("setup.hbs", {school: ["Brebeuf", "Carmel"]});
    
  }
}

