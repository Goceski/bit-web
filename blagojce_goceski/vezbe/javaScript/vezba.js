// var a = 4;
// var proba = 'Sta cemo sad?'
// var c = false;
// console.log(a);
// console.log(proba);
// console.log(c)

console.log(3-2-31);
console.log(3*5-7/3);
console.log(4/2-1.14*3);


var bananaQuantity = 1.2 // u kilogramima
console.log("\nIma " + bananaQuantity*1000 + "g" + " banana");

var AnnaIsLateMin = 5;
console.log("\nCekamo Anu " + AnnaIsLateMin*60 + " sekundi.\n");

var name = "Blaza";
var age = 40;
var haveACat = false;
console.log(name, typeof(name));
console.log(age, typeof(age));
console.log(haveACat, typeof(haveACat));
console.log("\n");
console.log(typeof("number"));  // string
console.log(typeof(true));      // boolean
console.log(typeof(null));      // object
console.log(typeof("false"));   // string
console.log(typeof(56));        // number
console.log("\n");
console.log(age < 0);
console.log(age > 120);

var speed = 80;
if (speed > 60 && speed < 120){
    console.log("\nVasa brzina je " + speed);
    console.log("Vozite u granicama normale");
} else{
    console.log("\nVasa brzina je " + speed);
    console.log("Prilagodite brzinu");
}

// Octal number
var c = 0256;
console.log(typeof(c));
console.log(c);

// Hexadecimal number
var d = 0xE5;
console.log(typeof(d));
console.log(d);

console.log("\n");  // Prazan red

var g; console.log(typeof(g));  // undefined
var s = '1s'; console.log(s++); // NaN
console.log(!!"false")          // true posto string
console.log(undefined);         // undefined
console.log(!undefined);        // true
console.log(!!undefined);       // false
console.log(typeof(-Infinity)); // number
console.log(10 % "0");          // NaN
console.log(undefined == null); // true
console.log(false === "");      // false
console.log(typeof("2E+2"));    // string
var j = 3e+3; j++; console.log(j);  // 3001