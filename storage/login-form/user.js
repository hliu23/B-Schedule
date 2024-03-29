const mongoose = require("mongoose")
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: [/.+@.+\..+/, "Email not formatted correctly"],
    required: true, 
    unique: [true, "This email is already associated with an account"]
  },
  // username: {
  //   type: String,
  //   required: true,
  //   unique: [true, "This username is taken"]
  // },
  password: {
    type: String,
    required: true,
  },
  classes: {
    type: [String],
    required: true
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
    required: true
  },
  updatedDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("User", userSchema);

