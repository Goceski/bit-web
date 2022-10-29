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
function firstOccurrence (slovo, rec) {
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

// Exercise 6 - Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
function lastOccurrence (slovo, rec) {
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
