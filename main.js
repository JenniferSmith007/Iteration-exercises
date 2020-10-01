//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings

const array = [1, 2, 3, 4, 5];
const array1 = array.map((item) => {
  return item.toString();
});

console.log(array1);

//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled

function doubled(arr) {
  let arr2 = [];
  arr.forEach(function (element) {
    arr2.push(element * 2);
  });
  return arr;
}

//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here

let array1 = ["winning", "tomato"],
  result = [];
array1.forEach(function (currentString) {
  result.push(
    currentString.charAt(0) + currentString.charAt(currentString.length - 1)
  );
});
console.log(result);

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4
let num = [1, 2, 3, 4];
let x = [];

for (x of num) {
  console.log(x, x, x, x);
}
