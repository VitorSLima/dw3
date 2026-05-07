const btn = document.getElementById("criar");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerText = "Novo parágrafo criado!";
  container.appendChild(p);
});