var Article = require("../models/article");
var _ = require("underscore");

//admin 首页
exports.index = function(req, res){
  res.render("index", {
    title: "系统后台-首页"
  });
}

//API
exports.getArticleAll = function(req, res) {
  Article.fetch(function(err, articles){
    if(err){
      res.json({
        status_code: 500,
        message: err,
        result: []
      });
    } else {
      res.json({
        status_code: 200,
        message: 'ok',
        result: articles
      });
    }
  });
}

exports.getArticleDetail = function(req, res){
  var id = req.params.id;

  Article.findById(id, function(err, article){
    if(err){
      res.json({
        status_code: 500,
        message: err,
        result: {}
      });
    } else {
      res.json({
        status_code: 200,
        message: 'ok',
        result: article
      });
    }
  });
}

exports.addArticle = function(req, res){
  var articleObj = req.body;
  if(req.body.title == '') {
    res.json({
      status_code: 400,
      message: 'The title is required'
      // result: article
    });
  } else {
    var _article;

    _article = new Article(articleObj);

    _article.save(function(err, article){
      if(err){
        console.log(err);
      }
      res.json({
        status_code: 200,
        message: 'ok',
        result: article
      });
    });
  }
}

exports.deleteArticle = function(req, res){
  var id = req.params.id;
  if(id){
    Article.remove({_id: id},function(err, article){
      if(err){
        res.json({
          status_code: 500,
          message: err,
          result: {}
        });
      }else{
        res.json({
          status_code: 200,
          message: 'ok',
          result: article
        });
      }

    })
  }
}

exports.updateArticle = function(req, res){
  var articleObj = req.body;
  var _article;

  Article.findById(id, function(err, article){
    if(err){
      console.log(err)
    }

    _article = _.extend(article, articleObj);
    _article.save(function(err, article){
      if(err){
        console.log(err);
      }
      // res.json({message: "success", data:{}}});
    });
  });
}