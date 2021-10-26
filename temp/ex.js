// const data = {
//   name: "b schedule",
//   date: "2021-10-11",
//   intro: "help you naviagate the strange schedule of your school"
// }

// const layout = {
//   title: "B Schedule",
//   body: "<h1>hqrgefsd</h1>"
// }

// module.exports.home = data;
// module.exports.layout = layout;



const mongoose = require("mongoose");

const uri = "mongodb+srv://node:cE5ao5i3QAceGXH3@b-schedule.wkwac.mongodb.net/B-Schedule?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.catch(err => {
    if (err) console.error(err);
  });
  mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error: "));

var User = require("../models/user.js");
var School = require("../models/school.js");

School.findOne().where("name").equals("Brebeuf")
.select("_id")
.exec((err, data) => {
  console.log(err);
  console.log(data);

})

// updateDate

