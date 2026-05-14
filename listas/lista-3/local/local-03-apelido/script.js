const apelidoSalvo = localStorage.getItem("apelido")

if (apelidoSalvo) {
  document.getElementById("mensagem").innerText = "Olá, " + apelidoSalvo + "!"
}

function salvar() {
  const apelido = document.getElementById("inputApelido").value

  localStorage.setItem("apelido", apelido)

  document.getElementById("mensagem").innerText = "Olá, " + apelido + "!"
}

function apagar() {
  localStorage.removeItem("apelido")

  document.getElementById("mensagem").innerText = "Apelido apagado!"
}
