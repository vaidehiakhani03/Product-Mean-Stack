var http = require('http');
var express = require('express');
var port =process.env.PORT || 8081;
var app =express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

mongoose.connect('mongodb://localhost/meanDb');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// console.log("hello");
app.use('',appRoutes);

http.createServer(app).listen(port);

console.log("Backend running:",port);