// BOOKMAKER'S

'use strict';

(function() {

    // constructor function Country
    function Country (name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent; // (EU, AS, AF, SA, NA, AU)
    }


    // constructor function Person
    function Person (name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth).toLocaleDateString('en-US');
        this.formatName = function() {
            return `${this.name} ${this.surname} ${this.dateOfBirth}`;
        };
    }

    // var person1 = new Person ('Blazo', 'Goceski', '3/25/2003')
    // console.log(person1.formatName());
    // console.log(person1);


    // constructor function Player
    function Player (bet, amount) {
        this.bet = bet;
        this.amount = amount;
        this.formatPlayer = function(person) {
            
        };
    }


    // constructor function Address
    function Address (country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.formatAddress = function() {
            return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country}`;
        };
    }

    // var address1 = new Address ('SR', 'Beograd', 11000, 'Nemanjina', 4);
    // console.log(address1.formatAddress());
    // console.log(address1);


    // constructor function BettingPlace
    function BettingPlace (address) {
        this.address = address;
        this.listOfPlayers = [];
    }


    // constructor function BettingHouse
    function BettingHouse (competition, numberOfPlayers) {
        this.competition = competition;
        this.bettingPlaces = [];
        this.numberOfPlayers = numberOfPlayers;
    }



    const asia = 'ASIA';
    const europe = 'EUROPE';
    const australia = 'AUSTRALIA';
    const southAmerica = 'SOUTH AMERICA';
    const northAmerica = 'NORTH AMERICA';
    const africa = 'AFRICA';










})();
