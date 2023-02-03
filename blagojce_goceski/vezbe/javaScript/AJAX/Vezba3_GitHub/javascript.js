const url = "https://api.github.com/search/users?q=";
var alertElement = $(".alert");
var cardHolder = $(".cardholder");

function gitHub(input) {
  console.log(input);
  var request = $.ajax({
    url: `${url}${input}`,
    method: "GET",
  });

  request.done(function (response) {
    if (!response || !response.items.length) {
      alertElement.text("No results");
      alertElement.toggle();
    }

    console.log(response);

    cardHolder.html("");
    response.items.forEach(function (item) {
      var newCard = $(
        `<div class="col-4" style="margin-top:2.5rem">
            <div class="card" style="width:18rem">
                <img src="${item.avatar_url}" class="card-img-top" alt="...">
                <div class='card-body'>
                    <h5 class='card-title' style="font-size:1.5rem">${item.login}</h5>
                    <p class="card-text">${item.type}</p>
                    <a href='${item.html_url}' target='_blank' class='btn btn-info' style="color:white;font-weight:bold;font-size:1.1rem">Go to profile</a>
                </div>
            </div>
        </div>`
      );
      cardHolder.append(newCard);
    });
  });

  request.fail(function () {
    alertElement.text("Failed to connect GitHUB API");
    alertElement.toggle();
  });

  request.always(function () {
    alertElement.text("Successful");
  });
}

// DOCUMENT READY
$(document).ready(function () {
  gitHub("react");

  // SEARCH
  $("#textsearch").on("keypress", function (e) {
    if (e.key === "Enter") {
      //   alert("Enter pressed");
      //   alert($("#textsearch").val());
      var searhText = $("#textsearch").val(); // Ne radi sa '.value'
      //   alert(searhText);
      gitHub(`${searhText}`);
      e.preventDefault(); // Bez ovo ne radi, daje samo DEFAULT
    }
  });
});
