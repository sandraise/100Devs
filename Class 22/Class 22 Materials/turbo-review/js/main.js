// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favouriteDrink = " Orange Juice ";
favouriteDrink = favouriteDrink.trim();
console.log(favouriteDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let manyWords = "The quick fox jumped over the lazy dog.";
result = manyWords.includes("apple");
console.log(result);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
  random = Math.random();

  if (random < 0.33) {
    return `Rock`;
  } else if (random < 0.66) {
    return `Paper`;
  } else {
    return `Scissors`;
  }
}

// console.log(rockPaperScissors());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playRPS(playerChoice) {
  botChoice = rockPaperScissors().toLowerCase();
  if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper")
  ) {
    console.log(`Player wins!`);
  } else if (playerChoice === botChoice) {
    console.log(`It's a tie!`);
  } else console.log(`Computer wins!`);
}

playRPS("scissors");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

choicesArr = [
  "rock",
  "scissors",
  "rock",
  "paper",
  "scissors",
  "scissors",
  "rock",
];

function playGameXTimes(choicesArr) {
  choicesArr.forEach((choice) => playRPS(choice));
}

playGameXTimes(choicesArr);
