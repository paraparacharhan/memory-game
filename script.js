const cardList = document.querySelectorAll(".card");

cardList.forEach((card) => {
    card.addEventListener("click", () => {
        card.textContent = card.textContent === "?" ? card.dataset.suit + card.dataset.rank : "?";
    })
})
