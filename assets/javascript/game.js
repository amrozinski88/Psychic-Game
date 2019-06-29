// array of letter choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// picks random letter from array
var letter = letters[Math.floor(Math.random() * letters.length)];

var wins = 0;

var guessesLeft = 10;

var lettersGuessed = [];

var losses = 0;

function reset() {
    document.getElementById("losses").textContent = losses;
    guessesLeft = 10;
    lettersGuessed = [];
    document.getElementById("lettersGuessed").textContent = lettersGuessed;
    letter = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById("guessesLeft").textContent = guessesLeft;

}

// logs letter

document.addEventListener("keyup", function (event) {
    if (event.key === letter) {
        wins++;
        document.getElementById("wins").textContent = wins;
        alert("You win!");
        reset();
    }
    // get new letter for user to guess 
    else if (guessesLeft > 1) {
        guessesLeft--;
        lettersGuessed.push(event.key);
        document.getElementById("lettersGuessed").textContent = lettersGuessed;
        document.getElementById("guessesLeft").textContent = guessesLeft;



        // decrease number of guesses avail
        // 
    } else {
        losses++;
        document.getElementById("losses").textContent = losses;
        reset();
        alert("You lose try again");







    }
});
