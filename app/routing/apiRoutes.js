//this is the file we're requiring the api data (friends.js).
//we also gotta make our routes here

var friendInfo = require("/Users/abdulhameed/Desktop/Friend Finder hw/app/data/friends.js");

module.exports = function(app) {
    app.get('/api/friends', function(req,res){
        res.json(friendInfo);
    });




    app.post("/api/friends", function(req,res) {

var newfriend = req.body;
var newFriendResponses = newfriend.scores


var closestMatch ={

name: "Abdul",
photo: '',


closestMatchDifference: 500
    };


for(var i = 0; i < friendInfo.length; i++){

var differenceCount = 0;

    for(var l = 0; l < friendInfo[l].scores.length; l++){

      differenceCount += Math.abs(parseInt(friendInfo[i].scores[l]) - parseInt(newFriendResponses[l]))
    }

if (closestMatch.closestMatchDifference > differenceCount) {
    closestMatch.name = friendInfo[i].name;
    closestMatch.photo = friendInfo[i].photo;
    closestMatch.closestMatchDifference = differenceCount;

}


    }

    (friendInfo).push(newfriend);

    res.json(closestMatch);
});
};