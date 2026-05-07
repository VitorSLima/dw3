const titulo = document.getElementById('titulo');
const btnMudar = document.getElementById('btnMudar');
const btnReset = document.getElementById('btnReset');

btnMudar.addEventListener('click', () => {
    titulo.innerText = 'Olá Mundo!';
});

btnReset.addEventListener('click', () => {
    titulo.innerText = 'Olá!';
})


