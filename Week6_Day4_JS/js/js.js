
var addMovieButton = document.querySelector("#button");

var movies = [];

addMovieButton.addEventListener("click", onAddMovieClickHandler);

function onAddMovieClickHandler(event) {
    var movieData = collectFormData();

    //validacija podataka
    if (!movieData.title) {
        displayError("Please enter title!");
        return;
    }

    if (!movieData.length) {
        displayError("Please enter duration!");
        return;
    }

    if (document.querySelector("#select").value === "select") {
        displayError("Please enter genre!");
        return;
    }


    if (movieData.title && movieData.length && movieData.genre) {
        document.querySelector(".error").textContent = "";
    }

    var movie = new Movie(movieData.title, movieData.length, movieData.genre);

    movies.push(movie);

    displayMovies(movies);


}

function displayMovies(movies) {
    var movieList = document.querySelector(".movieList");


    for (var i = 0; i < movies.length; i++) {
        var item = document.createElement("li");
        item.textContent = movies[i].getDisplayText();

    }

    movieList.append(item);

    clearInputFields();

    totalLengthOfMovies(movies);

}

function clearInputFields() {

    var titleInput = document.querySelector("#title");
    var lengthInput = document.querySelector("#length");
    var genreSelect = document.querySelector("#select")

    titleInput.value = "";
    lengthInput.value = "";
    genreSelect.value = "select";

}


function totalLengthOfMovies(movies) {


    var total = 0;

    for (var i = 0; i < movies.length; i++) {
        total += parseInt(movies[i].length);
    }

    document.querySelector("#totalLength").textContent = "Total movie length: " + total + " min.";

}


function collectFormData() {

    var titleInput = document.querySelector("#title");
    var lengthInput = document.querySelector("#length");
    var genreSelect = document.querySelector("#select");

    var movieData = {
        title: titleInput.value,
        length: lengthInput.value,
        genre: genreSelect.value
    }


    return movieData;

}

function displayError(msg) {

    var errorElem = document.querySelector(".error");
    errorElem.textContent = msg;

}


class Genre {

    constructor(name) {
        this.name = name;
    }

    getShortGenre() {

        return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase();

    }
}


class Movie {

    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = new Genre(genre);
    }

    getDisplayText() {
        return `${this.title}, ${this.length} min, ${this.genre.getShortGenre()}`;
    }



}



