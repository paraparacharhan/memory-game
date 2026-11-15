const cards = document.querySelectorAll(".card");

const cardList = [];
cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (card.textContent !== "?" || cardList.length === 2) return;
        card.textContent = card.dataset.suit + card.dataset.rank;
        cardList.push(card);
        console.log(cardList);

        if (cardList.length === 2) {
            if (cardList[0].dataset.rank === cardList[1].dataset.rank) {
                console.log("一致");
                cardList.pop();
                cardList.pop();
            } else {
                console.log("不一致")
                setTimeout(() => {
                    cardList[0].textContent = "?";
                    cardList[1].textContent = "?";
                    cardList.pop();
                    cardList.pop();
                }, 3000);
            }
        }
    })
})
