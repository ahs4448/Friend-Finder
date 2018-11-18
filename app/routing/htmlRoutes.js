// "GET" and "POST" requests go in here too


var path = require('path');

module.exports = function (app) {
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname +"/Users/abdulhameed/Desktop/Friend Finder hw/app/public/survey.html"));
    });

    app.use(function(req,res){
        res.sendFile(path.join(__dirname + "/Users/abdulhameed/Desktop/Friend Finder hw/app/public/survey.html"));
    });
};