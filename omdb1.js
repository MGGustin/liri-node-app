var request = require('request');

var queryUrl = "http://www.omdbapi.com/?t=" + search1 + "&y=&plot=short&tomtatoes=true&apikey=40e9cece";
request( queryUrl, function(error, response, body){
        if (!error && response.statusCode === 200) {
    console.log(JSON.parse(body).Title);
    console.log(JSON.parse(body).Year);
    console.log(JSON.parse(body).imdbRating);
    console.log(JSON.parse(body).tomatoRating);
    console.log(JSON.parse(body).Country);
    console.log(JSON.parse(body).Language);
    console.log(JSON.parse(body).Plot);
    console.log(JSON.parse(body).Actors);
  }
});