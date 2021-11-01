module.exports = function (req, res, next) {
  var _render = res.render;
  res.render = function (view, options, fn) {
    if (options === undefined) options = {};
    if (req.session.userId) options.loginStatus = true;
    else options.loginStatus = false;
    if (req.session.username) options.username = req.session.username;
    _render.call(this, view, options, fn);
  }
  next();
}