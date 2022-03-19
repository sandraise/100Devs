//Create an array of movies with at least three movies.

let movies = [
  "Inception",
  "Princess Diaries",
  "The Devil Wears Prada",
  "The Loft",
  "Father of the Bride",
];
console.log(movies);

//Using the array from above, store the first movie in a variable

let favouriteMovie = movies[0];
console.log(favouriteMovie);

//Get the length of the original array and store it in a new variable

let moviesLength = movies.length;
console.log(moviesLength);

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastMovie = movies[[moviesLength - 1]]; // array length minus 1 because index starts at 0.
console.log(lastMovie);
