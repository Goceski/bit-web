// MOVIE FESTIVAL

'use strict';

(function() {
    console.log("Hi");

    // constructor function Genre
    function Genre (name) {
        this.name = name;
        this.getData = function() {
            var formatName = this.name[0].toUpperCase() + this.name[this.name.length-1].toUpperCase();
            return formatName;
        }    
    }


    // constructor function Movie
    // string = "Avatar, 130, SciFi";
    // string.split(", ");  =>  [Avatar, 130, SciFi]
    function Movie (input = '') {    
        var niz = input.split(", ");
        this.title = niz[0];
        this.genre = new Genre(niz[2]);
        this.length = +niz[1];
        this.getData = function() {
            return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
        }
    }


    // constructor function Program
    function Program (date) {
        this.date = new Date(date).toLocaleDateString('en-US');
        this.listOfMovies = [];
        this.totalNumberOfMovies = function() {
            // var totalNumberOfMovies = 0;
            // for (let i = 0; i < this.listOfMovies.length; i++) {
            //     totalNumberOfMovies++;
            // }
            // return totalNumberOfMovies;
            return this.listOfMovies.length;
        };
        this.addMovie = function(input) {
            this.listOfMovies.push(input);
            return this.listOfMovies;
        };
        this.getData = function() {
            var duration = 0;
            for (let i = 0; i < this.listOfMovies.length; i++) {
                duration+= this.listOfMovies[i].length;
            }

            var filmovi = '';
            for (let i = 0; i < this.listOfMovies.length; i++) {
                filmovi+= `\n\t\t\t\t\t\t${this.listOfMovies[i].getData()}`;
            }

            return `\t${this.date}, program length: ${duration}min ${filmovi}`;
        };
    }
    

    // constructor function Festival
    function Festival (name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMoviesInAllPrograms = function() {
            var totalNumber = 0;
            for (let i = 0; i < this.listOfPrograms.length; i++) {
                totalNumber += this.listOfPrograms[i].listOfMovies.length;
            }
            return totalNumber;          
        };
        this.addProgram = function(input) {
            this.listOfPrograms.push(input);
            return this.listOfPrograms;
        };
        this.getData = function() {
            var festival = '';
            for (let i = 0; i < this.listOfPrograms.length; i++) {
                festival += `\n\t\t${this.listOfPrograms[i].getData()}`;
            }

            return `\tFestival '${this.name}' has ${this.numberOfMoviesInAllPrograms()} movie titles ${festival}`;
        };
    }


 // ----------------------------------------------------------
    // funkcija za kreiranje filmova
    function createMovie(input = '') {
        if (!input || input.length == 0) {
            console.log("Wrong input");
        }
        return new Movie(input);
    }
 // ----------------------------------------------------------
    

    // inicijalizacija 'Filmova'
    var film1 = createMovie("Rambo, 130, Action");
    var film2 = createMovie("Avatar, 120, SciFi");
    var film3 = createMovie("Pleasure is mine, 90, Drama");
    var film4 = createMovie("Lionking, 75, Cartoon");
    // console.log(film1.getData());
    // console.log(film2.getData());
    // console.log(film1.getData());
    // console.log(film4.getData());


 // ----------------------------------------------------------
    // funkcija za kreiranje programa
    function createProgram(input = '') {
        if (!input || input.length == 0) {
            console.log("Wrong input");
        }
        return new Program(input);
    }
 // ----------------------------------------------------------


    // inicijalizacija 'Programa'
    var program1 = createProgram('3/25/2023');
    var program2 = createProgram('3/27/2023');


    // ubacivanje filmova u 'Program'
    program1.addMovie(film1);
    program1.addMovie(film2);
    program2.addMovie(film3);
    program2.addMovie(film4);
    // console.log(program1);
    // console.log(program2);
    // console.log(program1.totalNumberOfMovies());
    // console.log(program2.totalNumberOfMovies());


    // inicijalizacija 'Festivala'
    // dodavanje programa u festival
    var festival = new Festival('Zimsko Blejanje');
    festival.addProgram(program1);
    festival.addProgram(program2);
    // console.log(festival);

    // prikaz festivalskog programa
    console.log(festival.getData());
    


})();




