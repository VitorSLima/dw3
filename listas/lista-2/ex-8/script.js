const btn = document.getElementById("gerar");
const ul = document.getElementById("lista");

btn.addEventListener("click", () => {
  ul.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
  }
});