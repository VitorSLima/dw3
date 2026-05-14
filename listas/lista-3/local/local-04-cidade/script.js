const cidadeSalva = localStorage.getItem("cidade")

if (cidadeSalva) {
  document.getElementById("inputCidade").value = cidadeSalva
  document.getElementById("mensagem").innerText = "Cidade salva: " + cidadeSalva
}

function salvar() {
  const cidade = document.getElementById("inputCidade").value

  localStorage.setItem("cidade", cidade)

  document.getElementById("mensagem").innerText = "Cidade salva: " + cidade
}

function apagar() {
  localStorage.removeItem("cidade")

  document.getElementById("inputCidade").value = ""
  document.getElementById("mensagem").innerText = "Cidade apagada!"
}
