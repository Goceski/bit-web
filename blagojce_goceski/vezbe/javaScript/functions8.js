// FUNCTIONS 8
// IIFE = Immediately Invoked Function Expressions


// Exercise 1 - Write IIFE that replaces the first and the last element of the given array and prints out its elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

var niz = [4, 5, 11, 9];
( 
    function (inputArray) {
        let a = inputArray.length;
        let b = inputArray[0];
        inputArray[0] = inputArray[a-1];
        inputArray[a-1] = b
        console.log(inputArray);
    }

)(niz);



// Exercise 2 - Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20
(
    function (a, b) {
        console.log(a * b);
    }
)(4, 5);



// Exercise 3 - Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.
// Input: prograMming
// Output: progra**ing, 2
(
    function (input) {
        var str = '';
        let numberOfAppearance = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] == 'm' || input[i] == 'M') {
                str += '*'
                numberOfAppearance++
            } else {
                str += input[i];
            }
        }
        console.log(str, numberOfAppearance);
    }
)('prograMming');



// Exercise 4 - Write a function with parameters name and surname that returns a function that suggests an email in the form "name.surname@gmail.com".
// Input: pera peric
// Output: pera.peric@gmail.com
var x = (
    function (name, surname) {
        return function (name, surname) {
            console.log(`${name}.${surname}@gmail.com`);
            return true;
        }
    }
)();
console.log(x('pera','peric'));
console.log(x('blaza','goceski'));



// Exercise 5 - Write a function that returns a function that calculates a decimal value of the given octal number.
// Input: 034
// Output: 28
var x = (
    function (octal) {
        return function (octal) {
            console.log(octal); // octal pretvara octal u decimalni broj
            return true;
        }
    }
)();
console.log(x(034));
console.log(x(043));



// Exercise 6 - Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!
function successCallback() {
    return console.log('Your password is cool!');
}

function errorCallback() {
    return console.log('Your password is invalid!')
}

function checkPassword (password, successCallback, errorCallback) {
    if (password.length < 6) {
        console.log("Too short");
        errorCallback();
        return false;
    }
    
    if (!/[0-9]/.test(password)) {
        console.log("Should contain at least one digit");
        errorCallback();
        return false;
    } else {
        successCallback();
        return true;
    }
}

console.log(checkPassword('JSGu', successCallback, errorCallback));
console.log(checkPassword('JSGuru', successCallback, errorCallback));
console.log(checkPassword('JSGuru123', successCallback, errorCallback));



// Exercise 7 - Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]
function oddNumber(element) {
    if (element % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

function filterArray(input, oddNumber) {
    var result = [];
    for (i = 0; i < input.length; i++) {
        if (oddNumber(input[i])) {
            result.push(input[i]);
            
        }
    }
    return result;
}

var niz = [2, 8, 11, 4, 9, 3];
console.log(filterArray(niz, oddNumber));