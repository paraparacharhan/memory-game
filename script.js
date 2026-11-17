const cards = Array.from(document.querySelectorAll(".card"));
const message = document.querySelector("#clear-message");

for (let i = cards.length - 1; i >= 0; i--) {
    let iter = Math.floor(Math.random() * (i + 1));
    let tmp = cards[i];
    cards[i] = cards[iter];
    cards[iter] = tmp;
}

const cardBlock = document.querySelector(".card-block");
cards.forEach(c => cardBlock.appendChild(c));

const pairList = [];
const cardList = [];
cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (card.textContent !== "?" || pairList.length === 2) return;
        card.textContent = card.dataset.suit + card.dataset.rank;
        pairList.push(card);
        console.log(pairList);

        if (pairList.length === 2) {
            if (pairList[0].dataset.rank === pairList[1].dataset.rank) {
                cardList.push(pairList.pop());
                cardList.push(pairList.pop());
                if (cardList.length === cards.length) {
                    message.textContent = "ゲームクリア";
                }
            } else {
                setTimeout(() => {
                    pairList[0].textContent = "?";
                    pairList[1].textContent = "?";
                    pairList.pop();
                    pairList.pop();
                }, 1000);
            }
        }
    })
})
