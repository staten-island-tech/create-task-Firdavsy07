import { unitCards } from "./array";

console.log(unitCards);

const DOMselectors = {
  area1: document.querySelector(".area1"),
  area2: document.querySelector(".area2"),
  area3: document.querySelector(".area3"),
  testButton: document.querySelector("#button"),
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

  DOMselectors.deck.insertAdjacentHTML(
    "afterbegin",
    `
    <div>
 <button class="button" id="math">Finished?</button>
 </div>
  `
  );
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
          src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
    cArham: document.querySelector("#cArham"),
    Arham1: document.querySelector("#Arham1"),
    Arham2: document.querySelector("#Arham2"),
    Arham3: document.querySelector("#Arham3"),
    cNicole: document.querySelector("#cNicole"),
    Nicole1: document.querySelector("#Nicole1"),
    Nicole2: document.querySelector("#Nicole2"),
    Nicole3: document.querySelector("#Nicole3"),
    cWhalen: document.querySelector("#cWhalen"),
    Whalen1: document.querySelector("#Whalen1"),
    Whalen2: document.querySelector("#Whalen2"),
    Whalen3: document.querySelector("#Whalen3"),
    cJake: document.querySelector("#cJake"),
    Jake1: document.querySelector("#Jake1"),
    Jake2: document.querySelector("#Jake2"),
    Jake3: document.querySelector("#Jake3"),
    math: document.querySelector("#math"),
  };
  console.log(cardIds);
  //*Rerick*//
  cardIds.Rerick1.addEventListener("click", function () {
    cardIds.cRerick.remove();
    playedCards.push("Rerick to 1");
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
            src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
    playedCards.push("Rerick to 2");
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
            src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
    playedCards.push("Rerick to 3");
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
            src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
    playedCards.push("Firdavs to 1");
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
            src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
    playedCards.push("Firdavs to 2");
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
            src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
    playedCards.push("Firdavs to 3");
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
            src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  //*Arham*//
  cardIds.Arham1.addEventListener("click", function () {
    cardIds.cArham.remove();
    playedCards.push("Arham to 1");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Arham"))
      .forEach((unitCards, {}) => {
        DOMselectors.area1.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="card" id="d${unitCards.uuid.cardName}">
        <div class="card-front">
        
          <img
            class="card-img"
            src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  cardIds.Arham2.addEventListener("click", function () {
    cardIds.cArham.remove();
    playedCards.push("Arham to 2");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Arham"))
      .forEach((unitCards, {}) => {
        DOMselectors.area2.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="card" id="d${unitCards.uuid.cardName}">
        <div class="card-front">
        
          <img
            class="card-img"
            src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  cardIds.Arham3.addEventListener("click", function () {
    cardIds.cArham.remove();
    playedCards.push("Arham to 3");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Arham"))
      .forEach((unitCards, {}) => {
        DOMselectors.area3.insertAdjacentHTML(
          "afterbegin",
          `
        <div class="card" id="d${unitCards.uuid.cardName}">
        <div class="card-front">
        
          <img
            class="card-img"
            src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  //*Nicole*//
  cardIds.Nicole1.addEventListener("click", function () {
    cardIds.cNicole.remove();
    playedCards.push("Nicole to 1");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Nicole"))
      .forEach((unitCards, {}) => {
        DOMselectors.area1.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="card" id="d${unitCards.uuid.cardName}">
          <div class="card-front">
          
            <img
              class="card-img"
              src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  cardIds.Nicole2.addEventListener("click", function () {
    cardIds.cNicole.remove();
    playedCards.push("Nicole to 2");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Nicole"))
      .forEach((unitCards, {}) => {
        DOMselectors.area2.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="card" id="d${unitCards.uuid.cardName}">
          <div class="card-front">
          
            <img
              class="card-img"
              src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  cardIds.Nicole3.addEventListener("click", function () {
    cardIds.cNicole.remove();
    playedCards.push("Nicole to 3");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Nicole"))
      .forEach((unitCards, {}) => {
        DOMselectors.area3.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="card" id="d${unitCards.uuid.cardName}">
          <div class="card-front">
          
            <img
              class="card-img"
              src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  //*Whalen*//
  cardIds.Whalen1.addEventListener("click", function () {
    cardIds.cWhalen.remove();
    playedCards.push("Whalen to 1");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Whalen "))
      .forEach((unitCards, {}) => {
        DOMselectors.area1.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="card" id="d${unitCards.uuid.cardName}">
          <div class="card-front">
          
            <img
              class="card-img"
              src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  cardIds.Whalen2.addEventListener("click", function () {
    cardIds.cWhalen.remove();
    playedCards.push("Whalen to 2");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Whalen"))
      .forEach((unitCards, {}) => {
        DOMselectors.area2.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="card" id="d${unitCards.uuid.cardName}">
          <div class="card-front">
          
            <img
              class="card-img"
              src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  cardIds.Whalen3.addEventListener("click", function () {
    cardIds.cWhalen.remove();
    playedCards.push("Whalen to 3");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Whalen"))
      .forEach((unitCards, {}) => {
        DOMselectors.area3.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="card" id="d${unitCards.uuid.cardName}">
          <div class="card-front">
          
            <img
              class="card-img"
              src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  //*Jake*//
  cardIds.Jake1.addEventListener("click", function () {
    cardIds.cJake.remove();
    playedCards.push("Jake to 1");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Jake"))
      .forEach((unitCards, {}) => {
        DOMselectors.area1.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="card" id="d${unitCards.uuid.cardName}">
          <div class="card-front">
          
            <img
              class="card-img"
              src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  cardIds.Jake2.addEventListener("click", function () {
    cardIds.cJake.remove();
    playedCards.push("Jake to 2");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Jake"))
      .forEach((unitCards, {}) => {
        DOMselectors.area2.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="card" id="d${unitCards.uuid.cardName}">
          <div class="card-front">
          
            <img
              class="card-img"
              src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  cardIds.Jake3.addEventListener("click", function () {
    cardIds.cJake.remove();
    playedCards.push("Jake to 3");
    unitCards
      .filter((card) => card.uuid.cardName.includes("Jake"))
      .forEach((unitCards, {}) => {
        DOMselectors.area3.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="card" id="d${unitCards.uuid.cardName}">
          <div class="card-front">
          
            <img
              class="card-img"
              src="../public/images/Cardback_Emblem_Sentinel_Icon_Crispmip.png "
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
  //*Math*//
  cardIds.math.addEventListener("click", function () {
    let totalPower1 = 0;
    let totalPower2 = 0;
    let totalPower3 = 0;

    if (playedCards.includes("Rerick to 1")) {
      totalPower1 += 4;
    } else if (playedCards.includes("Rerick to 2")) {
      totalPower2 += 4;
    } else if (playedCards.includes("Rerick to 3")) {
      totalPower3 += 4;
    }

    if (playedCards.includes("Nicole to 1")) {
      totalPower1 += 2;
    } else if (playedCards.includes("Nicole to 2")) {
      totalPower2 += 4;
    } else if (playedCards.includes("Nicole to 3")) {
      totalPower3 += 2;
    }

    if (playedCards.includes("Whalen to 1")) {
      totalPower1 += 1;
    } else if (playedCards.includes("Whalen to 2")) {
      totalPower2 += 1;
    } else if (playedCards.includes("Whalen to 3")) {
      totalPower3 += 1;
    }

    if (playedCards.includes("Firdavs to 1")) {
      totalPower1 += 5;
    } else if (playedCards.includes("Firdavs to 2")) {
      totalPower2 += 5;
    } else if (playedCards.includes("Firdavs to 3")) {
      totalPower3 += 5;
    }

    if (playedCards.includes("Jake to 1")) {
      totalPower1 += 3;
    } else if (playedCards.includes("Jake to 2")) {
      totalPower2 += 3;
    } else if (playedCards.includes("Jake to 3")) {
      totalPower3 += 3;
    }

    if (playedCards.includes("Arham to 1")) {
      totalPower1 += 3;
    } else if (playedCards.includes("Arham to 2")) {
      totalPower2 += 3;
    } else if (playedCards.includes("Arham to 3")) {
      totalPower3 += 3;
    }

    console.log(totalPower1);
    console.log(totalPower2);
    console.log(totalPower3);
    let wins = 0;
    let draws = 0;
    let losses = 0;
    if (power1 < totalPower1) {
      wins += 1;
    } else if (power1 === totalPower1) {
      draws += 1;
    } else if (power1 > totalPower1) {
      losses += 1;
    }

    if (power2 < totalPower2) {
      wins += 1;
    } else if (power2 === totalPower2) {
      draws += 1;
    } else if (power2 > totalPower2) {
      losses += 1;
    }

    if (power3 < totalPower3) {
      wins += 1;
    } else if (power3 === totalPower3) {
      draws += 1;
    } else if (power3 > totalPower3) {
      losses += 1;
    }

    if (wins > losses) {
      destroy();
      DOMselectors.deck.insertAdjacentHTML(
        "beforebegin",
        `<div class="custom">
    <h1>Wow, you're really good! You had ${wins} wins, ${losses} losses, and ${draws}! Maybe you should try to beat something harder tough guy.</h1>
    </div>`
      );
    } else if (wins < losses) {
      destroy();
      DOMselectors.deck.insertAdjacentHTML(
        "beforebegin",
        `<div class="custom">
    <h1>Wow, you really suck! You had ${wins} wins, ${losses} losses, and ${draws}! You should invest in more talent...</h1>
    </div>`
      );
    } else if (wins < draws) {
      destroy();
      DOMselectors.deck.insertAdjacentHTML(
        "beforebegin",
        `<div class="custom">
    <h1>I mean, you did fineee! You had ${wins} wins, ${losses} losses, and ${draws}! I would recommend you just... work on this more</h1>
    </div>`
      );
    }
  });
});
