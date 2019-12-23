const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", 'http://127.0.0.1:5500');
    res.setHeader('Content-Type', 'text/plain');

    /*     var cowsay = require("cowsay");
        const text = cowsay.say({
            text: "I'm a moooodule" */

    var figlet = require('figlet');

    figlet('Hello World!!', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
        res.end(data);

    });
})

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});



 // package.json line 8 -  ovde ubacimo nodemon ! npm install --save-dev nodemon (instalacija) i onda npm start
  //package.json line 17 - Instalirati prvo NODEMON da bi imali live prikaz servera