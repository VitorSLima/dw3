let valor = 0;
const numero = document.getElementById("numero");

document.getElementById("mais").addEventListener("click", () => {
  valor++;
  numero.innerText = valor;
});

document.getElementById("menos").addEventListener("click", () => {
  valor--;
  numero.innerText = valor;
});

document.getElementById("reset").addEventListener("click", () => {
  valor = 0;
  numero.innerText = valor;
});