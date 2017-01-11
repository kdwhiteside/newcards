var express = require('express');
var mysql = require('mysql');
var path = require('path');
var cards = require('./assets/cards.js')
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
var io = require('socket.io').listen(server);
var socketCount = 0;
var server = require('http').createServer(app);
var player = require('./models/')["player"];
var models = require('./models');
models.sequelize.sync();

var routes = require('./controllers/controller.js');
var Game = require('./controllers/game.js');
app.use('/', routes)
routes.use(express.static(process.cwd() + '/public'));

server.listen(process.env.PORT || 3000, function(){
  console.log('listening on: ' + 3000)
});
