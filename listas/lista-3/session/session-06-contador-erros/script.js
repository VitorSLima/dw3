const errosSalvos = sessionStorage.getItem("erros")

if (errosSalvos !== null) {
  document.getElementById("erros").innerText = errosSalvos
}

function errei() {
  const atual = Number(sessionStorage.getItem("erros")) || 0
  const novo = atual + 1

  sessionStorage.setItem("erros", novo)

  document.getElementById("erros").innerText = novo
}

function acertei() {
  sessionStorage.setItem("erros", 0)

  document.getElementById("erros").innerText = "0"
}
