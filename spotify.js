var spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: 'a329a6d41f534e73a70c3c6c088075b8',
  secret: 'b03c1193afe445fd961030cefecac4c3'
});
 
  spotify.search({ type: 'track', query: search1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
    console.log(data); 
    });