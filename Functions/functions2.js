
//Write a function to check whether the `input` is a string or not.

//"My random string" -> true
//12 -> false


function checkIfString(a) {
    if (typeof a === "string") {
        return true;
    }

    return false;

}

console.log(checkIfString('asdhasD'));
console.log(checkIfString(false));

/* Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false */

function checkIfStringBlank(str) {
    if (checkIfString(str) === false) {
        return "The input is not a string"
    }
    if (str.length === 0) {
        return "The string is blank."
    }

    if (str === ' ') {
        return "The string is blank."
    }

    return "The string is not blank."

}

console.log(checkIfStringBlank(' '));




// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concatenateString(n, str) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += str;
    }
    return result;
}
console.log(concatenateString(3, "abc"));

// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function countNumber(ch, str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            count++;
        }
    }
    return count;
}
console.log(countNumber("a", "danAs je lep dan"));


// Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are  // no occurrences of the character, the function should return -1.


function firstOccurrence(ch, str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            return i + 1;
        }
    }
    return -1;
}
console.log(firstOccurrence("b", "harambasa"));



/* Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */


function lastOccurrence(ch, str) {
    for (i = str.length - 1; i >= 0; i--) {
        if (str[i] === ch) {
            return i + 1;
        }
    }
    return -1;
}
console.log(lastOccurrence("b", "beogbad"));



/* Write a function to convert string into an array. Space in a string should be represented as “null” in new array. */


function stringArray(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result[i] = str[i];
        }
        else {
            result[i] = null;
        }
    }
    return result;
}
console.log(stringArray("danas je lep dan"));



/* Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */


function numberPrime(a) {
    var res;
    for (var i = 2; i <= a - 1; i++) {
        if (a % i === 0) {
            return false;
        }
        return true;
    }
}
console.log(numberPrime(7));


/* Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator. */

function replaceSpaces(str, sep) {
    var res = "";

    if (!sep) {
        sep = '-';
    }

    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            res += str[i];
        }
        else {
            res += sep;
        }

    }
    return res;
}
console.log(replaceSpaces("danas je lep dan", "+"));

// Write a function to get the first n characters and add “...” at the end of newly created string.

function getFirstCharacters(n, str) {
    result = '';

    for (var i = 0; i < n; i++) {
        result += str[i];
    }
    return result + '...'
}

console.log(getFirstCharacters(4, "ahfdgdfgf"));

/*
 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

function convertStringsToNumbers(arrayOfStrings) {

    var result = [];

    var j = 0;

    for (var i = 0; i < arrayOfStrings.length; i++) {

        if (isFinite(arrayOfStrings[i])) {

            result[j] = parseFloat(arrayOfStrings[i]);
            j++;
        }
    }

    return result;

}

console.log(convertStringsToNumbers(["1", "21", undefined, "42", "1e+3", Infinity, 0]));


/* Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed. */

function retirement(yearOfBirth, sex) {
    if (sex = "male") {
        if (2019 - yearOfBirth > 65) {
            return "The person is already retired.";
        }
        return 65 - (2019 - yearOfBirth);
    }
    else if (sex = "female") {
        if (2019 - yearOfBirth > 60) {
            return "The person is already retired.";
        }
        return 60 - (2019 - yearOfBirth);
    }
}
console.log(retirement(1985, "female"));

/*
Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th

Hint: num % 100 >= 11 && num % 100 <= 13

*/

function humanizeNumber(number) {
    if (number % 100 >= 11 && number % 100 <= 13)
        return number + "th";

    switch (number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }

    return number + "th";
}

console.log(humanizeNumber(1));
console.log(humanizeNumber(25));
console.log(humanizeNumber(334));
