// MOVIE FESTIVAL CONSTRUCTORS

// Constructor function Genre
function Genre(name) {
  this.name = name;
  this.getData = function () {
    var formatName =
      this.name[0].toUpperCase() +
      this.name[this.name.length - 1].toUpperCase();
    return formatName;
  };
}

// Constructor function Movie
// string = "Avatar, 130, SciFi";
// string.split(", ");  =>  [Avatar, 130, SciFi]
function Movie(input = "") {
  var niz = input.split(", ");
  this.title = niz[0];
  this.genre = new Genre(niz[2]);
  this.length = +niz[1];
  this.getData = function () {
    return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
  };
}
// inicijalizacija 'Filmova'
//   var film1 = createMovie("Rambo, 130, Action");
//   var film2 = createMovie("Avatar, 120, SciFi");
//   var film3 = createMovie("Pleasure is mine, 90, Drama");
//   var film4 = createMovie("Lionking, 75, Cartoon");

// Constructor function Program
function Program(date) {
  this.date = new Date(date).toLocaleDateString("en-US");
  this.listOfMovies = [];
  this.totalNumberOfMovies = function () {
    return this.listOfMovies.length;
  };
  this.addMovie = function (input) {
    this.listOfMovies.push(input);
    return this.listOfMovies;
  };
  this.getData = function () {
    var duration = 0;
    for (let i = 0; i < this.listOfMovies.length; i++) {
      duration += this.listOfMovies[i].length;
    }

    var filmovi = "";
    for (let i = 0; i < this.listOfMovies.length; i++) {
      filmovi += `\n\t\t\t\t\t\t${this.listOfMovies[i].getData()}`;
    }

    // Data format
    let dateArray = this.date.split("/");
    let dateString = `${dateArray[1]}.${dateArray[0]}.${dateArray[2]}`;

    // Return options
    if (this.listOfMovies.length == 0) {
      return `\t${dateString}, program duration: TBA`;
    } else if (this.listOfMovies.length == 1) {
      return `\t${dateString}, ${this.listOfMovies.length} movie, duration: ${duration}min`;
    } else {
      return `\t${dateString}, ${this.listOfMovies.length} movies, duration: ${duration}min`;
    }
  };
}

// Constructor function Festival
function Festival(name) {
  this.name = name;
  this.listOfPrograms = [];
  this.numberOfMoviesInAllPrograms = function () {
    var totalNumber = 0;
    for (let i = 0; i < this.listOfPrograms.length; i++) {
      totalNumber += this.listOfPrograms[i].listOfMovies.length;
    }
    return totalNumber;
  };
  this.addProgram = function (input) {
    this.listOfPrograms.push(input);
    return this.listOfPrograms;
  };
  this.getData = function () {
    var festival = "";
    for (let i = 0; i < this.listOfPrograms.length; i++) {
      festival += `\n\t\t${this.listOfPrograms[i].getData()}`;
    }

    return `\tFestival '${
      this.name
    }' has ${this.numberOfMoviesInAllPrograms()} movie titles ${festival}`;
  };
}
