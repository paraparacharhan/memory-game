const cards = document.querySelectorAll(".card");

const cardList = [];
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.textContent = card.textContent === "?" ? card.dataset.suit + card.dataset.rank : "?";
        cardList.push(card);
        console.log(cardList);
    })
})
