var wordList = ["SHELDON", "LEONARD", "PENNY", "RAJ", "HOWARD", "AMY", "BERNADETTE", "BAZINGA", "STEWART", "PHYSICS", "ASTROLOGY", "ENGINEER"];

// Assigning variables
var randomNum = [Math.floor(Math.random() * wordList.length)];
var word = wordList[randomNum];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var userChoice;
var answerArray = [];
var underScoreWord = [];


$(document).ready(function () {
    console.log(word)
    for (let i = 0; i < word.length; i++) {
        underScoreWord.push("_");        
    }
    document.getElementById("current-word").innerHTML = underScoreWord.join(" ");

    function letterInWord(letter) {
        var positions = new Array();
        for (i = 0 ; i < word.length; i++) {
            if (word[i] === letter)
                positions.push(i);
        }
        return positions;
    }


    // Logging the users key press.
    document.onkeyup = function (e) {
        userChoice = e.key.toUpperCase();
        lettersGuessed.push(userChoice);
        console.log(lettersGuessed)
        document.getElementById("letters-used").textContent = "Letters Already Guessed: " + lettersGuessed;
        console.log(userChoice)
        console.log(word)

        var positions = letterInWord(userChoice);

        if (positions.length) {
            console.log("User has pressed a letter from word: " + userChoice);

            for (i = 0 ; i < positions.length; i++) {
                underScoreWord[positions[i]] = userChoice;
            }

            // replace progress Word underscore with letter pressed
            document.getElementById("current-word").innerHTML = underScoreWord.join(" ");
        } else {
            // alert("WRONG!");
            document.getElementById("letters-used").innerHTML += userChoice + " ";
    }
}

})