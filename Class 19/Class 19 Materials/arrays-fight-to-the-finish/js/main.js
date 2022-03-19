//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = [
  "Harry Potter",
  "Lord of the Rings",
  "Hunger Games",
  "The Maze Runner",
];

//  movies.forEach((x,i)=> {
//     document.querySelector('h2')+=i});

for (let i = 0; i < movies.length; i++) {
  document.querySelector("h2").innerText += movies[i];
}

//Create an array of numbers. Loop through the array add three to each number and replace the old number.

let numbersArr = [34, 1873, 88, 353, 7];

numbersArr.forEach((item, i) => {
  numbersArr[i] = item + 3;
});

console.log(numbersArr);

//Find the average of all the numbers from question three

let sum = 0;

numbersArr.forEach((numbersArr,i) => (sum += numbersArr[i]));

for (let i = 0; i < numbersArr.length; i++) {
  sum += numbersArr[i];
  
}
console.log(sum/numbersArr.length);