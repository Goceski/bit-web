// -----------------------------
// ---------- NUMBERS ----------
// -----------------------------

// Eliminacija na decimali ~~
const num = Math.random()*100;
console.log(num);   // Broj sa decimalama
console.log(~~num); // Broj bez decimale


// Zaokruzivanje decimala
let n = 1.23456;
alert( n.toFixed(2) ); // "1.23" string
alert( +n.toFixed(2) ); // 1.23 number
alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23 number



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
console.log(getRandomInt(3));   // expected output: 0, 1 or 2
console.log(getRandomInt(1));   // expected output: 0
console.log(Math.random());     // expected output: a number from 0 to <1
console.log(getRandomInt(101)); // expected output: a number from 0 to 100




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



// -----------------------------
// --------- FUNCTIONS ---------
// -----------------------------
// -----FUNCTIONS ARE DATA------
// -----------------------------


// Write a function to find the element that occurs most frequently.
// ------- LONGHAND var.1 -------
function mostFrequently(input) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < input.length; i++) {
            for (var j = i; j < input.length; j++) {
                    if (input[i] == input[j]) {
                        m++;
                    }
                    if (mf < m) {
                      mf = m; 
                      item = input[i];
                    }
            }
            m = 0;
    }
    console.log(item + " ( " + mf + " times ) ") ;
}
  
console.log(mostFrequently(['pear', 'apple', 'orange', 'apple'])) // apple
console.log(mostFrequently([1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 5, 3])) // 4

// ------- LONGHAND var.2 -------
function mostFrequently(array) {
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

console.log(mostFrequently(['pear', 'apple', 'orange', 'apple'])) // apple
console.log(mostFrequently([1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 5, 3])) // 4

// ------- SHORTHAND -------
function mostFrequently(input) {
    return input.sort((a,b) => input.filter(v => v===a).length - input.filter(v => v===b).length
        ).pop();
}
    
console.log(mostFrequently(['pear', 'apple', 'orange', 'apple'])) // apple
console.log(mostFrequently([1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 5, 3])) // 4



// Variable arguments to function
// just use the 'arguments' object.
function foo() {
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }
  }

  // Ili
function my_log(...args) {
    // args is an Array
    console.log(args);
    // You can pass this array as parameters to another function
    console.log(...args);
}

// -----------------------------------
// IMMEDIATE (SELF-INVOKING) FUNCTIONS
// -----------------------------------
(
    function () {
      console.log('boo');  
    }   
    )();


    (
        function (mood) {   
        console.log(`Feeling ${mood}!`);
        }
        )('crazy');

// An immediate function can also optionally return a value if you need one.
var result = (
    function () {
      console.log('boo');
      return true;  
    }   
    )();

console.log(result);


// When you pass a function, A, to another function, B,
// and then B executes A, it's often said that A is a callback function.

// If A doesn't have a name, then you can say that it's
// an anonymous callback function.






// -----------------------------
// ----------- RAZNO -----------
// -----------------------------


// Danasnji datum
let today = new Date().toISOString().slice(0, 10)
console.log(today)