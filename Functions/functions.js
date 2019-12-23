
// Write a program that calculates the maximum of two given numbers. 

function maxi(a, b) {
    return (a >= b) ? a : b;
}

console.log(maxi(3, 1));

// Write a program that checks if a given number is odd.

function oddNumber(a) {

    return (a % 2 === 0) ? false : true;
}

console.log(oddNumber(4));

// Write a program that checks if a given number is a three digit long number.

function threeDigitNumber(a) {

    var b = a;

    if (b < 0) {
        b = -b;
    }

    if (b >= 100 && b <= 999) {
        return "Ima 3 cifre.";
    } else {
        return "Nema 3 cifre.";
    }

}


console.log(threeDigitNumber(-1006));

// Write a program that calculates an arithmetic mean of four numbers.

function arithmeticMean(a, b, c, d) {
    return (a + b + c + d) / 4;
}

console.log(arithmeticMean(5, 6, 10, 14));

//

// Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

function square(a) {
    var row = '';

    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i === 0 || j === 0 || i === a - 1 || j === a - 1) {
                row += '* ';
            } else {
                row += "  ";
            }
        }

        row += '\n';
    }

    return row;
}

console.log(square(5));

// Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
//* * * * *
//* * *
//* * * * * * *


function stars(a, b, c) {

    var str = '';

    for (var i = 0; i < a; i++) {

        str += '* ';

    }

    str += '\n';

    for (var i = 0; i < b; i++) {

        str += '* ';

    }

    str += '\n';

    for (var i = 0; i < c; i++) {

        str += '* ';

    }

    return str;

}

console.log(stars(8, 2, 4));


// Write a program that calculates a number of digits of a given number. 


function numberOfDigits(a) {

    var result = '';

    //konvertovanje broja a u string

    result += a;

    return result.length;

}

console.log(numberOfDigits(45678768465));


// Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

function numberOfAppearances(a, b) {

    var result = 0;

    for (var i = 0; i < b.length; i++) {

        if (b[i] === a) {
            result++;
        }

    }

    return "There are " + result + " appearances."

}

console.log(numberOfAppearances(7, [2, 4, 7, 8, 7, 7, 1]));


// Write a program that calculates the sum of odd elements of a given array. 

function sumOfOddElements(a) {

    var sum = 0;
    var numberOfOddNumbers = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            sum += a[i];
            numberOfOddNumbers++;
        }
    }

    if (numberOfOddNumbers === 0) {
        return "There are no odd numbers."
    }

    return "The sum of odd numbers is " + sum + ".";

}

console.log(sumOfOddElements([20, -6, 4]));


// Write a program that calculates the number of appearances of a letter a in a given string. 
// Modify the program so it calculates the number of both letters a and A.

function numberOfAppearancesLetter(a, b) {

    var result = 0;

    for (var i = 0; i < b.length; i++) {

        if (b[i] === a) {
            result++;
        }

    }

    return "There are " + result + " appearance(s)."

}

console.log(numberOfAppearancesLetter('q', "AQWEfghy"));


function numberOfAppearancesLetterCaseNotSensitive(a, b) {

    var result = 0;

    for (var i = 0; i < b.length; i++) {

        if (b[i] === a || b[i] === "A") {
            result++;
        }

    }

    return "There are " + result + " appearance(s)."

}

console.log(numberOfAppearancesLetterCaseNotSensitive('a', "AQWEafghy"));

//Write a program that concatenates a given string given number of times. 
//For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 


function concatenateStrings(str, b) {

    var result = "";

    for (i = 0; i < b; i++) {
        result += str;
    }

    return result;
}


console.log(concatenateStrings("abcde", 4));


