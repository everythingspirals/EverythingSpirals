'use strict'

//Variables
var http = require('http');
var express = require('express');
var path = require('path');

//var mongoose = require('mongoose');
var config = require('./config');
var app = express();
var router = express.Router();
//var routes = require(config.routes.path)(router);
var server = http.createServer(app);
var db = require('mongodb').MongoClient;

//Config
app.set('port', config.server.port);
app.set('views', config.views.path);
app.set('view engine', config.views.engine);

//Static Files
app.use("/", express.static(path.join(__dirname,"../app")));
app.use(express.static(path.join(__dirname, '../public')));
app.use("/components", express.static(path.join(__dirname,"../bower_components")));

//Database
//mongoose.connect(config.db.url);

 //Application
router.get('*', function(req, res) {
	res.render('index');
});

//Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

app.use(router);
app.listen(config.server.port);
