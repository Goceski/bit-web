// FUNCTIONS 5

// Exercise 1 - Find the min and max element in the following array and switch their places. Print out the modified array in the console.
function findMinMaxArray(input) {
    console.log(input);
    var minimum = input[0];
    var indexMin = 0;
    var maximum = input[0];
    var indexMax = 0;
    for (i = 1; i < input.length; i++){
        if (input[i] < minimum){
            minimum = input[i];
            indexMin = i;
        }
    }
    for (j = 1; j < input.length; j++){
        if (input[j] > maximum){
            maximum = input[j];
            indexMax = j;
        }
    }
    var c = minimum;
    var indexC = indexMin;
    input[indexMin] = maximum;
    input[indexMax] = c;
    console.log(input);
}

var niz = [ 3, 500, 12, 149, 53, 414, 1, 19 ];
findMinMaxArray(niz);


// Exercise 2 - Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
function dividingAdding(input) {
    console.log(input);
    for (i = 0; i < input.length; i++) {
        input[i] = input[i] / 2 + 5;
        if (input[i] == 0) {
            input[i] = 20;
        }
    }
    console.log(input);
}

var niz2 = [ 3, 500, -10, 149, 53, 414, 1, 19 ];
dividingAdding(niz2);


// Exercise 3 - Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display student's names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
function grades(n) {
    var ocena;
    if(n >= 0 && n < 51) {
        ocena = 'and failed to complete the exam.';
    } else if(n >= 51 && n < 61) {
        ocena = 'and earned 6.';
    } else if(n >= 61 && n < 71) {
        ocena = 'and earned 7.';
    } else if (n >= 71 && n < 81) {
        ocena = 'and earned 8.';
    } else if (n >= 81 && n < 91) {
        ocena = 'and earned 9.';
    } else if(n >= 91 && n <= 100) {
        ocena = 'and earned 10.';
    } else {
        ocena = 'Uneti broj mora da bude izmedju 0 i 100'
    }
    return ocena;
}

function studentsGrades(inputStudents, inputGrades) {
    for (i = 0; i < inputStudents.length; i++) {
        console.log(inputStudents[i] + ' acquired ' + inputGrades[i] + ' points', grades(inputGrades[i]));
    }
}

var students = [ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var points = [ 50, 39, 63, 72, 99, 51, 83, 59 ];
studentsGrades(students, points);


// Exercise 4 - Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input - [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output - [ 15, 13, 12, 11, 8, 6, 5, 1 ]



var niz = [ 13, 11, 15, 5, 6, 1, 8, 12 ];


// Exercise 5 - 















