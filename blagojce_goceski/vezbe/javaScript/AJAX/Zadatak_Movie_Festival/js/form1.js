// MOVIE FESTIVAL
// "use strict";

// DOCUMENT READY
$(document).ready(function () {
  $("#hidden").hide();
});

// NIZ ZA SKLADISTENJE FILMOVA
var totalMovies = [];

// NIZ ZA SKLADISTENJE PROGRAMA
var totalPrograms = [];

// ONCLICK FUNCTION
function createMovie(event) {
  $("#hidden").show();
  // KREIRANJE FILMOVA
  var movieTitle = $(".movie-title").val();
  var movieLength = $(".movie-length").val();
  var movieGenre = $(".genre-select").val();
  //   console.log(movieTitle);
  //   console.log(movieLength);
  //   console.log(movieGenre);
  if (!movieTitle || movieTitle.length == 0 || !movieLength || !movieGenre) {
    $(".movie-error").text("All fields are required");
  }

  var newMovie = new Movie(`${movieTitle}, ${movieLength}, ${movieGenre}`);
  //   console.log(newMovie);
  //   console.log(newMovie.getData());
  for (let i = 0; i < totalMovies.length; i++) {
    if (newMovie.title == totalMovies[i].title) {
      return $(".movie-error").text("Movie is already in the list");
    }
  }
  $(".movie-error").text("");
  totalMovies.push(newMovie);
  console.log(totalMovies);

  // MOVIE LIST PLACEHOLDER
  $(".movie-list").html("");
  $(".movie-list").append('<ul class="listOfMovies"></ul>');
  for (let i = 0; i < totalMovies.length; i++) {
    $(".listOfMovies").append(`<li>${totalMovies[i].getData()}</li>`);
  }

  // CLEAR INPUT FIELDS
  if (document.getElementById("title").value != "") {
    document.getElementById("title").value = "";
  }
  if (document.getElementById("length").value != "") {
    document.getElementById("length").value = "";
  }
  $("#genre-select").val($("#genre-select option:first").val());
}

// ONCLICK FUNCTION - KREIRANJE PROGRAMA
function createProgram(event) {
  var programDate = $(".program-date").val();
  if (!programDate) {
    $(".program-error").text("Date is required");
  }

  var newProgram = new Program(programDate);
  totalPrograms.push(newProgram);
  console.log(totalPrograms);

  // PROGRAM LIST PLACEHOLDER
  $(".program-list").html("");
  $(".program-list").append('<ul class="listOfPrograms"></ul>');
  for (let i = 0; i < totalPrograms.length; i++) {
    $(".listOfPrograms").append(`<li>${totalPrograms[i].getData()}</li>`);
  }

  // MOVIE SELECT PLACEHOLDER
  for (let i = 0; i < totalMovies.length; i++) {
    $(".movie-select").append(`<option>${totalMovies[i].getData()}</option>`);
  }

  // PROGRAM SELECT PLACEHOLDER
  for (let i = 0; i < totalPrograms.length; i++) {
    $(".program-select").append(
      `<option>${totalPrograms[i].getData()}</option>`
    );
  }

  // CLEAR INPUT FIELDS
  $("input[type=date]").val("");
}

// ONCLICK FUNCTION - ADD MOVIE TO PROGRAM
function addMovieToProgram(event) {
  var selectedMovie = $(".movie-select").val().split(", ");
  var selectedProgram = $(".program-select").val().split(", ");
  console.log(selectedMovie);
  console.log(selectedProgram);
  console.log(totalMovies);
  console.log(totalPrograms);

  // VEZA IZABRANOG FILMA SA OBJEKTOM IZ NIZA SA FILMOVIMA
  for (let i = 0; i < totalMovies.length; i++) {
    // console.log(totalMovies[i].title);
    // console.log(selectedMovie[0]);
    if (totalMovies[i].title == selectedMovie[0]) {
      var film = totalMovies[i];
      console.log("Izabrani film:", film);
    }
  }

  // VEZA IZABRANOG PROGRAMA SA OBJEKTOM IZ NIZA SA PROGRAMIMA
  for (var j = 0; j < totalPrograms.length; j++) {
    var dateArray = totalPrograms[j].date.split("/");
    var dateString = `${dateArray[1]}.${dateArray[0]}.${dateArray[2]}`;
    // console.log(dateString);
    // console.log(selectedProgram[0]);
    // console.log(dateString == selectedProgram[0]);
    if (dateString == selectedProgram[0]) {
      var prog = totalPrograms[j];
      console.log("Izabrani program", prog);
    }
  }

  // PROVERA DA LI JE FILM VEC UBACEN U PROGRAM
  var movieInProgram = false;
  var lista = prog.listOfMovies;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].title == film.title) {
      movieInProgram = true;
      console.log("movieInProgram:", movieInProgram);
      console.log("Film je vec u programu");
      console.log(prog.listOfMovies);
    }
  }

  if (movieInProgram == false) {
    console.log("movieInProgram:", movieInProgram);
    prog.addMovie(film);
    console.log(prog.listOfMovies);
  }

  // PROGRAM LIST PLACEHOLDER
  $(".program-list").html("");
  $(".program-list").append('<ul class="listOfPrograms"></ul>');
  $(".listOfPrograms").append(`<li>${prog.getData()}</li>`);
}
