// Seleciona todos os cards de filmes
const cards = document.querySelectorAll('.card');
// Seleciona o elemento que exibe o total
const totalEl = document.getElementById('total');
// Seleciona o botão de finalizar compra
const btnFinalizar = document.getElementById('btn-finalizar');


// Função que percorre todos os cards e soma (quantidade * preço) de cada um
function calcularTotal() {
  let total = 0;

  cards.forEach(card => {
    // Lê o preço definido no atributo data-preco do card
    const preco = parseFloat(card.dataset.preco);
    // Lê a quantidade atual exibida no span .quantidade
    const quantidade = parseInt(card.querySelector('.quantidade').textContent);
    total += preco * quantidade;
  });

  // Formata o total no padrão monetário brasileiro (R$ 0,00)
  totalEl.textContent = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

// Adiciona eventos de clique nos botões de cada card
cards.forEach(card => {
  const btnMais  = card.querySelector('.btn-mais');
  const btnMenos = card.querySelector('.btn-menos');
  const qtdEl    = card.querySelector('.quantidade');

  // Botão "+" — aumenta a quantidade em 1
  btnMais.addEventListener('click', () => {
    qtdEl.textContent = parseInt(qtdEl.textContent) + 1;
    calcularTotal();
  });

  // Botão "−" — diminui a quantidade em 1, mas nunca abaixo de 0
  btnMenos.addEventListener('click', () => {
    const atual = parseInt(qtdEl.textContent);
    if (atual > 0) {
      qtdEl.textContent = atual - 1;
      calcularTotal();
    }
  });
});

// Botão finalizar: verifica se há pelo menos 1 ingresso selecionado
btnFinalizar.addEventListener('click', () => {
  let totalIngressos = 0;

  cards.forEach(card => {
    totalIngressos += parseInt(card.querySelector('.quantidade').textContent);
  });

  if (totalIngressos === 0) {
    alert('Selecione pelo menos 1 ingresso antes de finalizar!');
  } else {
    alert(`Compra finalizada! Total: ${totalEl.textContent}`);
  }
});
