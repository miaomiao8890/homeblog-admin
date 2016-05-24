var Admin = require("../app/controllers/admin");

module.exports = function(app){
  // pre handle user
  app.use(function(req, res, next){
    var _user = req.session.user;
    app.locals.user = _user;
    next();
  });

  //Homeblog
  app.get("/", Admin.signinRequired, Admin.adminRequired, Admin.index);
  app.get("/login", Admin.showLogin);
  app.get("/signup", Admin.showSignup);
}