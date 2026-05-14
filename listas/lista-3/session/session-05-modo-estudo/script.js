function atualizarTexto() {
  const modo = sessionStorage.getItem("modoEstudo")

  if (modo === "sim") {
    document.getElementById("mensagem").innerText = "Estudo: ON"
  } else {
    document.getElementById("mensagem").innerText = "Estudo: OFF"
  }
}

function alternar() {
  const atual = sessionStorage.getItem("modoEstudo")
  const proximo = atual === "sim" ? "nao" : "sim"

  sessionStorage.setItem("modoEstudo", proximo)

  atualizarTexto()
}

if (!sessionStorage.getItem("modoEstudo")) {
  sessionStorage.setItem("modoEstudo", "nao")
}

atualizarTexto()
