// FUNCTIONS 5

// Exercise 1 - Find the min and max element in the following array and switch their places. Print out the modified array in the console.
function findMinMaxArray(input) {
    console.log(input);
    var minimum = input[0];
    var indexMin = 0;
    var maximum = input[0];
    var indexMax = 0;
    for (i = 1; i < input.length; i++){
        if (input[i] < minimum){
            minimum = input[i];
            indexMin = i;
        }
    }
    for (j = 1; j < input.length; j++){
        if (input[j] > maximum){
            maximum = input[j];
            indexMax = j;
        }
    }
    var c = minimum;
    var indexC = indexMin;
    input[indexMin] = maximum;
    input[indexMax] = c;
    console.log(input);
}

var niz = [ 3, 500, 12, 149, 53, 414, 1, 19 ];
findMinMaxArray(niz);


// Exercise 2 - Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
function dividingAdding(input) {
    console.log(input);
    for (i = 0; i < input.length; i++) {
        input[i] = input[i] / 2 + 5;
        if (input[i] == 0) {
            input[i] = 20;
        }
    }
    console.log(input);
}

var niz2 = [ 3, 500, -10, 149, 53, 414, 1, 19 ];
dividingAdding(niz2);


// Exercise 3 - Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display student's names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
function grades(n) {
    var ocena;
    if(n >= 0 && n < 51) {
        ocena = 'and failed to complete the exam.';
    } else if(n >= 51 && n < 61) {
        ocena = 'and earned 6.';
    } else if(n >= 61 && n < 71) {
        ocena = 'and earned 7.';
    } else if (n >= 71 && n < 81) {
        ocena = 'and earned 8.';
    } else if (n >= 81 && n < 91) {
        ocena = 'and earned 9.';
    } else if(n >= 91 && n <= 100) {
        ocena = 'and earned 10.';
    } else {
        ocena = 'Uneti broj mora da bude izmedju 0 i 100'
    }
    return ocena;
}

function studentsGrades(inputStudents, inputGrades) {
    for (i = 0; i < inputStudents.length; i++) {
        console.log(inputStudents[i] + ' acquired ' + inputGrades[i] + ' points', grades(inputGrades[i]));
    }
}

var students = [ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var points = [ 50, 39, 63, 72, 99, 51, 83, 59 ];
studentsGrades(students, points);


// Exercise 4 - Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input - [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output - [ 15, 13, 12, 11, 8, 6, 5, 1 ]
function multiplyByTwo(input) {
    console.log(input);
    for (j = 0; j < input.length; j++) {
        input[j] *= 2;
    }
}

function sortArray(input) {
    console.log(input);
    for (i = 1; i < input.length; i++) {
        for (j = 1; j < input.length; j++) {
            if (input[j] < input[j-1]) {
                var a = input[j];
                input[j] = input[j-1];
                input[j-1] = a;
            }
        }
    }
    multiplyByTwo(input);   // Svaki element pomnoziti sa 2
    console.log(input);
}

var niz = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
sortArray(niz);


// Exercise 5 - Sort a previously defined array in a descending order and display it in the console.
function sortDescendingArray(input) {
    console.log(input);
    for (i = 1; i < input.length; i++) {
        for (j = 1; j < input.length; j++) {
            if (input[j] > input[j-1]) {
                var a = input[j];
                input[j] = input[j-1];
                input[j-1] = a;
            }
        }
    }
    console.log(input);
}

var niz = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
sortDescendingArray(niz);


// Exercise 6 - Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000
function sumOdd(n) {
    var sum = 0;
    for (i = 1; i <=n; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }
    return sum;
}

function sumEven(n) {
    var sum = 0;
    for (i = 1; i <=n; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log((sumEven(1000) - sumOdd(500)) * 12.5);


// Exercise 7 - Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa
function toString(input) {
    var str = '';
    for (i = 0; i < input.length; i++) {
        if (typeof input[i] === 'string' && input[i].length >= 2) {
            str += input[i][0] + input[i][1];
        }
    }
    console.log(input);
    console.log(str);
}

var niz = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];
toString(niz);


// Exercise 8 - Write a program that takes a string and prints its characters out in reversed order in the console.
// Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB
function reversedOrder(input) {
    console.log(input);
    var b = '';
    for (i = input.length - 1; i >= 0; i--) {
        b += input[i];
    }
    console.log(b);
}

var a = "Belgrade Institute of Technology";
reversedOrder(a);


// Exercise 9 - Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
function allCombinationToNumber(n) {
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++) {
            if (j != i) {
                console.log("(" + i + "," + j + ")");
            }
        }
    }
}

allCombinationToNumber(7);


// Exercise 10 - Write a program that checks if the entered number is a prime number (i.e. divisible only
function isPrime(n) {
    for (i = 2; i < n / 2; i++) {
        if (n % i == 0) {
            console.log(n, "- Not a prime number");
            return;
        }
    }
    console.log(n, "- Prime number");
}

isPrime(19);
isPrime(20);


// Exercise 11 - Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true
function isPalindrome(input) {
    var a = '';
    for (i = 0; i < input.length; i++) { // Eliminise prazna mesta
        if (input[i] != ' ') {
            a += input[i];
        }
    }
    var b = '';
    for (j = a.length - 1; j >= 0; j--) { // Okrene string reverse order
        b += a[j];
    }
    a == b ? console.log(true, ': Is palindrome') : console.log(false, ': Is not palindrome');
}

isPalindrome('eye');
isPalindrome('Geek');
isPalindrome('a nut for a jar of tuna');


// Exercise 12 - Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
// Input: 192 42 | 81 9
// Output: 6     | 9
function greatestCommonDivisor(a, b) {
    var manji;
    var veci;
    if (a == b) {
        console.log('The greatest common divisor is', a);
        return;
    }
    a > b ? (manji = b, veci = a) : (manji = a, veci = b);
    var grComDiv = 1;
    for (i = 1; i <= manji; i++) {
        if (veci % i == 0 && manji % i == 0) {
            grComDiv = i;
        }
    }
    console.log('The greatest common divisor is', grComDiv);
}

greatestCommonDivisor(192, 42);
greatestCommonDivisor(9, 81);
greatestCommonDivisor(20, 5);
greatestCommonDivisor(1, 19);
