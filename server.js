var express = require('express');
var path = require('path');
var mongoose = require("mongoose");

var app = express();
var dbUrl = "mongodb://123.57.21.57:27017/homeblog";
mongoose.connect(dbUrl);

app.use(express.static('static'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3001, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3001');
});