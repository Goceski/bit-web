// FUNCTIONS 1

// Exercise 1 - Write a program that calculates the maximum of two given numbers.
var veci;
function max(a, b) {
    if (a == b) {
        console.log("Brojevi su isti"); 
    }   else if (a > b) {
        veci = a;
    }   else {
        veci = b;
    }
    return veci;
}

console.log(max(3,6));

// Exercise 2 - Write a program that checks if a given number is odd.
var broj;
function isOdd(a) {
    if (a % 2 == 0) {
        broj = "Broj je paran";
    }   else {
        broj = "Broj je neparan";
    }
    return broj;
}

console.log(isOdd(5));

// Exercise 3 - Write a program that checks if a given number is a three digit long number.
var isThreeDigit;
function threeDigit(a) {
    if (a > 99 && a < 1000) {
        isThreeDigit = "Broj ima 3 cifre.";
    }   else {
        isThreeDigit = "Broj nije tricifren."
    }
    return isThreeDigit;
}

console.log(threeDigit(165));

// Exercise 3 - Drugi nacin
function checkDigitLength(a) {
    return (a + '').length;
}

var digitLength = checkDigitLength(332);
if (digitLength >= 3) {
    console.log('The digit length is', digitLength);
}

// Exercise 4 - Write a program that calculates an arithmetic mean of four numbers.
var prosek;
function average(a, b, c, d) {
    prosek = (a + b + c + d) / 4;
    return prosek;
}

console.log((average(1, 2, 3, 4)));

// Exercise 4 - Drugi nacin
function arithmeticMean() {
    var args = arguments;
    var result = 0;

    for (var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        result += value;
    }

    return result / args.length;
}

console.log(arithmeticMean(3, 4, 5, 18, 22))

// Exercise 5 - Write a program that draws a square of a given size. For example, if the size of square is 5 the program should draw:
// *****
// *   *
// *   *
// *   *
// *****
function drawASquare(a) {
    console.log("*****");
    for (i = 1; i < a-1; i++) {
        console.log("*   *");
    }
    console.log("*****");
}

drawASquare(5);

// Exercise 5 - Ispravan nacin
function square(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i == 0 || i == (a - 1)) {
                result += '*'
            } else {
                if (j == 0 || j == (a - 1)) {
                    result += '*'
                } else {
                    result += ' '
                }
            }

        }

        result += '\n';
    }

    console.log(result);
}

square(7);

// Exercise 6 - Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
var strA = "";
var strB = "";
var strC = "";
function drawHorChart(a, b, c) {
    for (i = 0; i < a; i++){
        strA += "*";
    }

    console.log(strA);

    for (y = 0; y < b; y++){
        strB += "*";
    }

    console.log(strB);

    for (z = 0; z < c; z++){
        strC += "*";
    }

    console.log(strC);
}

drawHorChart(4, 10, 5);

// Exercise 6 - Drugi nacin

function draw(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        result += '*'
    }

    console.log(result);
}

function drawLines() {
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
        var value = args[i + '']
        draw(value);
    }
}

drawLines(8, 3, 5)

// Exercise 7 - Write a program that calculates a number of digits of a given number.
function numberOfDigits(a) {
    var aString = '' + a;
    console.log("Broj cifara u broju " + a + " je: ", aString.length);
}

numberOfDigits(254);
numberOfDigits(1762);
numberOfDigits(62);
numberOfDigits(17762);

// Exercise 8 - Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
var niz = [2, 4, 7, 8, 7, 7, 1]
var broj = 7;
function numberOfAppearance(a, params) {
    for (i = 0; i < params.length; i++){
        if (params[i] == a) {
            console.log(niz);
            console.log("Broj " + a + " je na poziciji", i+1);
            return;
        }
    }
    console.log(niz);
    console.log("Broj " + a + " nije u nizu");
}

numberOfAppearance(broj, niz);

// Exercise 8 - Ispravan nacin
function calculateAppearances(input, value) {
    var counter = 0;
    for (var i = 0; i < input.length; i++) {
        if (value === input[i]) {
            counter++;
        }
    }

    return counter;
}

console.log(calculateAppearances([3, 4, 1, 8, 7, 1], 1))

// Exercise 9 - Write a program that calculates the sum of odd elements of a given array.
var niz = [2, 4, 7, 8, 7, 7, 1, 5];
function sumOfOdd(params){
    var suma = 0;
    for (i = 0; i < params.length; i++){
        if (params[i] % 2 != 0){
            suma += params[i];
        }
    }
    return suma;
}

console.log(sumOfOdd(niz));

// Exercise 10 - Write a program that calculates the number of appearances of 'a' letter a in a given string. Modify the program so it calculates the number of both letters a and A.
var str = 'reklakazala';
function numberOfAppearances(rec) {
    var brojPrikaza = 0;
    var brojPrikazaA = 0;
    for (i = 0; i < rec.length; i++) {
        if (rec[i] == 'a') {
            brojPrikaza += 1;
        } else if (rec[i] == 'A') {
            brojPrikazaA += 1;
        }
    }
    console.log(rec);
    console.log("Slovo 'a' se pojavljuje " + brojPrikaza + " puta.");
    console.log("Slovo 'A' se pojavljuje " + brojPrikazaA + " puta.");
}

numberOfAppearances(str);
console.log();  // Prazan red
numberOfAppearances('jkahdjaaaa');
console.log();  // Prazan red
numberOfAppearances('AkjhjhaaaAAAAa');

// Exercise 10 - Bolji nacin
function sumOfLetterAppearences(inputString, inputLetter) {
    var counter = 0;
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i].toLowerCase() == inputLetter.toLowerCase()) {
            counter++;
        }
    }

    return counter;
}

console.log(sumOfLetterAppearences('It\'s a beautiful day', 'i'));

// Exercise 11 - Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.
var str11 = 'abc';
var num = 5;
function concatenateString(a, rec) {
    var concRec = '';
    for (i = 0; i < a; i++) {
        concRec += rec;
    }
    console.log(concRec);
} 

concatenateString(num, str11);
console.log();  // Prazan red
concatenateString(10, 'la');
console.log();  // Prazan red
concatenateString(4, 'XO');