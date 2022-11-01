// FUNCTIONS 4

// Exercise 1 - Write a program that checks if a given element e is in the array a.
function isInArray(n, niz) {
    for (var element in niz) {
        if (n == niz[element]) {
            console.log('Array contains input number');
            break;
        }
    }
}

var e = 3;
var a = [5, -4.2, 3, 7]
isInArray(e, a);


// Exercise 2 - Write a program that multiplies every positive element of a given array by 2.
function multiplyPositive(niz) {
    var niz2 = [];
    for (x = 0; x < niz.length; x++){
        var xArg = niz[x];
        if(xArg > 0){
            niz2.push(xArg*2);
        }   else {
            niz2.push(xArg);
        }
    }
    return niz2;
}

var b = [-3, 11, 5, 3.4, -8];
console.log(multiplyPositive(b));


// Exercise 3 - Write a program that finds the minimum of a given array and prints out its value and index
function MinimumOfArray(niz) {
    var najmanji = niz[0];
    var index = 0;
    for (i = 1; i < niz.length; i++){
        if (niz[i] < najmanji){
            najmanji = niz[i];
            index = i;
        }
    }
    console.log(niz);
    console.log("Najmanji element je", najmanji);
    console.log("Index najmanjeg elementa je", index);
}

var a = [4, 2, 2, -1, 6];
MinimumOfArray(a);


// Exercise 4 - Write a program that finds the second smallest number and prints out its value.
function SecondMinimumOfArray(niz) {
    var minimum = niz[0];
    var index = 0;
    for (i = 1; i < niz.length; i++){
        if (niz[i] < minimum){
            minimum = niz[i];
            index = i;
        }
    }
    var secondMinimum = niz[0];
    var index2 = 0;
    for (var j = 0; j < niz.length; j++) {
        if (niz[j] < secondMinimum && niz[j] > minimum) {
            secondMinimum = niz[j];
            index2 = j;
        }
    }
    console.log(niz);
    console.log("Najmanji element je", minimum);
    console.log("Index najmanjeg elementa je", index);
    console.log("Sledeci najmanji element je", secondMinimum);
    console.log("Index sledeceg najmanjeg elementa je", index2);
}

var inputArray = [4, 2, 2, -1, 6];
SecondMinimumOfArray(inputArray);


// Exercise 5 - Write a program that calculates the sum of positive elements in the array.
function sumOfPositives(niz) {
    var sumPositive = 0;
    for (i = 0; i < niz.length; i++){
        if (niz[i] > 0){
            sumPositive += niz[i];
        }
    }
    console.log(niz);
    console.log("Zbir pozitivnih elemenata iznosi:", sumPositive);
}

var niz5 = [3, 11, -5, -3, 2];
sumOfPositives(niz5);


// Exercise 6 - Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
function symmetricArray(niz) {
    var isSymmetric = false;
    var j = niz.length -1;
    for(var i = 0; i < niz.length; i++) {
        if (i == j) {
            break;
        }
        if (niz[i] == niz[j]) {
            isSymmetric = true;
        } else {
            isSymmetric = false;
            break;
        }
        j--;
    }
    console.log(niz);
    isSymmetric ? console.log("The array is symmetric") : console.log("The array is not symmetric");
}

var input = [2, 4, -2, 7, -2, 4, 2];
var input2 = [2, 4, 5, 7, -2, 4, 2];
symmetricArray(input);
symmetricArray(input2);


// Exercise 7 - Write a program that intertwines two arrays. You can assume the arrays are of the same length.
function intertwineTwoArrays(input1, input2) {
    var niz3 = [];
    console.log(input1);
    console.log(input2);
    for (x = 0; x < input1.length; x++){
        niz3.push(input1[x]);
        niz3.push(input2[x]);
    }
    console.log(niz3);
}

var niz1 = [4, 5, 6, 2];
var niz2 = [3, 8, 11, 9];
intertwineTwoArrays(niz1, niz2);


// Exercise 8 - Write a program that concatenates two arrays.
function concatenateTwoArrays(input1, input2) {
    console.log(input1);
    console.log(input2);
    var niz3 = input1;
    for (x = 0; x < input2.length; x++){
        niz3.push(input2[x]);
    }
    console.log(niz3);
}

var niz1 = [4, 5, 6, 2];
var niz2 = [3, 8, 11, 9];
concatenateTwoArrays(niz1, niz2);


// Exercise 9 - Write a program that deletes a given element e from the array a.
function deleteElement(b, input) {
    var result = [];
    for(var i = 0; i < input.length; i++) {
        if (input[i] != e) {
            result.push(input[i])
        }
    }
    console.log(input);
    console.log(result);
}

var e = 2;
var niz9 = [4, 6, 2, 8, 2, 2];
deleteElement(e, niz9);


// Exercise 10 - Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
function insertElementPositionArray(element, position, input) {
    console.log(input);
    if (position > input.length-1) {
        console.log("Greska.");
    }   else {
        for (i = input.length-1; i >= position; i--){
            input[i+1] = input[i];
        }
        input[position] = element;    
    }
    console.log(input);
}

function insertElementPositionArrayShort(element2, position2, input2) {
    console.log(input2);
    input2.splice(position2, 0, element2)
    console.log(input2);
}

var e = 78;
var pos = 3;
var niz = [2, -2, 33, 12, 5, 8];
insertElementPositionArray(e, pos, niz);

var e2 = 55;
var pos2 = 4;
var niz2 = [4, -2, 12, 12, 7, 11];
insertElementPositionArrayShort(e2, pos2, niz2);