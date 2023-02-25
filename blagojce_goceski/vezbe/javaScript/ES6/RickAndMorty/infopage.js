var elemID = localStorage.getItem("id");
var link = localStorage.getItem("link");
console.log(elemID);
console.log("Link infopage.html", link);
const url = `https://rickandmortyapi.com/api/character/${elemID}`;
console.log(url);

function characterInfo() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsObject) => {
      console.log("Response:", jsObject);

      // CONTAINER FOR INFO
      $("#pageInfo").append('<div id="container-info"></div>');
      $("#container-info").append('<div id="divleft"></div>');
      $("#container-info").append('<div id="divright"></div>');

      // CONTAINER DIV LEFT IMAGE
      $("#divleft").append(
        `<img src="${jsObject.image}" class="card-img-top" alt="No image"></img>`
      );

      // CONTAINER DIV RIGHT
      $("#divright").append(`<h5 id="title">Name: ${jsObject.name}</h3>`);
      $("#divright").append(`<h5 id="title">Gender: ${jsObject.gender}</h5>`);
      $("#divright").append(`<h5 id="title">Species: ${jsObject.species}</h5>`);
      $("#divright").append(`<h5 id="title">Status: ${jsObject.status}</h5>`);
      $("#divright").append(
        `<h5 id="title">Location: ${jsObject.location.name}</h5>`
      );
    })
    .catch((error) => {
      $(".error").text(`Greška: ${error}`);
    });
}

// DOCUMENT READY
$(document).ready(function () {
  characterInfo();

  // GO BACK ---------------------------------------
  if (
    window.performance &&
    window.performance.navigation.type ==
      window.performance.navigation.TYPE_BACK_FORWARD
  ) {
    localStorage.setItem("linkback", link);
    window.history.back();
  }
  // -----------------------------------------------
});
