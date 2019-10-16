require("dotenv").config();

var Main = require("./main");
var main = new Main();

var userCommand = process.argv[2];
var userInput = process.argv.slice(3).join("+");

main.search(userCommand, userInput);