//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function arrayTake(number) {
  let listArray = [];

  for (let i = 1; i <= number; i++) {
    listArray.push(i);
  }
  return listArray;
}

arrayTake(24);
