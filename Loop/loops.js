var i = 0;

while (i < 100) {
    i++;
    console.log(i);
}

var sum = 0;
var pass = 1;

while (pass <= 100) {
    sum = sum + pass;
    pass++;
}

console.log(sum);

// Write a program that will iterate from 0 to 10 and display squares of numbers.

for (var x = 0; x <= 10; x++) {
    console.log(x * x);
}


// Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.


for (var x = 0; x <= 15; x++) {

    if (x % 2 === 0) {
        console.log(x + " is even.")
    } else {
        console.log(x + " is odd.")
    }
}

// Write a program to sum the multiples of 3 and 5 under 1000. (the numbers should be simultaneously multiples of 3 and 5)
var sum = 0;

for (var i = 0; i <= 1000; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        sum = sum + i;
    }
}

console.log(sum);

// Write a program to compute the sum and product of an array of integers.

var array = [2, 3, 4, 5];
var sum = 0;
var product = 1;

for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
    product = product * array[i]
}

console.log(sum);
console.log(product);


// Write a program which prints the elements of the following array as a single string.
// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];


var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var stringLista = "";

for (var i = 0; i < x.length; i++) {
    stringLista = stringLista + x[i];
}

console.log(stringLista);

// Write a program that prints the elements of the following array.

// var a = [
//    [1, 2, 1, 24], 
//   [8, 11, 9, 4], 
//    [7, 0, 7, 27]
//    ];


var a = [
    [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}

// Write a program that outputs the sum of squares of the first 20 numbers. 

var sumSquare = 0;

for (i = 1; i <= 20; i++) {
    sumSquare += i * i;
    i++;
}

console.log(sumSquare);

// Write a program that computes average marks of the following students.Then use this average to 
// determine the corresponding grade.

/*


David
80
Marko
77
Dany
88
John
95
Thomas
68

The grades are computed as follows :

< 60%
F
< 70%
D
< 80%
C
< 90%
B
< 100%
A


*/

var marks = [80, 77, 88, 95, 68];
var averageMark = 0;
var grade = "";
var sumOfMarks = 0;


for (var i = 0; i < marks.length; i++) {
    sumOfMarks = sumOfMarks + marks[i];
}

averageMark = sumOfMarks / (marks.length);

if (averageMark < 60) {
    grade = "F";
} else if (averageMark < 70) {
    grade = "D";
}
else if (averageMark < 80) {
    grade = "C";
}
else if (averageMark < 90) {
    grade = "B";
}
else if (averageMark < 100) {
    grade = "A";
}
console.log("Average mark of the class is " + averageMark + ".");
console.log("This corresponds to grade " + grade + ".");

/*

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers 
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one 
of those).

Note: This is actually an interview question that has been claimed to weed out a significant percentage of 
programmer candidates. So if you’ve solved it, you’re now allowed to feel good about yourself.

*/

var numbers = [];

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        numbers[i - 1] = "Fizz";
    } else if (i % 5 === 0) {
        numbers[i - 1] = "Buzz";
    } else {
        numbers[i - 1] = i;
    }
}

console.log(numbers);

var numbers = [];

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        numbers[i - 1] = "Fizz";
    } else if (i % 3 !== 0 && i % 5 === 0) {
        numbers[i - 1] = "Buzz";
    }
    else if (i % 3 == 0 && i % 5 === 0) {
        numbers[i - 1] = "FizzBuzz";}
    else {
        numbers[i - 1] = i;
    }
    }

    console.log(numbers);

