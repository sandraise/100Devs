//Arrays

//Create and array of tv shows. Loop through and print each show to the console

tvShowsArr = ["Prison Break", "The Big Bang Theory", "Grey's Anatomy", "Suits"];
tvShowsArr.forEach((show) => console.log(show));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

numbersArr = [24, 466, 211, 243, 334, 583, 138];

let onlyEvens = (arr) => arr.filter((num) => num % 2 === 0);

console.log(onlyEvens(numbersArr));

let onlyOdds = (arr) => arr.filter((num) => num % 2 !== 0);

console.log(onlyOdds(numbersArr));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumHighLow(newNumArr) {
  let sorted = newNumArr.sort((a, b) => a - b);
  alert(sorted[1] + sorted[sorted.length - 2]);
}

sumHighLow([372, 21, 94, 3723, 955]);
