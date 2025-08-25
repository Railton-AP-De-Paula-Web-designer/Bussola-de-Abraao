document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de mapa (abrir)
    const botoesMapa = document.querySelectorAll('.mapa-btn');

    // Seleciona todos os contêineres de mapa
    const containersMapa = document.querySelectorAll('.mapa-container');

    // Seleciona o botão de fechar
    const fecharMapaBtn = document.querySelector('.fechar-Mapa-btn-js');

    // Inicialmente, esconde todos os mapas
    containersMapa.forEach(container => {
        container.classList.remove('visivel');
    });
    fecharMapaBtn.style.display = 'none';

    // Adiciona um "ouvinte de evento" para cada botão de abrir mapa
    botoesMapa.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            // Esconde todos os mapas antes de mostrar o novo
            containersMapa.forEach(container => {
                container.classList.remove('visivel');
            });

            // Pega o ID do mapa do botão clicado
            const igrejaId = evento.target.dataset.igrejaId;

            // Encontra o mapa correspondente e o torna visível
            containersMapa.forEach(container => {
                if (container.dataset.igrejaId === igrejaId) {
                    container.classList.add('visivel');
                }
            });

            fecharMapaBtn.style.display = 'flex'; // Exibe o botão de fechar
        });
    });

    // Adiciona o "ouvinte de evento" para o botão de fechar
    fecharMapaBtn.addEventListener('click', () => {
        // Esconde todos os mapas, fechando o que estiver visível
        containersMapa.forEach(container => {
            container.classList.remove('visivel');
        });

        fecharMapaBtn.style.display = 'none'; // Esconde o botão de fechar
    });

    // --- CÓDIGO NOVO: INSERIR AQUI ---
    // Adiciona o "ouvinte de evento" para toques na tela.
    // Isso garante que o botão de fechar funcione em celulares e tablets.
    fecharMapaBtn.addEventListener('touchstart', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do navegador em um toque.
        
        containersMapa.forEach(container => {
            container.classList.remove('visivel');
        });

        fecharMapaBtn.style.display = 'none';
    });
    // --- FIM DO CÓDIGO NOVO ---
});