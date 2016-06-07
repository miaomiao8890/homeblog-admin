var Admin = require("./controllers/admin");

module.exports = function(app){
  app.get("/*", Admin.index);
}