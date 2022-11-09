// -----------------------------
// ---------- NUMBERS ----------
// -----------------------------



// Exponent power
// ------- LONGHAND --------
const power = Math.pow(4, 3); // 64
console.log(power);
// ------- SHORTHAND -------
const power1 = 4 ** 3; // 64
console.log(power1);



// -----------------------------
// ---------- STRINGS ----------
// -----------------------------



// Repeat a string multiple times
// ------- LONGHAND -------
let str = '';
for (let i = 0; i < 5; i++) {
    str += 'Hello ';
}
console.log(str);
// ------- SHORTHAND -------
const strn = 'Hello '.repeat(5);
console.log(strn);



// Convert string to number
const age = +'21' //21
const price = +'32.33' //32.33
console.log(age);
console.log(typeof(age));
console.log(price);
console.log(typeof(price));



// ----------------------------
// ---------- ARRAYS ----------
// ----------------------------



// Merging two arrays
// ------- LONGHAND -------
const arr1 = [20, 30];
const arr2 = arr1.concat([40, 50]);
console.log(arr2);
// ------- SHORTHAND -------
const arr3 = [...arr2, 60, 70];
console.log(arr3);



// Find max and min in an array
const arr = [2, 8, 15, 4];
console.log(Math.max(...arr));
console.log(Math.min(...arr));



// Remove duplicate from array
const arr = [1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 5, 3];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);



// Remove Falsey values from array
const arr = [12, null, 0 , 34, "blabla", false];
const filterArray = arr.filter(Boolean);
console.log(filterArray); // [12, 34, "blabla"]



// 

