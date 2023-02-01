function getRandomImage() {
  var request = $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    method: "GET",
  });

  request
    .done(function (response) {
      console.log(response);
      var img = $("<img/>").attr("src", response.message);
      $("#image-container").html(""); //Obrise prethodnu sliku
      $("#image-container").append(img);
    })
    .fail(function (response) {
      console.log(response);
    })
    .always(function (response) {
      console.log("Zahtev zavrsen.");
    });
}
