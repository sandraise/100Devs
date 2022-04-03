// Array methods
// https://javascript.info/array-methods

// Find

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);
alert(user.name);

// Filter
let someUsers = users.filter((item) => item.id < 3);
alert(someUsers.length); // 2

// Comparison

let arr = [1, 2, 15];

arr.sort(function (a, b) {
  return a - b;
});

// arr.sort((a, b) => a - b);

alert(arr);

// localeCompare

let countries = ["Österreich", "Andorra", "Vietnam"];

alert(countries.sort((a, b) => (a > b ? 1 : -1))); // Andorra, Vietnam, Österreich (wrong)

alert(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (correct!)

// Reverse

let arrayNums = [1, 2, 3, 4, 5];
arrayNums.reverse();

alert(arrayNums); // 5,4,3,2,1

// Split and Join

let names = "Bilbo, Gandalf, Nazgul";

let arrayNames = names.split(", ");
for (let name of arrayNames) {
  alert(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

let str = "test";

alert(str.split("")); // t,e,s,t

// Reduce/ReduceRight

let arrAges = [1, 2, 3, 4, 5];

let result = arrAges.reduce((sum, current) => sum + current, 0);

alert(result); // 15

//thisArg

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(userList) {
    return userList.age >= this.minAge && userList.age < this.maxAge;
  },
};

let usersList = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// find users, for who army.canJoin returns true
let soldiers = usersList.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

// Tasks

// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(str) {
  return str
    .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter((item) => a <= item && item <= b);
}

let arrList = [5, 3, 8, 1];
let filtered = filterRange(arrList, 1, 4);
alert(filtered); // 3,1 (matching values)
alert(arrList); // 5,3,8,1 (not modified)

// Filter range "in place"

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arrFilter, a, b) {
  for (let i = 0; i < arrFilter.length; i++) {
    let val = arrFilter[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arrFilter.splice(i, 1);
      i--;
    }
  }
}

let arrFilter = [5, 3, 8, 1];
filterRangeInPlace(arrFilter, 1, 4); // removed the numbers except from 1 to 4
alert(arrFilter); // [3, 1]

// Sort in decreasing number

let arrOfNumbers = [5, 2, 1, -10, 8];
arrOfNumbers.sort((a, b) => b - a);
alert(arrOfNumbers);

// Copy and sort array

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

function copySorted(arr) {
  return arrfLang.slice().sort();
}

let arrfLang = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrfLang);

alert(sorted);
alert(arrfLang);

// Create an extendable calculator

// Create a constructor function Calculator that creates “extendable” calculator objects.

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

// Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let usersNames = [john, pete, mary];

let namesArrayList = usersNames.map((item) => item.name);

alert(namesArrayList); // John, Pete, Mary

// Map to objects

// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let johnName = { name: "John", surname: "Smith", id: 1 };
let peteName = { name: "Pete", surname: "Hunt", id: 2 };
let maryName = { name: "Mary", surname: "Key", id: 3 };

let usersListNames = [johnName, peteName, maryName];

let usersMapped = usersListNames.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith

// Sort users by age

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

function sortByAge(arrNames) {
  arrNames.sort((a, b) => a.age - b.age);
}

let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };

let arrNames = [pete, john, mary];

sortByAge(arrNames);

// now sorted is: [john, mary, pete]
alert(arrNames[0].name); // John
alert(arrNames[1].name); // Mary
alert(arrNames[2].name); // Pete

// Shuffle an array

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements.

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr123 = [1, 2, 3];
shuffle(arr123);
alert(arr123);

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// // counts of appearances for all possible permutations
// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join("")]++;
// }

// // show counts of all possible permutations
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }
