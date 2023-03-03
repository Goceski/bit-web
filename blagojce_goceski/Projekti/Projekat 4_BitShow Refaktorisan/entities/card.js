// KLASA ZA KREIRANJE NOVE KARTICE
export class NewCard {
  constructor(image, id, genre, name) {
    this.card = $(
      `<div class="kartica">
          <div class="card" style="width:15rem">
              <img src="${image}" id="img-${id}" class="card-img-top" >
              <div class='card-body'>
                  <p class="card-text">${genre}</p>
                  <button type="button" id="btn-${id}" class="btn btn-link dugme">${name}</button>
              </div>
          </div>
      </div>`
    );
  }
}
