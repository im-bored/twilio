document.getElementById('click').onclick = function() {
alert("yep");
	//var Firebase = require("firebase");
	var twilioprogram = require("/node_modules/twilio/node_modules");
	var client = twilioprogram.RestClient('ACc9f6acb56fe745a91c5de888f7feeacd', '4925ccdeaae39fd2a49b505e5c80d675');
	//var url = require("url");
/*
	var newStoriesRef = new Firebase("https://hacker-news.firebaseio.com/v0/newstories/0");

newStoriesRef.on("value", function(snapshot) {
  var storyRef = new Firebase("https://hacker-news.firebaseio.com/v0/item/"+snapshot.val());

  storyRef.on('value', function(storySnapshot) {
    if(storySnapshot.val() === null) {
      return
    }

    var story = storySnapshot.val();
    storyRef.off();
*/
	
      client.messages.create({
        body: "button clickeddddd",
        to: "+16465521948", // your cell number
        from: "+19293222713" // your twilio number
      }, function(err, message) {
        console.log(message);
      });
  };
//});
//};
