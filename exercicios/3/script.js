const campos = document.getElementsByClassName("campo");

document.getElementById("validar").addEventListener("click", () => {
  for (const input of campos) {
    if (input.value === "") {
      input.classList.add("erro");
    } else {
      input.classList.remove("erro");
    }
  }
});