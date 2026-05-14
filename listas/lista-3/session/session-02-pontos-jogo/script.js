const pontosSalvos = sessionStorage.getItem("pontos")

if (pontosSalvos !== null) {
  document.getElementById("pontos").innerText = pontosSalvos
}

function somar10() {
  const atual = Number(sessionStorage.getItem("pontos")) || 0
  const novo = atual + 10

  sessionStorage.setItem("pontos", novo)

  document.getElementById("pontos").innerText = novo
}

function zerar() {
  sessionStorage.setItem("pontos", 0)

  document.getElementById("pontos").innerText = "0"
}
