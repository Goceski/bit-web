// AIRPORT

'use strict';

(function() {
    console.log("Hi");


    // constructor function Person
    function Person (name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function() {
            return `${this.name} ${this.surname}`;
        };
    }


    // constructor function Seat
    function Seat (seatNumber, category) {
        // const prompt = require("prompt-sync")(); // Da bi radio prompt()
        // var seatNumber = prompt("Seat number:");
        // var category = prompt("Category ('b' - business or 'e' - economy):");
        this.num = function() {
            if (!seatNumber) {
                return this.num = (Math.floor(Math.random() * (100 -10)) + 10);
            } else if (seatNumber < 10 || seatNumber > 100 || seatNumber == NaN) {
                return "Wrong number";
            }   else {
                return this.num = seatNumber;
            }
        };
        this.category = function() {
            if (!category) {
                return this.category = "E";
            } else if (category == "e" || category == "b" || category == "E" || category == "B") {
                return this.category = category.toUpperCase();
            }   else {
                return "Wrong input";
            }
        };   // can be "b" for business or "e" for economy
        this.getData = function() {
            return `${this.num()}, ${this.category()}`;
        };
    }


    // constructor function Passenger
    function Passenger (passenger, seat) {
        // console.log(passenger);
        // console.log(passenger.getData());
        // console.log(seat);
        // console.log(seat.getData());
        this.getData = function() {
            return `${seat}, ${passenger}`;
        };
    }


    // constructor function Flight
    function Flight (relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
    }


    // constructor function Airport
    function Airport (name) {
        this.name = name;
        this.listOfFlights = [];
    }








var person1 = new Person('John', 'Doe');
// console.log(person1);
console.log(person1.getData());


var seat1 = new Seat(null, null);
// console.log(seat1);
// console.log(seat1.number());
// console.log(seat1.category());
console.log(seat1.getData());


var passenger1 = new Passenger(person1, seat1);
console.log(passenger1);
// console.log(passenger1.getData());




})();


