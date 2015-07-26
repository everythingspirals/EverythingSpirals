'use strict'
var http = require('http');
var express = require('express');
var path = require('path');
//var mongoose = require('mongoose');

var config = require('../config');
var sockets = require('./sockets');

var app = express();
var router = express.Router();
var routes = require('./routes')(router);
var server = http.createServer(app);
var db = require('mongodb').MongoClient;
var io = require('socket.io')(server);

app.set('port', config.server.port);
app.set('views', config.views.path);
app.set('view engine', config.views.engine);

app.use(express.static(path.join(__dirname, '../public')));

//Database
//mongoose.connect(config.db.url);


//Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

app.use(router);
app.listen(3000);
