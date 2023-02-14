var search = sessionStorage.getItem("searchtext");
console.log(search);

const url = "https://api.tvmaze.com/search/shows?q=";
var cardHolder = $(".cardholder");

function bitShow(input) {
  console.log(input);
  var request = $.ajax({
    url: `${url}${input}`,
    method: "GET",
  });

  request.done(function (response) {
    if (!response) {
      alert("No results");
    }

    console.log("response:", response);
    response.length = 50; // OGRANICENJE NIZA NA 50

    // console.log(response[1].show.name);
    // alert(response[1].show.image.medium);

    cardHolder.html("");
    response.forEach(function (item) {
      var image;
      if (item.show.image === null) {
        image = "./istockphoto-1147544807-612x612.jpg";
      } else {
        image = item.show.image.medium;
      }
      var newCard = $(
        `<div class="kartica">
            <div class="card" style="width:15rem">
                <img src="${image}" class="card-img-top" alt="No image">
                <div class='card-body'>
                    <p class="card-text">${item.show.genres[0]}</p>
                    <button type="button" id="${item.show.id}" onclick="infoPage(${item.show.id})" class="btn btn-link dugme">${item.show.name}</button>
                </div>
            </div>
        </div>`
      );
      cardHolder.append(newCard);
    });
  });

  request.fail(function () {
    alert("Failed to connect BitShow API");
  });

  request.always(function () {
    console.log("Successful");
  });
}

// SEARCH AUTOCOMPLETE ----------------------------
var autoComplete = [];
var searchText2;

function inputSearch() {
  var req = $.ajax({
    url: `${url}${searchText2}`,
    method: "GET",
  });
  req
    .done(function (response) {
      console.log(response);
      console.log("done");
      autoComplete.length = 0; // ISPRAZNI NIZ
      response.forEach(function (index) {
        var newItem = index.show.name;
        // autoComplete.push(newItem);  // OVO RADI - OPCIJA 1
        autoComplete.push({ id: index.show.id, name: newItem }); // OPCIJA 2
      });
      autoComplete.length = 10; // MAX 10 U SEARCH
    })
    .fail(function (response) {
      console.log(response);
      console.log("failed");
    })
    .always(function (response) {});
}
// -------------------------------------------------

// DOCUMENT READY
$(document).ready(function () {
  if (!search || search == undefined) {
    bitShow("sphere");
  } else {
    bitShow(`${search}`);
  }

  // SEARCH + ENTER
  $("#textsearch").on("keypress", function (e) {
    if (e.key === "Enter") {
      var searhText = $("#textsearch").val();
      bitShow(`${searhText}`);
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
      sessionStorage.setItem("id", ui.item.value);
      location.assign("./infopage.html");
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

function infoPage(e) {
  // PROSLEDJIVANJE ID NA STRANICI INFOPAGE
  sessionStorage.setItem("id", e);
  window.location = "./infopage.html";
}
