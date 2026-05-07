const input = document.getElementById("numero");
const btn = document.getElementById("gerar");
const ul = document.getElementById("resultado");

btn.addEventListener("click", () => {
  ul.innerHTML = "";

  const numero = Number(input.value);

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.innerText = `${numero} x ${i} = ${numero * i}`;
    ul.appendChild(li);
  }
});
