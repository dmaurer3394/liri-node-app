require("dotenv").config();

var fs = require("fs");

var Query = require("./query");
var search = new Query();

var userCommand = process.argv[2];
var userInput = process.argv.slice(3).join("+");

if (userCommand === "concert-this") {

    if (userInput) {
        search.concertThis(userInput);
    } else {
        console.log("Please enter the name of a band you would like to search")
    }

} else if (userCommand === "spotify-this-song") {
    userInput = process.argv.slice(3).join(" ")

    if (userInput) {
        search.spotifyThis(userInput);
    } else {
        console.log("Please enter the name of a song you would like to search")
    }

} else if (userCommand === "movie-this") {

    if (userInput) {
        search.movieThis(userInput);
    } else {
        console.log("Please enter the name of a movie you would like to search")
    }

} else if (userCommand === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }

        console.log(data);
        search.spotifyThis(data);
    })
} else {
    console.log("That is not a recognized input.\nPlease try again");
}