const mongoose = require("mongoose")
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    // check while user is entering info
    // match: [/.+@.+\..+/, "Email not formatted correctly"],
    required: [true, "No email provided"],
    unique: [true, "Email already associated with account"]
  },
  password: {
    type: String,
    // special chars? length?
    required: [true, "No password provided"]
  },
  updatedDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("User", userSchema);

// var testUser = {email: "test@gmail.com", password: 123456789};

// var testUserInstance = new userModel(testUser);
// // testUserInstance.save(err => {
// //   if (err) console.error(err);
// // });

// const day = 86400000;
// userModel.find().
//   where("updatedDate").lte(endToday()-day).gte(startToday()-day).
//   limit(5).
//   sort({updatedDate : 1}).
//   select("email").
//   exec((err, data) => {
//     if (err) console.error(err);
//     console.log(data);
//   })


// // return ms
// function startToday() {
//   return new Date().setHours(0, 0, 0);
// }

// function endToday() {
//   const now = new Date();
//   now.setDate(now.getDate() + 1);
//   return now.setHours(0, 0, 0);
// }