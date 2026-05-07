const body = document.body;
const toggleDark = document.getElementById("toggleDark");

toggleDark.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    toggleDark.innerHTML =
      '<img src="../../black%20button.webp" alt="Botao preto para modo claro" />';
  } else {
    body.classList.add("dark");
    toggleDark.innerHTML =
      '<img src="../../White%20Button.jpg" alt="Botao branco para modo escuro" />';
  }
});
