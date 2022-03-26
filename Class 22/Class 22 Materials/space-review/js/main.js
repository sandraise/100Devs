//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

firstArray = [33, 59, 2374, 162, 8392,"65"];
// firstArray.forEach((num) => (sum += num));
// alert(sum);

let sum = firstArray.reduce((acc,c) => acc + +c, 0)
alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

priceArray = [84, 579, 24, 14262, 92];
newPrices = priceArray.map(Math.pow)


//Create a function that takes string
//Print the reverse of that string to the console

function reverseIt(string) {
    console.log(string.reverse())
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
