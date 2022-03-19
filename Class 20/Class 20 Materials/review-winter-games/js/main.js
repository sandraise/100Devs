//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function strangeArray(list) {
  let evens = [];

  list.forEach((n) => {
    if (n % 2 === 0) {
      evens.push(n);
    }
  });
  return evens;
}

function strangeArray(list) {
  let evenNums = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      evenNums.push(list[i]);
    }
  }
  return evenNums;
}

strangeArray([34, 11, 17, 18, 22, 53]);
