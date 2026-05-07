// Quando a página abre, verifica se já tem algo salvo
const nomeSalvo = localStorage.getItem("nome")

if (nomeSalvo) {
  document.getElementById("mensagem").innerText = "Nome salvo: " + nomeSalvo
}

// Salva o nome no localStorage
function salvar() {
  const nome = document.getElementById("inputNome").value

  localStorage.setItem("nome", nome)

  document.getElementById("mensagem").textContent = "Nome salvo: " + nome
}

// Apaga o nome do localStorage
function apagar() {
  localStorage.removeItem("nome")

  document.getElementById("mensagem").textContent = "Nome apagado!"
}
