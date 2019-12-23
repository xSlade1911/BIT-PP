/* 1.Write a function that capitalizes the first letter of each string argument it receives.
	Function arguments: 'hello', 'there', 'ES', 6
	Output: 'Hello', 'There', 'ES'
 */

const arr = ['hello', 'there', 'ES', 6]

const result = arr.filter(element => typeof (element) === "string")
console.log(result);

const arr2 = result.map(element =>

    element.charAt(0).toUpperCase() + element.slice(1)


);


console.log(arr2)
/*
2.Write a function that calculates sale tax that should be paid for the product of the
 given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
	Input: 120
    Output: 24
    Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only

 */

const array1 = [{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }];
const array2 = array1.map(element => {
    var res = {};
    res.name = element.name;
    res.price = element.price * 1.2;
    return res;
})
console.log(array2);
const array3 = array1.map(element =>
    element.price * 0.2
)
console.log(array3);

/* 3. Write a function that increases each element of the given array by the given value. 
If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1] */

const inputArray = [4, 6, 11, -9, 2.1];
const add = (arr, param) => {
    if (param === undefined) {
        param = 1
    }
    const newArray = arr.map(element => element + param)
    return newArray;
}
console.log(add(inputArray, 3));

/*4. Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]
 */
const input = [6, 11, 9, 0, 3];
const res = input.filter(element => element % 2 === 0)
console.log(res);


/* 5. Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard'] */


const inputArray1 = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

const result5 = inputArray1.filter(element => element.includes('JS') || element.includes('js'));
console.log(result5);


/*6. Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
    Output: [7, 8] */
const arr = [1.6, 11.34, 9.23, 7, 3.11, 8]
const res6 = arr.filter(element => parseInt(element) === element)
console.log(res6);


/* 7. Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
    Output: [45, 553] */

    const args = [23, 11.5, 9, "abc", 45, 28, 553];

const filterItems = (digit) => {
    return args.filter(arg => parseInt(arg) === arg && arg.toString().indexOf(digit.toString()) > -1);
} 

console.log(filterItems(5));