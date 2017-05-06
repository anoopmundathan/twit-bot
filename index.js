var Twit = require('twit');

var bot = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
	timeout_ms: 60*1000
});

// bot.post('statuses/update',{ status: 'Hello Twit bot'}, function(err, data, response) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data.text + ' was tweeted');
// 	}
// });

// bot.get('followers/list', {screen_name: 'anoopmundathan'}, function(err, data, response) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		data.users.forEach(function(user) {
// 			console.log(user.name);
// 		});
// 	}
// });

function getTimeLine() {
	bot.get('statuses/home_timeline', {count: 5}, function(err, data, response) {
		if (err) {
			console.log(err);
		} else {
			data.forEach(function(i) {
				console.log(i.text);
				console.log(i.user.screen_name);
				console.log('\n');
			});
		}
	});
}

getTimeLine();
// var stream = bot.stream('statuses/sample');

// stream.on('tweet', function(tweet) {
// 	console.log(tweet.text + '\n');
// });
