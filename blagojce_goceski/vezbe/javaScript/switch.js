// Vezba 1 & 2
var a = 5;
var result = "";
switch(a){
    case 1:
        result = "Ponedeljak";
        break;
    case 2:
        result = "utorak";
        break;
    case 3:
        result = "Sreda";
        break
    case 4:
        result = "Cetvrtak";
        break;
    case 5:
        result = "Petak";
        break
    case 6:
        result = "Subota";
        break
    case 7:
        result = "Nedelja";
        break
    default:
        result = "Uneti broj mora da bude izmedju 1 i 7";
        break;
}
console.log(result);

// Vezba 3
var result2 = "";
switch(a){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result2 = "Radni dan.";
        break;
    case 6:
    case 7:
        result2 = "Vikend."
        break;
    default:
        result2 = "Uneti broj mora da bude izmedju 1 i 7";
        break;  
}

if(a >= 1 && a <=7){
    console.log("Danas je " + result + ". " + result2);
}else{
    console.log("Uneti broj mora da bude izmedju 1 i 7");
}

// Vezba 4
var b = 9;
var month = "";
switch(b){
    case 1:
        month = "Januar";
        break;
    case 2:
        month = "Februar";
        break;
    case 3:
        month = "Mart";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "Maj";
        break;
    case 6:
        month = "Jun";
        break;
    case 7:
        month = "Jul";
        break;
    case 8:
        month = "Avgust";
        break;
    case 9:
        month = "Septembar";
        break;
    case 10:
        month = "Oktobar";
        break;
    case 11:
        month = "Novembar";
        break;
    case 12:
        month = "Decembar";
        break;
    default:
        month = "Uneti broj mora da bude izmedju 1 i 12";
        break;
}
console.log(month);

// Vezba 5
var godisnjeDoba = "";
switch(b){
    case 3:
    case 4:
    case 5:
        godisnjeDoba = "Prolece.";
        break;
    case 6:
    case 7:
    case 8:
        godisnjeDoba = "Leto.";
        break;
    case 9:
    case 10:
    case 11:
        godisnjeDoba = "Jesen.";
        break;
    case 12:
    case 1:
    case 2:
        godisnjeDoba = "Zima.";
        break;
    default:
        month = "Uneti broj mora da bude izmedju 1 i 12";
        break;
}

if(b >= 1 && b <=12){
    console.log(month + " mesec." + godisnjeDoba);
}else{
    console.log("Uneti broj mora da bude izmedju 1 i 12");
}

// Vezba 6
var ocena = "A";
var opisOcene = "";
switch(ocena){
    case "A":
        opisOcene = "Good job.";
        break;
    case "B":
        opisOcene = "Pretty good.";
        break;
    case "C":
        opisOcene = "Passed.";
        break;
    case "D":
        opisOcene = "Not so good.";
        break;
    case "E":
        opisOcene = "Bad.";
        break;
    case "F":
        opisOcene = "Failed.";
        break;
    default:
        opisOcene = "Unknown grade."
        break;
}
console.log(ocena + " - " + opisOcene);

// Vezba 7
var grad = "Beograd";
var drzava = "";
switch(grad){
    case "Beograd": 
    case "Novi sad":
    case "Sokobanja":
    case "Nis":
    case "Aleksinac":
        drzava = "Srbija";
        break;
    case "Pariz":
    case "Lion":
    case "Marsej":
    case "Nica":
        drzava = "Francuska";
        break;
    case "Bon":
    case "Berlin":
    case "Minhen":
        drzava = "Nemacka";
        break;
    case "Bec":
    case "Salcburg":
        drzava = "Austrija"
        break;
    case "Skoplje":
        drzava = "Makedonija";
        break;
    default:
        drzava = "Odaberite drugi grad."
        break;
}
console.log(grad + ". " + drzava + ".");

//Vezba 8
var x = 15;
var y = 0;
var operacija = "/";
var proracun;
switch(operacija){
    case "+":
        proracun = x + y;
        break;
    case "-":
        proracun = x - y;
        break;
    case "*":
        proracun = x * y;
        break;
    case "/":
        if(y == 0){
            console.log("Nije dozvoljeno delenje sa nulom.")
        }   else{
            proracun = x / y;
        }
        break;
    default:
        proracun = "Greska."
        break;
}
console.log(proracun);