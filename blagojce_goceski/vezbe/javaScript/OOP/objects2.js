// Exercise 1 - Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
// {
// "product": "Milk",
// "quantity": 1,
// "price": 1.50
// }
var niz = [ 
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Juice", quantity: 2, price: 2.25 },
    { product: "Meat", quantity: 1, price: 4.75 }
    ];

function totalPrice(input) {
    if (!input || input.length == 0) {
        return 0;
    }

    let total = 0;
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]["price"]);
        total += input[i]["price"] * input[i]["quantity"];
    }
    return total;
}

console.log("Ukupna cena proizvoda iznosi:", totalPrice(niz));


// Exercise 2 - You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price. Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250}, …])
// The most expensive one is the diamond Ring.
var niz = [
    { name: "Diamond earings", price: 980 },
    { name: "Diamond ring", price: 1025 },
    { name: "Gold watch", price: 980 },
    ];

function mostExpensive (input) {
    let index = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i]["price"] > input[index]["price"]) {
            index = i;
        }
    }
    return console.log("The most expensive one is the", input[index]["name"]);
};

mostExpensive(niz);


// Exercise 3 - Given a word, create an object that stores the indexes of each letter in an array. Make sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes are stored in an array and those arrays are values.
// Examples:
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
function mapLetters(input) {
    var a = new Object();
    for (let i = 0; i < input.length; i++) {
        var key = input[i];
        var property = [];
        if (a[key]) {
            continue;
        }
        for (let j = 0; j < input.length; j++) {
            if (input[j] == key) {
                property.push(j);
            }
        }
        a[key] = property; 
    }
    return a;
};

console.log(mapLetters("dodo"));
console.log(mapLetters("froggy"));
console.log(mapLetters("grapes"));


// Exercise 4 - And who cursed the most in the fight between you and your spouse? Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most: If you, return "ME!" If your spouse, return "SPOUSE!" If a draw, return "DRAW!"
// Examples:
// determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 5, spouse: 0 }, { me: 0, spouse: 10 }]) ➞ "DRAW!"
// determineWhoCursedTheMost([{ me: 40, spouse: 5 }, { me: 9, spouse: 10 }, { me: 9, spouse: 10 }]) ➞ "ME!"
// determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 9, spouse: 44 }, { me: 10, spouse: 55 }]) ➞ "SPOUSE!"
var a = [{ me: 10, spouse: 5 }, { me: 5, spouse: 0 }, { me: 0, spouse: 10 }];
var b = [{ me: 40, spouse: 5 }, { me: 9, spouse: 10 }, { me: 9, spouse: 10 }];
var c = [{ me: 10, spouse: 5 }, { me: 9, spouse: 44 }, { me: 10, spouse: 55 }];

function determineWhoCursedTheMost(input) {
    if (!input || input.length == 0) {
        return '';
    }
    // console.log(input);
    var meScore = 0;
    var spouseScore = 0;
    for (let i = 0; i < input.length; i++) {
        // meScore += input[i]["me"]; MOZE I OVAKO
        meScore += input[i].me;
        // spouseScore += input[i]["spouse"]; MOZE I OVAKO
        spouseScore += input[i].spouse;
    }
    // console.log(meScore);
    // console.log(spouseScore);
    // if (meScore == spouseScore) {
    //     return console.log("DRAW!");
    // } else if (meScore < spouseScore) {
    //     return console.log("SPOUSE!");
    // } else {
    //     return console.log("ME!");
    // }

    if (meScore == spouseScore) {
        return "DRAW!";
    } else if (meScore < spouseScore) {
        return "SPOUSE!";
    } 
    return "ME!";
}

console.log(determineWhoCursedTheMost(a));
console.log(determineWhoCursedTheMost(b));
console.log(determineWhoCursedTheMost(c));


// Exercise 5 - Create a function that converts color in RGB format to Hex format.
// Examples:
// rgbToHex({red: 0, green: 128, blue: 192}) ➞ "#0080c0"
var a = {red: 0, green: 128, blue: 192};
var b = {red: 79, green: 113, blue: 12};
var c = {red: 220, green: 32, blue: 0};

function rgbToHex(input) {
    var hexR = input.red.toString(16);
    var hexG = input.green.toString(16);
    var hexB = input.blue.toString(16);
    if (hexR.length == 1) {
        hexR = '0' + hexR;
    }
    if (hexG.length == 1) {
        hexG = '0' + hexG;
    }
    if (hexB.length == 1) {
        hexB = '0' + hexB;
    }

    return console.log(`${input} : #${hexR}${hexG}${hexB}`);
}

rgbToHex(a);
rgbToHex(b);
rgbToHex(c);

// RGB to HEX - Varijanta 2
function checkColor(color = 0) {
    return color < 0 || color > 255
}
function rgbToHex(color = {}) {
    if (!color || checkColor(color.red) || checkColor(color.green) || checkColor(color.blue)) {
        return 'INVALID';
    }

    // padStart dodaje u stringu do zadatu duzinu
    var red = color.red.toString(16).padStart(2, '0');
    var green = color.green.toString(16).padStart(2, '0');
    var blue = color.blue.toString(16).padStart(2, '0');

    return `#${red}${green}${blue}`;
}

function hexToRGB(str = '') {
    if (!str || !str.startsWith('#') || str.length != 7) {
        return null;
    }

    var colorString = str.split('#')[1];
    var red = parseInt(colorString.substring(0, 2), 16);
    var green = parseInt(colorString.substring(2, 4), 16);
    var blue = parseInt(colorString.substring(4), 16);

    return {red, green, blue};
}

var hex = rgbToHex({red: 0, green: 128, blue: 192});
console.log(hex);
console.log(hexToRGB(hex));



// Exercise 6 - Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.
// COIN     VALUE
// Penny    0.01
// Nickel   0.05
// Dime     0.10
// Quarter  0.25
// Examples:
// makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
// makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
// makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }
function makeChange(input = 0) {
    if (input < 0) {
        return null;
    }

    var a = new Object();

    var q = input / 25;
    var qInt = Math.floor(q);
    
    var d = (input % 25) / 10;
    var dInt = Math.floor(d);
    
    var n = ((input % 25) % 10) / 5;
    var nInt = Math.floor(n);
    
    var p = (((input % 25) % 10) % 5);
    
    a["q"] = qInt;
    a["d"] = dInt;
    a["n"] = nInt;
    a["p"] = p;

    return a;
}

console.log(makeChange(47));
console.log(makeChange(24));
console.log(makeChange(92));


// Exercise 6 -  Drugi nacin
function makeChange(number) {
    var quarter = 0; //25
    var dime = 0; //10
    var nickel = 0; //5
    var penny = 0; //1
    var remainingChange = number;

    while (remainingChange >= 25) {
        remainingChange -= 25;
        quarter++;
    }
    while (remainingChange >= 10) {
        remainingChange -= 10;
        dime++;
    }
    while (remainingChange >= 5) {
        remainingChange -= 5;
        nickel++;
    }
    while (remainingChange > 0) {
        remainingChange -= 1;
        penny++;
    }

    var obj = {
        q: quarter,
        d: dime,
        n: nickel,
        p: penny
    }

    return obj;

}
console.log(makeChange(13));
console.log(makeChange(24));
console.log(makeChange(92));



// Exercise 7 - Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.
//    Examples:
//    [ { name: "John", notes: [3, 5, 4]} ] ➞ [ { name: "John", avgNote: 4 } ]
function rearange(input) {
    if (!input || input.length == 0) {
        return null;
    }

    var n = new Object();
    var niz = input[0]["notes"];
    // var niz = input[0].notes;    // Moze i ovako
    var sum = 0;
    var average;
    for (let i = 0; i < niz.length; i++) {
        sum += niz[i];
    }

    if (niz.length == 0) {
        average = 0;
    } else {
        average = parseFloat(sum / niz.length).toFixed(2);
    }
    n.name = input[0]["name"];
    // n.name = input[0].name;      // Moze i ovako
    n['avgNote'] = average
    return n;
}

var a = [{ name: "John", notes: [3, 5, 4]}];
var b = [{ name: "Hannah", notes: []}];

console.log(rearange(a));
console.log(rearange(b));


// Exercise 8 - Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.
// getBestStudent([{ name: ‘John’, grades: [100, 90, 80]}, {name: ‘Bob’, grades: [100, 70, 80]}…]) ➞ "John" // John's avg = 90 // Bob's avg = 83.33
function average(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return (sum / array.length);
}

function getBestStudent(input) {
    if (!input || input.length == 0) {
        return null;
    }

    var averageGrade = 0;
    var bestStudent = input[0]["name"];
    for (let i = 0; i < input.length; i++) {
        var x = average(input[i]["grades"]);
        if (x > averageGrade) {
            averageGrade = x;
            bestStudent = input[i]["name"];
        }
    }
    return bestStudent;
}

var a = [{ name: "John", grades: [100, 90, 80] }, { name: "Bob", grades: [100, 70, 80] }];

console.log("The best student is:", getBestStudent(a));
