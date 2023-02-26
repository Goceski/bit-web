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

// Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes

function arrayOfPositiveValues(input = []) {
  return input.every((item) => item > 0);
}

console.log(arrayOfPositiveValues([3, 11, 9, 5, 6]));
// Write a function that filters all integer numbers from the given array.
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

function filterIntegerValues(input = []) {
  return input.filter((item) => Number.isInteger(item));
}

console.log(filterIntegerValues([1.6, 11.34, 9.23, 7, 3.11, 8]));

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
