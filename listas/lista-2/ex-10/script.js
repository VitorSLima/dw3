const btn = document.getElementById("remover");

btn.addEventListener("click", () => {
  const ultimo = document.querySelector("ul li:last-child");
  if (ultimo) {
    ultimo.remove();
  }
});