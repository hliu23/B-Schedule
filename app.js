const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const homeRouter = require("./routes/home.js");
const profileRouter = require("./routes/profile.js");
const setupRouter = require("./routes/setup.js");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/profile", profileRouter);
app.use("/setup", setupRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const uri = "mongodb+srv://node:cE5ao5i3QAceGXH3@brebeuf-schedule.wkwac.mongodb.net/Brebeuf-Schedule?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

var User = require("./models/user.js");

// User.on("index", err => {
//   if (err) console.error(err);
//   User.create([{ email: "ab@s.com", password: 1234543 }], err => {
//     if (err) console.error(err);
//   });
// })

module.exports = app;
