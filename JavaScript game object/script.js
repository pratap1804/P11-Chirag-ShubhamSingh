function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0;
    
    for (let i = 0; i < totalGuesses; i++) {
      let guess = Number(prompt(`Guess a number between 1 and 100. You have ${totalGuesses - i} guesses left.`));
      
      if (isNaN(guess)) {
        alert("Please enter a valid number.");
        i--; // decrement i so that the user doesn't lose a guess for entering an invalid value
        continue;
      }
      
      numGuesses++;
      
      if (guess === numToGuess) {
        alert(`Congratulations, you guessed the number in ${numGuesses} guesses!`);
        return numGuesses;
      } else if (guess < numToGuess) {
        alert("Too low. Try again.");
      } else {
        alert("Too high. Try again.");
      }
    }
    
    alert(`Sorry, you did not guess the number. The correct number was ${numToGuess}.`);
    return 0;
  }