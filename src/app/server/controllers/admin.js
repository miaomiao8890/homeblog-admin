var Article = require("../../models/article");
var User = require("../models/user");

//注册
exports.showSignup = function(req, res){
  res.render("admin/signup", {
    title: "注册"
  });
}

//登陆
exports.showLogin = function(req, res){
  res.render("login", {
    title: "登陆"
  });
}

exports.signup = function(req, res){
  var _user = req.body.user;
  //console.log(user);

  User.findOne({name: _user.name}, function(err, user){
    if(err){
      console.log(err);
    }
    if(user){
      return res.redirect("/login");
    }else{
      user = new User(_user);
      user.save(function(err, user){
        if(err){
          console.log(err);
        }
        res.redirect("/")
      });
    }
  });
}

exports.login = function(req, res){
  var _user = req.body.user;
  var name = _user.name;
  var password = _user.password;

  User.findOne({name: name}, function(err, user){
    if(err){
      console.log(err);
    }

    if(!user){
      return res.redirect("/signup");
    }

    user.comparePassword(password, function(err, isMatch){
      if(err){
        console.log(err);
      }

      if(isMatch){
        req.session.user = user;

        return res.redirect("/admin/");
      }else{
        return res.redirect("/login");
        console.log("Password is not matched");
      }
    });
  });
}

//admin 首页
exports.index = function(req, res){
  res.render("index", {
    title: "系统后台-首页"
  });
}

//midware for user
exports.signinRequired = function(req, res, next){
  var user = req.session.user;
  if(!user){
    return res.redirect("/login");
  }

  next();
}

exports.adminRequired = function(req, res, next){
  var user = req.session.user;

  if(user.role <= 10){
    return res.redirect("/login");
  }

  next();
}

//API
exports.getArticleAll = function(req, res) {
  Article.fetch(function(err, articles){
    if(err){
      console.log(err);
    }
    res.json({
      status_code: 200,
      result: articles
    });
  });
}