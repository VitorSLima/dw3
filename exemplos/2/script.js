const card = document.getElementById('card');
const btnToggle = document.getElementById('btnToggle');

btnToggle.addEventListener("click", () => {
    card.classList.toggle("destaque");
});