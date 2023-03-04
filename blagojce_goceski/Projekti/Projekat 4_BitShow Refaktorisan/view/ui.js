export function createNewCard(newCard) {
  $(".cardholder").append(`<div class="kartica">
  <div class="card" style="width:15rem">
      <img src="${newCard.image}" id="img-${newCard.id}" class="card-img-top" >
      <div class='card-body'>
          <p class="card-text">${newCard.genre}</p>
          <button type="button" id="btn-${newCard.id}" class="btn btn-link dugme">${newCard.name}</button>
      </div>
  </div>
</div>`);
}
