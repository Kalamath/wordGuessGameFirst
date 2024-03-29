var words = [
    "javascript", "monkey", "amazing", "pancake"
];

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

// The game loop
while (remainingLetters > 0) {
    // Show players progress
    alert(answerArray.join(" "));
    // Game code goes here
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    };



    // Take input from the player
    // Update answerArray and remainingLetters for every correct guess
}

alert(answerArray.join(""));
alert("Good job! The answer was " + word + "!");
