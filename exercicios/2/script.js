const body = document.querySelector("body");
const toggleDark = document.getElementById("toggleDark");

toggleDark.addEventListener("click", () => {
  body.classList.toggle("dark");
});