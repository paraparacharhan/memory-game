function shuffle() {
    for (let i = cards.length - 1; i >= 0; i--) {
        let iter = Math.floor(Math.random() * (i + 1));
        let tmp = cards[i];
        cards[i] = cards[iter];
        cards[iter] = tmp;
    }
}

function setupCard() {
    for (const suit of suitList) {
        for (const rank of rankList) {
            const button = document.createElement("button");
            button.type = "button";
            button.classList.add("card");
            button.dataset.rank = rank;
            button.dataset.suit = suit;
            button.textContent = "?";
            cardBlock.appendChild(button);
        }
    }
}

function reset() {
    pairList.length = 0;
    cardList.length = 0;
    message.textContent = "";
    clearTimeout(timer);
    shuffle();
    cards.forEach(c => cardBlock.appendChild(c));
    cards.forEach((card) => {
        card.textContent = "?";
    })
}

const cardBlock = document.querySelector(".card-block");

const rankList = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suitList = ["♡", "♢", "♧", "♤"];

setupCard();

const cards = Array.from(document.querySelectorAll(".card"));
const message = document.querySelector("#clear-message");


shuffle();

cards.forEach(c => cardBlock.appendChild(c));

const pairList = [];
const cardList = [];
let timer = null;

cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (card.textContent !== "?" || pairList.length === 2) return;
        card.textContent = card.dataset.suit + card.dataset.rank;
        pairList.push(card);

        if (pairList.length === 2) {
            if (pairList[0].dataset.rank === pairList[1].dataset.rank) {
                cardList.push(pairList.pop());
                cardList.push(pairList.pop());
                if (cardList.length === cards.length) {
                    message.textContent = "ゲームクリア";
                }
            } else {
                timer = setTimeout(() => {
                    pairList[0].textContent = "?";
                    pairList[1].textContent = "?";
                    pairList.pop();
                    pairList.pop();
                }, 1000);
            }
        }
    })
})

const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", () => {
    reset();
})