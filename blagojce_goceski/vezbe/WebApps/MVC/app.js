import { Dog } from "./entities/dog.js";
import { getData } from "./service/service.js";
import { createDogImage } from "./view/ui.js";

const dogUrl = "https://dog.ceo/api/breeds/image/random";
$(document).ready(function () {
  getData(dogUrl)
    .then((response) => {
      const dog = new Dog(response.message, response.status);
      createDogImage(dog);
    })
    .catch((error) => {
      console.log(error);
    });
});
