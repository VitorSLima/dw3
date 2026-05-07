const textos = document.querySelectorAll(".texto");
const btn = document.querySelector("#trocar");

btn.addEventListener("click", () => {
  textos.forEach((p) => {
    p.innerText = "Texto alterado pelo JavaScript";
  });
});