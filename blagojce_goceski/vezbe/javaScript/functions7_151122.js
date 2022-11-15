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


// Exercise 5 - 