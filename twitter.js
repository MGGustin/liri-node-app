var twitter= require('twitter');

 var params = {screen_name: 'nodejs'};
    twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
        console.log(tweets);
  }
});