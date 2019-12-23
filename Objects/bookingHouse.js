"use strict";
(function () {

    var Continent = {
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        SOUTHAMERICA: "SA",
        NORTHAMERICA: "NA",
        AUSTRALIA: "AU"
    };

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    };
    Country.prototype.countryCode = function () {
        return (this.continent[0] + this.continent[1]).toUpperCase();
    }

    function Person(name, surname, dob) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dob);
    };
    Person.prototype.getData = function () {
        return this.name + " " + this.surname + this.dateOfBirth.getDay + "." + (this.dateOfBirth.getMonth + 1) + "." + this.dateOfBirth.getFullYear;
    };

    function Player(person, bet, country) {
        this.person = person;
        this.betAmount = bet;
        this.country = country;
    };
    Player.prototype.getData = function () {
        return "\t\t" + this.country.countryCode() + ", " + (this.country.odds * this.betAmount) + ", " + this.person.name + " " + this.person.surname + ", " + Math.floor(new Date().getFullYear() - this.person.dateOfBirth.getFullYear()) + " years";
    };

    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    };
    Address.prototype.getData = function () {
        return this.street + ", " + this.number + " " + this.postalCode + " " + this.city + ", " + this.country.countryCode();
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    };
    BettingPlace.prototype.getData = function () {
        var sumBets = 0;
        var result = "";
        for (var i = 0; i < this.listOfPlayers.length; i++) {
            result += this.listOfPlayers[i].getData() + "\n";
            sumBets += this.listOfPlayers[i].betAmount;
        };
        return "\t" + this.address.street + ", " + this.address.postalCode + " " + this.address.city + " sum of all bets: " + sumBets + "\n" + result;
    };
    BettingPlace.prototype.addPlayer = function (player) {
        this.listOfPlayers.push(player);
    };

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBetting = [];
        this.numberOfPlayers = 0;
    };
    BettingHouse.prototype.addPlace = function (place) {
        this.listOfBetting.push(place);
        this.numberOfPlayers++;
    }
    BettingHouse.prototype.getData = function () {
//to be implemented

    }

    function createPlayer(name, surname, dob, betAmount, countryName, odds, continent) {
        var pers = new Person(name, surname, dob);
        var country = new Country(countryName, odds, continent);

        return new Player(pers, betAmount, country);
    }

    function createBettingPlace(country, city, postalCode, street, number) {
        var address = new Address(country, city, postalCode, street, number);

        return new BettingPlace(address);
    }

    var betComp = new BettingHouse("World Cup");

    /* 
        var address1 = new Address("Serbia", "Belgrade", 11000, "Nemanjina", 2);
        var address2 = new Address("Serbia", "Novi Sad", 21000, "Zmaj Jovina", 12); */

    var betPlace1 = createBettingPlace("Serbia", "Belgrade", 11000, "Nemanjina", 2);
    var betPlace2 = createBettingPlace("Serbia", "Novi Sad", 21000, "Zmaj Jovina", 12);

    var player1 = createPlayer("Zika", "Zikic", "2.2.1982", 500, "Austria", 2, Continent.EUROPE);
    var player2 = createPlayer("Mika", "Jovic", "4.6.1987", 700, "Germany", 1.5, Continent.EUROPE);
    var player3 = createPlayer("Pera", "Peric", "5.11.1989", 1500, "Australia", 2.5, Continent.AUSTRALIA);
    var player4 = createPlayer("Laza", "Lazic", "12.12.1992", 200, "China", 5, Continent.ASIA);



    betComp.addPlace(betPlace1);
    betComp.addPlace(betPlace2);

    betPlace1.addPlayer(player1);
    betPlace1.addPlayer(player2);
    betPlace2.addPlayer(player3);
    betPlace2.addPlayer(player4);

    console.log(betPlace1.getData());
})()
