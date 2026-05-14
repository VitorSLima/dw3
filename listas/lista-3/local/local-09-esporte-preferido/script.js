const esporteSalvo = localStorage.getItem("esporte")

if (esporteSalvo) {
  document.getElementById("selectEsporte").value = esporteSalvo
  document.getElementById("mensagem").innerText = "Esporte salvo: " + esporteSalvo
}

function salvarEsporte() {
  const esporte = document.getElementById("selectEsporte").value

  localStorage.setItem("esporte", esporte)

  if (esporte === "") {
    localStorage.removeItem("esporte")
    document.getElementById("mensagem").innerText = "Nenhum esporte selecionado."
  } else {
    document.getElementById("mensagem").innerText = "Esporte salvo: " + esporte
  }
}
