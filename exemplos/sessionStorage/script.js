// Quando a página abre, verifica se já tem uma contagem nessa sessão
const contadorSalvo = sessionStorage.getItem("cliques")

if (contadorSalvo) {
  document.getElementById("total").textContent = contadorSalvo
}

// Incrementa o contador e salva no sessionStorage
function clicar() {
  const totalAtual = Number(sessionStorage.getItem("cliques")) || 0
  const novoTotal = totalAtual + 1

  sessionStorage.setItem("cliques", novoTotal)

  document.getElementById("total").textContent = novoTotal
}
