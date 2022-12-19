// Exercise 1 - Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
function duplicateElement(input) {
    if (!input || input.length == 0) {
        return [];
    }

    var niz = [];
    for (let i = 0; i < input.length; i++) {
        niz.push(input[i]);
        niz.push(input[i]);
    }

    return niz;
}

var a = [2, 4, 7, 11, -2, 1];
console.log(duplicateElement(a));


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


// Exercise 3a - Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
function isOdd(input) {
    if (!input || input.length == 0) {
        return "Nema inputa";
    }

    if (input.length % 2 == 0) {
        return false;
    } 
    return true;
}

var a = [1, 2, 9, 2, 1];
console.log(isOdd(a));


// Exercise 3b - Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4
function numberOfElements(input) {
    if (!input || input.length == 0) {
        return [];
    }

    if (input.length % 2 == 0) {
        return "Niz ima paran broj elemenata";
    } 

    var indexMiddle = Math.floor(input.length / 2);
    console.log(input[indexMiddle]);

    var counter = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] < input[indexMiddle]) {
            counter++;
        }
    } 

    return counter;
}

var x = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
console.log(numberOfElements(x));


// Exercise 4 - Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }
function smallestElement(input) {
    if (!input || input.length == 0) {
        return {};
    }

    var smallest = input[0];
    for (let i = 1; i < input.length; i++) {
        if (input[i] < input[0]) {
            smallest = input[i];
        }
    }
    var b = new Object();
    b[smallest] = input.lastIndexOf(smallest);

    return b;
}

var a = [1, 4, -2, 11, 8, 1, -2, 3];
console.log(smallestElement(a));


// Exercise 5a - Write a function that finds all the elements in a given array less than a given element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]
function lessThanGivenElement(input, element) {
    if (!input || input.length == 0 || !element) {
        return [];
    }

    var niz = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < element) {
            niz.push(input[i]);
        }
    }

    return niz;
}

var a = [2, 3, 8, -2, 11, 4];
console.log(lessThanGivenElement(a, 6));


// Exercise 5b - Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.
// Input: ['JavaScript', 'Programming', 'fun', 'product']
// Output: ['Programming', 'product']
function elementSubstring(input, substring = 'pro') {
    if (!input || input.length == 0 || !substring || substring.length == 0) {
        return [];
    }

    var substr = substring.toLowerCase();
    var niz = [];

    for (let i = 0; i < input.length; i++) {
        let substr2 = input[i].substring(0, 3);
        if (substr2.toLowerCase() == substr) {
            niz.push(input[i]);
        }
    }

    return niz;
}

var a = ['JavaScript', 'Programming', 'fun', 'product'];
console.log(elementSubstring(a, 'Pro'));


// Exercise 5c - Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.
function exercise5c(input, callback) {
    return callback(input, 6);
}

var a = [2, 3, 8, -2, 11, 4];
console.log(exercise5c(a, lessThanGivenElement));



// Exercise 6a - Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
var namirnice = [ {name: 'apples', price: 100}, {name: 'milk', price: 80}, {name: 'bananas', price: 150} ];


// Exercise 6b - Write a function that calculates the total price of your shopping list.
function totalPrice(input) {
    if (!input || input.length == 0) {
        return [];
    }

    var sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i].price;
    }

    return sum;
}

console.log(totalPrice(namirnice));


// Exercise 6c - Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
function averageProductPrice(input, callback) {
    var average = callback(input) / input.length

    return average.toFixed(3);
}

console.log(averageProductPrice(namirnice, totalPrice));


// Exercise 6d - Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.
var namirnice = [ {name: 'apples', price: 100}, {name: 'milk', price: 80}, {name: 'bananas', price: 150} ];

function mostExpensive(input) {
    var mostExpensive = input[0].name;
    var index = 0;
    for (i = 0; i < input.length; i++) {
        if (input[i].price > mostExpensive) {
            mostExpensive = input[i].price;
            index = i;
        }
    }

    return input[index].name;
}

console.log(mostExpensive(namirnice).toUpperCase());



// Exercise 7a - Write a function that checks if a given string is written in all capitals.
function allCapitals(input) {
    if (input.toUpperCase() == input) {
        return true;
    }
    return false;
}

console.log(allCapitals('Apple'));
console.log(allCapitals('GREAT'));


// Exercise 7b - Write a function that checks if a given string contains any digits.
function checkIfDigits(input) {
    return /\d/.test(input);
}

console.log(checkIfDigits('Apple'));
console.log(checkIfDigits('GREAT5'));


// Exercise 7b - Drugi nacin Vlada
function checkIsNumber(input = ''){
    for(var i = 0; i < input.length; i++){
        if(!isNaN(input[i])){
            return true;
        }
    }

    return false;
}

var a = 'JavaScript';
var b = 'java3';
var c = 'JAVA'
var rez = checkIsNumber(b);
console.log(rez);


// Exercise 7c - Write a function that checks if a given string is a valid hexadecimal color.
function isHex(num) {
    if (!num || num.length == 0 || num[0] != '#') {
        return false;
    }

    var a = num.substring(1, 7);
    // console.log(a);
        return /[0-9A-Fa-f]{6}/g.test(a);   // {6}g - da proveri sve karaktere
}

console.log(isHex('#e7bf4a5'));
console.log(isHex('#e7bf4a'));
console.log(isHex('#e7BC4a'));
console.log(isHex('#e7bG4a'));


// Exercise 7e - Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).



// Exercise 8 - Write a function that calculates a number of days to your birthday.
// Input: 25 February
// Output: 5 days
function daysToBirthday(input = "2023-09-30") {
    var birthday = new Date(input);
    var todayDate = new Date()
    var days = (birthday - todayDate) / 86400000;  // Razlika je u milisekundama
    return ~~days;  // Vraca integer, brise decimale
}
console.log(daysToBirthday());



// Exercise 9 - Write a function that for a given departure and arrival time calculates the time the trip takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds
function tripTime(dep, arr) {
    if (dep.length == 7) {
        dep = '0' + dep;
    }
    if (arr.length == 7) {
        arr = '0' + arr;
    }
    var depHours = +dep.substring(0, 2);
    var depMin = +dep.substring(3, 5);
    var depSec = +dep.substring(6);
    var arrHours = +arr.substring(0, 2);
    var arrMin = +arr.substring(3, 5);
    var arrSec = +arr.substring(6);

    var tripTime = (arrHours*60*60 + arrMin*60 + arrSec) - (depHours*60*60 + depMin*60 + depSec);
    var tripTimeHours = tripTime / 3600;
    var tripTimeMin = (tripTime % 3600) / 60;
    var tripTimeSec = (tripTime % 3600) % 60;

    return `${~~tripTimeHours}:${~~tripTimeMin}:${tripTimeSec}`;
}
var departure = "8:22:13"
var arrival = "11:43:22"

console.log(tripTime(departure, arrival));



// Exercise 10a - Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

// Exercise 10b - Write a function that calculates the distance between two points in the space.



// Exercise 11a - Write a function that generates a random integer value between 5 and 20.
function getRandomInt(max = 101) {
    return Math.floor(Math.random() * max);     // Random integer 0 - 100
  }

function randomRange(min, max) {
    var a = Math.floor(Math.random() * (max + 1));
    while (a < min) {
        a = Math.floor(Math.random() * (max + 1));
    } 
    return a;
}

console.log(randomRange(5, 20));


// Exercise 11b - Write a function that generates a random integer value between 50 and 100.
console.log(randomRange(50, 100));



// Exercise 11c - Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.
function randomRange(min, max) {
    var a = Math.floor(Math.random() * (max + 1));
    while (a < min) {
        a = Math.floor(Math.random() * (max + 1));
    } 
    return a;
}

function arrayRandomNumbers(n, callback) {
    var niz = [];
    for (let i = 0; i < n; i++) {
        var a = callback(0, 100);
        niz.push(a);
    }
    return niz
}

console.log(arrayRandomNumbers(7, randomRange));



// Exercise 12 - Write a function that shuffles the elements of a given array.
// Input: [3, 6, 11, 2, 9, 1]
// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)
function shuffle(array) {
    var newArray = [...array]
    var length = newArray.length
  
    for (let start = 0; start < length; start++) {
      var randomPosition = Math.floor((newArray.length - start) * Math.random())
      var randomItem = newArray.splice(randomPosition, 1)
  
      newArray.push(...randomItem)
    }
  
    return newArray
  }

  var niz = [3, 6, 11, 2, 9, 1];
  console.log(shuffle(niz));