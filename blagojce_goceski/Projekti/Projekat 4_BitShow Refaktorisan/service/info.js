////////////////////////////////////////////////////
// ----------------- INFO PAGE -------------------//
////////////////////////////////////////////////////
export function elemInfo(inputID) {
  const urlSingle = "https://api.tvmaze.com/shows/";

  $(".cardholder").hide();
  $(".pageInfo").show();
  $(".input-text").hide();

  fetch(`${urlSingle}${inputID}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("InfoID response", response);

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
        `<img src="${response.image.original}" class="card-img-top" alt="No image"></img>`
      );

      // CONTAINER DIV RIGHT
      $("#divright").append(`<div id="divup"></div>`);
      $("#divright").append(`<div id="divdown"></div>`);

      // SEASONS
      // https://api.tvmaze.com/shows/ID/seasons
      fetch(`${urlSingle}${inputID}/seasons`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
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
        .catch((error) => {
          console.log(error);
        });

      // CAST
      // https://api.tvmaze.com/shows/ID/cast
      fetch(`${urlSingle}${inputID}/cast`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
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
        .catch((error) => {
          console.log(error);
        });

      // CREW
      // https://api.tvmaze.com/shows/ID/crew
      fetch(`${urlSingle}${inputID}/crew`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
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
        .catch((error) => {
          console.log(error);
        });

      // AKA's
      // https://api.tvmaze.com/shows/ID/akas
      fetch(`${urlSingle}${inputID}/akas`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (!response || response.length == 0) {
            $("#divdown").append("<h4 class='info-titles'>No AKA's Info</h4>");
          } else {
            console.log(response);
            $("#divdown").append(`<h4 class="info-titles">AKA's</h4>`);
            $("#divdown").append(`<ul id="ulakas"></ul>`);
            response.forEach(function (item) {
              $("#ulakas").append(
                `<li>${item.name} - ${item.country.name}</li>`
              );
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });

      // EPISODES
      // hhttps://api.tvmaze.com/shows/ID/episodes
      fetch(`${urlSingle}${inputID}/episodes`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
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
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
      console.log("Failed to connect BitShow API");
    });
}
