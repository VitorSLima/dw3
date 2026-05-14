let passo = Number(sessionStorage.getItem("passo")) || 1

if (passo > 5) {
  passo = 5
}

function atualizarMensagem() {
  const el = document.getElementById("mensagem")

  if (passo >= 5) {
    el.innerText = "Tutorial concluído nesta sessão!"
  } else {
    el.innerText = "Passo " + passo + " de 5"
  }
}

function proximoPasso() {
  if (passo >= 5) {
    atualizarMensagem()
    return
  }

  passo = passo + 1
  sessionStorage.setItem("passo", passo)

  atualizarMensagem()
}

atualizarMensagem()
