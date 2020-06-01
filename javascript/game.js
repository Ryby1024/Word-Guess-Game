var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var userChoice;
var answerArray = [];
var underScoreWord = [];
var positions  =[];
var word;
var randomNum;
var wordList;

function letterInWord(letter) {
    var positions = new Array();
    for (i = 0 ; i < word.length; i++) {
        if (word[i] === letter)
            positions.push(i);
    }
    return positions;
}

function lettersToGuess() {
    var i ;
    var toGuess = 0 ;
    for (i in underScoreWord) {
        if (underScoreWord[i] === "_")
            toGuess++;
    }
    return toGuess;
}

function getWord() {
    wordList = ["SHELDON", "LEONARD", "PENNY", "RAJ", "HOWARD", "AMY", "BERNADETTE", "BAZINGA", "STEWART", "PHYSICS", "ASTROLOGY", "ENGINEER"];
    randomNum = [Math.floor(Math.random() * wordList.length)];
    word = wordList[randomNum];
    console.log(word);
    for (let i = 0; i < word.length; i++) {
        underScoreWord.push("_");        
    }
    document.getElementById("current-word").innerHTML = underScoreWord.join(" ");
}

function checkWin() {
    if(lettersToGuess() === 0) {
        alert("Congratulations, you got it right!");
        answerArray = [];
        guessesLeft = 10;
        lettersGuessed = [];
        positions = [];
        underScoreWord = [];
        word = "";
        wins++
        document.getElementById("wins-text").innerHTML = wins;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        getWord();
    }
}
function checkGuesses() {
    if(guessesLeft === 0) {
        alert("Sorry, you lost! Please try again.")
        answerArray = [];
        guessesLeft = 10;
        lettersGuessed = [];
        positions = [];
        underScoreWord = [];
        word = "";
        losses++
        document.getElementById("losses-text").innerHTML = losses;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        getWord();
    }

}

$(document).ready(function () {
    getWord();
    // Logging the users key press.
    document.onkeyup = function (e) {
        userChoice = e.key.toUpperCase();
        lettersGuessed.push(userChoice);
        console.log(lettersGuessed);
        document.getElementById("letters-used").textContent = "Letters Already Guessed: " + lettersGuessed;
        console.log(userChoice);
        console.log(word);
        

        var positions = letterInWord(userChoice);

        if (positions.length) {
            console.log("User has pressed a letter from word: " + userChoice);

            for (i = 0 ; i < positions.length; i++) {
                underScoreWord[positions[i]] = userChoice;
                answerArray.push(userChoice);
            }
            // replace progress Word underscore with letter pressed
            document.getElementById("current-word").innerHTML = underScoreWord.join(" ");
            guessesLeft--;            
            document.getElementById("guesses-left").innerHTML = guessesLeft;
            checkWin();
            checkGuesses();        
        } else {
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
            checkWin();
            checkGuesses();
        }  
        
}



})