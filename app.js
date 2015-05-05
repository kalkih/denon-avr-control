/// <reference path="typings/node/node.d.ts"/>
var express = require('express'); 
var http = require('http');
var path = require('path');
var lessMiddleware = require('less-middleware');

var config = require('./config');
var routes = require('./routes/index');
//var sockets = require('./sockets');

var app = express();
var server = http.Server(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(lessMiddleware('/less', {
  dest: '/css',
  pathRoot: path.join(__dirname, 'public'),
  force: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

server.listen(1337, function(){
  console.log('Listening on port 1337');
});