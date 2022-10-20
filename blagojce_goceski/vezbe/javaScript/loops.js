// Vezba 3 Loops
var negatives = [2, -4, 5, -2, -11];

// while
console.log("Petlja 'while'");
var i = 0;
while (i < negatives.length){
    var element = negatives[i];
    if(element < 0){
        console.log("Negativan broj:", element);
    }
    i++;
}

// do-while
console.log("");
console.log("Petlja 'do-while'");
var y = 0;
do {
    var br = negatives[y];
    if (br < 0){
        console.log("Negativan broj:", br);
    }     
    y++;
}   while (y < negatives.length);


// for
console.log("");
console.log("Petlja 'for'");
for (var i = 0; i < negatives.length; i++){
    var elem = negatives[i];
    if(elem < 0){
        console.log("Negativan broj:", elem);
    }
}

// for-in
console.log("");
console.log("Petlja 'for-in'");
for(var key in negatives){     // key e pozicija na elementot 0 1 2 3 4
    var broj = negatives[key];
    if(broj < 0){
        console.log("Negativan broj:", broj);
    }
}