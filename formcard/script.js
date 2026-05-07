// Aguarda o DOM carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

  // Referências aos campos do formulário
  const inputNome     = document.getElementById('nome');
  const inputProfissao = document.getElementById('profissao');
  const inputData     = document.getElementById('data');
  const inputFoto     = document.getElementById('foto');
  const inputEmail    = document.getElementById('email');

  // Referências às mensagens de erro
  const erroNome      = document.getElementById('erro-nome');
  const erroProfissao = document.getElementById('erro-profissao');
  const erroData      = document.getElementById('erro-data');
  const erroFoto      = document.getElementById('erro-foto');
  const erroEmail     = document.getElementById('erro-email');

  // Referência ao botão e à área do crachá
  const btnGerar    = document.getElementById('btn-gerar');
  const areaCracha  = document.getElementById('area-cracha');

  // -------------------------------------------------------
  // Limpa o erro de um campo quando o usuário começa a digitar
  // -------------------------------------------------------
  inputNome.addEventListener('input', function () {
    limparErro(inputNome, erroNome);
  });

  inputProfissao.addEventListener('input', function () {
    limparErro(inputProfissao, erroProfissao);
  });

  inputData.addEventListener('input', function () {
    limparErro(inputData, erroData);
  });

  inputEmail.addEventListener('input', function () {
    limparErro(inputEmail, erroEmail);
  });

  inputFoto.addEventListener('change', function () {
    // Limpa apenas a mensagem de erro da foto (sem borda vermelha)
    erroFoto.textContent = '';
  });

  // -------------------------------------------------------
  // Clique no botão: valida e gera o crachá
  // -------------------------------------------------------
  btnGerar.addEventListener('click', function () {
    const valido = validarFormulario();

    if (valido) {
      // Usa FileReader para ler a imagem e depois criar o crachá
      const arquivo = inputFoto.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        // e.target.result contém a imagem em base64
        criarCracha(e.target.result);
      };

      reader.readAsDataURL(arquivo);
    }
  });

  // -------------------------------------------------------
  // Função: valida todos os campos
  // Retorna true se tudo estiver correto, false caso contrário
  // -------------------------------------------------------
  function validarFormulario() {
    let valido = true;

    // Valida nome
    if (inputNome.value.trim() === '') {
      mostrarErro(inputNome, erroNome, 'O nome é obrigatório.');
      valido = false;
    } else {
      limparErro(inputNome, erroNome);
    }

    // Valida profissão
    if (inputProfissao.value.trim() === '') {
      mostrarErro(inputProfissao, erroProfissao, 'A profissão é obrigatória.');
      valido = false;
    } else {
      limparErro(inputProfissao, erroProfissao);
    }

    // Valida data de nascimento
    if (inputData.value === '') {
      mostrarErro(inputData, erroData, 'A data de nascimento é obrigatória.');
      valido = false;
    } else {
      limparErro(inputData, erroData);
    }

    // Valida foto (sem borda vermelha, só mensagem)
    if (inputFoto.files.length === 0) {
      erroFoto.textContent = 'Selecione uma foto.';
      valido = false;
    } else {
      erroFoto.textContent = '';
    }

    // Valida email (obrigatório + formato básico)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputEmail.value.trim() === '') {
      mostrarErro(inputEmail, erroEmail, 'O email é obrigatório.');
      valido = false;
    } else if (!emailRegex.test(inputEmail.value.trim())) {
      mostrarErro(inputEmail, erroEmail, 'Digite um email válido.');
      valido = false;
    } else {
      limparErro(inputEmail, erroEmail);
    }

    return valido;
  }

  // -------------------------------------------------------
  // Função: exibe erro em um campo (borda vermelha + mensagem)
  // -------------------------------------------------------
  function mostrarErro(input, spanErro, mensagem) {
    input.classList.add('input-erro');
    spanErro.textContent = mensagem;
  }

  // -------------------------------------------------------
  // Função: limpa o erro de um campo
  // -------------------------------------------------------
  function limparErro(input, spanErro) {
    input.classList.remove('input-erro');
    spanErro.textContent = '';
  }

  // -------------------------------------------------------
  // Função: cria o crachá dinamicamente com createElement
  // -------------------------------------------------------
  function criarCracha(imagemSrc) {
    // Limpa qualquer crachá anterior
    areaCracha.innerHTML = '';

    // Formata a data para o padrão brasileiro (dd/mm/aaaa)
    const partes = inputData.value.split('-');
    const dataFormatada = partes[2] + '/' + partes[1] + '/' + partes[0];

    // Cria o card principal
    const card = document.createElement('div');
    card.classList.add('cracha');

    // Título do crachá
    const titulo = document.createElement('h2');
    titulo.textContent = 'Crachá de Identificação';

    // Foto
    const foto = document.createElement('img');
    foto.src = imagemSrc;
    foto.alt = 'Foto de ' + inputNome.value.trim();

    // Nome
    const nome = document.createElement('p');
    nome.classList.add('cracha-nome');
    nome.textContent = inputNome.value.trim();

    // Profissão
    const profissao = document.createElement('p');
    profissao.classList.add('cracha-profissao');
    profissao.textContent = inputProfissao.value.trim();

    // Linha divisória
    const hr = document.createElement('hr');

    // Data de nascimento
    const data = document.createElement('p');
    data.classList.add('cracha-info');
    data.innerHTML = '<span>Nascimento:</span> ' + dataFormatada;

    // Email
    const email = document.createElement('p');
    email.classList.add('cracha-info');
    email.innerHTML = '<span>Email:</span> ' + inputEmail.value.trim();

    // Monta o card com todos os elementos
    card.appendChild(titulo);
    card.appendChild(foto);
    card.appendChild(nome);
    card.appendChild(profissao);
    card.appendChild(hr);
    card.appendChild(data);
    card.appendChild(email);

    // Adiciona o card na área do crachá
    areaCracha.appendChild(card);

    // Rola a página até o crachá
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

});
