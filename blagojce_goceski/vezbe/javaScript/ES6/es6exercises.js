// ------- ES6 -------
//
// 1
// Write a function that capitalizes the first letter of each string argument it receives.
// 	Function arguments: ['hello', 'there', 'ES', 6]
// 	Output: ['Hello', 'There', 'ES']
function capitalizeFirstLetter(input = []) {
  const result = [];
  input.forEach((element) => {
    const [firstLetter] = element;
    const replaceLetter = firstLetter.toUpperCase();
    element = element.replace(firstLetter, replaceLetter);
    result.push(element);
  });

  return result;
}

console.log(capitalizeFirstLetter(["hello", "there", "ES"]));
//
//
// 2
// Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// 	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
// 	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
// 	Output2: [ 24, 20 ] // tax only
function addTax(input = []) {
  const tax = 0.2;
  input.forEach((item) => {
    const taxAmount = item.price * tax;
    item.price += taxAmount;
  });

  return input;
}

console.log(
  addTax([
    { name: "Banana", price: 120 },
    { name: "Orange", price: 100 },
  ])
);
//
//
// 3
// Write a function that increases each element of the given array by the given value. If the value is
// omitted, increase each element of the array by 1.
// Input: [4, 6, 11, -9, 2.1], 2
// Output: [6, 8, 13, -7, 4.1]

//
//
//4
// Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

//
//
// 5
// Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// Output: ['babel.js, 'JS standard']
function filterByCondition(input = [], condition = "") {
  return input.filter((item) =>
    item.toLowerCase().includes(condition.toLowerCase())
  );
}

console.log(
  filterByCondition(
    ["compiler", "transpiler", "babel.js", "JS standard", "linter"],
    "JS"
  )
);
//
//
// 6
// Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]
function filterIntegerValues(input = []) {
  return input.filter((item) => Number.isInteger(item));
}

console.log(filterIntegerValues([1.6, 11.34, 9.23, 7, 3.11, 8]));
//
//
// 7
// Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553
// Output: [45, 553]

//
//
//8
// Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]

//
//
// 9
// a. Create an array of persons. A person should be an object with name and age properties.
// Experiment with enhanced object literals.
// b. Write a function that prints out the names of persons older than 25.
// c. Write a function that check if there is a person older than 40.
// d. Write a function that checks if all persons are older than 20.

//
//
// 10
// Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes
function arrayOfPositiveValues(input = []) {
  return input.every((item) => item > 0);
}

console.log(arrayOfPositiveValues([3, 11, 9, 5, 6]));
//
//
// 11
// Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output: 48

//
//
// 12
// Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// Output: 8
