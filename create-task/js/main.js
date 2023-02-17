import { unitCards } from "./array";

console.log(unitCards);

const DOMselectors = {
  area1: document.querySelector(".area1Container"),
  area2: document.querySelector(".area2Container"),
  area3: document.querySelector(".area3Container"),
  testButton: document.querySelector(".button"),
};

DOMselectors.testButton.addEventListener("click", function (event) {
  unitCards.forEach((unitCards, {}) => {
    DOMselectors.area1.insertAdjacentHTML(
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
        <img class="card-img" src="/images/Whalen.png" />
      </div>
    </div>

`
    );
  });
});
