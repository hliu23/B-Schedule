// setup demo data

const mongoose = require("mongoose");

const uri = "mongodb+srv://node:cE5ao5i3QAceGXH3@b-schedule.wkwac.mongodb.net/B-Schedule?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

var Break = require("../models/break.js");
var School = require("../models/school.js");
var GoogleUser = require("../models/google-user.js");

// delayed opening?
// var breaks = [
//   {startDate: new Date(2021, 9-1, 6), name: "Labor Day"},
//   {startDate: new Date(2021, 9-1, 16), name: "Yom Kippur"},
//   {startDate: new Date(2021, 10-1, 13), name: "PSAT & Freshman Retreat"},
//   {startDate: new Date(2022, 1-1, 17), name: "Dr. Martin Luther King, Jr. Holiday"},
//   {startDate: new Date(2022, 4-1, 15), name: "Good Friday"},
//   {startDate: new Date(2022, 4-1, 18), name: "Easter Monday"},
//   {startDate: new Date(2021, 10-1, 18), endDate: new Date(2021, 10-1, 22), name: "Fall Break"}, 
//   {startDate: new Date(2021, 11-1, 24), endDate: new Date(2021, 11-1, 26), name: "Thanksgiving Break"},  
//   {startDate: new Date(2021, 12-1, 15), endDate: new Date(2021, 12-1, 17), name: "Fall Semester Exams"}, 
//   {startDate: new Date(2021, 12-1, 20), endDate: new Date(2022, 1-1, 3), name: "Christmas Break", reset: true}, //reset the day after
//   {startDate: new Date(2022, 2-1, 18), endDate: new Date(2022, 2-1, 21), name: "President's Day Holiday"}, 
//   {startDate: new Date(2022, 3-1, 28), endDate: new Date(2022, 4-1, 1), name: "Spring Break"},  
//   {startDate: new Date(2022, 5-1, 25), endDate: new Date(2022, 5-1, 27), name: "Spring Semester Exams"} 
// ];

// var breaksId = [];


// // recursive: is async better?
// var saveRecursive = function (n) {
//   if (n < breaks.length) {
//     var inst = new Break(breaks[n]);
//     inst.save((err, data) => {
//       if (err) console.error(err);
//       else breaksId.push(data._id);
//       saveRecursive(n + 1);
//     })
//   } else if (n == breaks.length){
//     School.init()
//     .then((err => {
//       if (err) console.error(err);
//       const schedule = [
//         // 0-indexed
//         [1, 8, 6, 5, 3],
//         [2, 1, 7, 6, 4],
//         [3, 2, 8, 7, 5],
//         [4, 3, 1, 8, 6],
//         [5, 4, 2, 1, 7],
//         [6, 5, 3, 2, 8],
//         [7, 6, 4, 3, 1],
//         [8, 7, 5, 4, 2]
//       ];
//       var brebeuf = new School({name: "Brebeuf", startDate: new Date(2021, 8-1, 5), endDate: new Date(2022, 5-1, 27), breaks: breaksId, schedule: schedule, })
//       brebeuf.save((err, schoolData) => {
//         if (err) console.error(err);
//         var school = schoolData._id;
//         User.init().
//         then((err => {
//           if (err) console.error(err);
//           var classList = ["Community Service - Sem 1", "Precalculus II - Honors", "AP Lang & Comp", "AP Seminar (4's)", "Physics I - AP per. 5", "Camerata", "Latin III", "Computer Science A - AP"];
//           User.create([{ email: "hliu23@amdg.brebeuf.org", password: 12345678, classes: classList, school: school}], err => {
//             if (err) console.error(err);
//           });
//         }))
//       })
//     }))
//   }
// }

// saveRecursive(0);
