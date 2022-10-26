// File Exercises_Loops

// Example. Write a program that will iterate from 0 to 10 and display squares of numbers.
for (var x = 0; x <= 10; x++) {
    console.log(x * x);
}

// Exercise 1 - Write a 'for' loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for (var x = 0; x <= 15; x++) {
    if (x == 0){
        console.log("Broj je 0.")
    }   else if (x % 2 == 0) {
        console.log("Broj " + x + " je paran.");
    }   else {
        console.log("Broj " + x + " je neparan.");
    }
}   

console.log(); // Prazan red

// Exercise 2 - Write a program to sum the multiples of 3 and 5 under 1000.
var ukupno = 0;
for (var x = 0; x <= 1000; x++) {
    let y = x % 3;
    let z = x % 5;
    if (x == 0) {
        console.log("Broj je 0.");
    }   else if (y == 0 && z == 0) {
        ukupno += x;
        console.log("Broj " + x + " je deljiv sa 3 i sa 5.");
    }
}
console.log("Zbir brojeva do 1000 deljivih sa 3 i sa 5 iznosi ", ukupno);

// Skraceno
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum += i;
    }
}
console.log(sum);

console.log(); // Prazan red

// Exercise 3 - Write a program to compute the sum and product of an array of integers.
var listaBrojeva1 = [5, 15, 3, 20, 12];
var zbir = 0;
var proizvod = 1;
for (var key in listaBrojeva1) {
    zbir += listaBrojeva1[key];
    proizvod *= listaBrojeva1[key];
}
console.log("Array", listaBrojeva1);
console.log("Zbir brojeva iznosi", zbir);
console.log("Proizvod brojeva iznosi", proizvod);

console.log(); // Prazan red

// Exercise 4 - Write a program which prints the elements of the following array as a single string.
var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
var singleString = "";
for (let key in x) {
    var xArg = x[key];
    singleString += xArg;
}
console.log(x);
console.log(singleString);

console.log(); // Prazan red

// Exercise 5 - Write a program that prints the elements of the following array.
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];
console.log(a);
for (var key = 0; key < a.length; key++) {
    console.log(a[key]);
    // console.log(keyArg.length);
    for (var d = 0; d < a[key].length; d++) {
        console.log(a[key][d]);
    }
}

console.log(); // Prazan red

// Exercise 6 - Write a program that outputs the sum of squares of the first 20 numbers.
var sumOfSquares = 0;
for (i = 1; i <= 20; i++) {
    sumOfSquares += i*i;
} 
console.log("Zbir kvadrata brojeva od 1 do 20 iznosi", sumOfSquares);

console.log(); // Prazan red

// Exercise 7 - Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.
var grades = [80, 77, 88, 95, 68];
var zbirEx7 = 0;
console.log(grades);
for (var key = 0; key < grades.length; key++) {
    var keyArg = grades[key];
    zbirEx7 += keyArg;
}
var prosecnaOcena = zbirEx7 / grades.length;
console.log("Prosecan broj poena je " + prosecnaOcena + "%");
if (prosecnaOcena < 60){
    console.log("Prosecna ocena je F");
}   else if (prosecnaOcena>=60 && prosecnaOcena<70){
    console.log("Prosecna ocena je D");
}   else if (prosecnaOcena>=70 && prosecnaOcena<80){
    console.log("Prosecna ocena je C");
}   else if (prosecnaOcena>=80 && prosecnaOcena<90){
    console.log("Prosecna ocena je B");
}   else if (prosecnaOcena>=90 && prosecnaOcena<100){
    console.log("Prosecna ocena je A");
}

// Exercise 7 - Pravilan nacin
var students = [
    ['David', 80],
    ['Marko', 77],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];

var sumOfMarks = 0;

for (var i = 0; i < students.length; i++) {
    sumOfMarks += students[i][1];
}

var avg = sumOfMarks / students.length;

console.info("Average grade: " + avg);

if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

console.log(); // Prazan red

// Exercise 8 - Write a program that uses 'console.log' to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz". When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
for (let x = 1; x <= 100; x++) {
    let y = x % 3;
    let z = x % 5;
    if (y == 0 && z == 0){
        console.log("FizzBuzz");
    }   else if (z == 0 && y != 0){
        console.log("Buzz");
    }   else if (y == 0 && z != 0){
        console.log("Fizz");
    }   else{
        console.log(x);
    }
}

// Exercise 8 - Malo drugaciji nacin
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}