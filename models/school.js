const mongoose = require("mongoose")
var schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true,
    validate: function (val) {
      return (val > this.startDate);
    }
  },
  breaks: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Break",
    required: true
  },
  schedule: {
    // nested arrays?
    type: [[Number]],
    required: true,
    validate: function (val) {
      var sameLength = true;
      var dayLen = val[0].length
      for (arr of val) {
        if (arr.length !== dayLen) sameLength = false;
      }
      return sameLength;
    }
  },
  updatedDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("School", schoolSchema);
