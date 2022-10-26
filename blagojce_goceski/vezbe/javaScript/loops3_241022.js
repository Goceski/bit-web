// File Exercises_Loops 3

// Exercise 1 - Write a code to find the sum of first 10 natural numbers and show that sum on screen.
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

// Exercise 2 - Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.
var num = 5;
var result = 1;
for (var i = 0; i < 3; i++) {
    result *= num;
}
console.log(num + " up to cube equals " + result);

// Exercise 3 - Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.
var broj = 5;
var proizvod = 1;
for (var i = broj; i > 0; i--) {
    proizvod *= i;
}
console.log("The Factorial of " + broj + " is " + proizvod);

// Exercise 4 - Write a code to display the n terms of even natural number and their sum. Example: Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".
var input = 5;
var resultString = '';
for (var i = 1; i <= input * 2; i++) {
    if (i % 2 == 0) {
        if (i < input * 2) {
            resultString += i + ', '
        } else if (i == input * 2) {
            resultString += i + '.'
        }
    }
}
console.log('The even numbers are', resultString);

// Exercise 5 - Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".
var s = 232;
var sCon = s;
var sumaCifara = 0;
while (s > 1) {
    sumaCifara += s % 10;          // sumi se dodaje zadnja cifra jedinice (2)
    s = s / 10 - (s % 10) / 10;    // iz pocetnog broja se brise cifra jedinice
                                   // umanjenje dobijenog broja za vrednost iza nule, dobijamo int
}
console.log("Suma cifara u broju " + sCon + " je " + sumaCifara);

// Exercise 5 - Drugi nacin
var sum = 0;
s = 232;
var stringArray = s.toString();
for (var i = 0; i < stringArray.length; i++) {
    var num = Number(stringArray[i]);
    sum += num;
}
console.log(sum);

// Exercise 6 - Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".
var word = 'Eclip542se'
var counter = 0;
for (var i=0; i<word.length; i++) {
    if(word[i].toLowerCase().match(/[a-z]/i)) {
        counter++;
    }
}
console.log(counter);

// Exercise 6 - Drugi nacin
var word = "Eclip542se";
var sumLetters = word.length;
for (var index in word) {
  if (
    word[index] === "0" ||
    word[index] === "1" ||
    word[index] === "2" ||
    word[index] === "3" ||
    word[index] === "4" ||
    word[index] === "5" ||
    word[index] === "6" ||
    word[index] === "7" ||
    word[index] === "8" ||
    word[index] === "9"
  ) {
    sumLetters--;
  }
}
console.log("There is " + sumLetters + " letters in word " + word);

// Exercise 7 - Write a code to find on which index in array is letter "C" and show that index on screen. Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].
var inputArray = [1, 3, 32, '$', 'g', 'h', 't', 's', 'c', 66, 23, 'h2'];
var a = 'c';
for (var x = 0; x < inputArray.length; x++) {
    if (inputArray[x] === a) {
        break;
    }
}
console.log(inputArray);
console.log("Slovo " + a + " se nalazi na poziciji " + x + " u zadatom nizu.");