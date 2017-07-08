
var keys = require('keys.js')
var fs = require('fs')

var command = process.argv[2];
var search1 = process.argv[3];


if (command=="my-tweets"){
   
}


if (command=="spotify-this-song"){

}

if (command=="movie-this"){
    
}

if (command=="do-what-it-says"){
    fs.readFile("random.tx", "utf8");
    spotify.search({ type: 'track', query: fs},function(err, data) {
       if (err){
           return console.log('Error occurred:' + err);
       }
       console.log(data) 
    })
}