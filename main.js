var fs = require("fs");
var Search = require("./query");
var search = new Search();

var Main = function() {
    this.search = function(query, searchInput) {
        if (query === "concert-this") {

            if (searchInput) {
                search.concertThis(searchInput);
            } else {
                console.log("\nPlease enter the name of a band you would like to search")
            }
        
        } else if (query === "spotify-this-song") {
            searchInput = process.argv.slice(3).join(" ")
        
            if (searchInput) {
                search.spotifyThis(searchInput);
            } else {
                console.log("\nPlease enter the name of a song you would like to search")
            }
        
        } else if (query === "movie-this") {
        
            if (searchInput) {
                search.movieThis(searchInput);
            } else {
                console.log("\nPlease enter the name of a movie you would like to search")
            }
        
        } else if (query === "do-what-it-says") {
            fs.readFile("random.txt", "utf8", function(error, data) {
                if (error) {
                    return console.log(error);
                }
                
                var dataArr = data.split(",")
                var random = Math.floor(Math.random() * dataArr.length)
                console.log("\nHere's a random song from Billboard's Top 100\nAs of October 16, 2019")
                search.spotifyThis(dataArr[random]);
            })
        } else {
            console.log("That is not a recognized input.\nPlease try again");
        }
    }
}

module.exports = Main;