"use strict";

/*



Try to use built-in object methods to solve some of the problems here

1.

Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1] */


var duplicateArray = function (arr) {

    var result = [];

    for (var i = 0; i < arr.length; ++i) {
        result.push(arr[i]);
        result.push(arr[i]);
    }

    return result;

}

/* console.log(duplicateArray([2, 4, 7, 11, -2, 1])); */


/* 2.

Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]  */


var removeDuplicates = function (arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }
    }

    /*now sort the array without duplicates in ascending order (numbers) then return the result */
    return result.sort(function (a, b) { return a - b });

}

/* console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13])); */



/*

3.a.

Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true


 */

function isOddLength(arr) {

    return arr.length % 2 === 1;

}
/* 
console.log(isOddLength([1, 2, 9, 2, 1, 7])); */


/*

3.b.

Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4

*/

function countNumbersLessThanCentral(arr) {
    var centralIndex;
    var counter = 0;

    if (isOddLength(arr) === false) {
        return "Error!!!";
    }

    else {

        centralIndex = Math.floor(arr.length / 2);

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < arr[centralIndex]) {
                counter++;
            }
        }
    }

    return counter;
}


/* console.log(countNumbersLessThanCentral([-1, 8.1, 3, 6, 2.3, 44, 2.11, 3, 1]));
 
*/
/*

4.

Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }

*/

function smallestElement(arr) {
    var mini = Math.min(...arr);
    var lastPositionMini = arr.lastIndexOf(mini);

    return { minValue: mini, minLastIndex: lastPositionMini };


}

/* console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, 3])); */



/*

5.a.

Write a function that finds all the elements in a given array less than a given element.
	Input: [2, 3, 8, -2, 11, 4], 6
    Output: [2, 3, -2, 4] 
    
    */


function lessThanElement(arr, element) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < element) {
            result.push(arr[i]);
        }
    }

    return result;
}

/* console.log(lessThanElement([2, 3, 8, -2, 11, 4], 6)); */





/*

5.b.

    Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.
	Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
    Output: [’Programming’, ‘product’]

    */

function startPro(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().substring(0, 3) === "pro") {
            result.push(arr[i]);
        }
    }

    return result;
}

/* console.log(startPro(["JavaScript", "Programming", "fun", "product"])); */

/*

5.c.

Write a function that expects an array and a callback function that filters out some of the elements.

*/

function filter(collection, callback) {
    var result = [];

    for (var i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
            result.push(collection[i]);
        }
    }

    return result;

}

function lessThanFour(element) {

    return element < 4;

}

/* console.log(filter([1, 3, 5, 7, 9], lessThanFour)); */


/*

6. a.


Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
	[
{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
    ]
*/

var listOfProducts = [
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 }
]

/* console.log(listOfProducts); */

/* 6. b. Write a function that calculates the total price of your shopping list.  */


function totalPrice(listOfItems) {
    var totalPrice = 0;

    for (var i = 0; i < listOfItems.length; i++) {
        totalPrice += listOfItems[i].price;
    }

    return totalPrice;

}

/* console.log(totalPrice(listOfProducts)); */

/* 6.c. Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
 */

function averagePrice(listOfItems) {
    return totalPrice(listOfItems) / listOfItems.length;
}

/* console.log(averagePrice(listOfProducts)); */


/* 6.d. Write a function that prints out the name of the most expensive product on your 
shopping list. Write the name in uppercase. 
 */

function displayMostExpensiveItem(listOfItems) {
    var result = "";
    var listOfPrices = [];
    var maxPrice = 0;
    var indexMaxPrice = 0;

    for (var i = 0; i < listOfItems.length; i++) {
        listOfPrices[i] = listOfItems[i].price;
    }
    maxPrice = Math.max(...listOfPrices);
    indexMaxPrice = listOfPrices.indexOf(maxPrice);

    return listOfItems[indexMaxPrice].name.toUpperCase();

}

/* console.log(displayMostExpensiveItem(listOfProducts)); */



/* 7.a. Write a function that checks if a given string is written in all capitals.
 */

function checkIfCapitals(str) {
    return str.toUpperCase() === str;
}

/* console.log(checkIfCapitals("CBSDFSDFaSDFSDF"));
console.log(checkIfCapitals("CBSDFSDFQSDFSDF")); */

/* 7.b.
Write a function that checks if a given string contains any digits.
*/

function hasDigits(myString) {
    for (var i = 0; i < myString.length; i++) {
        if (!isNaN(parseFloat(myString[i]))) {

            return true;

        }
    }

    return false;

}

/* console.log(hasDigits('qsdqdAqsd1q')); */


/* 7.c.

Write a function that checks if a given string is a valid hexadecimal color.

*/

function isHexaColor(myString) {

    return (myString.length === 6 && !isNaN(Number('0x' + myString)));
}

/* console.log(isHexaColor("AABBCC")); /*true*/

/*console.log(isHexaColor("AAXXCC")); /*false*/

/* 7.d.
Write a function that checks if a given number belongs to the interval from 1900 to 2019.
 */

function isValidYear(myNumber) {

    return myNumber >= 1900 && myNumber <= 2019;

}

/* console.log(isValidYear(2019));
console.log(isValidYear(2020)); */

/* 7.e. 
Write a function named validator that returns an object with methods 
stringValidator, passwordValidator, colorValidator, and yearValidator 
referencing the functions from a) to d). */

function Validator() {

    return {

        stringValidator: function (str) {

            //string is valid if it contains at least 1 lowercase letter
            return !checkIfCapitals(str);

        },

        passwordValidator: function (str) {

            //password is valid if it contains at least 6 characters
            //and at least 1 digit
            return str.length >= 6 && hasDigits(str);

        },

        colorValidator: function (str) {

            return isHexaColor(str);

        },

        yearValidator: function (str) {

            return isValidYear(str);

        }


    }

}

var validator = Validator();

console.log(validator.yearValidator(1899)); /*false*/
console.log(validator.stringValidator("QBBQSDAS")); /*false*/
console.log(validator.stringValidator("QBcQSDAS")); /*true*/
console.log(validator.passwordValidator("abcerg")); /*false*/
console.log(validator.passwordValidator("abcer7")); /*true*/
console.log(validator.colorValidator('aabbcc')); /*true*/
console.log(validator.colorValidator("aaxxdd")); /*false*/

/* 

8.

Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days 

*/

function numberOfDaysUntilBirthday() {
    var today = new Date();
    var bday = new Date(today.getFullYear(), 11, 12);
    var one_day = 1000 * 60 * 60 * 24;

    if (today.getMonth() == 11 && today.getDate() > 12) {
        bday.setFullYear(bday.getFullYear() + 1);
    }

    return Math.ceil((bday.getTime() - today.getTime()) / (one_day)) +
        " days left until your birthday!";

}

console.log(numberOfDaysUntilBirthday());

/*

9.

Write a function that for a given departure and arrival time calculates
the time the trip takes.
	Input: 8:22:13 11:43:22
	Output: 3 hours 21 minutes 9 seconds */

function calculateTripDuration(start, end) {
    var d, h, m, s;
    var ms = end - start;

    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;

    return h + ' hours ' + m + ' minutes ' + s + ' seconds';

}

var date1 = new Date();
var date2 = new Date();

date1.setHours(9, 22, 13);
date2.setHours(12, 43, 22);

console.log(date1); //2019-11-09T08:22:13.003Z
console.log(date2); //2019-11-09T11:43:22.003Z

console.log(calculateTripDuration(date1, date2));
// 3 hours 21 minutes 9 seconds

/* 
10.a.

Write a constructor function that creates points in space.
Each point in space has its own x, y, and z coordinate.
For example, (3, 5, 1) can be a point in space.

 */

function Point(abscissa, ordinate, applicate) {
    this.abscissa = abscissa;
    this.ordinate = ordinate;
    this.applicate = applicate;
}

var onePoint = new Point(3, 5, 1);
console.log(onePoint);
// Point { abscissa: 3, ordinate: 5, applicate: 1 }

/* 
10. b.

Write a function that calculates the distance between two points in the
space.
 */

function calculateDistance(point1, point2) {
    var a = Math.pow(point2.abscissa - point1.abscissa, 2);
    var b = Math.pow(point2.ordinate - point1.ordinate, 2);
    var c = Math.pow(point2.applicate - point1.applicate, 2);

    return Math.sqrt(a + b + c).toFixed(2);

}

var pointOne = new Point(2, 7, 1);
var pointTwo = new Point(-3, 4, -2);

console.log(calculateDistance(pointOne, pointTwo));
//6.56

/* 

11. a.

Write a function that generates a random integer value between 5 and 20.

*/

function generateRandom1() {

    return Math.round(5 + 15 * Math.random());

}

console.log(generateRandom1());

/* 11. b.

Write a function that generates a random integer value between 50 and 100. 
 
*/

function generateRandom2() {

    return Math.round(50 + 50 * Math.random());

}

console.log(generateRandom2());

/* 11. c.

Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.    
 
*/

function generateRandomArray(arrLength, callback) {
    var result = [];

    for (var i = 0; i < arrLength; i++) {
        result[i] = callback();
    }

    return result;

}

console.log(generateRandomArray(7, generateRandom2));

console.log(generateRandomArray(10, generateRandom1));


/* 

12.

Write a function that shuffles the elements of a given array. 
Input: [3, 6, 11, 2, 9, 1]
Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the 
given array) 
    
*/

var arrayToShuffle = [3, 6, 11, 2, 9, 1];

var arrayShuffle = function(arr) {
    var newPosition, temp;

    for (var j = arr.length-1; j > 0; j--) {
        newPosition = Math.floor(Math.random()*(j+1));
        temp = arr[j];
        arr[j] = arr[newPosition];
        arr[newPosition] = temp;
    }

    return arr;

}

var newArray = arrayShuffle(arrayToShuffle);

console.log(newArray); //[ 6, 11, 1, 9, 2, 3 ]



