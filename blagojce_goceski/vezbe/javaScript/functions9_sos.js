// FUNCTIONS 9 - s.o.s.

// Exercise 1 - Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false
function containsDigit(input, digit) {
    if (!input || input.length == 0) {
        return false;
    }

    var digitStr = '' + digit;
    // console.log(digitStr);
    // console.log(typeof(digitStr));

    var contain;
    for (var i = 0; i < input.length; i++) {
        if (input[i] == digitStr) {
            contain = true;
            break;
        } else {
            contain = false;
        }
    }

    return (contain ? console.log(`${input} contains ${digitStr}.`) : console.log(`${input} does not contain ${digitStr}.`));
}

containsDigit('1b895abd', 5)
containsDigit('1bser9re', 5)



// Exercise 2 - Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”
function replacementString(input, str) {
    if (!input || input.length == 0) {
        return false;
    }

    var rec = '';
    for (var i = 0; i < input.length; i++) {
        var checkString = input[i-1] + input[i];
        if (checkString == str) {
            rec += '**';
            i++
        } else {
            rec += input[i-1];
        }
    }
    
    return rec;
}

console.log(replacementString('Programming in JS is super interesting!', 'JS'));



// Exercise 3 - Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”
function insertCharacter(input, position,  char) {
    if (!input || input.length == 0) {
        return false;
    }

    var rec = '';
    for (var i = 0; i < input.length; i++) {
        if (i == position - 1) {
            rec = rec + char + input[i];
        } else {
            rec += input[i];
        }
    }

    return rec;
}

console.log(insertCharacter('Goo morning', 4, 'd'));



// Exercise 4 - Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”
function deleteCharacter(input, position) {
    if (!input || input.length == 0) {
        return false;
    }

    var rec = '';
    for (var i = 0; i < input.length; i++) {
        if (i == position) {
            continue;
        } else {
            rec += input[i];
        }
    }

    return rec;
}

console.log(deleteCharacter('Goodd morning', 3));



// Exercise 5 - Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]
function deleteElement(input) {
    if (!input || input.length == 0) {
        return input;
    }

    var niz = [];
    for (var i = 0; i < input.length; i++) {
        if (i % 2 != 0) {
            continue;
        } else {
            niz.push(input[i]);
        }
    }

    return niz;
}

console.log(deleteElement([3, 5, 1, 8, 90, -4, 23, 1, 67], 2));



// Exercise 6 - Write a function that replaces the elements of the given array between two positions with their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
function replaceWithDouble(input, pos1, pos2) {
    if (!input || input.length == 0) {
        return input;
    }

    var niz = [];
    for (var i = 0; i < input.length; i++) {
        if (i >= pos1 & i <= pos2) {
            niz.push(input[i]*2);
        } else {
            niz.push(input[i]);
        }
    }

    return niz;
}

console.log(replaceWithDouble([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));



// Exercise 7 - Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true
function elementExist(input, elem) {
    var exist = false;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == elem) {
            exist = true;
            return exist;
        }
    }
     return exist;
}


function IfArrayContainsOtherArray(input1, input2) {
    if (!input1 || !input2 || input1.length > input2.length) {
        return false;
    }

    var element = false;
    for (var j = 0; j < input1.length; j++) {
        if (!elementExist(input2, input1[j])) {
            element = false;
            return element;
        }

        element = true;
    }

    return element;
}

console.log(IfArrayContainsOtherArray([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));



// Exercise 8 - Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
function brojPonavljanja(input, karakter) {
    var num = 0;
    for (var i = 0; i < input.length; i++) {
        var str = '' + input[i];
        if (str.toLowerCase() == karakter.toLowerCase()) {
            num++;
        }
    }
    return num;
}

// console.log(brojPonavljanja('abrakadabra', 'A'));
// console.log(brojPonavljanja('morning', 'A'));

function sortByAppereance(inputArray) {
    for (var i = 1; i < inputArray.length; i++) {
        // console.log(brojPonavljanja(input[i], 'A'));
        // console.log(brojPonavljanja(input[i-1], 'A'));
        for (var j = 0; j < inputArray.length; j++) {
            if (brojPonavljanja(inputArray[j], 'A') < brojPonavljanja(inputArray[j-1], 'A')) {
                var privremena = inputArray[j];
                inputArray[j] = inputArray[j-1];
                inputArray[j-1] = privremena;
            }
        }
    }
    return inputArray;
}

console.log(sortByAppereance(['apple', 'tea', 'amazing', 'morning', 'JavaScript']));


// Exercise 8 - ISPRAVNO
function sortArrayByInputLetter(input, letter) {
    if (!input || input.length == 0 || !letter || letter.length != 1) {
        return input;
    }

    var result = [];
    for (var i = 0; i < input.length; i++) {
        var counter = 0;
        for (var j = 0; j < input[i].length; j++) {
            var element = input[i][j];
            if (element == letter) {
                counter++;
            }
        }

        if (result.length > 1) {
            var maxCount = 0;
            for (var z = 0; z < result.length; z++) {
                if (result[z][1] > maxCount) {
                    maxCount = result[z][1];
                }
            }

            if (maxCount < counter) {
                result = [input[i], counter].concat(result);
            }
        } else {
            result.push([input[i], counter]);
        }
    }

    return result;
}

console.log(sortArrayByInputLetter(['apple', 'tea', 'amazing', 'morning', 'JavaScript'], 'a'));


// Exercise 9 - Write a function that prints out the date of the next day.
// Output: 25. 10. 2018.
function prestupnaGodina(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    } else {
        return false
    }
}

function nextDay(day, month, year) {
    if (month == 12 && day == 31) {
        return console.log(`01.01.${year+1}.`);
    }

    if (month == 01 && day == 31) {
        return console.log(`01.02.${year}.`);
    }

    if (month == 02 && day == 28 && prestupnaGodina(year)) {
        return console.log(`29.02.${year}.`);
    } else if (month == 02 && day == 28 && !prestupnaGodina(year)) {
        return console.log(`01.03.${year}.`);
    }

    if (month == 03 && day == 31) {
        return console.log(`01.04.${year}.`);
    }

    if (month == 04 && day == 30) {
        return console.log(`01.05.${year}.`);
    }

    if (month == 05 && day == 31) {
        return console.log(`01.06.${year}.`);
    }

    if (month == 06 && day == 30) {
        return console.log(`01.07.${year}.`);
    }

    if (month == 07 && day == 31) {
        return console.log(`01.08.${year}.`);
    }

    if (month == 08 && day == 31) {
        return console.log(`01.09.${year}.`);
    }

    if (month == 09 && day == 30) {
        return console.log(`01.10.${year}.`);
    }

    if (month == 10 && day == 31) {
        return console.log(`01.11.${year}.`);
    }

    if (month == 11 && day == 30) {
        return console.log(`01.12.${year}.`);
    }

    return console.log(`${day+1}.${month}.${year}.`)
}

nextDay(31, 12, 2022);
nextDay(28, 02, 2022);
nextDay(28, 02, 2000);



// Exercise 10 - Write a function that prints out the date of the previous day.
// Output: 23. 10. 2018.
function prestupnaGodina(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    } else {
        return false
    }
}

function previousDay(day, month, year) {
    if (month == 01 && day == 01) {
        return console.log(`31.12.${year-1}.`);
    }

    if (month == 02 && day == 01) {
        return console.log(`31.01.${year}.`);
    }

    if (month == 03 && day == 01 && prestupnaGodina(year)) {
        return console.log(`29.02.${year}.`);
    } else if (month == 03 && day == 01 && !prestupnaGodina(year)) {
        return console.log(`28.02.${year}.`);
    }

    if (month == 04 && day == 01) {
        return console.log(`31.03.${year}.`);
    }

    if (month == 05 && day == 01) {
        return console.log(`30.04.${year}.`);
    }

    if (month == 06 && day == 01) {
        return console.log(`31.05.${year}.`);
    }

    if (month == 07 && day == 01) {
        return console.log(`30.06.${year}.`);
    }

    if (month == 08 && day == 01) {
        return console.log(`31.07.${year}.`);
    }

    if (month == 09 && day == 01) {
        return console.log(`31.08.${year}.`);
    }

    if (month == 10 && day == 01) {
        return console.log(`30.09.${year}.`);
    }

    if (month == 11 && day == 01) {
        return console.log(`31.10.${year}.`);
    }

    if (month == 12 && day == 01) {
        return console.log(`30.11.${year}.`);
    }

    return console.log(`${day-1}.${month}.${year}.`)
}

previousDay(01, 01, 2022);
previousDay(01, 03, 2022);
previousDay(01, 03, 2000);
previousDay(26, 11, 2022);



// Exercise 11 - Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output:
//        78
//       111
//         4
//      4321
function maxElementLength(input) {
    var maxLength = 0;
    for (let i = 0; i < input.length; i++) {
        var x = '' + input[i];
        if (x.length > maxLength) {
            maxLength = x.length;
        }
    }
    return maxLength;
}


function printsEmptySpaces(num) {
    var strEmptySpaces = '';
    for (let i = 0; i < num; i++) {
        strEmptySpaces += ' ';
    }
    return strEmptySpaces;
}

function printAlignedRight(input) {
    console.log(input);
    var maxDuzina = maxElementLength(input);
    for (let i = 0; i < input.length; i++) {
        var y = '' + input[i];
        var emptySpaces = printsEmptySpaces(maxDuzina - y.length);
        var aligned = '' + emptySpaces + y;
        console.log('    ' + aligned);
    }
}

printAlignedRight([78, 111, 4, 4321]);