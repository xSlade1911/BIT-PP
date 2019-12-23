"use strict";

function Person(name, surname) {
    this.name = name;
    this.surname = surname;

}

Person.prototype.getData = function () {
    return this.name + ' ' + this.surname;
}

function Seat(number, category) {
    this.number = number || Math.round(10 + 90 * Math.random());
    this.category = category || 'e';
}

Seat.prototype.getData = function () {
    return 'seat: ' + this.number + ', ' + this.category + ' class';
}

function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

}

Passenger.prototype.getData = function () {
    return '\t\t' + this.person.getData() + '\n' + '\t\t' + this.seat.getData();
}

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];

}

Flight.prototype.addPassenger = function (passenger) {

    this.listOfPassengers.push(passenger);

}

Flight.prototype.getData = function () {
    var result = "";
    result += "\t";
    result += this.formatDate() + ', ' + this.relation + '\n';
    for (var i = 0; i < this.listOfPassengers.length; i++) {
        result += this.listOfPassengers[i].getData();
        result += "\n";
    }

    return result;

}

Flight.prototype.formatDate = function () {
    var datestring = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear();

    return datestring;

}


/* Add getData method to Flight. It should return a formatted string 
containing a date, relation, all data related to the flight and list 
of passengers with their data.
25.10.2017, Belgrade - Paris
		1, B, John Snow
        2, E, Cersei Lannister */


function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];

}


Airport.prototype.addFlight = function (flight) {

    this.listOfFlights.push(flight);

}

Airport.prototype.totalPassengers = function () {
    var total = 0;

    for (var i = 0; i < this.listOfFlights.length; i++) {
        total += this.listOfFlights[i].listOfPassengers.length;
    }

    return total;

}

Airport.prototype.getData = function () {
    var result = "";

    result = "Airport: " + this.name + ", total passengers : " + this.totalPassengers() + "\n";

    for (var i = 0; i < this.listOfFlights.length; i++) {
        var flight = this.listOfFlights[i];
        result += flight.getData();
    }

    return result;

}



/* var pera = new Person('Pera', 'Peric');
var zika = new Person('Zika', 'Zikic');

var a1 = new Seat(1, 'first');
var a2 = new Seat(2, 'first');

var p1 = new Passenger(pera, a1);
var p2 = new Passenger(zika, a2);

var res1 = p1.getData();
var res2 = p2.getData();

console.log(res1);
console.log(res2); */


/* Add addPassenger method to Flight. It should receive Passenger and add
the passenger to the passenger list of a given flight.  */

/* Add addFlight method to Airport.
It should add the flight to the list of flights of the airport. */

/* Inside your immediately-invoking function, add createFlight function 
that receives a relation (ex. Belgrade - New York) and date as 
parameters and returns a created Flight.

Inside your immediately-invoking function, add createPassenger function 
that receives a first name, last name, seat number and category and 
returns a created Passenger. */

function createFlight(relation, day, month, year) {

    var dateStr = month + "-" + day + "-" + year;
    var date = new Date(dateStr);
    return new Flight(relation, date);

}


function createPassenger(firstName, lastName, seatNumber, category) {
    var newSeat = new Seat(seatNumber, category);
    var newPerson = new Person(firstName, lastName);

    return new Passenger(newPerson, newSeat);

}


/* In you main program function, create an instance of the Airport object.  */

var airport = new Airport();


/* Create two instances of the Flight object using the createFlight function and the following data:
relation: "Belgrade - New York" 		date: "Nov 16 2019"
relation: "Barcelona - Belgrade" 		date: "Dec 21 2019" */

var flight1 = createFlight("Belgrade - New York", 16, 11, 2019);
var flight2 = createFlight("Barcelona - Belgrade", 21, 12, 2019);

/*
Create four instances of the Passenger object using the createPassenger function with the following data:
Name: "John" 	surname: "Snow" 		seat number: 1		category: "b"
Name: "Cersei" 	surname: "Lannister" 	seat number: 2		category: "b"
Name: "Daenerys" 	surname: "Targaryen" 	seat number: 14
Name: "Tyrion" 	surname: "Lannister" 	 */

var passenger1 = createPassenger("John", "Snow", 1, "b");
var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");

var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
var passenger4 = createPassenger("Tyrion", "Lannister");

/* 
Add the first two passengers to the first flight and the second two to the
second flight using the Flight’s addPassenger method.

Add the created flight instances to the airport using Airport’s addFlight
method.
 */

flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);

flight2.addPassenger(passenger3);
flight2.addPassenger(passenger4);

airport.addFlight(flight1);
airport.addFlight(flight2);

/*  Call Airport’s getData method to display the airport data output in the 
 following manner: */

/*  Airport: Nikola Tesla, total passengers: 4
     25.10.2017, Belgrade - Paris
         1, B, John Snow
         2, E, Cersei Lannister
     11.11.2017, Barcelona - Belgrade
         3, E, Daenerys Targaryen
         4, E, Tyrion Lannister
 */

var output = airport.getData();

console.log(output);


