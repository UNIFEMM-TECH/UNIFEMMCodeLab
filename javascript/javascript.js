const elementosConteudo = document.querySelectorAll('.container section');
    elementosConteudo.forEach(elemento => {
        elemento.style.display = 'none';
    });

const elemento = document.getElementById('inicio');
    if (elemento) {
        elemento.style.display = 'block';
    }