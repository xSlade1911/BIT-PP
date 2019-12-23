
"use strict";

/*
1.
Write a function to count vowels in a provided string. 
Vowels are a, e, i, o, and u as well as A, E, I, O, and U.
*/

function countVowels(str) {

    var count = 0;

    for (var i = 0; i < str.length; i++) {

        switch (str[i]) {
            case 'A':
            case 'a':
            case 'E':
            case 'e':
            case 'I':
            case 'i':
            case 'O':
            case 'o':
            case 'U':
            case 'u':
                count++;
        }

    }

    return count;

}

console.log(countVowels("Slobodanka"));

/*
2.

Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

*/

function combineArrays(a, b) {

    var res = [];

    for (var i = 0; i < a.length; i++) {

        res[res.length] = a[i];
        res[res.length] = b[i];
    }
    return res;
}

console.log(combineArrays(["a", "b", "c"], [1, 2, 3]));



/*

3.

Write a function that rotates a list by k elements.

For example[1, 2, 3, 4, 5, 6] rotated by two becomes[3, 4, 5, 6, 1, 2]

*/

function rotateList(arr, k) {
    var res = [];

    for (var i = 0; i < arr.length; i++) {
        res[res.length] = arr[(i + k) % arr.length];

    }
    return res;
}

console.log(rotateList([1, 2, 3, 4, 5, 6], 2));

/*

4.
Write a function that takes a number and returns array of its digits.

*/

function returnDigits(num) {

    var str = "";

    var res = [];

    str += num;

    for (var i = 0; i < str.length; i++) {

        res[res.length] = parseInt(str[i]);

    }

    return res;

}


console.log(returnDigits(789654135));

/*5.
Write a program that prints a multiplication table for numbers up to 12.

*/

function multiplicationTable() {

    var str = "";

    for (var i = 0; i <= 12; i++) {
        for (var j = 0; j <= 12; j++) {
            str += "The product of " + i + " and " + j + " is " + i * j + "." + "\n";
        }
    }

    return str;

}

console.log(multiplicationTable());

/*6.

Write a function to input temperature in Centigrade and convert to Fahrenheit.

*/

function convertCentToFahrenheit(cels) {

    var f = 9 / 5 * cels + 32;
    return f;
}


console.log(convertCentToFahrenheit(20));

/*

7.

Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

*/

function maxElement(arr) {

    var arrNum = [];
    var max;

    /* Filter out non-number elements */

    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) {
            arrNum[arrNum.length] = arr[i]
        }
    }
    /* Find maximum element */

    max = arrNum[0];


    for (var j = 0; j < arrNum.length; j++) {

        if (max < arrNum[j]) {
            max = arrNum[j];
        }
    }

    return max;

}


console.log(maxElement([1, undefined, "Ivana", 89, 41, -3, 1.256, NaN, Infinity, "", null]));

<<<<<<< HEAD


Write a function to find the maximum and minimum elements. Function returns an array.

 

Write a function to find the median element of array.

 

Write a function to find the element that occurs most frequently.

 

Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

 

Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

 

Write a function to find all the numbers greater than the average.

 

The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
=======
/*

8.

Write a function to find the maximum and minimum elements. Function returns an array.

*/

function MaxMin(arr) {

    var max = arr[0];
    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {

        if (max < arr[i]) {

            max = arr[i];

        }

    }

    for (var j = 0; j < arr.length; j++) {

        if (min > arr[j]) {

            min = arr[j];

        }

    }

    return [max, min];

}
console.log(MaxMin([4, 54, 27, -41, -78, 65, -41, 4, 54]));

/*

9.

Write a function to find the median element of array.

Median is the middle value of a set of data. To determine the median value in a sequence of numbers, 
the numbers must first be arranged in ascending or descending order.

If there is an odd amount of numbers, the median value is the number that is in the middle, with the same amount 
of numbers below and above.

If there is an even amount of numbers in the list, the median is the average of the two middle values.

*/


function medianElement(numArray) {


    /*first sort the numArray in descending order*/

    var max;
    var target;

    for (var i = 0; i < numArray.length - 1; i++) {
        max = i;
        for (var j = i + 1; j < numArray.length; j++) {
            if (numArray[j] > numArray[max]) {
                max = j;
            }
        }
        if (max != i) {
            target = numArray[i];
            numArray[i] = numArray[max];
            numArray[max] = target;
        }
    }

    /*print the sorted array*/

    console.log(numArray);

    /*now find the median element in sorted array*/

    if ((numArray.length) % 2 !== 0) {

        return numArray[(numArray.length - 1) / 2];

    }

    else {

        return (numArray[numArray.length / 2] + numArray[numArray.length / 2 - 1]) / 2;

    }

}

console.log(medianElement([8, 2, -4, 3, 5, -9, 15]));

console.log(medianElement([8, 2, -4, 3, 5, -9, 15, 20]));

/*

10.

Write a function to find the element that occurs most frequently.

*/

function findMostFrequentElement(arr) {

    var count = 1;
    var count_max = 1;
    var mostFrequentElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }

        }
        if (count > count_max) {
            count_max = count;
            mostFrequentElement = arr[i];
        }

        count = 1;

    }

    return mostFrequentElement;

}

console.log(findMostFrequentElement([1, 2, 5, 7, 4, 3, 2, 3, 7, 1, 7, 2, 7]));

/* 11.

Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.
If number of elements is even, return just the first and the last.In other cases(empty array), input array should be returned.

*/
function firstMiddleLast(arr) {


    if (arr.length === 0) {
        return arr;
    }

    if (arr.length === 1) {
        return arr;
    }

    if (arr.length % 2 !== 0) {
        return [arr[0], arr[(arr.length - 1) / 2], arr[arr.length - 1]];
    }
    return [arr[0], arr[arr.length - 1]];
}

console.log(firstMiddleLast([1]));

/* 12.

Write a function to find the average of N elements.Make the function flexible to receive dynamic number 
or parameters.

*/
function averageOfElements() {

    var res = 0;
    if (arguments.length === 0) {
        return "Please enter the input elements!";
    }


    for (var i = 0; i < arguments.length; i++) {
        res = res + arguments[i];
    }

    res = res / arguments.length;
    return res;
}


console.log(averageOfElements(2, 6, -3));
console.log(averageOfElements());



/*

13.

Write a function to find all the numbers greater than the average.

*/

function findElementsGreaterThanAverage() {


    var res = 0;
    var result = [];

    if (arguments.length === 0) {
        return "Please enter the input elements!";
    }

    for (var i = 0; i < arguments.length; i++) {
        res = res + arguments[i];
    }

    res = res / arguments.length;

    for (var j = 0; j < arguments.length; j++) {

        if (arguments[j] > res) {
            result[result.length] = arguments[j];
        }
    }

    return result;

}


console.log(findElementsGreaterThanAverage(8, 4, 10, 5, 20));

/*

14.

The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height
(in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the
corresponding BMI category:
>>>>>>> js_exercises
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40

<<<<<<< HEAD
 


Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
=======
*/

function printBMICategory(weight, height) {

var bmi = weight / (height * height);
var message = "";

if (bmi < 15) {
    message = "Starvation: less than 15";
} else if (bmi < 17.5) {
    message = "Anorexic: less than 17.5";
} else if (bmi < 18.5) {
    message = "Underweight: less than 18.5";
} else if (bmi >= 18.5 && bmi < 25) {
    message = "Ideal: greater than or equal to 18.5 but less than 25";
} else if (bmi >= 25 && bmi < 30) {
    message = "Overweight: greater than or equal to 25 but less than 30";
} else if (bmi >= 30 && bmi < 40) {
    message = "Obese: greater than or equal to 30 but less than 40";
} else {
    message = "Morbidly obese: greater than or equal to 40"}


return "Your BMI is equal to " + bmi + ". " + message;

}

var res = printBMICategory(84, 1.88);

console.log(res);

/*

15.

Write a function that takes a list of strings and prints them, one per line, in a rectangular 
frame.:
>>>>>>> js_exercises

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********

<<<<<<< HEAD
 
=======
*/

function findMaxLengthElement (arrOfStrings) {

var max = arrOfStrings[0];

    for (var i = 0; i < arrOfStrings.length; i++) {

        if (max.length < arrOfStrings[i].length) {

            max = arrOfStrings[i];

        }

    }

return max;

}

function buildRow(str, num) {
    
    var res = '';

    if (str.length === 0) {
        for (var i = 0; i < num + 4; i++) {
            res += "*";
        }
    }
    else {
        
        res += "* " + str;
        for (var j = 0; j < num - str.length; j++) {
            res += " ";
        }
        res += " *"
    }

    return res + "\n";
}


function printListInRectangle (arr) {

    var maxElement = findMaxLengthElement(arr);
    
    var result = buildRow ('', maxElement.length);

    for (var i = 0; i < arr.length; i++) {
   
        result += buildRow(arr[i], maxElement.length);
}

    result += buildRow ('', maxElement.length);

return result;

}

var result = printListInRectangle (["Hello", "World", "in", "a", "frame", "for ever", "now it's time for css, bootstrap and co.!"]);

console.log(result);


>>>>>>> js_exercises

