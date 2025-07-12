const buttonsContainer = document.querySelector(".buttons");
const filterableCards = document.querySelectorAll(".gallery .card");

buttonsContainer.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    const activeBtn = buttonsContainer.querySelector(".active");
    if (activeBtn) activeBtn.classList.remove("active");
    e.target.classList.add("active");

    const filter = e.target.dataset.name;
    for (const card of filterableCards) {
        const show = filter === "all" || card.dataset.name === filter;
        card.classList.toggle("hide", !show);
        card.setAttribute("data-lightbox", show ? "current" : "");
    }
});