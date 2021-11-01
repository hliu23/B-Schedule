
function getRefreshToken (req, res) {
  // check refreshToken?
  var refreshToken = req.session.refreshToken;
  if (!refreshToken) {
    return null; 
  } else {
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
    // res.render("setup.hbs", {school: ["Brebeuf", "Carmel"]});
    
  }
}

