const notaSalva = localStorage.getItem("ultimaNota")

if (notaSalva) {
  document.getElementById("mensagem").innerText = "Última nota registrada: " + notaSalva
}

function salvar() {
  const nota = document.getElementById("inputNota").value

  localStorage.setItem("ultimaNota", nota)

  document.getElementById("mensagem").innerText = "Última nota registrada: " + nota
}

function apagar() {
  localStorage.removeItem("ultimaNota")

  document.getElementById("mensagem").innerText = "Nota apagada!"
}
