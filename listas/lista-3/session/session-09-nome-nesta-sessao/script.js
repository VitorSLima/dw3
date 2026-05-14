const nomeSalvo = sessionStorage.getItem("nomeSessao")

if (nomeSalvo) {
  document.getElementById("inputNome").value = nomeSalvo
  document.getElementById("mensagem").innerText = "Nome lembrado nesta aba: " + nomeSalvo
}

function lembrar() {
  const nome = document.getElementById("inputNome").value

  sessionStorage.setItem("nomeSessao", nome)

  document.getElementById("mensagem").innerText = "Nome lembrado nesta aba: " + nome
}

function apagar() {
  sessionStorage.removeItem("nomeSessao")

  document.getElementById("inputNome").value = ""
  document.getElementById("mensagem").innerText = "Nome apagado da sessão."
}
