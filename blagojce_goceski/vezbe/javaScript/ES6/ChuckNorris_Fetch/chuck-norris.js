function newJoke() {
  const url = "https://api.chucknorris.io/jokes/random";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsObject) => {
      console.log(jsObject.value);
      $("#joketext").text(jsObject.value);
    });
}
