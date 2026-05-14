const atual = Number(sessionStorage.getItem("visitas")) || 0
const novo = atual + 1

sessionStorage.setItem("visitas", novo)

document.getElementById("mensagem").innerText =
  "Você recarregou esta aba " + novo + " vez(es) nesta sessão."
