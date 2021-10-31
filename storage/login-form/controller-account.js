exports.loginForm = function(req, res, next) {
  var session = req.session;
  if (session.userId) res.redirect("/about");
  else res.render("login.hbs", {title: "Login"});
}


exports.login = function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({email: email, password: password})
  .exec((err, data) => {
    if (err) console.error(err);
    if (data) console.log(data);
    else console.log("no data");
  })

  var myemail = "abc@gmail.com";
  var mypassword = "12345678";
  var session = req.session;

  if (email == myemail && password == mypassword) {
    session.userId = req.body.email;
    localStorage.setItem("login-status", true); // is there a better way?
    res.send("Logged in successfully!");
  }
  else {
    res.send("Invalid username or password");
  }  
}

// // router
// router.get("/login", accountController.loginForm);
// router.post("/login", accountController.login);