// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function arrayBiz(nums) {
  if (nums[0] < nums[nums.length - 1]) {
    alert`Hi!`;
  } else if (nums[0] > nums[nums.length - 1]) {
    alert`Bye`;
  } else alert`We close in an hour`;
}

arrayBiz(200, 40, 58, 30, 43);

// Array Iteration

let bestColours = ["green", "blue", "yellow", "black"];

for (let i = 0; i < bestColours.length; i++) {
  console.log(bestColours[i]);
}

bestColours.forEach((x, i) => console.log(x));
