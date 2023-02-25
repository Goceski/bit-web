var elemID = sessionStorage.getItem("id");
console.log(elemID);
const url = "https://api.tvmaze.com/shows?q=";

function elemInfo() {
  var request = $.ajax({
    url: `${url}${elemID}`,
    method: "GET",
  });

  request.done(function (response) {
    if (!response) {
      alert("No results");
    }

    console.log(response);

    // TITLE
    $("#pageInfo").append(`<h1 id="title">${response.name}</h1>`);
    // CONTAINER FOR INFO
    $("#pageInfo").append('<div id="container-img-seasons-cast"></div>');
    $("#container-img-seasons-cast").append('<div id="divleft"></div>');
    $("#container-img-seasons-cast").append('<div id="divright"></div>');

    // SHOW DETAILS
    $("#pageInfo").append(
      '<h4 class="info-titles" id="show-details">Show Details</h4>'
    );
    $("#pageInfo").append(`${response.summary}`);

    // CONTAINER DIV LEFT IMAGE
    $("#divleft").append(
      `<img src="${response.image.medium}" class="card-img-top" alt="No image"></img>`
    );

    // CONTAINER DIV RIGHT
    $("#divright").append(`<div id="divup"></div>`);
    $("#divright").append(`<div id="divdown"></div>`);

    // SEASONS
    // https://api.tvmaze.com/shows/ID/seasons
    var requestSeasons = $.ajax({
      url: `https://api.tvmaze.com/shows/${elemID}/seasons`,
      method: "GET",
    });
    requestSeasons
      .done(function (response) {
        if (!response || response.length == 0) {
          $("#divup").append("<h4 class='info-titles'>No Seasons Info</h4>");
        } else {
          console.log(response);

          $("#divup").append(
            `<h4 class="info-titles" id="seasonstext">Seasons (${response.length})</h4>`
          );
          $("#divup").append(`<ul id="ulseasons"></ul>`);
          response.forEach(function (item) {
            $("#ulseasons").append(
              `<li>${item.premiereDate} - ${item.endDate}</li>`
            );
          });
        }
      })
      .fail()
      .always();

    // CAST
    // https://api.tvmaze.com/shows/ID/cast
    var requestCast = $.ajax({
      url: `https://api.tvmaze.com/shows/${elemID}/cast`,
      method: "GET",
    });
    requestCast
      .done(function (response) {
        if (!response || response.length == 0) {
          $("#divup").append("<h4 class='info-titles'>No Cast Info</h4>");
        } else {
          console.log(response);
          $("#divup").append(`<h4 class="info-titles">Cast</h4>`);
          $("#divup").append(`<ul id="ulcast"></ul>`);
          response.forEach(function (item) {
            $("#ulcast").append(`<li>${item.person.name}</li>`);
          });
        }
      })
      .fail()
      .always();

    // CREW
    // https://api.tvmaze.com/shows/ID/crew
    var requestCrew = $.ajax({
      url: `https://api.tvmaze.com/shows/${elemID}/crew`,
      method: "GET",
    });
    requestCrew
      .done(function (response) {
        if (!response || response.length == 0) {
          $("#divdown").append("<h4 class='info-titles'>No Crew Info</h4>");
        } else {
          console.log(response);
          $("#divdown").append(`<h4 class="info-titles">Crew</h4>`);
          $("#divdown").append(`<ul id="ulcrew"></ul>`);
          response.forEach(function (item) {
            $("#ulcrew").append(`<li>${item.person.name}</li>`);
          });
        }
      })
      .fail()
      .always();

    // AKA's
    // https://api.tvmaze.com/shows/ID/akas
    var requestAkas = $.ajax({
      url: `https://api.tvmaze.com/shows/${elemID}/akas`,
      method: "GET",
    });
    requestAkas
      .done(function (response) {
        if (!response || response.length == 0) {
          $("#divdown").append("<h4 class='info-titles'>No AKA's Info</h4>");
        } else {
          console.log(response);
          $("#divdown").append(`<h4 class="info-titles">AKA's</h4>`);
          $("#divdown").append(`<ul id="ulakas"></ul>`);
          response.forEach(function (item) {
            $("#ulakas").append(`<li>${item.name} - ${item.country.name}</li>`);
          });
        }
      })
      .fail()
      .always();

    // EPISODES
    // hhttps://api.tvmaze.com/shows/ID/episodes
    var requestEpisodes = $.ajax({
      url: `https://api.tvmaze.com/shows/${elemID}/episodes`,
      method: "GET",
    });
    requestEpisodes
      .done(function (response) {
        if (!response || response.length == 0) {
          $("#pageInfo").append(
            "<h4 class='info-titles'>No Episodes Info</h4>"
          );
        } else {
          console.log(response);
          $("#pageInfo").append(
            '<h4 class="info-titles" id="episodes">Episodes</h4>'
          );
          $("#episodes").append(`<ul id="ulepisodes"></ul>`);
          response.forEach(function (item) {
            $("#ulepisodes").append(
              `<li>Season: ${item.season} - Episode name: ${item.name}</li>`
            );
          });
        }
      })
      .fail()
      .always();
  });

  request.fail(function () {
    alert("Failed to connect BitShow API");
  });

  request.always(function () {
    console.log("Successful");
  });
}

// DOCUMENT READY
$(document).ready(function () {
  elemInfo();

  // SEARCH + ENTER
  $("#textsearch2").on("keypress", function (e) {
    if (e.key === "Enter") {
      var searhText = $("#textsearch2").val();
      indexPage(`${searhText}`);
      e.preventDefault();
    }
  });

  // GO BACK ---------------------------------------
  if (
    window.performance &&
    window.performance.navigation.type ==
      window.performance.navigation.TYPE_BACK_FORWARD
  ) {
    window.history.back();
  }
  // -----------------------------------------------
});

function indexPage(input) {
  // PROSLEDJIVANJE SEARCHTEXT NA STRANICI INFOPAGE
  sessionStorage.setItem("searchtext", input);
  window.location = "./index.html";
}
