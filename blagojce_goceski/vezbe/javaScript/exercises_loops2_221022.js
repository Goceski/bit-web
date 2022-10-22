// File Exercises_Loops 2

// Exercise 1 - Write a program that checks if a given element e is in the array a.
var e = 5;
var postoji = false;
var a = [5, -4.2, 3, 7];
for (x = 0; x < a.length; x++){
    var xArg = a[x];
    if(xArg == e){
        postoji = true;
    }
}
console.log("a =",a);
postoji == true ? console.log("yes") : console.log("no");
// Skracena metoda
// a.includes(e) ? console.log("Broj " + e + " je u nizu a.") : console.log("Broj " + e + " nije u nizu a.");

console.log(); // Prazan red

// Exercise 2 - Write a program that multiplies every positive element of a given array by 2.
var b = [-3, 11, 5, 3.4, -8];
var c = [];
for (x = 0; x < b.length; x++){
    var xArg = b[x];
    if(xArg > 0){
        c.push(xArg*2);
    }   else {
        c.push(xArg);
    }
}
console.log(b);
console.log(c);

console.log(); // Prazan red

// Exercise 3 - Write a program that finds the minimum of a given array and prints out its value and index
var polje3 = [4, 2, 2, -1, 6];
var najmanji = polje3[0];
var index = 0;
for (i = 1; i < polje3.length; i++){
    if (polje3[i] < najmanji){
        najmanji = polje3[i];
        index = i;
    }
}
console.log(polje3);
console.log("Najmanji element je", najmanji);
console.log("Index najmanjeg elementa je", index);

console.log(); // Prazan red

// Exercise 4 - Write a program that finds the first element larger than minimum and prints out its value.
var polje4 = [4, 2, 2, -1, 6];
var najmanji4 = polje4[0];
var index4 = 0;
console.log(polje4);
for (i = 1; i < polje4.length; i++){
    if (polje4[i] < najmanji4){
        najmanji4 = polje4[i];
        index4 = i;
    }
}
console.log("Najmanji element je", najmanji4);
console.log("Index najmanjeg elementa je", index4);
delete polje4[index4];
// console.log(polje4);

var najmanji5 = polje4[0];
var index5 = 0;
for (y = 1; y < polje4.length; y++){
    if (polje4[y] < najmanji5){
        najmanji5 = polje4[y];
        index5 = y;
    }
}
console.log("Sledeci najmanji element je", najmanji5);
// Izbaci tog iz niza i trazi sledeci najmanji
console.log(); // Prazan red

// Exercise 5 - Write a program that calculates the sum of positive elements in the array.
var polje5 = [3, 11, -5, -3, 2];
var sumPositive = 0;
for (i = 0; i < polje5.length; i++){
    var iArg = polje5[i];
    if (iArg > 0){
        sumPositive += iArg;
    }
}
console.log(polje5);
console.log("Zbir pozitivnih elemenata iznosi:", sumPositive);

console.log(); // Prazan red

// Exercise 6 - Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
var polje6_1 = [2, 4, -2, 7, -2, 4, 2]; // Output: The array is symmetric.
var polje6_2 = [];
for (var i = 0; i < polje6_1.length; i++){
    iArg = polje6_1[i];
    polje6_2.unshift(iArg);
}
console.log(polje6_1);
console.log(polje6_2);
for (var y = 0; y < polje6_1.length; y++) {
    if (polje6_1[y] !== polje6_2[y]){
        var symetric = false;
        break;
    } else {
        symetric = true;
    }
}
symetric == true ? console.log("The array is symetric") : console.log("The array isn't symetric");

console.log(); // Prazan red

// Exercise 7 - Write a program that intertwines two arrays. You can assume the arrays are of the same length.
var polje7_1 = [4, 5, 6, 2];
var polje7_2 = [3, 8, 11, 9];
var polje7_3 = [];
console.log(polje7_1);
console.log(polje7_2);
for (x = 0; x < polje7_1.length; x++){
    var xArg1 = polje7_1[x];
    var xArg2 = polje7_2[x];
    polje7_3.push(xArg1);
    polje7_3.push(xArg2);
}
console.log(polje7_3);

console.log(); // Prazan red

// Exercise 8 - Write a program that concatenates two arrays.
var polje8_1 = [4, 5, 6, 2];
var polje8_2 = [3, 8, 11, 9];
console.log(polje8_1);
console.log(polje8_2);
for (x = 0; x < polje8_2.length; x++){
    var xArg = polje8_2[x];
    polje8_1.push(xArg);
}
console.log(polje8_1);

console.log(); // Prazan red

// Exercise 9 - Write a program that deletes a given element e from the array a.
var e = 2;
var a = [4, 6, 2, 8, 2, 2];
console.log(a);
for (x = 0; x < a.length; x++){
    var xElem = a[x];
    if (xElem == e) {
        delete a[x];
    }
}
console.log(a);

console.log(); // Prazan red

// Exercise 10 - Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
var e = 78;
var pos = 3;
var a = [2, -2, 33, 12, 5, 8];
console.log(a);
if (pos > a.length-1){
    console.log("Greska.");
}   else {
    for (i = a.length-1; i >= pos; i--){
        a[i+1] = a[i];
    }
    a[pos] = e;    
}
console.log(a);