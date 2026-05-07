const input = document.getElementById("tarefa");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", () => {

  if (input.value.trim() === "") return;

  const li = document.createElement("li");

  li.innerText = input.value;

  li.addEventListener("click", () => {
    li.remove();
  });

  lista.appendChild(li);

  input.value = "";
});

