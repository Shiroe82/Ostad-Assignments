// 1. Function to calculate the sum of two numbers
function calculateSum(a, b) {
  return a + b;
}
console.log(calculateSum(5, 3));

// 2. Function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4));

// 3. Function to find the maximum number in an array
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5]));

// 4. Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 5. Function to filter odd numbers from an array
function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5]));

// 6. Function to sum all elements in an array
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

// 7. Function to sort an array in ascending order
function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}
console.log(sortArray([5, 3, 8, 1, 2]));

// 8. Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello"));
