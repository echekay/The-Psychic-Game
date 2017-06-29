// var alphabet:Array = ("abcdefghijklmnopqrstuvwxyz").split("");

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessed = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;

document.onkeyup = function(event) {

    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    var userGuess = event.key;
    var userGuessLower = userGuess.toLowerCase();

    if (userGuessLower === computerGuess) {
        wins++
    }
    else {
        losses++;
        guessesLeft--;
    }


        lettersGuessed.push(userGuessLower);
    

    var html =
        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of.</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" + 
        "<p>Letters Guessed: " + lettersGuessed + "</p>";

    document.querySelector("#psychic").innerHTML = html;

}
