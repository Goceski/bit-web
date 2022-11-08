// Functions 6

// Exercise 1 - Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.
function countVowels(input) {
    let vowelsNumber = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'a' || input[i] == 'A' || input[i] == 'e' || input[i] == 'E' || input[i] == 'i' || input[i] == 'I' || input[i] == 'o' || input[i] == 'O' || input[i] == 'u' || input[i] == 'U') {
            vowelsNumber++
        } 
    }
    return vowelsNumber;
}

console.log(countVowels('Provera'));
console.log(countVowels('Da li radi?'));


// Exercise 2 - Write a function that combines two arrays by alternatingly taking elements.
function combinesTwoArrays(input1, input2) {
    niz = [];
    for (let i = 0; i < input1.length; i++) {
        niz.push(input1[i]);
        niz.push(input2[i]);
    } 
    return niz;
}

var niz1 = ['a', 'b', 'c'];
var niz2 = [1, 2, 3];
console.log(combinesTwoArrays(niz1, niz2));


//Exercise 3 - Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
function rotateElements(input, k) {
    for (let i = 0; i < k; i++) {
        let element = input[0];
        input.shift(0);
        input.push(element);
    }
    return input;
}

var niz3 = [1, 2, 3, 4, 5, 6];
console.log(rotateElements(niz3, 4));


// Exercise 4 - Write a function that takes a number and returns array of its digits.
function arrayOfDigits(input) {
    let niz = [];
    let a = '' + input
    for (let i = 0; i < a.length; i++) {
        niz.push(a[i]);
    }
    return niz;
}

console.log(arrayOfDigits(1234));
console.log(arrayOfDigits(74658));
console.log(arrayOfDigits(1));


// Exercise 5 - Write a program that prints a multiplication table for numbers up to 12.
function multiplicationTable(input) {
        for (let i = 1; i <= input; i++) {
        let red = '';
        for (let j = 1; j <= input; j++) {
            red += j * i + ' ';
        }
        console.log(red);
    }
}

console.log(multiplicationTable(12));


// Exercise 6 - Write a function to input temperature in Centigrade and convert to Fahrenheit.
// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
function centigradeToFahrenheit(input) {
    let a = input * 1.8 + 32;
    return a;
}

console.log(centigradeToFahrenheit(45));
console.log(centigradeToFahrenheit(21));
console.log(centigradeToFahrenheit(0));


// Exercise 7 - Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
function maxElementInArray(input) {
    let maximum = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] != NaN && input[i] != undefined && input[i] != Infinity && input[i] > maximum) {
            maximum = input[i];
        }
    }
    return maximum;
}

var a = [1, 15, -25, 0, NaN, undefined, Infinity, 10];
console.log(maxElementInArray(a));


// Exercise 8 - Write a function to find the maximum and minimum elements. Function returns an array.