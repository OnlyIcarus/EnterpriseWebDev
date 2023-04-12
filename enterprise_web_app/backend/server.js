import path from 'path'
import express from 'express'
import userRoutes from './user.routes.js'
import bodyParser from 'body-parser'
var app = express();
import config from './config.js'
const PORT = config.port;
const MONGOURL = config.mongoUri;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function (req, res, next) {
  res.send('This page does not exist!')
});

app.listen(PORT, function() {
  console.log("Listening on http://localhost"+PORT+"/")
});

const MONGODB_URL = "mongodb://127.0.0.1:27017";
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect(MONGODB_URL, { dbName: "users" })
mongoose.connection.on('error', err=> {
  throw new Error('unable to connect to database: ${MONGODB_URL}')
})