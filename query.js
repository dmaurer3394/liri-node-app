var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

var Query = function() {
    this.concertThis = function(show) {
        console.log("\nThe upcoming events in the United States are...")
        console.log("-------------------------------\n")

        axios
        .get("https://rest.bandsintown.com/artists/" + show + "/events?app_id=codingbootcamp")
        .then(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].venue.country === "United States") { 
                    console.log(response.data[i].venue.name + 
                    "\nin " + response.data[i].venue.city + ", " + response.data[i].venue.region + 
                    " on " + moment(response.data[i].datetime).format("MM/DD/YYYY") +
                    " at " + moment(response.data[i].datetime).format("h:mm a") + "\n");
                    console.log("*******************************\n");
                }
            }
        });
    }

    this.spotifyThis = function(song) {
        spotify.search({ type: 'track', query: "'" + song + "'" }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
            console.log("\nSong Name: " + data.tracks.items[0].name);
            console.log("-------------------------------")
            console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
            console.log("Album: " + data.tracks.items[0].album.name);
            console.log("Listen Here: " + data.tracks.items[0].external_urls.spotify);
            console.log("===============================");
        });
    }

    this.movieThis = function(movie) {
        axios
            .get("http://www.omdbapi.com/?apikey=ba1b7f42&t=" + movie)
            .then(function(response) {
                console.log("\nTitle: " + response.data.Title);
                console.log("-------------------------------")
                console.log("Release year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.Ratings[0].Value);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("===============================");
            })
    }
}

module.exports = Query;