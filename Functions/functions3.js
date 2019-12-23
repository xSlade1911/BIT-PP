/* 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string). */


function insertString(p, str, iniStr) {
    var res = "";

    for (var i = 0; i < p; i++) {
        res += iniStr[i];
    }
    for (var j = 0; j < str.length; j++) {
        res += str[j];
    }
    for (var k = p; k < iniStr.length; k++) {
        res += iniStr[k];
    }
    return res;
}
console.log(insertString(2, "abc", "petak"));

/* 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity. */


function joinElements(a) {
    var res = "";

    for (var i = 0; i < a.length; i++) {
        if (isNaN(a[i]) === true || a[i] === undefined || a[i] === null || a[i] === Infinity) {
            continue;
        }

        res += a[i];
    }
    return res;
}

console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/* if (isNaN(a[i]) === false && a[i] !== null) */


/* 3.Write a program to filter out falsy values from the array.*/


function filterFalsy(a) {
    var res = [];

    for (var i = 0; i < a.length; i++) {
        if (!!a[i]) {
            res[res.length] = a[i];
        }
    }
    return res;
}
console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* 4.Write a function that reverses a number. The result must be a number. */


function reverseNum(num) {

    var res = '' + num;

    var output = '';

    var outputNum;

    for (var i = res.length - 1; i >= 0; i--) {
        output += res[i]
    }

    outputNum = parseInt(output);

    return outputNum;


}

console.log(reverseNum(4567231));

/*
5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]
*/

function lastArrayElement(arr) {

    var str = [];

    if (arguments.length === 1) {
        return arr[arr.length - 1];
    }

    else {

        for (var i = 0; i < arguments[1]; i++) {
            str[str.length] = arr[arr.length - arguments[1] + i];
        }

        return str;

    }
}

console.log(lastArrayElement([7, 9, 0, -2]));


console.log(lastArrayElement([7, 9, 0, -2], 2));

/* 6. 

Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 

*/

function createPrefilledArray(a, b) {

    var str = [];

    if (b === undefined) {

        b = null;

    }

    for (var i = 0; i < a; i++) {
        str[i] = b;
    }

    return str;
}

console.log(createPrefilledArray(6, 0));

console.log(createPrefilledArray(2, "none"));

console.log(createPrefilledArray(2));


/*

7.

Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.


Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper 
positive divisors, that is, the sum of its positive divisors excluding the number itself(also known as its aliquot sum).
Equivalently, a perfect number is a number that is half the sum of all of its positive divisors(including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 
is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
This is followed by the perfect numbers 496 and 8128. */

function isPerfectNumber (num) {

    var sum = 0;

    for (var i = 1; i < num; i++) {

        if (num % i === 0) {
            sum += i ;
    }
}

        if (num === sum) {

        return "The number is perfect.";
        
        }

        else {
        
        return "The number is not perfect.";

    }

}

console.log(isPerfectNumber(356));

console.log(isPerfectNumber(8128));

/*

8. 

Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

*/

function searchWordCount(text, word) {

    var x = 0;
    var y = 0;
 
    for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
 }
 
 console.log(searchWordCount('The quick brown fox', 'fox'));
 console.log(searchWordCount('aa, bb, cc, dd, aa', 'aa'));

 /*

9.

 Write a function to hide email address.

"myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

*/

function hideEmail(user_email) {

var avg, splitted, part1, part2;
splitted = user_email.split("@");
part1 = splitted[0];
avg = part1.length / 2;
part1 = part1.substring(0, (part1.length - avg));
part2 = splitted[1];
return part1 + "...@" + part2;
};

console.log(hideEmail("robin_singh@example.com"));

/*

10.

Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

*/

function findMostFrequentItem(inputArr) {
    var mostFrequent = 1;
    var m = 0;
    var item;
    for (var i = 0; i < inputArr.length; i++) {
        for (var j = i; j < inputArr.length; j++) {
            if (inputArr[i] == inputArr[j]) {
                m++;
            }
            if (mostFrequent < m) {
                mostFrequent = m;
                item = inputArr[i];
            }
        }
        m = 0;
    }
 
    // output: item (number of times)
    return item + " ( " + mostFrequent + " times ) "
 }
 
 var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

 console.log(findMostFrequentItem(arr1));

 