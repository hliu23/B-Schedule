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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/setup", setupRouter);
app.use("/profile", profileRouter);

// catch 404
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

const uri = "mongodb+srv://node:cE5ao5i3QAceGXH3@b-schedule.wkwac.mongodb.net/B-Schedule?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

var Break = require("./models/break.js");
var User = require("./models/user.js");
var School = require("./models/school.js");

// unique

module.exports = app;
