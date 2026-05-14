function aplicarTemaSalvo() {
  const tema = localStorage.getItem("tema")

  if (tema === "escuro") {
    document.body.classList.add("escuro")
    document.getElementById("mensagem").innerText = "Tema atual: escuro (salvo)"
  } else {
    document.body.classList.remove("escuro")
    document.getElementById("mensagem").innerText =
      tema === "claro" ? "Tema atual: claro (salvo)" : "Escolha claro ou escuro"
  }
}

function definirTema(tema) {
  localStorage.setItem("tema", tema)

  if (tema === "escuro") {
    document.body.classList.add("escuro")
  } else {
    document.body.classList.remove("escuro")
  }

  document.getElementById("mensagem").innerText =
    "Tema salvo: " + (tema === "escuro" ? "escuro" : "claro")
}

aplicarTemaSalvo()
