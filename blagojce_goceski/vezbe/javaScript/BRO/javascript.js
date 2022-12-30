// 1
// function alertMessage() {
//     var welcomeMessage = "Hello World!";
//     alert("Hello!");
//     return console.log(welcomeMessage);
// }
// alertMessage();


// 2
// function nav() {
//     console.log(navigator.appVersion);
//     console.log(navigator.platform);
//     console.log(navigator.appName);
// }
// nav();


// 3
// function isBrowserOnline() {
//     navigator.onLine ? console.log('onLine') : console.log('offLine');
// }
// isBrowserOnline();


// 4
// function screenSize() {
//     console.log("Sirina: " + screen.width + ' ' + "Visina: " + screen.height);
//     console.log("innerWidth: ", window.innerWidth);
//     console.log("innerHeight: ", window.innerHeight);
//     console.log("outerWidth: ", window.outerWidth);
//     console.log("outerHeight: ", window.outerHeight);
//     console.log("clientWidth: ", document.documentElement.clientWidth);
//     console.log("clientHeight: ", document.documentElement.clientHeight);
// }
// screenSize();


// 5
function lokacija() {
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.pathname);
}
lokacija();

// function reloadPage() {
//     location.reload();
// }
// reloadPage();

// function goToPage() {
//     location.assign('https://getbootstrap.com/docs/5.2/utilities/spacing/#margin-and-padding');
// }
// goToPage();

// 6
// function storageVezba() {
//     localStorage.setItem('name', 'Blaza');
//     sessionStorage.setItem('broj', 25);
//     console.log(localStorage['name']);
//     console.log(sessionStorage['broj']);
//     console.log(localStorage);
//     console.log(sessionStorage);
//     localStorage.clear();
//     sessionStorage.clear();
//     console.log(localStorage);
//     console.log(sessionStorage);
// }
// storageVezba();


// 7
// console.log(window.history.length);
// history.go(-2);


// 8 Window Methods
// function greeting() {
//     var name = prompt('Kako se zoves?');
//     alert(`Zdravo ${name}`);
//     if (confirm("We adadawill submit this answer now! ")) {
//         alert("Success");
//     }
// }

// greeting();


// 9 Global JavaScript Objects
// MATH
// Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.
function randomRange(min = 1, max = 50) {
    var niz = [];
    for (let i = 0; i < 10; i++) {
        var a = Math.random() * (max - min) + min;
        niz.push(a);
    }
    // console.log(niz);
    return niz;
}
var x = randomRange();
console.log(x);

// Round
// Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
// Print out the modified array in the console.
// Use the first function for generating the input array.
function roundTwoDecimals(input) {
    var b = [];
    for (let  i = 0; i < input.length; i++) {
        b.push(+input[i].toFixed(2));
    }
    // console.log(b);
    return b;
}
var y = roundTwoDecimals(x);
console.log(y);

// Floor
// Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
// Print out the modified array in the console.
// Use the first function for generating the input array.
function roundToInteger(input) {
    var c = [];
    for (let  i = 0; i < input.length; i++) {
        c.push(Math.round(input[i]));
    }
    // console.log(c);
    return c;
}
var z = roundToInteger(x);
console.log(z);

// Max
// Create a function that finds and prints out the biggest element in the passed array of numbers.
function maxElement(input) {
    var najveci = input[0];
    for (let  i = 0; i < input.length; i++) {
        if (input[i] > najveci) {
            najveci = input[i];
        }
    }
    // console.log(najveci);
    return najveci;
}
console.log(maxElement(z));


// DATE
// Print out the whole date object in the console.
// Print out the current time in the console.
// Print out the current date in the console.
function vreme() {
    var a = new Date();
    console.log(a);
    var h = a.getHours();
    var m = a.getMinutes();
    console.log(`Sada je ${h}:${m} h`);

    var y = a.getFullYear();

    // var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // var mo = month[a.getMonth()];

    const mesec = a.toLocaleString('default', { month: 'long' });
    // console.log(mesec);

    var d = a.getDate();

    console.log(`Datum:\n ${d}. ${mesec} ${y}.`);
}
vreme();

