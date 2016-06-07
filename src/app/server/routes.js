var Admin = require("./controllers/admin");

module.exports = function(app){
  app.get("/admin/*", Admin.index);
  app.get("/getArticleAll", Admin.getArticleAll);
}