const mongoose = require("mongoose")
var breakSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Break"
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    validate: function (val) {
      return (val > this.startDate);
    }
  },
  // whether day count resets after break
  reset: {
    type: Boolean,
    default: false
  },
  updatedDate: {
    type: Date,
    default: Date.now
  }
});

breakSchema.pre("save", function (next) {
  this.startDate.setHours(0, 0, 0, 0);
  if (this.endDate) this.endDate.setHours(0, 0, 0, 0);
  next();
})


module.exports = mongoose.model("Break", breakSchema);
