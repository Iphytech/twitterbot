var Twit = require('twit');
var config =  require('./config');
var T = new Twit(config);

// setting up stream

var stream = T.stream('user');

//Anytime someone follows me

stream.on('follow', followed);

function followed(eventMsg){
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('Hey' + ' '  + '.@' + screenName + ' ' + 'Thank you for following me');

}

function tweetIt(txt){

	//post a tweet
	var tweets = {
	 status: txt
	  };
	T.post('statuses/update', tweets, tweeted); 
	function tweeted(err, data, response) {

		if(err){
			console.log("something went wrong");
		}
		else{
			console.log("it works");
		}
	}
}