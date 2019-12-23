/* /* const promise = fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json());

console.log(promise); */

/* 
1. Create a sample promise that:
Resolves to current time
Prints received time in console when resolved (in then()) */




/* const promise = new Promise(function (resolve, reject) {

    resolve(new Date)


})
    .then(date => { console.log(date) }); */


/*
    2. Create a console app that:
Creates 100 promises;
Each promise has its own ID (0..99);
Each promise is resolved after a random time interval (up to 500ms);
After being resolved, each promise will log its id in the console.
 */
/* 
const arrOfPromises = [];

for (let i = 0; i < 100; i++) {
    const id = i;
    arrOfPromises[i] = new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve(id)
        }, 500 * Math.random());



    }).then(function (id) {
        console.log(id);
    })


} */

/* 

3. Modify the app so it prints an ID of the promise that is completed first.


 */
/* 
const arrOfPromises = [];

for (let i = 0; i < 100; i++) {

    const id = i;


    arrOfPromises[i] = new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve(id)
        }, 500 * Math.random());
    })

}

Promise.race(arrOfPromises).then(function (value) {
    console.log(value);
}); */

/*
4. Modify the app so it prints a message that all promises are completed. */

const arrOfPromises = [];

for (let i = 0; i < 100; i++) {

    const id = i;


    arrOfPromises[i] = new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve(id)
        }, 500 * Math.random());
    })

}

Promise.all(arrOfPromises).then(function (values) {
    console.log("All promises are completed!");
})

