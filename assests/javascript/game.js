
    var celebNames = ["Gandhi", "MLKJr", "Rumi", "Obama"];  //the array of celeb names to guess
    var wins = 0;                                            // var to store # of wins   
    var losses = 0;                                          //var to store losses   

    var guessesRemain = 12;                                  // keeps track of attempts remaining
    var guessedLetters = [];                                  //stores the letters guessed 
    var guessWord = [];                                     //builds the word that is being guessed

    var directionsText = document.getElementById("directions-text");    //link to directions paragraph
    var currentWord = document.getElementById("current-word");                     //link to the current word selected at random
    var letterGuess = document.getElementById("letter-guess");       //place to disply letters guessed
    var guessRemain = document.getElementById("guess-remain");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var spaces;

    // Selects word randomly from names array
    var wordIndex = celebNames[Math.floor(Math.random() * celebNames.length)];
    console.log("current word " + wordIndex);

    //Display _ equal to number of characters in chose word

        var currentWord = wordIndex;
        var spaces = [];

        function createUnderScore() {
            for (var i = 0; i < currentWord.length; i++){
                spaces.push("_");
            }
            return spaces;
        }
        
        console.log(createUnderScore());

//Determine Which key was pressed by player

        document.addEventListener("keypress", (event) => {
            var keyCode = event.keyCode;
            var keyWord = String.fromCharCode(keyCode);
            if(currentWord.indexOf(keyWord) > -1) {
                console.log(true);
                console.log(keyWord);
            }
        });
        
        for (var i = 0; i < celebNames.length; i++){
       
    }
 
