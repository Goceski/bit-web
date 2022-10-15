// Vezba 1
var a = 3;
var b = 4;
var c = 5;
if( a + b <= c || a + c <= b || b + c <= a){
    console.log("Ovo nije trougao")
}   else if( a == b && a == c && b == c){
    console.log("Strane trougla su iste. Trougao je EQUILATERAL");
}   else if( a == b && a != c || a == c && a != b || b == c && b != a ){
    console.log("Dve strane su jednake. Trougao je ISOSCELES")
}   else{
    console.log("Sve tri strane su razlicite. Trougao je SCALENE")
}

// Vezba 2
var c = 7;
var d = 5;
console.log(c + d);
console.log(c - d);
console.log(c * d);
console.log(c / d);
console.log(c % d);

// Vezba 3
var test1poeni = 75;
if(test1poeni <= 100 && test1poeni >= 91){
    console.log("Ocena je A.");
}   else if(test1poeni <= 90 && test1poeni >= 81){
    console.log("Ocena je B.");
}   else if(test1poeni <= 80 && test1poeni >= 71){
    console.log("Ocena je C.");
}   else if(test1poeni <= 70 && test1poeni >= 61){
    console.log("Ocena je D.");
}   else if(test1poeni <= 60 && test1poeni >= 51){
    console.log("Ocena je E.");
}   else if(test1poeni >= 0 && test1poeni <= 50){
    console.log("Student has failed the exam.");
}   else{
    console.log("Nije validan test.")
}

// Vezba 4
var x = 5;
var y = "horse";
if(y == "sheep"){
    console.log(x + " " + y)
}   else if(y == "goose" && x == 1){
    console.log(x + " " + y);
}   else if(y == "goose"){
    console.log(x + " geese")
}   else if(x == 1){
    console.log(x + " " + y);
}   else{
    console.log(x + " " + y + "s");
}

// Vezba 5
///var age = prompt("Unesi koliko imaš godina");
var age1 = 15;
if(age1 >= 18){
    console.log("Mozeš da voziš")
}   else{
    console.log("Treba ti još " + (18 - age1) + " godina da bi mogao da voziš");
}

//Vezba 6
var age2 = 35;
if(age2 > age1){
    console.log("Stariji si od mene " + (age2 - age1) + " godina.");
}   else if(age2 < age1){
    console.log("Mladji si od mene " + (age1 - age2) + " godina.");
}   else{
    console.log("Iste smo uzrasti.");
}

//Vezba 7
var canineSpecie1 = "German Shepherd";
var canineSpecie2 = "American Bulldog";
var canineSpecie3 = "Akita";
var canineSpecie4 = "Foxhound";
var canineSpecie5 = "American Terrier";
var canine = "Akita";
if(canine == canineSpecie1 || canine == canineSpecie2 || canine == canineSpecie3 || canine == canineSpecie4 || canine == canineSpecie5){
    console.log("This is " + canine + " called Neo.")
}   else{
    console.log("This is a mixed breed.");
}