// FUNCTIONS 2

// Exercise 1 - Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false
var str = 'Provera';
function isString(rec) {
    if (typeof rec === 'string') {
        return true;
        }   else {
        return false;
    }
}
console.log(isString(str));
console.log(isString(25));
console.log(isString('provera'));

// Exercice 2 - Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false
function isBlank(rec) {
    if (rec === ' ') {
        return true;
        }   else {
        return false;
    }
}
console.log(isBlank(" "));
console.log(isBlank(12));
console.log(isBlank(false));

// Drugi nacin
function isBlank(input) {
    if (typeof input === 'string' && input.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank(''));
console.log(isBlank('abc'));

// Exercise 3 - Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"
function concatenateString(rec, a = 0) {
    if (a == 0) {
        console.log(rec);
    }   else {
        var concRec = '';
        for (i = 0; i < a; i++) {
            concRec += rec;
        }
        console.log(concRec);
    }
} 

concatenateString('Ha', 4);
console.log();  // Prazan red
concatenateString('Ha');
console.log();  // Prazan red
concatenateString('La', 5);

// Exercise 3 - Bolji nacin
function repeat(str, count) {
    if (typeof count == 'undefined') {
        count = 1;
    }

    if(count < 1) {
        return '';
    }
    var res = '';
    for (var i = 0; i < count; i++) {
        res += str;   
    }

    return res;
}

console.log(repeat('Ha'));
console.log(repeat('Ha', 2));

// Exercise 4 - Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2
function countLetterOccurrence (slovo, rec) {
    var n = 0;
    for (i = 0; i < rec.length; i++) {
        if (rec[i] == slovo) {
            n++
        }
    }
    console.log(rec);
    console.log("Slovo '" + slovo + "' se zadrzi: " + n + " puta");
}

countLetterOccurrence('a', 'anakonda');
countLetterOccurrence('c', 'recitacija');
countLetterOccurrence('b', 'abrakadabra');

// Exercise 5 - Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.
function firstOccurrence(slovo, rec) {
    for (i = 0; i < rec.length; i++) {
        if (rec[i] == slovo) {
            console.log(rec);
            console.log("Slovo '" + slovo + "' je na poziciji: " + (i));
            return;
        } 
    } 
    return (-1);
}

firstOccurrence('k', 'anakonda');
firstOccurrence('b', 'abrakadabra');
console.log(firstOccurrence('d', 'recitacija'));

// Exercise 5 - Drugi nacin
function positionOfFirst(inputString, character) {

    for (var index = 0; index < inputString.length; index++) {
        var currentCharacter = inputString[index];
        if (currentCharacter === character) {
            return index + 1;
        }
    }
    return -1;
 }

 var characterFirstPosition = positionOfFirst('This is input string', 'k');
 console.log(characterFirstPosition);

// Exercise 6 - Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
function lastOccurrence(slovo, rec) {
    var i;
    var duzina = rec.length - 1;
    for ( i = duzina; i>=0; i--) {
        if (rec[i] == slovo) {
            console.log(rec);
            console.log("Slovo '" + slovo + "' je na poziciji: " + (i+1));
            return;
        } 
    } 
    return (-1);
}

lastOccurrence('k', 'anakokonda');
lastOccurrence('b', 'abrakadabra');
console.log(lastOccurrence('d', 'recitacija'));

// Exercise 7 - Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
function srtingToArray(str) {
    var niz = [];
    for (i = 0; i < str.length; i++) {
        if (str[i] == ' '){
            niz.push(null);
        } else {
            niz.push(str[i]);
        }
    }
    console.log(str);
    console.log(niz);
}

srtingToArray('Proba');
srtingToArray('Da li radi?');

// Exercise 7 - Drugi nacin
function stringIntoArray(inputString) {
    var space = ' '
    var outputArray = [];

    for (var index = 0; index < inputString.length; index++) {
        var element = inputString[index];
        if (element === space) {
            outputArray[index] = null;   
        } else {
            outputArray[index] = element;   
        }
    }

    return outputArray;
 }

 var output = stringIntoArray('This is simple string');
 console.log(output);


// Exercise 8 - Write a function that accepts a number as a parameter and checks if the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(a) {
    for (i = 2; i < a; i++) {
        if (a % i == 0) {
            console.log(a, "- Not prime number");
            return;
        }
    }   
    console.log(a, "- Prime number");
}

isPrime(10);
isPrime(19);
isPrime(20);

// Exercise 8 - Drugi nacin
function isPrimeNumber(num) {

    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    }

    for (var x = 2; x < num; x++) {
        if (num % x === 0) {
            return false;
        }
    }

    return true;
 }

 var isPrime = isPrimeNumber(37);
 console.log(isPrime);

// Exercise 9 - Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"
function replaceSpace(str, space = '-') {
    console.log(str);
    var str2 = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            str2 += str[i];
        } else {
            str2 += space;
        }
    }
    console.log(str2);
}

replaceSpace("Provera da li radi", "_");
replaceSpace("Provera da li radi", "+");
replaceSpace("Provera da li radi");

// Exercise 9 - Drugi nacin
function replaceSpace(string, sep) {
    var output = '';
    sep = sep || '-';
    for (var index = 0; index < string.length; index++) {
        var element = string[index];
        if (element === ' ') {
            output += sep;
        } else {
            output += element;
        }
    }

    return output;
 }

 var result = replaceSpace('Random string with space', '%');
 console.log(result);

// Exercise 10 - Write a function to get the first n characters and add “...” at the end of newly created string.
function etc(str, n) {
    str2 = '';
    for (i = 0; i < n; i++) {
        str2 += str[i];
    }
    str2 += '...';
    console.log(str2);
}

etc("Abrakadabra", 5);
etc("Reklamacije", 7);
etc("Dobar dan", 4);

// Exercise 10 - Drugi nacin
function stringChop(input, size) {
    var output = '';

    for (var index = 0; index < input.length; index++) {
        var element = input[index];
        output += element;
        if (index === (size - 1)) {
            output += '...';
            break;
        }
    }

    return output;
 }

 var result = stringChop('This is long string', 7);
 console.log(result);

// Exercise 11 - 11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
var niz = ["1", "21", undefined, "42", "1e+3", Infinity];
function arrayOfNumbers(str) {
    var niz2 = [];
    for (i = 0; i < str.length; i++) {
        if (Number(str[i]) == NaN || Number(str[i]) == Infinity || Number(str[i]) == undefined) {
            continue;
        } else {
            niz2.push(Number(str[i]));
        }
    }
    console.log(niz);
    console.log(niz2);
}


// Exercise 11 - Ispravan nacin
function filterNonNumbers(inputArray) {
    var numArray = [];
    var positionFixer = 0;

    for (var index = 0; index < inputArray.length; index++) {
        var element = inputArray[index];
        var number = parseFloat(element);

        if (!isNaN(number) && isFinite(number)) {
            numArray[index - positionFixer] = number;
        } else {
            positionFixer++;
        }
    }

    return numArray;
 }

 var output = filterNonNumbers(['1', '21', undefined, '42', '1e+3', Infinity]);
 console.log(output);

// Exercise 12 - Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.
function calculateAge(yearOfBirth) {
    var age = parseInt(2022 - yearOfBirth);
    return age;
 }

 function isInReitrement(age, gender) {
    gender = gender || 'm'

    if (gender === 'm') {
        return age >= 65;
    } else if(gender === 'f') {
        return age >= 60;
    }
 }

 function untilRetirement(yearOfBirth, gender) {
    var age = calculateAge(yearOfBirth);
    var gender = gender || 'm';

    if (isInReitrement(age, gender)) {
        return 'Person is already in retirement'
    }

    if (gender === 'm') {
        return 65 - age;
    } else {
        return 60 - age;
    }
 }

 var output = untilRetirement(1989)
 console.log(output);

// Exercise 13 - Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th
function humanizeNumber(num) {
    if (typeof num == 'undefined') {
        return;
    }

    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + 'th';
    }

    switch (num % 10) {
        case 1:
            return num + 'st';
        case 2:
            return num + 'nd';
        case 3:
            return num + 'rd';
    }
    return num + 'th';
}

// Output
console.log(humanizeNumber());
console.log(humanizeNumber(1));
console.log(humanizeNumber(8));