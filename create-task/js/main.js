import { unitCards } from "./array";

console.log(unitCards);

const DOMselectors = {
  area1: document.querySelector(".area1Container"),
  area2: document.querySelector(".area2Container"),
  area3: document.querySelector(".area3Container"),
  testButton: document.querySelector(".button"),
  deck: document.querySelector(".deck"),
  selection: document.querySelector(".button"),
};
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
      <div class="card">
      <div class="card-front">
      
        <img
          class="card-img"
          src="/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
        /> 
      </div>
      <div class="card-back">
        <img class="card-img" src="${unitCards.uuid.cardFront}" />
        <button class="button">Select me?</button>
      </div>
    </div>

`
    );
  });
});
DOMselectors.selection.addEventListener("click", function () {
  DOMselectors.card.insertAdjacentHTML(
    "beforebegin",
    `
    <div class="card">
    <div class="card-front">
    
      <img
        class="card-img"
        src="/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
      /> 
    </div>
    <div class="card-back">
      <img class="card-img" src="${unitCards.uuid.cardFront}" />
      <button class="button">Select me?</button>
    </div>
  </div>

`
  );
});
