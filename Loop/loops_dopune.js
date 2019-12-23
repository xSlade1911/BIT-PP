//stampa na ekranu zvezdice samo u prvom i poslednjem redu, u ostalim redovima stampa crtice

var size = 6;
var shape = '';

for (var row = 0; row < size; row++) {
    var char = '* ';

    if (row !== 0 && row != size - 1) {
        char = '- ';
    }

    for (var j = 0; j < size; j++) {
        shape += char;
    }
    shape += '\n';
}
console.log(shape);