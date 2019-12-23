'use strict';

Array.prototype.last = function (){
    return this[this.length - 1];
} 

var dataModule = (function () {

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function(){
        return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
    }

    var genreNameList = ["Action", "Comedy", "Drama", "Horror"];
    var genreList = [];

    function generateGenreObj(genreNameList){
        for (var i = 0; i < genreNameList.length; i++) {
            genreList.push(new Genre(genreNameList[i]));
        }
    }

    generateGenreObj(genreNameList);

    function Movie(genre, name, length) {
        this.genre = genre;
        this.name = name;
        this.length = length;
    }
    Movie.prototype.getData = function () {
        return this.name + " " + this.length + "min " + this.genre.getData();
    };

    function createMovie(movie) {
        movieList.push(new Movie(genreList[movie.genreIndex], movie.name, movie.length));
    }

    function Program(date, name) {
        this.name = name;
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = 0;
        this.durationOfProgram = 0;
    }

    Program.prototype.getData = function(){
        return `Name: ${this.name} Number of movies: ${this.numberOfMovies} Duration: ${this.durationOfProgram}`
    }

    Program.prototype.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.numberOfMovies++;
        this.durationOfProgram += parseInt(movie.length);
    };

    function createProgram(program){
        programList.push(new Program(program.date, program.name))
    }

    var movieList = [];
    var programList = [];

    var lists = {
        genre: genreList,
        movie: movieList,
        program: programList
    }

    return {
        lists: lists,
        createMovie: createMovie,
        createProgram: createProgram
    }

})();

var uiModule = (function () {

    var $titleInput = $('#movieTitle');
    var $lengthInput = $('#movieLength');

    var $genreSelect = $('#movieGenre');

    function generateGenreOptions(genreList){
        for(var i = 0; i < genreList.length; i++){
            var $genreOption = $('<option>').text(genreList[i].name);
            $genreOption.attr('value', i);
            $genreSelect.append($genreOption);
        }
    }

    function getMovieData() {
        var title = $titleInput.val();
        var length = $lengthInput.val();
        var genreIndex =  $genreSelect.val();       
        
        return {
            name: title,
            length: length,
            genreIndex: genreIndex
        }
    }

    var $movieOptions = $('#movieOptions');

    function updateMovieList(movie, value){
        var $movieOption = $('<option>');
        $movieOption.attr("value", value);
        $movieOption.text(movie.name);

        $movieOptions.append($movieOption)
    }

    var $movieList = $('#movieList');

    function displayMovie(movie){
        var $movieInfo = $('<li>').text(movie.getData());
        $movieList.append($movieInfo);
    }

    var $programName = $('#programName');
    var $programDate = $('#programDate');

    function getProgramData(){
        var name = $programName.val();
        var date = $programDate.val();

        return {
            name: name,
            date: date
        }
    }

    var $programOptions = $('#programOptions');

    function updateProgramOptions(program, value){
        var $programOption = $('<option>');
        $programOption.attr("value", value);
        $programOption.text(program.name);

        $programOptions.append($programOption)
    }

    var $programList = $('#programList');

    function displayProgram(program){
        var $programInfo = $('<li>').text(program.getData());
        $programList.append($programInfo);

        return $programInfo;
    }

    function updateDisplayProgram(program, programIndex){ 
        var $programInfo = $(`#programList li:eq(${programIndex})`);       
        $programInfo.replaceWith(displayProgram(program));          
    }

    function getAddMovieData(){
        return {
            movie: $movieOptions.val(),
            program: $programOptions.val()
        }
    }

    return {
        generateGenreOptions: generateGenreOptions,
        getMovieData: getMovieData,
        updateMovieList: updateMovieList,
        displayMovie: displayMovie,
        getProgramData: getProgramData,
        updateProgramOptions: updateProgramOptions,
        displayProgram: displayProgram,
        getAddMovieData: getAddMovieData,
        updateDisplayProgram: updateDisplayProgram
    }
})();

var controllerModule = (function (data, ui) {
    
    ui.generateGenreOptions(data.lists.genre);
    
    var $createMoviBtn = $('#createMovieBtn');

    $createMoviBtn.click(function(){
        data.createMovie(ui.getMovieData());
        ui.updateMovieList(data.lists.movie.last(), data.lists.movie.length - 1);
        ui.displayMovie(data.lists.movie.last());
    });

    var $createProgramBtn = $('#createProgramBtn');

    $createProgramBtn.click(function(){
        data.createProgram(ui.getProgramData());
        ui.updateProgramOptions(data.lists.program.last(), data.lists.program.length - 1);
        ui.displayProgram(data.lists.program.last());
    });

    var $addMovieBtn = $('#addMovieToProgram');
    
    $addMovieBtn.click(function(){        
        var indexValues = ui.getAddMovieData();       
        
        data.lists.program[indexValues.program].addMovie(data.lists.movie[indexValues.movie]);
        ui.updateDisplayProgram(data.lists.program[indexValues.program], indexValues.program);
    })

})(dataModule, uiModule);