// Functions 6

// Exercise 1 - Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.
function countVowels(input) {
    let vowelsNumber = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'a' || input[i] == 'A' || input[i] == 'e' || input[i] == 'E' || input[i] == 'i' || input[i] == 'I' || input[i] == 'o' || input[i] == 'O' || input[i] == 'u' || input[i] == 'U') {
            vowelsNumber++
        } 
    }
    return vowelsNumber;
}

console.log(countVowels('Provera'));
console.log(countVowels('Da li radi?'));


// Exercise 2 - Write a function that combines two arrays by alternatingly taking elements.
function combinesTwoArrays(input1, input2) {
    niz = [];
    for (let i = 0; i < input1.length; i++) {
        niz.push(input1[i]);
        niz.push(input2[i]);
    } 
    return niz;
}

var niz1 = ['a', 'b', 'c'];
var niz2 = [1, 2, 3];
console.log(combinesTwoArrays(niz1, niz2));


//Exercise 3 - Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
function rotateElements(input, k) {
    for (let i = 0; i < k; i++) {
        let element = input[0];
        input.shift(0);
        input.push(element);
    }
    return input;
}

var niz3 = [1, 2, 3, 4, 5, 6];
console.log(rotateElements(niz3, 4));


// Exercise 4 - Write a function that takes a number and returns array of its digits.
function arrayOfDigits(input) {
    let niz = [];
    let a = '' + input
    for (let i = 0; i < a.length; i++) {
        niz.push(a[i]);
    }
    return niz;
}

console.log(arrayOfDigits(1234));
console.log(arrayOfDigits(74658));
console.log(arrayOfDigits(1));


// Exercise 5 - Write a program that prints a multiplication table for numbers up to 12.
function multiplicationTable(input) {
        for (let i = 1; i <= input; i++) {
        let red = '';
        for (let j = 1; j <= input; j++) {
            red += j * i + ' ';
        }
        console.log(red);
    }
}

console.log(multiplicationTable(12));


// Exercise 6 - Write a function to input temperature in Centigrade and convert to Fahrenheit.
// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
function centigradeToFahrenheit(input) {
    let a = input * 1.8 + 32;
    return a;
}

console.log(centigradeToFahrenheit(45));
console.log(centigradeToFahrenheit(21));
console.log(centigradeToFahrenheit(0));


// Exercise 7 - Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
function maxElementInArray(input) {
    let maximum = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] != NaN && input[i] != undefined && input[i] != Infinity && input[i] > maximum) {
            maximum = input[i];
        }
    }
    return maximum;
}

var a = [1, 15, -25, 0, NaN, undefined, Infinity, 10];
console.log(maxElementInArray(a));


// Exercise 8 - Write a function to find the maximum and minimum elements. Function returns an array.
function maxMinimumElementsInArray(input) {
    let maximum = input[0];
    let minimum = input[0];
    a = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > maximum) {
            maximum = input[i];
        } else if (input[i] < minimum) {
            minimum = input[i];
        }
    }
    a.push(minimum);
    a.push(maximum);
    return a
}

var n = [1, 15, -25, 0, 32, -10, 10];
console.log(maxMinimumElementsInArray(n));


// Exercise 9 - Write a function to find the median element of array. The median of a array of size N is defined as the middle element when N is odd and average of middle two elements when N is even.
function medianElement(input) {
    let medianElm;
    if (input.length % 2 == 0) {
        let x = input.length / 2;
        medianElm = (input[x-1] + input[x]) / 2;
        return medianElm;
    } else {
        let y = parseInt(input.length / 2);
        medianElm = input[y];
        return medianElm;
    }
}

var n = [1, 15, -25, 7, 32, -10, 10];
console.log(medianElement(n));


// Exercise 10 - Write a function to find the element that occurs most frequently.
function mostFrequently(input) {
    var mf = 1;
    var m = 0;
    var item;
    for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                    if (input[i] == input[j]) {
                        m++;
                    }
                    if (mf < m) {
                      mf = m; 
                      item = input[i];
                    }
            }
            m = 0;
    }
    return console.log(item + " - " + mf + " times") ;
}
  
mostFrequently(['pear', 'apple', 'orange', 'apple']) // apple
mostFrequently([1, 2, 2, 3, 4, 4, 4, 5, 6, 7, 5, 3]) // 4


// Exercise 11 - Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.
function firstMiddleLast(input) {
    if (input.length == 0) {
        return console.log(input);
    } else if (input.length % 2 == 0) {
        return (
            console.log('First elemet - ' + input[0] + '\nLast element - ' + input[input.length-1])
        )
    } else {
        return (
            console.log('First elemet - ' + input[0] + '\nMiddle element - ' + input[parseInt(input.length/2)] + '\nLast element - ' + input[input.length-1])
        )
    }
}

firstMiddleLast(['pear', 'apple', 'orange', 'apple'])
firstMiddleLast([1, 2, 2, 3, 4, 5, 3])
firstMiddleLast([])


// Exercise 12 - Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
function average() {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    let n = arguments.length;
    return (sum / n);
  }

console.log(average(1, 2, 3, 4));
console.log(average(3, 5, 8, 14, 20));


// Exercise 13 - Write a function to find all the numbers greater than the average.
function average() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    let n = arguments.length;
    console.log('Prosek : ', sum/n);
    return (sum / n);
  }

  function greaterThanAverage() {
    let a = average(...arguments);
    for (let j = 0; j < arguments.length; j++) {
        if (arguments[j] > a) {
            console.log(arguments[j]);
        }
      }
    }

greaterThanAverage(1, 2, 3, 4, 7, 10);


// Exercise 14 - The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// ● Starvation: less than 15
// ● Anorexic: less than 17.5
// ● Underweight: less than 18.5
// ● Ideal: greater than or equal to 18.5 but less than 25
// ● Overweight: greater than or equal to 25 but less than 30
// ● Obese: greater than or equal to 30 but less than 40
// ● Morbidly obese: greater than or equal to 40
function massIndex(weight, height) {
    let bmi = weight / (height/100)**2;
    console.log('Tezina : ' + weight + 'kg - ' + 'Visina : ' + height + 'cm - ' + 'BMI :' + bmi);
    if (bmi < 15) {
        console.log('● Starvation: less than 15');
    } else if (bmi >= 15 && bmi < 17.5) {
        console.log('● Anorexic: less than 17.5');
    } else if (bmi >= 17.5 && bmi < 18.5) {
        console.log('● Underweight: less than 18.5');
    } else if (bmi >= 18.5 && bmi < 25) {
        console.log('Ideal: greater than or equal to 18.5 but less than 25');
    } else if (bmi >= 25 && bmi < 30) {
        console.log('● Overweight: greater than or equal to 25 but less than 30');
    } else if (bmi >= 30 && bmi < 40) {
        console.log('● Obese: greater than or equal to 30 but less than 40');
    } else {
        console.log('● Morbidly obese: greater than or equal to 40');
    }
}

massIndex(85, 188);


// Exercise 15 - Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
// For example the list ["Hello", "World", "in", "a", "frame"] gets
// printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
function printListOfStrings (input) {
    // Trazi najduzi string
    let maxLengthElem = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].length > maxLengthElem) {
            maxLengthElem = input[i].length;
        }
    }
    console.log('Najduzi string u nizu: ' + maxLengthElem);

    // Stampa prve zvezdice
    let zvezdice = ''
    for (let j = 0; j < maxLengthElem + 4; j++) {
        zvezdice += '*'
    }
    console.log(zvezdice);

    // Stampa elemente niza
    for (let m = 0; m < input.length; m++) {
        let brojPraznihMesta = maxLengthElem - input[m].length;
        let praznaMesta = '';
        for (let p = 0; p < brojPraznihMesta; p++) {
            praznaMesta += ' ';
        }
        console.log('* ' + input[m] + praznaMesta + ' *');
    }

    // Stampa zadnji red
    console.log(zvezdice);
}

var niz = ["Hello", "World", "in", "a", "frames", "abrakadabra"];
printListOfStrings(niz);
