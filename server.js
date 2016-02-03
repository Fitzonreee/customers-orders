var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// var ngRoute = require('angular-route');

var app = express();

app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.json());

// from mongoose.js + routes.js
require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(8000, function() {
  console.log("Listening on port 8000!");
})
