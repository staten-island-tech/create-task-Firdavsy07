import { unitCards } from "./array";

console.log(unitCards);

const DOMselectors = {
  area1: document.querySelector(".area1"),
  area2: document.querySelector(".area2"),
  area3: document.querySelector(".area3"),
  testButton: document.querySelector(".button"),
  deck: document.querySelector(".deck"),
  Rerick: document.querySelector("#Rerick"),
  blurb: document.querySelector(".announce"),
  number: document.querySelector(".number"),
};
const playedCards = [];
function destroy() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.remove();
  });
}
function getRandomInt(min = 1, max = 6) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}

DOMselectors.testButton.addEventListener("click", function () {
  destroy();
  DOMselectors.testButton.remove();
  DOMselectors.blurb.remove();

  const power1 = getRandomInt();
  const power2 = getRandomInt();
  const power3 = getRandomInt();

  DOMselectors.number.insertAdjacentHTML(
    "afterbegin",
    `
  
  <div class="announce">
  <h1>For Position 1 you have to beat ${power1} power</h1>
  <h1>For Position 2 you have to beat ${power2} power</h1>
  <h1>For Position 3 you have to beat ${power3} power</h1>
  </div>
  `
  );

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
    cFirdavs: document.querySelector("#cFirdavs"),
    Firdavs1: document.querySelector("#Firdavs1"),
    Firdavs2: document.querySelector("#Firdavs2"),
    Firdavs3: document.querySelector("#Firdavs3"),
  };
  console.log(cardIds);
  //*Rerick*//
  cardIds.Rerick1.addEventListener("click", function () {
    cardIds.cRerick.remove();
    playedCards.push("Rerick");
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
    playedCards.push("Rerick");
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
    playedCards.push("Rerick");
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
  //*Firdavs*//
  cardIds.Firdavs1.addEventListener("click", function () {
    cardIds.cFirdavs.remove();
    playedCards.push("Firdavs");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Firdavs"))
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
  cardIds.Firdavs2.addEventListener("click", function () {
    cardIds.cFirdavs.remove();
    playedCards.push("Firdavs");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Firdavs"))
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
  cardIds.Firdavs3.addEventListener("click", function () {
    cardIds.cFirdavs.remove();
    playedCards.push("Firdavs");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Firdavs"))
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
