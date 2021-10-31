const mongoose = require("mongoose")
var userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    default: "User"
  },
  refreshToken: {
    type: String
  },
  classes: {
    type: [String]
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School"
  },
  updatedDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("GoogleUser", userSchema);

