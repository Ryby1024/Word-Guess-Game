var wordList = ["sheldon", "leonard", "penny", "raj", "howard", "amy", "bernadette", "bazinga", "stewart", "physics", "astrology", "engineer"];

// Assigning variables
var randomNum = [Math.floor(Math.random() * wordList.length)];
var word = wordList[randomNum];
var underScore = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var userChoice;
var answerArray = [];

// Logging the users key press.
document.onkeyup = function(e) {
    userChoice = e.key.toLowerCase();
    lettersGuessed.push(userChoice);
        console.log(lettersGuessed)
        document.getElementById("letters-used").textContent = "Letters Already Guessed: " + lettersGuessed;
    console.log(userChoice)
    for(var i = 0; i < word.length; i++){
        if(word.indexOf(userChoice) > -1){
            underScore.push("_");

             if (word[i] === userChoice) {
                underScore[i] = userChoice;
                console.log(underScore)
            
                if (word[i] != userChoice) 
                    underScore[i] = userChoice;
                    guessesLeft--;
                }   
            }
                
            
            
        }
        
        for (var j =0; j < word.length; j++) {
            
           document.getElementById("current-word").textContent = underScore;
           console.log(word)
    }
    
        
       
        
            
    
}