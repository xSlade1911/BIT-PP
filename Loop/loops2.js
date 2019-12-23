/*

Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no

*/


var e = 3;
var a = [5, -4.2, 4, 3];
var i = 0;
var printOnScreen = "no";

while (a[i] !== e && i < a.length - 1) {
    i++;
}

if (a[i] === e) {
    printOnScreen = "yes";
}

console.log(printOnScreen);

/* 

Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] 

*/


var inputArray = [-3, 11, 5, 3.4, -8];
var outputArray = [];

for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
        outputArray[i] = 2 * inputArray[i];
    } else {
        outputArray[i] = inputArray[i];
    }
}

console.log(outputArray);

/*

Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3

*/

var minimumValue = 0;
var minimumIndex = 0;
var minimumFound = false;
var inputArray = [4, 2, -7, -1, -3];
var i = 0;
var j = 1;

while (minimumFound === false) {

    while (inputArray[i] <= inputArray[j] && j < inputArray.length - 1) {
        j++;
    }

    if (inputArray[i] <= inputArray[j]) {

        minimumValue = inputArray[i];
        minimumIndex = i;
        minimumFound = true;
    }

    else {
        j = 0;
        i++;
    }
}

console.log([minimumValue, minimumIndex]);


var inputArray = [-10, -13, -7, -1, -9];

var minimumValue = inputArray[0];
var minimumIndex = 0;


for (var i = 1; i < inputArray.length; i++) {

    if (inputArray[i] < minimumValue) {
        minimumValue = inputArray[i];
        minimumIndex = i;
    }

}

console.log(minimumValue, minimumIndex);

/*
Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var a = [4, 2, 2, -1, -1];

var min = a[0];

var min2 = a[0];

for (var i = 0; i< a.length; i++) {
    if(a[i] < min) {
        min2 = min;
        min = a[i];
    }
}

console.log(min2);



var firstElementLargerThanMinimum = 0;

var inputArray = [4, 2, 2, -1, -1];

var inputSecondArray = [];
var l = 0;

var minimumValue = inputArray[0];


for (var i = 1; i < inputArray.length; i++) {

    if (inputArray[i] < minimumValue) {
        minimumValue = inputArray[i];
    }
}

for (var j = 0; j < inputArray.length; j++) {

    if (inputArray[j] !== minimumValue) {
        inputSecondArray[l] = inputArray[j];
        l++;
    }
}

firstElementLargerThanMinimum = inputSecondArray[0];

for (var k = 1; k < inputSecondArray.length; k++) {

    if (inputSecondArray[k] < firstElementLargerThanMinimum) {
        firstElementLargerThanMinimum = inputSecondArray[k];
    }
}

console.log(firstElementLargerThanMinimum);

/* 

Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

var inputArray = [2, -11, 5, -3, 0];

var sum = 0;

var message = "";

for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
        sum += inputArray[i];
    }
}
if (sum === 0) {
    sum = "There is no positive elements in the array.";
}

console.log(sum);

/*

Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the 
left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.
*/

var inputArray = [2, 4, -2, 7, -2, 4, 2];

var outputMessage = "The array isn't symmetric.";

var i = 0;

while (inputArray[i] === inputArray[inputArray.length - 1 - i] && i < 0.5 * inputArray.length) {
        i++;
}

if (i >= 0.5 * inputArray.length) {
    outputMessage = "The array is symmetric."
}

console.log(outputMessage);

/*

Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]

*/

var inputArrayOne = [4, 5, 6, 2];

var inputArrayTwo = [3, 8, 11, 9];

var outputArray = [];

for (var i = 0; i < inputArrayOne.length; i++) {

    outputArray[2*i] = inputArrayOne[i];
    outputArray[2*i+1] = inputArrayTwo[i];
  
}

console.log(outputArray);

/*

Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]

*/

var inputArrayOne = [4, 5, 6, 2];

var inputArrayTwo = [3, 8, 11, 9];

var outputArray = [];

for (var i = 0; i < inputArrayOne.length; i++) {

    outputArray[i] = inputArrayOne[i];
    outputArray[i+inputArrayOne.length] = inputArrayTwo[i];
  
}

console.log(outputArray);

/*

Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]

*/

var e = 2;

var inputArray = [4, 6, 2, 8, 2, 2];

var outputArray = [];

var j = 0;

for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== e) {
        outputArray[j] = inputArray[i];
        j++;
    }
}

console.log(outputArray);

/*

Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than 
the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]

*/

var inputArray = [2, -2, 33, 12, 5, 8];

var e = 78;

var p = 3;

var outputArray = [];


if (p > inputArray.length || p < 0) {
    outputArray = "Error";
}

else {
    
for (var i = 0; i <= inputArray.length ; i++) {

        if (i < p) {
            
            outputArray[i] = inputArray[i];
        }

        else if (i === p) {

            outputArray[i] = e;
        }

        else {

            outputArray[i] = inputArray[i-1];
        }

}

}

console.log(outputArray);





