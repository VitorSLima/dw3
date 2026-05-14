function aplicarCorSalva() {
  const cor = localStorage.getItem("corFundo")

  if (cor) {
    document.body.style.backgroundColor = cor
    document.getElementById("mensagem").innerText = "Cor salva aplicada: " + cor
  }
}

function definirCor(cor) {
  document.body.style.backgroundColor = cor
  localStorage.setItem("corFundo", cor)

  document.getElementById("mensagem").innerText = "Cor salva: " + cor
}

aplicarCorSalva()
