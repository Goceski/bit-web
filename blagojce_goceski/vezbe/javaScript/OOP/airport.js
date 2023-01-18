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
        this.num = seatNumber;
        this.category = category;   // can be "b" for business or "e" for economy
        this.getData = function() {
            return `${this.num}, ${this.category}`;
        };
    }


    // constructor function Passenger
    function Passenger (person, seat) {
        // console.log(person);
        // console.log(person.getData());
        // console.log(seat);
        // console.log(seat.getData());
        this.getData = function() {
            return `${seat.getData()}, ${person.getData()}`;
        };
    }


    // constructor function Flight
    function Flight (relation, date) {
        this.relation = relation;
        this.date = new Date(date).toLocaleDateString('en-US');
        this.listOfPassengers = [];
        this.addPassenger = function(passenger) {
            this.listOfPassengers.push(passenger.getData());
            return this.listOfPassengers;
        };
        this.getData = function() {
            var data1 = '';
            for (let i = 0; i < this.listOfPassengers.length; i++) {
                data1 += `\n\t\t\t\t\t${this.listOfPassengers[i]}`;
            }

            return `\t${this.date}, ${this.relation}${data1}`;
        };
    }


    // constructor function Airport
    function Airport (name) {
        this.name = name;
        this.listOfFlights = [];
        this.addFlight = function(flight) {
            this.listOfFlights.push(flight);
            return this.listOfFlights;
        };
        this.getData = function() {
            var passengersTotal = 0;
            for (let i = 0; i < this.listOfFlights.length; i++) {
                passengersTotal += +this.listOfFlights[i].listOfPassengers.length;
            }

            var data2 = '';
            for (let i = 0; i < this.listOfFlights.length; i++) {
                data2 += `\n\t\t${this.listOfFlights[i].getData()}`;
            }

            return `\n\tAirport: ${this.name}, total passengers: ${passengersTotal}${data2}`;
        };
    }


    // var person1 = new Person('John', 'Doe');
    // console.log(person1);
    // console.log(person1.getData());


    // var seat1 = new Seat(25, 'e');
    // console.log(seat1);
    // console.log(seat1.getData());


    // ---------------------------------------------------------------
    // CREATE PASSENGER FUNCTION
    function createPassenger(firstName, lastName, seatNum, category) {
 
        var person = new Person (firstName, lastName);
        // console.log(person.getData());

        (function() { 
            if (!seatNum) {
                return seatNum = (Math.floor(Math.random() * (100 -10)) + 10);
            } else if (seatNum < 10 || seatNum > 100 || seatNum == NaN) {
                return "Wrong number";
            }   else {
                return seatNum;
            }
        })(seatNum);

        var cat = function() { 
            if (!category) {
                return "E";
            } else if (category == "e" || category == "b" || category == "E" || category == "B") {
                return category.toUpperCase();
            }   else {
                return "Wrong input";
            }
        };

        var seat = new Seat (seatNum, cat());
        // console.log(seat.getData());

        return new Passenger (person, seat);
    }
    // ---------------------------------------------------------------


    // PASSENGERS
    var passenger1 = createPassenger('John', 'Doe', 25, 'e');
    // console.log(passenger1);
    console.log('passenger1:', passenger1.getData());
    var passenger2 = createPassenger('Ana', 'Smith', 32, 'b');
    console.log('passenger2:', passenger2.getData());
    var passenger3 = createPassenger('Maria', 'Bright', 5, null);
    console.log('passenger3:', passenger3.getData());
    var passenger4 = createPassenger('Jenna', 'Pool', null, null);
    console.log('passenger4:', passenger4.getData());


    // ---------------------------------------------------------------
    // CREATE FLIGHT FUNCTION
    function createFlight(relation, date) {
        return new Flight (relation, date);
    }
    // ---------------------------------------------------------------


    // FLIGHTS
    var flight1 = createFlight('Belgrade - New York', '3/25/2023');
    var flight2 = createFlight('Barcelona - Belgrade', '5/10/2023');
    flight1.addPassenger(passenger1);
    flight2.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight1.addPassenger(passenger4);
    // console.log(flight1);
    console.log(flight1.listOfPassengers);
    // console.log(flight2);
    console.log(flight2.listOfPassengers);

    // console.log(flight1.getData());
    // console.log(flight2.getData());


    // AIRPORT
    var airport = new Airport ('Nikola Tesla');
    airport.addFlight(flight1);
    airport.addFlight(flight2);

    console.log(airport.listOfFlights);
    console.log(airport.getData());





})();
