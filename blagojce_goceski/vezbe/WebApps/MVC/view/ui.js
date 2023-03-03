export function createDogImage(dog) {
  $("body").append(`<img src='${dog.message}'/>`);
}
