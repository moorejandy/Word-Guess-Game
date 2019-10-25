var nameOne = ["g", "a", "n", "d", "h", "i"];

var wins = 0;
var losses = 0;

var celNames = ["GANDHI", "MLK JR", "OBAMA", "AQUINAS"];
var guessesRemain = 12;
var guessedLetters = [""]

var directionsText = document.getElementById("directions-text");
var wordText = document.getElementById("word-text");
var letterGuess = document.getElementById("letter-guess");
var guessRemain = document.getElementById("guess-remain");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

document.onkeyup = function (event) {
    var userGuess = event.key;

    letterGuess.textContent = "You chose: " + userGuess;
};
