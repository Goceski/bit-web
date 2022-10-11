// Varijable
var a = 4;
var b = -10;
var c = 7;
var d = 25;
var e = 31;

// Vezba 1  Naci znaka '-'
if(a < 0){
    console.log(a + ' ima znak "-" ispred.');
}   else if(b < 0){
    console.log(b + ' ima znak "-" ispred.');
}   else if(c < 0){
    console.log(c + ' ima znak "-" ispred.');
}   else{
    console.log("Svi su pozitivni.");
}

// Vezba 2  Naci najveceg broja od 5 brojeva
a > b && a > c  && a > d && a > e ? console.log(a + " je najveci broj") : console.log(a + " nije najveci broj");
b > a && b > c  && b > d && b > e ? console.log(b + " je najveci broj") : console.log(b + " nije najveci broj");
c > a && c > b  && c > d && c > e ? console.log(c + " je najveci broj") : console.log(c + " nije najveci broj");
d > a && d > b  && d > c && d > e ? console.log(d + " je najveci broj") : console.log(d + " nije najveci broj");
e > a && e > b  && e > c && e > d ? console.log(e + " je najveci broj") : console.log(e + " nije najveci broj");

// Vezba 3  Poredjati 3 broja po velicini
if(a > b && a > c){
    if(b > c){
        console.log(a, b, c);
    }   else{
        console.log(a, c, b);
    }
}   else if(b > a && b > c){
    if(a > c){
        console.log(b, a, c);
    }   else{
        console.log(b, c, a);
    }
}   else if(c > a && c > b){
    if(a > b){
        console.log(c, a, b);
    }   else{
        console.log(c, b, a);
    }
}

// Vezba 4  Da li je 'number', ako jeste da li je deljiv sa 2
if(typeof(a) == 'number'){
    if(a % 2 == 0){
        console.log(a % 2 + " je ostatak pri deljenju sa 2");
    }   else{
        console.log("Nije deljiv sa 2");
    }
}   else{
    console.log("Nije 'number'");
}

// Vezba 5  Veci broj od dva
a > b ? console.log(a + ' je veci od ' + b) : console.log(b + ' je veci od ' + a);

// Vezba 6  Konverzija temperature
var tempC = 60;
var tempF = (9 * tempC / 5) + 32;
console.log(tempC + '°C je ' + tempF + '°F');

// Vezba 7  Razlika izmedju neki broj i 13
var nekiBroj = 5;
if(nekiBroj < 13){
    console.log('Razlika brojeva 13 i ' + nekiBroj + ' iznosi ' + (13 - nekiBroj));
}   else if(nekiBroj > 13){
    console.log('Razlika brojeva ' + nekiBroj + ' i 13 iznosi ' + (nekiBroj - 13));
}   else{
    console.log('Brojevi su jenaki');
}

// Vezba 8  
var broj1 = 3;
var broj2 = 5;
var broj3;
if(broj1 != broj2){
    broj3 = broj1 + broj2;
    console.log('Zbir brojeva iznosi ' + broj3);
}   else{
    broj3 = (broj1 + broj2) * 3;
    console.log(broj3);
}

// Vezba 9  Ima 50 ili im je zbir 50
var k = 50;
var l = 25;
k == 50 || l == 50 || k + l == 50 ? console.log('true') : console.log('nema 50');

// Vezba 10 U koji opseg pripada broj
var n = 401;
n < 20 ? console.log(n + ' je manji od 20') : false;
n => 20 && n < 100 ? console.log(n + ' je u opegu od 20 do 100') : false;
n => 100 && n <= 400 ? console.log(n + ' je u opegu od 100 do 400') : false;
n > 400 ? console.log(n + ' je veci od 400') : false;
