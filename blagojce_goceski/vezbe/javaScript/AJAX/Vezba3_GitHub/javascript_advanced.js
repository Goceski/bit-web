const url = "https://api.github.com/search/users?q=";
var alertElement = $(".alert");
var cardHolder = $(".cardholder");
var userRepositories = $(".repos");

// Dodeljivanje ID userima
var userIndex = ["user0"]; //Niz sa ID svih usera
var i = 0;

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
      var reposit = item.repos_url;
      var newCard = $(
        `<div class="col-4" style="margin-top:2.5rem">
            <div class="card" style="width:18rem">
                <img src="${item.avatar_url}" class="card-img-top" alt="...">
                <div class='card-body'>
                    <h5 class='card-title' style="font-size:1.5rem">${item.login}</h5>
                    <p class="card-text">${item.type}</p>
                    <a href='${item.html_url}' target='_blank' class='btn btn-info' style="color:white;font-weight:bold;font-size:1rem">Go to profile</a>
                    <button type="button" id=${userIndex[i]} onclick="userRepo('${reposit}')" class="btn btn-info userrepos" style="color:white;font-weight:bold;font-size:1rem">Repositories</button>
                </div>
            </div>
        </div>`
      );
      cardHolder.append(newCard);
      i++;
      userIndex.push(`user${i}`);
    });

    // Ubaciti sva elementa BUTTON u niz 'rep'
    var rep = document.querySelectorAll("button");
    console.log(rep);
  });

  request.fail(function () {
    alertElement.text("Failed to connect GitHUB API");
    alertElement.toggle();
  });

  request.always(function () {
    alertElement.text("Successful");
    console.log(userIndex);
    return userIndex;
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

function userRepo(input) {
  //   alert(input);
  var requestRepo = $.ajax({
    url: `${input}`,
    method: "GET",
  });

  requestRepo
    .done(function (response) {
      // console.log(response[3].name);
      console.log(response);
      userRepositories.html("");
      userRepositories.append(
        `<h2>Repositories of ${response[0].owner.login}</h2>`
      );
      //   userRepositories.append(input);

      response.forEach(function (item) {
        var newRepoCard = $(
          `<div class="col-3" style="margin-top:2.5rem">
                <div class="card" style="width:20rem">
                    <div class='card-body'>
                        <h5 class='card-title' style="font-size:1.5rem">${item.name}</h5>
                        <p class="card-text">${item.language}</p>
                        <a href='${item.html_url}' target='_blank' class='btn btn-info' style="color:white;font-weight:bold;font-size:1rem">Go to repository</a>
                    </div>
                </div>
            </div>`
        );

        userRepositories.append(newRepoCard);
      });
    })
    .fail(function () {
      //
    })
    .always(function () {
      //
    });
}
