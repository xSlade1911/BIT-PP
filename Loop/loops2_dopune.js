/* 1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes */

var a = [5, -4.2, 3, 7];
var e = 3;

for (i = 0; i < a.length; i++) {
    if (e === i) {
        console.log('yes');
    }
}

/* 2.Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

var array = [-3, 11, 5, 3.4, -8];


for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        array[i] = array[i] * 2

    }
}
console.log(array);



/* 3. Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var array = [4, 2, 2, -1, 6];
var min = array[0];
var index = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
        index = i;
    }

}
console.log(min + ',' + index);
/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var array = [4, 2, 2, -1, 6];
var min = array[0];
var prevmin = array[0];

for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
        prevmin = min
        min = array[i];


    }
}
console.log(prevmin);

/* 5. write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/


var array = [3, 11, -5, -3, 2];
var result = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result = array[i] + result;
    }
}

console.log(result);

/** 5. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. */




/* 9. Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

/*var a = [4, 6, 2, 8, 2, 2];
var e = 2;

for (i = 0; i < a.length; i++) {
    if (a[i] === e) {
        delete a[i];
    }
}
console.log(a);*/

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var output = [];

for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        output[output.length] = a[i];
    }
}

console.log(output);

/* 10Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */


var e = 78;

var p = 3;

var a = [2, -2, 33, 12, 5, 8];

var output = [];

for (var i = 0; i < a.length; i++) {
    if (i === p) {
        output[output.length] = e;
    }

    output[output.length] = a[i];
}

console.log(output);

// Stampaj broj zvezdica u jednom redu srazmeran size-u
var row = "";
var size = 3;
var result = '';



for (var i = 0; i < size; i++) {
    row += '*';
    result = result + row + '\n';

}

console.log(result);

// Domaci zadatak

var row = "";
var size = 4;

for (var i = 0; i < size; i++) {
    row += '*';
}

for (var i = 0; i < size ; i++) {
    if (i === 0 || i === size - 1) {
        console.log(row);
    } else {
        console.log("----");
    }

}



