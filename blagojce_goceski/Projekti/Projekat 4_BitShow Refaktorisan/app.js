import { NewCard } from "./entities/card.js";
import { elemInfo } from "./info.js";
import { createNewCard } from "./view/ui.js";
import { getData } from "./service/service.js";

// window.elemInfo = elemInfo; // UKOLIKO SE FUNKCIJA POZIVA PRE NEGO STO SE KOMPLETNO UCITA HTML

// "http://api.tvmaze.com/" --- // OSNOVNI DEO LINKA
// "shows" -------------------- // sufix ZA 240 ELEMENATA
// "search/shows?q="; --------- // SUFIX ZA PRETRAGU
const url = "http://api.tvmaze.com/";

const cardHolder = $(".cardholder");

function bitShow(input = "shows") {
  $(".pageInfo").hide();
  $(".cardholder").show();
  $(".input-text").show();

  console.log("BitShow Input:", input);
  console.log(`BitShow URL za pretragu: ${url}${input}`);
  getData(`${url}${input}`)
    .then((response) => {
      console.log("Response:", response);
      response.length = 50; // OGRANICENJE NIZA NA 50

      cardHolder.html("");

      if (input.includes("?q=")) {
        response.forEach(function (item) {
          let image;
          if (item.show.image === null) {
            image = "./istockphoto-1147544807-612x612.jpg";
          } else {
            image = item.show.image.original;
          }

          // newCard (image, id, genre, name)
          const newCard = new NewCard(
            image,
            item.show.id,
            item.show.genres[0],
            item.show.name
          );

          createNewCard(newCard);
          // console.log("New Card:", newCard);
        });
        addOnClickListener("dugme", "btn-");
        addOnClickListener("card-img-top", "img-");
      } else {
        response.forEach(function (item) {
          let image;
          if (item.image === null) {
            image = "./istockphoto-1147544807-612x612.jpg";
          } else {
            image = item.image.original;
          }

          // newCard (image, id, genre, name)
          const newCard = new NewCard(
            image,
            item.id,
            item.genres[0],
            item.name
          );

          createNewCard(newCard);
          // console.log("New Card:", newCard);
        });
        addOnClickListener("dugme", "btn-");
        addOnClickListener("card-img-top", "img-");
      }
    })
    .catch((error) => {
      $(".error").text(`Greška: ${error}`);
    });
}

function addOnClickListener(className = "", delimiter = "") {
  $(`.${className}`).click((event) => {
    const id = event.currentTarget.id.split(delimiter)[1];
    elemInfo(id);
  });
}

// SEARCH AUTOCOMPLETE ----------------------------
const autoComplete = [];
let searchText2;

function inputSearch() {
  const newSearch = `search/shows?q=${searchText2}`;

  getData(`${url}${newSearch}`)
    .then((response) => {
      console.log("Search response", response);
      autoComplete.length = 0; // ISPRAZNI NIZ
      response.forEach(function (index) {
        const newItem = index.show.name;
        // autoComplete.push(newItem);  // OVO RADI - OPCIJA 1
        autoComplete.push({ id: index.show.id, name: newItem }); // OPCIJA 2
      });
      autoComplete.length = 10; // MAX 10 U SEARCH
    })
    .catch((error) => {
      console.log(error);
      console.log("failed");
    });
}
// -------------------------------------------------

// DOCUMENT READY
$(document).ready(function () {
  bitShow();

  // SEARCH + ENTER
  $("#textsearch").on("keypress", function (e) {
    if (e.key === "Enter") {
      let searhText = $("#textsearch").val();
      console.log("Search text", searhText);
      console.log(`search/shows?q=${searhText}`);
      bitShow(`search/shows?q=${searhText}`);
      e.preventDefault();
    }
  });

  // SEARCH AUTOCOMPLETE --------------------------
  $("#textsearch").autocomplete({
    // source: autoComplete,  // OVO RADI - OPCIJA 1
    // OPCIJA 2 ----------
    source: function (req, resp) {
      resp(
        $.map(autoComplete, function (value, key) {
          return {
            label: value.name,
            value: value.id,
          };
        })
      );
    },
    select: function (event, ui) {
      $("#textsearch").html("");
      elemInfo(ui.item.value);
    },
  }); // ---------- DO OVDE OPCIJA 2

  $("#textsearch").keyup(function () {
    searchText2 = this.value;
    inputSearch();
  });
  // -----------------------------------------------

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
