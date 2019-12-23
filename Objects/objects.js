<<<<<<< HEAD
/* 1. Create an object that represents your favourite coffee.Please include coffee name, strength, flavour
=======
"use strict";

/* 1. Create an object that represents your favorite coffee.Please include coffee name, strength, flavour
>>>>>>> js_exercises
, milk, sugar, … everything you like! */

var coffee = {
    coffee_name: "espresso",
    coffee_strength: "strong",
    coffee_flavour: "classic",
    coffee_milk: "no",
    sugar: "yes"
};

console.log(coffee);

/* 2. Create an object that represents your favorite movie. Please include title, actors, director, genre, popularity.  */

var movie = {
    movie_title: "Star Wars",
    movie_actors: "Harrison Ford",
    director: "George Lucas",
    genre: "Science Fiction",
    popularity: "very"
};

console.log(movie);

/* 3. Write a function that creates an object that represent a computer program. Each program is described by: 
description,  programming language, git repository, boolean status that says if the program is completed or not. 
Add a method that prints out program’s repository,  
a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not. */

function createProgram(a, b, c, d) {

    var program = {
        description: a,
        programming_language: b,
        git_repository: c,
        isCompleted: d
    };

    return program;
}

function printRepository(input) {

    console.log(input.git_repository);
}

var compProgram = createProgram("blabla", "csharp", "bitpp", "true");

printRepository(compProgram);

function checkIfJS(obj) {

    if (obj.programming_language === "JavaScript") {
        return true;
    }

    return false;

}

function checkIfCompleted(obj) {

    if (obj.isCompleted) {
        return true;
    }

    return false;

}


console.log(checkIfJS(compProgram));

console.log(checkIfCompleted(compProgram));


/* 4. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine,
complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
Add a method that prints out all the ingredients necessary for the meal preparation.
Add a method that checks if a meal can be prepared for 15 minutes.
Add a method that changes the type of cuisine to the given value.
Add a method that delete a given ingredient from the list of ingredients. */

function createCulinaryRecipe(a, b, c, d, e, f) {
    return {
        name: a,
        type_of_cuisine: b,
        complexity: c,
        listOfIngr: d,
        preparing_time: e,
        preparing_instruction: f,
<<<<<<< HEAD
=======

        printIngr: function() {
            console.log(this.listOfIngr);
        },

>>>>>>> js_exercises
        changeType: function (newType) {
            this.type_of_cuisine = newType;
        },
        checkIfFifteen: function () {
            if (this.preparing_time <= 15) {
                return true;
            }

            return false;
        },

        deleteIngr: function (broj) {
            delete (this.listOfIngr[broj]);
            this.listOfIngr[broj] = "";
        }
    };
}

<<<<<<< HEAD
var salata = createCulinaryRecipe("shopska salata", "salade", "1", ["tomatoes", "cheese", "cucumbers", "onions"], "10 minutes", "mix tomatoes, cheese, cucumbers, and onions");

console.log(salata);
salata.changeType('dessert');
console.log(salata);
salata.deleteIngr(1);
console.log(salata);
=======
var salade = createCulinaryRecipe("shopska salata", "salade", "1", ["tomatoes", "cheese", "cucumbers", "onions"], 15, "mix tomatoes, cheese, cucumbers, and onions");

console.log(salade);
salade.changeType('dessert');
console.log(salade);
salade.deleteIngr(1);
console.log(salade);
>>>>>>> js_exercises

/* 5. Write a function that creates an object that represent a computer program. Each program is described by:
description,  programming language, git repository, boolean status that says if the program is completed or not.
Add a method that prints out program’s repository,
a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not. */

function computerProgram(desc, progrLanguage, gitRep, status) {

    this.description = desc;
    this.programmingLanguage = progrLanguage;
    this.gitRepository = gitRep;
    this.isCompleted = status;

    this.printRepository = function () {
        console.log(this.gitRepository);
    }

    this.checkIfJavaScript = function () {
        if (this.programmingLanguage === "JavaScript") {
            return true;
        }
        return false;
    }

    this.isCompleted = function () {
        if (this.isCompleted === true) {
            return true;
        }
        return false
    }


    this.setDescription = function (desc) {
        this.description = desc;
    }
    /*
        this.changeProperty = function (prop, value) {
            this[prop] = value;
            */
}

var jedanProgram = new computerProgram("Lep program", "Java", "bit_pp_Java", "true");

jedanProgram.printRepository();

jedanProgram.isCompleted = false;

jedanProgram.setDescription("Ne lep program");

console.log(jedanProgram);

/* 6. Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine,
complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
Add a method that prints out all the ingredients necessary for the meal preparation.
Add a method that checks if a meal can be prepared for 15 minutes.
Add a method that changes the type of cuisine to the given value.
Add a method that delete a given ingredient from the list of ingredients. */

<<<<<<< HEAD
=======

function culinaryRecipe(name, typeOfCuisine, complexity, listOfIngr, prepareTime, prepareInstr) {

    this.name = name;
    this.typeOfCuisine = typeOfCuisine;
    this.complexity = complexity;
    this.listOfIngr = listOfIngr;
    this.prepareTime = prepareTime;
    this.prepareInstr = prepareInstr;

    this.printIngr = function () {
        console.log(this.listOfIngr);
    },

    this.checkIfFifteen = function () {
        if (this.prepareTime <= 15) {
            return true;
        }

        return false;
    },

    this.changeType = function (newType) {
        this.typeOfCuisine = newType;
    },

    this.deleteIngr = function (broj) {
        delete (this.listOfIngr[broj]);
        this.listOfIngr[broj] = "";
    }
}

var salata = new culinaryRecipe("srpska salata", "salade", "1", ["tomatoes", "cheese", "cucumbers", "onions"], 15, "mix tomatoes, cheese, cucumbers, and onions");

console.log(salata);

salata.changeType("aperitif");

console.log(salata);
>>>>>>> js_exercises
