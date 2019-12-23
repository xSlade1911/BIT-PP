"use strict";

function Genre(name) {
    this.name = name;

}

Genre.prototype.getData = function () {

    return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase();

}



function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

}


Movie.prototype.getData = function () {

    return this.title + ", " + this.length + "min, " + this.genre.getData();

}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];

}

Program.prototype.addMovie = function (Movie) {

    this.listOfMovies.push(Movie);

}

Program.prototype.formatDate = function () {
    var datestring = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear();

    return datestring;

}


Program.prototype.getData = function () {
    var totalLength = 0;
    var result = "";

    for (var i = 0; i < this.listOfMovies.length; i++) {
        totalLength += this.listOfMovies[i].length;
    }

    result += "\t\t";
    result += this.formatDate() + ", program duration " + totalLength + " min \n";

    for (var i = 0; i < this.listOfMovies.length; i++) {
        var movie = this.listOfMovies[i]
        result += "\t\t\t\t";
        result += movie.getData();
        result += "\n";
    }

    return result;

}

function Festival(name) {
    this.name = name || "Movie festival";
    this.listOfPrograms = [];
    this.festivalTotalNumberOfMovies = 0;
}

Festival.prototype.getData = function () {
    var result = "";

    result = this.name + " has " + this.festivalTotalNumberOfMovies + " movie titles\n";

    for (var i = 0; i < this.listOfPrograms.length; i++) {
        var program = this.listOfPrograms[i]
        result += program.getData();
        result += "\n";
    }

    return result;

}

Festival.prototype.addProgram = function (program) {
    this.listOfPrograms.push(program);
    this.festivalTotalNumberOfMovies += program.listOfMovies.length;
}



function createMovie(title, length, genreStr) {

    var genre = new Genre(genreStr);
    var movie = new Movie(title, genre, parseInt(length));
    return movie;

}

function createProgram(day, month, year) {

    var dateStr = month + "-" + day + "-" + year;
    var date = new Date(dateStr);


    return new Program(date);

}


var fest = new Festival("Cannes festival");

var program1 = createProgram(22, 1, 2020);
var program2 = createProgram(23, 1, 2020);


var movie1 = createMovie("Underground", '122', "Drama");
var movie2 = createMovie("Star Wars", '140', "Sci-Fi");
var movie3 = createMovie("Lord of the rings", '160', "Adventure");
var movie4 = createMovie("Indiana Jones", '110', "Action");

program1.addMovie(movie1);
program1.addMovie(movie2);

program2.addMovie(movie3);
program2.addMovie(movie4);

fest.addProgram(program1);
fest.addProgram(program2);

var programOfFestival = fest.getData();
console.log(programOfFestival);

