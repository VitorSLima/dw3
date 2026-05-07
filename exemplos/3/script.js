const itens = document.getElementsByClassName('item');
const btnMarcar = document.getElementById('btnMarcar');
const btnLimpar = document.getElementById('btnLimpar');

btnMarcar.addEventListener('click', () => {
    for (const item of itens) {
        item.classList.add('marcado');
    }
});

btnLimpar.addEventListener('click', () => {
    for (const item of itens) {
        item.classList.remove('marcado');
    }
});