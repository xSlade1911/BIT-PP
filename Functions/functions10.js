
"use strict";

/*

1.

Write IIFE that replaces the first and the last element of the given array and prints out its elements.
	Input array: [4, 5, 11, 9]
    Output array: [ 9, 5, 11, 4]

    */


var res = (
    function (arr) {

        var inter = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = inter;

        return arr;

    }
)([4, 5, 11, 9]);

console.log(res);

/*

function funk(arr) {

    var inter = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = inter;

    console.log(arr);

}

console.log(funk([4, 5, 11, 9]));

*/

/*

2.

Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20

*/

var res = (
    function (a, b) {

        return a * b;

    }
)(4, 5);


console.log(res);

/*

3.

Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
    Output: progra**ing, 2
    
    */

var result = (function (str) {

    var res = "";
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'm' || str[i] === 'M') {
            res += '*';
            count++;
        }
        else {
            res += str[i];
        }
    }

    return [res, count];
})("prograMming");

console.log(result);


/*  

4.

Write a function with parameters name and surname that returns a function that suggests an email in the form 
name.surname@gmail.com. 
Input: pera peric
Output: pera.peric@gmail.com */

function provideMailAddress(name, surname) {

    return function () {
        return name + "." + surname + "@gmail.com";
    }
}

var result = provideMailAddress("pera", "peric");

console.log(result());

result = provideMailAddress("mika", "mikic");

console.log(result());

result = provideMailAddress("novak", "djokovic");

console.log(result());

console.log(result);

var result = function provideEMailAddress(name, surname) {

    return name + "." + surname + "@gmail.com";

}

result = result("jovan", "jovanovic");

console.log(result);

/*
5.

Write a function that returns a function that calculates a decimal value of the given octal 
number. 
Input: 034
Output: 28

*/

/* octalToDecimal function takes octal number as argument. When the string is concatenated,
the octal number is first converted to decimal and then put into string form. */

function octalToDecimal(oct) {

    return function () {
        var str = '';
        str += oct;
        return str;
    }

}


var result = octalToDecimal(034);
console.log(result);

console.log(result());

/* octalToDecimalBis function must take string as argument to produce correct result! */
function octalToDecimalBis(oct) {

    return function () {
        return parseInt(oct, 8);
    }

}

var result = octalToDecimalBis("034");

console.log(result());

/*

6.


Write a function that checks if a given string is valid password.
The password is valid if it is at least 6 characters long and contains at least one digit.
The function should receive two callbacks named successCallback and errorCallback that should be
called in case password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!

	Input: JSGuru123
    Output: Your password is cool!  */

function checkPassword (password, callback1, callback2) {

  if (password.length < 6) {
  return callback2();
  }

  else {
    
    for (var i = 0; i < password.length; i++) {
        
        if (isNaN(password[i]) === false) {
            return callback1();
        }
        
    }

  return callback2();

  }
}

function successCallBack() {
    return "Your password is cool!"
}

function errorCallBack() {
    return "Your password is invalid!"
}

var result = checkPassword("JSGuru", successCallBack, errorCallBack);
console.log(result);

result = checkPassword("JSGuru123", successCallBack, errorCallBack);
console.log(result);

/*
7.

Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.

Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]

*/

function filterElements (arr, callback) {

    var res = [];

    for (var i = 0; i < arr.length; i++) {
        
        if (callback(arr[i]) === true) {

            res[res.length] = arr[i];
        }
    }

    return res;

}

function checkIfOdd (num) {
    
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}

var result = filterElements([2, 8, 11, 4, 9, 3], checkIfOdd);

console.log(result);