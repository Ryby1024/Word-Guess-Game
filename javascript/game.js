var wordList = ["sheldon", "leonard", "penny", "raj", "howard", "amy", "bernadette", "bazinga", "stewart", "physics", "astrology", "engineer"];

// Assigning variables
var randomNum = [Math.floor(Math.random() * wordList.length)];
var word = wordList[randomNum];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var userChoice;
var answerArray = [];


$(document).ready(function () {
    console.log(word)
    for(let i = 0; i < word.length; i++) {
     myWord = word.replace(/[a-z]/g, " _ ")
     console.log()
    document.getElementById("current-word").textContent = myWord
    }


    // Logging the users key press.
    document.onkeyup = function (e) {
        userChoice = e.key.toLowerCase();
        lettersGuessed.push(userChoice);
        console.log(lettersGuessed)
        document.getElementById("letters-used").textContent = "Letters Already Guessed: " + lettersGuessed;
        console.log(userChoice)
        console.log(word)

        for( let i = 0; i < word.length; i++) {
            if(word[i] === userChoice){
                console.log("match")
            }
        }
    }

})