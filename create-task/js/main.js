import { unitCards } from "./array";

console.log(unitCards);

const DOMselectors = {
  area1: document.querySelector(".area1Container"),
  area2: document.querySelector(".area2Container"),
  area3: document.querySelector(".area3Container"),
  testButton: document.querySelector(".button"),
  deck: document.querySelector(".deck"),
};

DOMselectors.testButton.addEventListener("click", function () {
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
      </div>
    </div>

`
    );
  });
});
