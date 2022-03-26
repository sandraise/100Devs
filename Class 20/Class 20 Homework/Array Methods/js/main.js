// Array Methods
// https://javascript.info/array-methods

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert(arr[1]); // undefined

// now arr = ["I",  , "home"];

alert(arr.length); // 3

let arr2 = ["I", "study", "JavaScript"];

arr2.splice(1, 1); // from index 1 remove 1 element

alert(arr2); // ["I", "JavaScript"]

let arr3 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr3.splice(0, 3, "Let's", "dance");

alert(arr3); // now ["Let's", "dance", "right", "now"]

let removed = arr3.splice(0, 2);

alert(removed);

let arr4 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr4.splice(2, 0, "complex", "language");

alert(arr4);

let arr5 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr5.splice(-1, 0, 3, 4);

alert(arr5); // 1,2,3,4,5
