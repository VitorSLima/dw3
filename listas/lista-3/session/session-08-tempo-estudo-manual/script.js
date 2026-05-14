const salvo = sessionStorage.getItem("tempoEstudo")

if (salvo !== null) {
  document.getElementById("segundos").innerText = salvo
}

function registrar() {
  const atual = Number(sessionStorage.getItem("tempoEstudo")) || 0
  const novo = atual + 5

  sessionStorage.setItem("tempoEstudo", novo)

  document.getElementById("segundos").innerText = novo
}
