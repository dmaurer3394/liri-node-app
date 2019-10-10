require("dotenv").config();

var keys = require("./keys");

// var spotify = new Spotify(keys.spotify);

var userCommand = process.argv[2];
var userInput = process.argv[3];

if (userCommand === "concert-this") {
    console.log("concert search");
} else if (userCommand === "spotify-this-song") {
    console.log("spotify search");
} else if (userCommand === "movie-this") {
    console.log("movie search");
} else if (userCommand === "do-what-it-says") {
    console.log("simon says");
} else {
    console.log("That is not a recognized input.\nPlease try again");
}