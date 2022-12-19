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


// Random integer
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


// SORTIRANJE NIZOVA BROJEVA
// Exercise 2 - Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]
function uniqChar(input = []){
  var numbers = [...new Set(input)];
  
  // numbers.sort( function( a , b){     // Redja ih po velicini
  //     if(a > b) return 1;
  //     if(a < b) return -1;
  //     return 0;
  // });
  
  // DRUGI NACIN SA ARROW FUNCTION
  // numbers.sort((a,b) => {
  //     if(a > b) return 1;
  //     if(a < b) return -1;
  //     return 0;
  // });

  // NAJKRACI NACIN
  numbers.sort((a, b) => a - b);

  return numbers;
}
var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
console.log(uniqChar(a));



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
// --------- MAP & SET ---------
// -----------------------------
new Map()           // – creates the map.
map.set(key, value) // – stores the value by the key.
map.get(key)        // – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key)        // – returns true if the key exists, false otherwise.
map.delete(key)     // – removes the element (the key/value pair) by the key.
map.clear()         // – removes everything from the map.
map.size            // – returns the current element count.

// Iteration over Map
//For looping over a map, there are 3 methods:
map.keys()          // – returns an iterable for keys,
map.values()        // – returns an iterable for values,
map.entries()       // – returns an iterable for entries [key, value], it’s used by default in for..of.


// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
// Its main methods are:
new Set([iterable])  // – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value)       // – adds a value, returns the set itself.
set.delete(value)    // – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value)       // – returns true if the value exists in the set, otherwise false.
set.clear()          // – removes everything from the set.
set.size             // – is the elements count.
//The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.
// For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.


// WeakMap
//The first difference between Map and WeakMap is that keys must be objects, not primitive values.
// WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.
// WeakMap has only the following methods:
weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)

// WeakSet
// WeakSet behaves similarly:
// It is analogous to Set, but we may only add objects to WeakSet (not primitives).
// An object exists in the set while it is reachable from somewhere else.
// Like Set, it supports add, has and delete, but not size, keys() and no iterations.
// Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in WeakSet may mean something about the object.
// For instance, we can add users to WeakSet to keep track of those who visited our site.


// Object.keys, values, entries
// For plain objects, the following methods are available:
Object.keys(obj)    // – returns an array of keys.
Object.values(obj)  // – returns an array of values.
Object.entries(obj) // – returns an array of [key, value] pairs.
Object.fromEntries(array) // on the resulting array to turn it back into an object.




// ----------------------------------
// ---- Destructuring assignment ----
// ----------------------------------
// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// Array destructuring
// Example 1
// we have an array with the name and surname
let arr = ["John", "Smith"]
// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
alert(firstName); // John
alert(surname);  // Smith

// Example 2
let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith

// Example 3
// Usually, if the array is longer than the list at the left, the “extra” items are omitted.
// If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// rest is array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2


// Object destructuring
// Basic syntax:
let {var1, var2} = {var1:…, var2:…}

// Example 1
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  let {title, width, height} = options;
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200

// Example 2
let options = {
    title: "Menu",
    height: 200,
    width: 100
  };
  // title = property named title
  // rest = object with the rest of properties
  let {title, ...rest} = options;
  // now title="Menu", rest={height: 200, width: 100}
  alert(rest.height);  // 200
  alert(rest.width);   // 100




// -----------------------------
// ----------- RAZNO -----------
// -----------------------------


// Danasnji datum
let today = new Date().toISOString().slice(0, 10)
console.log(today)
console.log(typeof today) // String



