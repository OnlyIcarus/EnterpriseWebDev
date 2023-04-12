var path = require('path');
var express = require('express');
var app = express();
const PORT = 8000

app.use(function (req, res, next) {
  res.send('This page does not exist!')
});

app.listen(PORT, function() {
  console.log("Listening on http://localhost"+PORT+"/")
});

const MONGODB_URL = "mongodb://127.0.0.1:27017";