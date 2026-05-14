const pulosSalvos = sessionStorage.getItem("pulos")

if (pulosSalvos) {
  document.getElementById("total").innerText = pulosSalvos
}

function pular() {
  const atual = Number(sessionStorage.getItem("pulos")) || 0
  const novo = atual + 1

  sessionStorage.setItem("pulos", novo)

  document.getElementById("total").innerText = novo
}
