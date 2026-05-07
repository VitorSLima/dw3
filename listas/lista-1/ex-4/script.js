const lights = document.getElementsByClassName("light");

function limpar() {
  for (const l of lights) l.classList.remove("on");
}

document.getElementById("vermelho").addEventListener("click", () => {
  limpar();
  document.querySelector(".red").classList.add("on");
});

document.getElementById("amarelo").addEventListener("click", () => {
  limpar();
  document.querySelector(".yellow").classList.add("on");
});

document.getElementById("verde").addEventListener("click", () => {
  limpar();
  document.querySelector(".green").classList.add("on");
});