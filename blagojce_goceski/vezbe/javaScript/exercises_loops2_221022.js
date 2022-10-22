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
console.log("Index najmanjeg broja je", index);

console.log(); // Prazan red

// Exercise 4 - Write a program that finds the first element larger than minimum and prints out its value.
// var polje4 = [4, 2, 2, -1, 6];
// var najmanji4 = polje4[0];
// var sledeci = polje[0];
// for (i = 1; i < polje4.length; i++){
//     if (polje4[i] < najmanji4){
//         najmanji4 = polje4[i];
//     }
// }

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
// var polje6_1 = [2, 4, -2, 7, -2, 4, 2]; // Output: The array is symmetric.
// var polje6_2 = [];
// for (i = 0; i < polje6_1.length; i++){
//     iArg = polje6_1[i];
//     polje6_2.unshift(iArg);
// }
// console.log(polje6_1);
// console.log(polje6_2);
// if (polje6_1==polje6_2){
//     console.log("The array is symetric");
// }   else {
//     console.log("The array isn't symetric");
// }