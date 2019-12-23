/*
1.

Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]

*/

function convertStrToNum(arr) {

    var output = [];

    for (var i = 0; i < arr.length; i++) {
        if (isFinite(arr[i])) {
            output[output.length] = parseFloat(arr[i]);
        }

    }

    return output;
}

console.log(convertStrToNum(["1", "21", undefined, "42", "1e+3", Infinity]));

/*

2.

Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”

*/

function joinElements(inputArray) {

    var output = "";

    for (var i = 0; i < inputArray.length; i++) {

        if (isFinite(inputArray[i]) && inputArray[i] !== null) {

            output += inputArray[i];

        }

    }

    return output;

}

console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*

3.

Write a program to filter out falsy values from the array.

Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]

*/

function filterOutFalsyElements(inputArray) {

    var output = [];

    for (var i = 0; i < inputArray.length; i++) {

        if (inputArray[i] !== '' && inputArray[i] !== false && inputArray[i] !== null && inputArray[i] !== undefined && inputArray[i] !== 0 && isNaN(inputArray[i]) === false) {

            output[output.length] = inputArray[i];

        }

    }

    return output;

}

console.log(filterOutFalsyElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*

4.

Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3

*/


function countIntegers(arr) {

    var count = 0;

    for (var i = 0; i < arr.length; i++) {

        if ((typeof (arr[i]) !== "number") || isNaN(arr[i]) || !isFinite(arr[i])) {
            continue;
        }

        if (parseInt(arr[i]) !== arr[i]) {
            continue;
        }

        count++;
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

        if ((typeof (arr[i]) !== "number") || isNaN(arr[i]) || !isFinite(arr[i])) {
            continue;
        }

        if (parseInt(arr[i]) === arr[i]) {
            continue;
        }

        count++;
    }

    return count;

}

console.log(countFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));


