
        
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

        const elemento = document.getElementById('inicio');
            if (elemento) {
                elemento.style.display = 'block';
            }