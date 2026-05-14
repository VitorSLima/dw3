const fraseSalva = localStorage.getItem("frase")

if (fraseSalva) {
  document.getElementById("inputFrase").value = fraseSalva
  document.getElementById("mensagem").innerText = "Frase salva: " + fraseSalva
}

function salvar() {
  const frase = document.getElementById("inputFrase").value.trim()

  if (frase === "") {
    document.getElementById("mensagem").innerText = "Digite uma frase."
    return
  }

  localStorage.setItem("frase", frase)

  document.getElementById("mensagem").innerText = "Frase salva: " + frase
}

function apagar() {
  localStorage.removeItem("frase")

  document.getElementById("inputFrase").value = ""
  document.getElementById("mensagem").innerText = "Frase apagada!"
}
