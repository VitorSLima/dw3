const sobrenomeSalvo = localStorage.getItem("sobrenome")

if (sobrenomeSalvo) {
  document.getElementById("mensagem").innerText = "Sobrenome salvo: " + sobrenomeSalvo
}

function salvar() {
  const sobrenome = document.getElementById("inputSobrenome").value

  localStorage.setItem("sobrenome", sobrenome)

  document.getElementById("mensagem").innerText = "Sobrenome salvo: " + sobrenome
}

function apagar() {
  localStorage.removeItem("sobrenome")

  document.getElementById("mensagem").innerText = "Apagado!"
}
