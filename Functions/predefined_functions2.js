"use strict";

/*

1.

Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]

*/


function convertStringToNumber(arr) {

    var res = [];

    for (var i = 0; i < arr.length; i++) {

        if (isFinite(arr[i])) {
            res[res.length] = parseFloat(arr[i]);
        }
    }
    return res;
}

console.log(convertStringToNumber(["1", "21", undefined, "42", "1e+3", Infinity]));

/*

2.
Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
    Output: “015false-2247”
    
*/

function joinElements(arr) {

    var res = "";

    for (var i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) && !isNaN(arr[i]) && arr[i] !== null) {
            res += arr[i];
        }
    }
    return res;
}

console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*

3.

Write a program to filter out falsy values from the array.

Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]

*/

function filterFalsy(arr) {

    var res = [];

    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            res[res.length] = arr[i];
        }
    }

    return res;
}

console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*

4.

Write a program that calculates a number of integer values in the array.

Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3

*/

function countIntegers(arr) {

    var count = 0;

    for (var i = 0; i < arr.length; i++) {

        if (typeof arr[i] === "number" && isFinite(arr[i]) && (parseInt(arr[i]) === arr[i])) {
            count++;
        }
    }
    return count;
}

console.log(countIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

/*

5.

Write a program that calculates a number of float values in the array.

Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2

*/

function countFloats(arr) {

    var count = 0;

    for (var i = 0; i < arr.length; i++) {

        if (typeof arr[i] === "number" && isFinite(arr[i]) && (parseInt(arr[i]) !== arr[i])) {
            count++;
        }
    }
    return count;
}

console.log(countFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));



