const {google} = require("googleapis");

const mongoose = require("mongoose");
const School = require("../models/school.js");
const GoogleUser = require("../models/google-user.js");

const CLIENT_ID = "331844839189-btk5imvfr1ju0d9q0bpadr4f72sf28cp.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://b-schedule.herokuapp.com/account/oauth2callback";


const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
  // "http://localhost:3000/account/oauth2callback" // change later
);

function getGoogle(req) {
  oauth2Client.setCredentials({refresh_token: req.session.refreshToken});
  google.options({
    auth: oauth2Client
  });
  return google;
}

exports.setupPage = function (req, res, next) {
  if (!req.session.refreshToken) { // need to store in section?
    res.redirect("/account/please-login");
  } else {
    School.find({}, "name")
    .exec((err, data) => {
      if (err) console.error(err);
      var schoolList = [];
      for (school in data) {
        schoolList[school] = data[school].name;
      }
      res.render("setup.hbs", {title: "Setup", schools: schoolList});
    });
    
  }
}

exports.setupSchool = function (req, res, next) {
  var schoolName = req.body.school;
  School.findOne({name: schoolName}, "classroomFormat")
  .exec((err, data) => {
    if (err) console.error(err);
    if (data.classroomFormat) {
      var classroomFormat = new RegExp(data.classroomFormat);

      var google = getGoogle(req);

      const classroom = google.classroom({ version: "v1" });
      const params = {
        "courseStates": "ACTIVE",
        "studentId": "me"
      };
      
      classroom.courses.list(params, (err, data) => {
        function letterToNum(letter) {
          return letter.charCodeAt(0) - 65;
        }
    
        if (err) console.error(err);
        var courses = data.data.courses;
        var classes = [];
        for (course in courses) {
          var section = courses[course].section;
          if (section) {
    
            let info = section.match(classroomFormat);
            if (info !== null) {
              classes[letterToNum(info.groups.period)] = {
                "name": courses[course].name,
                "lunch": parseInt(info.groups.lunch, 10)
              }
            }
            
          } 
        }
        console.log(classes);
        GoogleUser.findOne({googleId: req.session.userId})
        .exec((err, data) => {
          data.classes = classes;
          data.markModified("classes");
          data.save((err, data) => {
            if (err) console.error(err);
            res.redirect("/setup/calendar");
          })
        })
      })
    }
  })

  // absolute url
}

exports.setupCalendar = function (req, res, next) {
  var calendarId;
  GoogleUser.findOne({googleId: req.session.userId})
  .exec((err, data) => {
    if (err) console.error(err);
    if (data.calendarId) calendarId = data.calendarId;
    else {
      var google = getGoogle(req);
      const calendar = google.calendar({ version: "v3" });
      var params = {
        requestBody: {
          "summary": "B Schedule",
          "description": "Generated on " + new Date().toLocaleString(),
          "timeZone": "America/Indiana/Indianapolis"
        }
      };
      calendar.calendars.insert(params, (err, data) => {
        if (err) console.error(err);
        calendarId = data.data.id;
        if (err) console.error(err);
        else {
          GoogleUser.findOne({googleId: req.session.userId})
          .exec((err, data) => {
            data.calendarId = calendarId;
            data.save((err, data) => {
              if (err) console.error(err);
            })
          })
        } 
      })
    }
    res.render("calendar.hbs");
  })
}

exports.data = function (req, res, next) {
  GoogleUser.findOne({googleId: req.session.userId}, "classes calendarId")
  .exec((err, data) => {
    if (err) console.error(err);
    var send = {
      classes: data.classes,
      calendarId: "c_tagurb44isvhuuvfarprhqsi90@group.calendar.google.com"
    }
    res.send(send);
  })
}