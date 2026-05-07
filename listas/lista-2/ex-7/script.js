const itens = document.getElementsByClassName("item");
const btn = document.getElementById("marcar");

btn.addEventListener("click", () => {
  for (const item of itens) {
    item.classList.add("selecionado");
  }
});