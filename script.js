const cards = document.querySelectorAll(".card");

const cardList = [];
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.textContent = card.textContent === "?" ? card.dataset.suit + card.dataset.rank : "?";
        cardList.push(card);
        console.log(cardList);

        if (cardList.length === 2) {
            if (cardList[0].dataset.rank === cardList[1].dataset.rank) {
                console.log("一致");
            } else {
                console.log("不一致");
            }
            cardList.pop();
            cardList.pop();
        }
    })
})
