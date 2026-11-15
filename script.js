const cards = document.querySelectorAll(".card");
const message = document.querySelector("#clear-message");

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
                console.log("一致");
                cardList.push(pairList.pop());
                cardList.push(pairList.pop());
                if (cardList.length === cards.length) {
                    message.textContent = "ゲームクリア";
                }
            } else {
                console.log("不一致")
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
