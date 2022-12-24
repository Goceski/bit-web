// BUILT IN OBJECTS II

// Exercise 1 - Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
// 12345 -> 54321
function reverseNumber(number) {
    if (!number) {
        return 0;
    }
    // let result = 0;
    // result = Number(String(number).split('').reverse().join(''));
    // console.log("Reversed number is : "+result);
    return Number(String(number).split('').reverse().join(''));
}

var a = 12345;
console.log("Reversed number is :", reverseNumber(a));


// Exercise 2 - Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”
function alphabeticalOrder(input) {
    if (!input || input.length == 0) {
        return 0;
    }

    var str = input.toLowerCase();
    var niz = str.split("").sort().join("");
    return niz;
}

var b = "Webmaster";
console.log(alphabeticalOrder(b));


// Exercise 3 - Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
// "Republic Of Serbia" -> "Rbceilpu Of Sabeir"
function alphabetizeString(str) 
{
	var strArr = str.split(' ');
    console.log(strArr);
    for (item in strArr) {
        var newItem = strArr[item].split('').sort().join('');
        strArr[item] = newItem;
    }

    return strArr.join(' ');
}

var a = "Republic Of Serbia";
console.log(alphabetizeString(a));


// Exercise 4 - Write a function to split a string and convert it into an array of words.
// "John Snow" -> ['John', 'Snow']
function strToArray(input) {
    var x = input.split(' ');
    return x;
}

var a = "John Snow";
console.log(strToArray(a));


// Exercise 5 - Write a function to convert a string to its abbreviated form.
// "John Snow" -> "John S."
function abbreviatedForm(input) {
    var x = input.split(' ');
    console.log(x);
    return (x[0] + " " + x[1].charAt(0) + ".");
}

var a = "John Snow";
console.log(abbreviatedForm(a));


// Exercise 6 - Write a function that adds string to the left or right of string, by replacing it’s characters.
// '0000', '123', 'l' -> '0123'
// '00000000', '123', 'r' -> '12300000'
function addLeftRight(input, replace, dirrection) {
    if (dirrection == 'l') {
        var razlika = input.length - replace.length;
        // console.log(razlika);
        var str = input.substring(0, razlika);
        return `${str}${replace}`; 

    } else if (dirrection == 'r') {
        // console.log(razlika);
        var str = input.substring(replace.length, input.length);
        // console.log(str);
        return `${replace}${str}`; 
    }

    return
}

console.log(addLeftRight('0000', '123', 'l'));
console.log(addLeftRight('00000000', '123', 'r'));


// Exercise 6 - Vlada
function replacChar(string, empty, side){
    var rez = '';
    if(side == 'l'){
        rez = empty.slice(0,empty-string.length) +  string;
        return rez;
    }

    if(side == 'r'){
        rez = string + empty.slice(0,empty-string.length);
        return rez;
    }

}

var empty = '00000000'
var a = '123';
var side = 'l';
var rez = replacChar(a, empty, side);
console.log(rez);


// Exercise 7 - Write a function to capitalize the first letter of a string and returns modified string.
// "js string exercises" -> "Js string exercises"
function capitalize(input) {
    var niz = input.split(' ');
    var a = niz[0].charAt(0).toUpperCase();
    // console.log(a);
    niz[0] = a + niz[0].substring(1,niz[0].length);

    return niz;
}

console.log(capitalize("js string exercises"));


// Exercise 8 - Write a function to hide email addresses to protect them from unauthorized users.
// "somerandomaddress@example.com" -> "somerand...@example.com"
function hideEmail(input) {
    var niz = input.split('@');
    console.log(niz);
    
    return (`${niz[0].substring(0, niz[0].length/2)}'...@'${niz[1]}`);
}

var a = hideEmail("somerandomaddress@example.com");
console.log(a);


// Exercise 8 - Vlada 
function protectEmail(userEmail) {
    // var avg, splitted, part1, part2;
    splitted = userEmail.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};
var a = protectEmail("somerandomaddress@example.com");
console.log(a);


// Exercise 9 - Write a program that accepts a string as input and swaps the case of each character. For example, if you input "The Quick Brown Fox", the output should be "tHE qUICK bROWN fOX".
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
function swapCase(input) {
    var niz = input.split(' ');
    console.log(niz);
    for (let i = 0; i < niz.length; i++) {
        var newItem = '';
        for (let j = 0; j < niz[i].length; j++) {
            // console.log(niz[i]);
            // console.log(niz[i][j]);
            if (UPPER.includes(`${niz[i][j]}`)) {
                newItem += niz[i][j].toLowerCase();
            } else if (LOWER.includes(`${niz[i][j]}`)) {
                newItem += niz[i][j].toUpperCase();
            }
        }
        niz[i] = newItem;
    }

    return niz.join(' ');
}

// console.log(swapCase("The Quick Brown Fox"));
var a = "The Quick Brown Fox";
var b = swapCase(a);
console.log(b);


// Exercise 9 - Drugi nacin
function swap(str) {
    var newLetters = '';
     for (vari = 0; i < str.length; i++) {
             if (str[i] == str[i].toUpperCase()) {
                 newLetters += str[i].toLowerCase();
             } else {
                 newLetters += str[i].toUpperCase();
             }
         }
         console.log(newLetters);
         return newLetters;
     }

console.log(swap('The Quick Brown Fox'));


// Exercise 9 - Treci nacin
function swapLetter(letter = ''){
    var newString = '';
    for(item in letter){
        if(letter[item] == ' '){
            newString += ' ';
        }
        if(UPPER.includes(letter[item])){
            newString += letter[item].toLowerCase();
        }
        if(LOWER.includes(letter[item])){
            newString += letter[item].toUpperCase();
        }
    }
    
    return newString;
}
    
    
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    
var letter = 'The Quick Brown Fox';
var rez = swapLetter(letter);
 console.log(rez);