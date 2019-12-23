const promise = fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json());

console.log(promise);