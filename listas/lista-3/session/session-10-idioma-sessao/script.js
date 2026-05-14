function aplicarIdioma() {
  const idioma = sessionStorage.getItem("idiomaSessao")
  const titulo = document.getElementById("tituloPagina")

  if (idioma === "en") {
    titulo.innerText = "Welcome!"
  } else {
    titulo.innerText = "Bem-vindo(a)!"
  }
}

function definirIdioma(codigo) {
  sessionStorage.setItem("idiomaSessao", codigo)
  aplicarIdioma()
}

aplicarIdioma()
