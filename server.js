var express = require("express");
var BodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3300;




app.use(BodyParser.urlencoded({ extended: true}));



app.use(BodyParser.urlencoded({ extended: true }));



app.use(BodyParser.raw({ type: 'application/vnd.custom-type'}))



app.use(BodyParser.text({ type: 'text/html'}))



require("/Users/abdulhameed/Desktop/Friend Finder hw/app/routing/apiRoutes.js")(app)
require("/Users/abdulhameed/Desktop/Friend Finder hw/app/routing/htmlRoutes.js")(app)


app.listen(PORT, function() {
console.log('App is listening on port: ' + PORT) 

});

//this file is the root this file will decide where "GET" and "POST" requests go