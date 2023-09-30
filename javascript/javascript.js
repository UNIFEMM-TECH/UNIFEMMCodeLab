// Função para mostrar uma seção e armazenar o ID no localStorage
function mostrarConteudo(id) {
    // Esconde todos os elementos de conteúdo
    const elementosConteudo = document.querySelectorAll('.container section');
    elementosConteudo.forEach(elemento => {
        elemento.style.display = 'none';
    });

    // Mostra o elemento com o ID correspondente
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.style.display = 'block';

        // Armazena o ID da seção ativa no localStorage
        localStorage.setItem('secaoAtiva', id);
    }
}

// Recupera o ID da última seção ativa do localStorage e a exibe
const secaoAtiva = localStorage.getItem('secaoAtiva');
if (secaoAtiva) {
    mostrarConteudo(secaoAtiva);
}

const elementosConteudo = document.querySelectorAll('.container section');
elementosConteudo.forEach(elemento => {
    elemento.style.display = 'none';
});

const elemento = document.getElementById('colaboradores');
if (elemento) {
    elemento.style.display = 'block';
}


// Obtém todas as seções existentes e adiciona suas IDs ao array secoesParaPesquisar
function atualizarSecoesParaPesquisar() {
    var secoes = document.querySelectorAll('section');
    secoesParaPesquisar = Array.from(secoes).map(function (secao) {
        return secao.id;
    });
}

// Chama a função para atualizar o array quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    atualizarSecoesParaPesquisar();
});

// Função de pesquisa que utiliza o array secoesParaPesquisar
function pesquisar(event) {
    event.preventDefault(); // Impede o comportamento padrão de enviar o formulário

    var termoPesquisa = document.getElementById('pesquisa').value.toLowerCase();
    var resultadoPesquisa = document.getElementById('resultadoPesquisa');

    // Limpa o resultado da pesquisa anterior
    resultadoPesquisa.innerHTML = '';

    for (var i = 0; i < secoesParaPesquisar.length; i++) {
        var secaoId = secoesParaPesquisar[i];
        var secao = document.getElementById(secaoId);

        // Verifica se o termo de pesquisa está presente no ID da seção
        if (secaoId.toLowerCase().includes(termoPesquisa)) {
            // Cria um link para a seção correspondente
            var link = document.createElement('a');
            link.textContent = secaoId;
            link.href = '#' + secaoId;

            // Adiciona o link ao resultado da pesquisa
            resultadoPesquisa.appendChild(link);
            resultadoPesquisa.appendChild(document.createElement('br'));

            // Exibe a seção
            secao.style.display = 'block';
        } else {
            // Oculta a seção
            secao.style.display = 'none';
        }
    }
}