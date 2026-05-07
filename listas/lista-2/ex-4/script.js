const box = document.querySelector(".box");
const btn = document.getElementById("toggle");

btn.addEventListener("click", () => {
  box.classList.toggle("destaque");
});