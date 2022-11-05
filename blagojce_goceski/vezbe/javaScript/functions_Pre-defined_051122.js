// Pre-defined functions

// Exercise 1 - Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

function convertArrayStringToNumber(input) {
    b = [];
    for (i = 0; i < input.length; i++) {
        if (Number(input[i]) && Number(input[i]) != Infinity) {
            b.push(Number(input[i]));
         }
    }
    return b;
}

var a = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log(convertArrayStringToNumber(a));


// Exercise 2 - Write a program to join all elements of the array into a string skipping elements that are 'undefined', 'null', 'NaN' or 'Infinity'.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: “015false-2247”
function joinArrayElements(input) {
    b = '';
    for (i = 0; i < input.length; i++) {
        if (input[i] == 0 || input[i] == true || input[i] == false || Number(input[i])) {
            b += input[i];
        }
    }
    return b;
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(joinArrayElements(a));


// Exercise 3 - Write a program to filter out falsy values from the array.
// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]
function filterFalsyValues(input) {
    b = [];
    for (i = 0; i < input.length; i++) {
        if (Number(input[i])) {
            b.push(input[i]);
        }
    }
    return b;
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null]
console.log(filterFalsyValues(a));


// Exercise 4 - Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3
function calculateNumberOfIntegers(input) {
    var n = 0;
    for (i = 0; i < input.length; i++) {
        if (input[i] == parseInt(input[i])) {
            n++;
        }
        // if (Number.isInteger(input[i])) {
        //     n++;
        // }
    }
    return n;
}

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
console.log(calculateNumberOfIntegers(a));


// Exercise 5 - Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2
function calculateNumberOfFloats(input) {
    var n = 0;
    for (i = 0; i < input.length; i++) { 
        if (Number(input[i]) && Number(input[i]) % 1 != 0) {
            console.log(input[i]);
            n++;
        }
    }
    return n;
}

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null, 0];
console.log(calculateNumberOfFloats(a));