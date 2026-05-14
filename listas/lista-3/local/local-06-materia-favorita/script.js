const materiaSalva = localStorage.getItem("materiaFavorita")

if (materiaSalva) {
  document.getElementById("mensagem").innerText = "Matéria favorita: " + materiaSalva
}

function trocar() {
  const materia = document.getElementById("inputMateria").value.trim()

  if (materia === "") {
    document.getElementById("mensagem").innerText = "Digite uma matéria para trocar."
    return
  }

  localStorage.setItem("materiaFavorita", materia)

  document.getElementById("mensagem").innerText = "Matéria favorita: " + materia
}

function apagar() {
  localStorage.removeItem("materiaFavorita")

  document.getElementById("mensagem").innerText = "Matéria apagada!"
}
