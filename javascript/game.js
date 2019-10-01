// Getting the text for the html page.
var directionText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var currentWordText = document.getElementById("current-word");
var guessesLeftText = document.getElementById("guesses-left");
var lettersUsedText = document.getElementById("letters-used");


var wordList = ["sheldon", "leonard", "penny", "raj", "howard", "amy", "bernadette", "bazinga", "stewart", "physics", "astrology", "engineer"];

// Assigning variables
var randomNum = [Math.floor(Math.random() * wordList.length)];
var word = wordList[randomNum];
var underScore = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongLetter = [];
var userChoice;
var answerArray = [];

// Logging the users key press.
document.onkeyup = function(e) {
    userChoice = e.key.toLowerCase();
    if(word.indexOf(userChoice) > -1){
        for(var i = 0; i < word.length; i++){

            if (word[i] === userChoice) {
                underScore[i] = userChoice;
                console.log(underScore)

                if(word[i] != userChoice){
                    guessesLeft--;
                }
            }

        }
    }
    // else {
        
       
        
        }     
    for (var i =0; i < word.length; i++) {
        underScore.push("_");
       document.getElementById("current-word").textContent = underScore;
       console.log(word)
    }
    
    
    // userChoiceText.textContent = "letters-used: " + userChoice;
    // winsText.textContent = "Wins: " + wins;
    // lossesText.textContent = "Losses: " + losses;
    // guessesLeftText.textContent =  10 - guessesLeftText;

    
    // }
// }



