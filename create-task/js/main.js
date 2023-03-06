import { unitCards } from "./array";

console.log(unitCards);

const DOMselectors = {
  area1: document.querySelector(".area1"),
  area2: document.querySelector(".area2"),
  area3: document.querySelector(".area3"),
  testButton: document.querySelector(".button"),
  deck: document.querySelector(".deck"),
  Rerick: document.querySelector("#Rerick"),
};
const playedCards = [];
function destroy() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.remove();
  });
}
DOMselectors.testButton.addEventListener("click", function () {
  destroy();
  unitCards.forEach((unitCards, {}) => {
    DOMselectors.deck.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="card" id="c${unitCards.uuid.cardName}">
      <div class="card-front">
      
        <img
          class="card-img"
          src="/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
        /> 
      </div>
      <div class="card-back">
        <img class="card-img" src="${unitCards.uuid.cardFront}" />
        <button id="${unitCards.uuid.cardName}1">P1?</button>
        <button id="${unitCards.uuid.cardName}2">P2?</button>
        <button id="${unitCards.uuid.cardName}3">P3?</button>
      </div>
    </div>

`
    );
  });
  const cardIds = {
    cRerick: document.querySelector("#cRerick"),
    Rerick1: document.querySelector("#Rerick1"),
    Rerick2: document.querySelector("#Rerick2"),
    Rerick3: document.querySelector("#Rerick3"),
  };
  console.log(cardIds);
  //*Rerick*//
  cardIds.Rerick1.addEventListener("click", function () {
    cardIds.cRerick.remove();
    unitCards
      .filter((card) => card.uuid.cardName.includes("Rerick"))
      .forEach((unitCards, {}) => {
        DOMselectors.area1.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="card" id="d${unitCards.uuid.cardName}">
        <div class="card-front">
        
          <img
            class="card-img"
            src="/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
          /> 
        </div>
        <div class="card-back">
          <img class="card-img" src="${unitCards.uuid.cardFront}" />
        </div>
      </div>
  
  `
        );
      });
  });
  cardIds.Rerick2.addEventListener("click", function () {
    cardIds.cRerick.remove();
    unitCards
      .filter((card) => card.uuid.cardName.includes("Rerick"))
      .forEach((unitCards, {}) => {
        DOMselectors.area2.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="card" id="d${unitCards.uuid.cardName}">
        <div class="card-front">
        
          <img
            class="card-img"
            src="/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
          /> 
        </div>
        <div class="card-back">
          <img class="card-img" src="${unitCards.uuid.cardFront}" />
        </div>
      </div>
  
  `
        );
      });
  });
  cardIds.Rerick3.addEventListener("click", function () {
    cardIds.cRerick.remove();
    unitCards
      .filter((card) => card.uuid.cardName.includes("Rerick"))
      .forEach((unitCards, {}) => {
        DOMselectors.area3.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="card" id="d${unitCards.uuid.cardName}">
        <div class="card-front">
        
          <img
            class="card-img"
            src="/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
          /> 
        </div>
        <div class="card-back">
          <img class="card-img" src="${unitCards.uuid.cardFront}" />
        </div>
      </div>
  
  `
        );
      });
  });
});
