const titulo = document.getElementById("titulo");
const btn = document.getElementById("mudarCor");

btn.addEventListener("click", () => {
  titulo.classList.toggle("azul");
});