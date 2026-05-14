const ultimo = localStorage.getItem("ultimoItem")

if (ultimo) {
  document.getElementById("mensagem").innerText = "Último item no carrinho: " + ultimo
}

function adicionar() {
  const item = document.getElementById("inputItem").value

  localStorage.setItem("ultimoItem", item)

  document.getElementById("mensagem").innerText = "Último item no carrinho: " + item
}

function limpar() {
  localStorage.removeItem("ultimoItem")

  document.getElementById("mensagem").innerText = "Carrinho limpo!"
}
