const url = "https://rickandmortyapi.com/api/character?page=";
const cardHolder = $(".cardholder");
const linkback = localStorage.getItem("link");
var arrayLiked = [];

function rickAndMorty(input = 1) {
  fetch(`${url}${input}`)
    .then((response) => {
      return response.json();
    })
    .then((jsObject) => {
      console.log("Response:", jsObject);
      console.log("Response.Results:", jsObject.results);
      console.log("Next page:", jsObject.info.next);

      cardHolder.html("");
      jsObject.results.forEach(function (item) {
        var image;
        if (item.image === null) {
          image = "./istockphoto-1147544807-612x612.jpg";
        } else {
          image = item.image;
        }
        var newCard = $(
          `<div class="kartica">
              <div class="card" style="width:15rem">
                  <img src="${image}" class="card-img-top" onclick="infoPage(${
            item.id
          }, ${$("#page3").text()})" alt="No image">
                  <div class='card-body'>
                      <p class="card-text" onclick="infoPage(${item.id})">${
            item.name
          }</p>
                      <button type="button" id="${
                        item.id
                      }"  class="btn btn-success dugmelike" onclick="like(id)"><i class="fa-regular fa-thumbs-up"></i> Like</button>
                  </div>
              </div>
          </div>`
        );

        cardHolder.append(newCard);
      });
    })
    .catch((error) => {
      $(".error").text(`Greška: ${error}`);
    });
}

// DOCUMENT READY
$(document).ready(function () {
  console.log("Link index.html", linkback);

  if (!linkback || linkback == "NaN") {
    $("#page1").text("1");
    $("#page2").text("2");
    $("#page3").text("3");
    $("#page4").text("4");
    $("#page5").text("5");
    rickAndMorty();
  } else {
    let link1 = `${+linkback - 2}`;
    let link2 = `${+linkback - 1}`;
    let link3 = `${+linkback}`;
    let link4 = `${+linkback + 1}`;
    let link5 = `${+linkback + 2}`;
    $("#page1").text(link1);
    $("#page2").text(link2);
    $("#page3").text(link3);
    $("#page4").text(link4);
    $("#page5").text(link5);

    rickAndMorty(linkback);
  }

  // GO BACK ---------------------------------------
  if (
    window.performance &&
    window.performance.navigation.type ==
      window.performance.navigation.TYPE_BACK_FORWARD
  ) {
    window.history.back();
  }
  // -----------------------------------------------
  //
  // EVENT DELEGATION - PAGINATION
  document.addEventListener("click", (Event) => {
    if (Event.target.matches(".page-number")) {
      // alert("Clicked");
      // console.log(Event);
      console.log(Event.target);
      // console.log(Event.target.textContent);

      // RE-PAGINATION
      if (Event.target.textContent <= 3) {
        $("#page1").text(`1`);
        $("#page2").text(`2`);
        $("#page3").text(`3`);
        $("#page4").text(`4`);
        $("#page5").text(`5`);
      } else if (Event.target.textContent >= 40) {
        $("#page1").text(`38`);
        $("#page2").text(`39`);
        $("#page3").text(`40`);
        $("#page4").text(`41`);
        $("#page5").text(`42`);
      } else {
        let link1 = `${+Event.target.textContent - 2}`;
        let link2 = `${+Event.target.textContent - 1}`;
        let link3 = `${+Event.target.textContent}`;
        let link4 = `${+Event.target.textContent + 1}`;
        let link5 = `${+Event.target.textContent + 2}`;
        // console.log(link1);
        $("#page1").text(link1);
        $("#page2").text(link2);
        $("#page3").text(link3);
        $("#page4").text(link4);
        $("#page5").text(link5);
      }
      //
      rickAndMorty(Event.target.textContent);
    }
  });
  // -----------------------------------------------
  // EVENT DELEGATION - PAGINATION PREVIOUS 5
  document.addEventListener("click", (Event) => {
    if (Event.target.matches(".previous5")) {
      let middle = $("#page3").text();

      // RE-PAGINATION
      if (
        +$("#page3").text() == 3 ||
        +$("#page3").text() == 4 ||
        +$("#page3").text() == 5 ||
        +$("#page3").text() == 6 ||
        +$("#page3").text() == 7
      ) {
        $("#page1").text(`1`);
        $("#page2").text(`2`);
        $("#page3").text(`3`);
        $("#page4").text(`4`);
        $("#page5").text(`5`);
      } else {
        $("#page1").text(`${+middle - 7}`);
        $("#page2").text(`${+middle - 6}`);
        $("#page3").text(`${+middle - 5}`);
        $("#page4").text(`${+middle - 4}`);
        $("#page5").text(`${+middle - 3}`);
      }
      //
      rickAndMorty(+middle - 5);
    }
  });
  // -----------------------------------------------
  // EVENT DELEGATION - PAGINATION PREVIOUS 1
  document.addEventListener("click", (Event) => {
    if (Event.target.matches(".previous1")) {
      let middle = $("#page3").text();

      // RE-PAGINATION
      if (+$("#page3").text() == 3) {
        $("#page1").text(`1`);
        $("#page2").text(`2`);
        $("#page3").text(`3`);
        $("#page4").text(`4`);
        $("#page5").text(`5`);
      } else {
        $("#page1").text(`${+middle - 3}`);
        $("#page2").text(`${+middle - 2}`);
        $("#page3").text(`${+middle - 1}`);
        $("#page4").text(`${+middle}`);
        $("#page5").text(`${+middle + 1}`);
      }
      //
      rickAndMorty(+middle - 1);
    }
  });
  // -----------------------------------------------
  // EVENT DELEGATION - PAGINATION NEXT 1
  document.addEventListener("click", (Event) => {
    if (Event.target.matches(".next1")) {
      let middle = $("#page3").text();

      // RE-PAGINATION
      if (+$("#page3").text() == 40) {
        $("#page1").text(`38`);
        $("#page2").text(`39`);
        $("#page3").text(`40`);
        $("#page4").text(`41`);
        $("#page5").text(`42`);
      } else {
        $("#page1").text(`${+middle - 1}`);
        $("#page2").text(`${+middle}`);
        $("#page3").text(`${+middle + 1}`);
        $("#page4").text(`${+middle + 2}`);
        $("#page5").text(`${+middle + 3}`);
      }
      //
      rickAndMorty(+middle + 1);
    }
  });
  // -----------------------------------------------
  // EVENT DELEGATION - PAGINATION NEXT 5
  document.addEventListener("click", (Event) => {
    if (Event.target.matches(".next5")) {
      let middle = $("#page3").text();

      // RE-PAGINATION
      if (
        +$("#page3").text() == 40 ||
        +$("#page3").text() == 39 ||
        +$("#page3").text() == 38 ||
        +$("#page3").text() == 37 ||
        +$("#page3").text() == 36
      ) {
        $("#page1").text(`38`);
        $("#page2").text(`39`);
        $("#page3").text(`40`);
        $("#page4").text(`41`);
        $("#page5").text(`42`);
      } else {
        $("#page1").text(`${+middle + 3}`);
        $("#page2").text(`${+middle + 4}`);
        $("#page3").text(`${+middle + 5}`);
        $("#page4").text(`${+middle + 6}`);
        $("#page5").text(`${+middle + 7}`);
      }
      //
      rickAndMorty(+middle + 5);
    }
  });
  // -----------------------------------------------

  likedCharacters();
});

function infoPage(e, linkPage) {
  // PROSLEDJIVANJE ID NA STRANICI INFOPAGE
  localStorage.setItem("id", e);
  localStorage.setItem("link", linkPage);
  window.location = "./infopage.html";
}

// LIKE BUTTON
function like(id) {
  // alert(id);
  const buttonliked = $(`#${id}`);
  const buttonColor = buttonliked.css("color");
  console.log("ValueColor", buttonColor);

  if (buttonColor == "rgb(255, 255, 255)") {
    buttonliked.css({ "background-color": "white", color: "rgb(59, 151, 59)" });
    // Removing item (ECMAScript 6 code)
    arrayLiked = arrayLiked.filter((item) => item !== +id);
    console.log("Disliked", arrayLiked);
  } else {
    buttonliked.css({ "background-color": "rgb(59, 151, 59)", color: "white" });
    arrayLiked.push(+id);
    console.log("Liked", arrayLiked);
    // LIKED TO LOCAL STORAGE
    localStorage.setItem("likedCharacters", JSON.stringify(arrayLiked));
  }
}

function likedCharacters() {
  // ARRAY LIKED
  let likedToStorage = JSON.parse(
    localStorage.getItem("likedCharacters") || "[]"
  );
  console.log("Liked to storage", likedToStorage);
  arrayLiked = [...likedToStorage];
  console.log("Liked to display", arrayLiked);

  // LAJKOVANO OBOJITI ZELENO
  arrayLiked.forEach((item) => {
    if ($(`#${item}`)[0]) {
      // alert("Postoji");
      $(`#${item}`).css({
        "background-color": "rgb(59, 151, 59)",
        color: "white",
      });
    }
  });
}
