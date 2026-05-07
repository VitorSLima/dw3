const btn = document.getElementById("limpar");
const div = document.getElementById("area");

btn.addEventListener("click", () => {
  div.innerHTML = "";
});