function clamp(n, min, max) {
  if (n < min) return min
  if (n > max) return max
  return n
}

function mostrar(vol) {
  document.getElementById("volume").innerText = vol
}

const salvo = sessionStorage.getItem("volume")
let volume = salvo !== null ? Number(salvo) : 5

volume = clamp(volume, 0, 10)
sessionStorage.setItem("volume", volume)
mostrar(volume)

function mais() {
  volume = clamp(Number(sessionStorage.getItem("volume")) + 1, 0, 10)
  sessionStorage.setItem("volume", volume)
  mostrar(volume)
}

function menos() {
  volume = clamp(Number(sessionStorage.getItem("volume")) - 1, 0, 10)
  sessionStorage.setItem("volume", volume)
  mostrar(volume)
}
