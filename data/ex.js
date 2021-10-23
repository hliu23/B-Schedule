// const data = {
//   name: "brebeuf schedule",
//   date: "2021-10-11",
//   intro: "help you naviagate the strange schedule of your school"
// }

// const layout = {
//   title: "Brebeuf Schedule",
//   body: "<h1>hqrgefsd</h1>"
// }

// module.exports.home = data;
// module.exports.layout = layout;



// const mongoose = require("mongoose");

// const uri = "mongodb+srv://node:cE5ao5i3QAceGXH3@brebeuf-schedule.wkwac.mongodb.net/Brebeuf-Schedule?retryWrites=true&w=majority";
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error: "));

// var User = require("../models/user.js");

// var classList = ["Community Service - Sem 1", "Precalculus II - Honors", "AP Lang & Comp", "AP Seminar (4's)", "Physics I - AP per. 5", "Camerata", "Latin III", "Computer Science A - AP"];

// init()?
// User.findOne().where("email").equals("hliu23@amdg.brebeuf.org")
// .exec((err, data) => {
//   console.log(err);
//   data.classes = classList;
//   data.save((err, data) => {
//     console.log(err);
//     console.log(data)
//   })
// })
