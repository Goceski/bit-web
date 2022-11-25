// FUNCTIONS 7

// Exercise 1 - Write a function named tellFortune that:
// ● takes 4 arguments: number of children, partner's name, geographic location, job title.
// ● outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids.";
// Call that function 3 times with 3 different values for the arguments.
function tellFortune (children, partner, location, job) {
    console.log("You will be in " + location + ", and married to " + partner + " with " + children + " kids.");
    console.log("Your job title would be: ", job);
}

tellFortune(3, 'Olivera', 'Sokobanja', 'arhitekta');


// Exercise 2 - Write a function named calculateDogAge that:
// ● takes 1 argument: your puppy's age.
// ● calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// ● outputs the result to the screen like so: "Your doggie is NN years old in dog years"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
function calculateDogAge(puppyAge, conversion = 7) {
    let x = puppyAge * conversion;
    console.log("Your doggie is " + x + " years old in dog years");
}

calculateDogAge(5);
calculateDogAge(5, 6);


// Exercise 3 - Write a function named calculateSupply that:
// ● takes 2 arguments: age, amount per day.
// ● calculates the amount consumed for rest of the life (based on a constant max age).
// ● outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
function calculateSupply(age, amount) {
    let zaokruzi = Math.floor(amount);
    console.log(zaokruzi);
    const maxAge = 75;
    let ostatakZivota = maxAge - age;
    let namirnice = ostatakZivota * 365 * zaokruzi;
    console.log("You will need " + namirnice + " to last you until the ripe old age of " + maxAge);
}

calculateSupply(37, 100);
calculateSupply(37, 50.45);


// Exercise 4 - Create a function called celsiusToFahrenheit:
// ● Store a celsius temperature into a variable.
// ● Convert it to fahrenheit and output "NN°C is NN°F."
//
// Create a function called fahrenheitToCelsius:
// ● Now store a fahrenheit temperature into a variable.
// ● Convert it to celsius and output "NN°F is NN°C.";
// *NN is actual temperature you need to convert

// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32
function celsiusToFahrenheit(input) {
    let a = input;
    let far = a * 1.8 + 32;
    console.log(a + "°C is " + far + "°F.")
}


celsiusToFahrenheit(35);

function fahrenheitToCelsius(input) {
    let a = input;
    let cel = ((a - 32) / 1.8).toFixed(2); // Zaokruzuje na 2 decimale
    console.log(a + "°F is " + cel + "°C.")
}

fahrenheitToCelsius(83);


// Exercise 5 - Create a function that validates a password to conform to the following rules:
// ● Length between 6 and 24 characters,
// ● At least one uppercase letter (A-Z).
// ● At least one lowercase letter (a-z).
// ● At least one digit (0-9).
// ● Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
// ● Supported special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
// ● Examples: validatePassword("P1zz@") ➞ false // Too short.
// ● validatePassword("iLoveYou") ➞ false // Missing a number.
// ● validatePassword("Fhg93@") ➞ true // OK!
function validatePassword(password) {

    if (password.length < 6) {
        console.log("Too short");
        return false;
    } 
    
    if (password.length > 24) {
        console.log("Too long");
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        console.log("Should contain at least one uppercase letter");
        return false;
    }

    if (!/[a-z]/.test(password)) {
        console.log("Should contain at least one lowercase letter");
        return false;
    }

    if (!/[0-9]/.test(password)) {
        console.log("Should contain at least one digit");
        return false;
    }

    for (let i = 2; i < password.length; i++) {
        if (password[i] == password[i-1] && password[i] == password[i-2]){
            console.log("Maximum of 2 repeated characters");
            return false;
        }
    }

// ● Supported special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
var specialChars = `! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .`;
var usesSpecial = false;
for (let i = 0; i < password.length; i++) {
    if (!isLetter(password[i]) && isNaN(password[i]) && !specialChars.includes(password[i])) {
        usesSpecial = true;
        break;
    }
}

return console.log("The password is correct");
}

validatePassword("AKHK0JDsfeegJGJKJ");

// Exercise 5 - Drugaciji nacin
// Check if contains a number
function checkIfContainsNumber(password) {
    for (let i = 0; i < password.length; i++) {
        let parsed = Number(password[i]);
        if(!isNaN(parsed)) {
            return true;
        }
    }
}



// Exercise 6 - Create a function that finds how many prime numbers there are, up to the given integer.
// Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
// primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
// primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

function isPrime(a) {
    for (i = 2; i <= a; i++) {
        if (a % i == 0) {
            return false; // Not prime number
        }
    }   
    return true;
}

function primeNumbers(input) {
    var broj = 0;
    var niz = [];
    for (j = 2; j <= input; j++) {
        if (isPrime(j)) {
            broj++;
            niz.push(j);
        }
    }

    return console.log(broj + ' // ' + niz);
}

primeNumbers(10);
primeNumbers(20);
primeNumbers(30);


//Exercise 6 - Efikasnije
function primeNumbers(num) {
    var result = [];
    for (var i = 2; i <= num; i++) {
        var notPrime = false;
        for (var j = 2; j <= i; j++) {
            if (i % j === 0 && i != j) {
                notPrime = true;
                break;
            }
        }

        if (!notPrime) {
            result.push(i);
        }
    }

    console.log(`There are ${result.length} prime numbers: ` + result);
}

primeNumbers(19);



// Exercise 7 - Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.
// Examples:
// diamondArrays(1) ➞ [1],
// diamondArrays(2) ➞ [1, 2, 2, 1]
// diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]
function diamondArrays(input) {
    let niz = [];

    for (let i = 1; i <= input; i++) {
        niz.push(input);
    }

    for (let j = input-1; j >= 1; j--) {
        for (let x = 1; x <= j; x++) {
            niz.push(j);
            niz.unshift(j);
        }
    }

    return niz;
}

console.log(diamondArrays(1));
console.log(diamondArrays(2));
console.log(diamondArrays(5));

// Exercise 7 - Drugi nacin slicno
function fillAray(result, i) {
    for (var j = 1; j <= i; j++) {
        result.push(i);
    }
}

function diamondArrays(num) {
    var result = [];
    for (var i = 1; i <= num; i++) {
        fillAray(result, i);
    }

    for (var i = num - 1; i >=1; i--) {
        fillAray(result,i);
    }

    return result;
}

console.log(diamondArrays(5));