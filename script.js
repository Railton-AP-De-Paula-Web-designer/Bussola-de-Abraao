// Seleciona todos os botões de "Mostrar Mapa"
const botoesMostrar = document.querySelectorAll('.mapa-btn');
// Seleciona o botão de fechar por seu ID
const botaoFechar = document.querySelector('#fecharMapaBtn');
// Seleciona todos os containers de mapa
const containersMapa = document.querySelectorAll('.mapa-container');

// Lógica para os botões que mostram o mapa
botoesMostrar.forEach(botao => {
    botao.addEventListener('click', () => {
        const id = botao.dataset.igrejaId;
        const mapa = document.querySelector(`.mapa-container[data-igreja-id="${id}"]`);
        
        // Esconde todos os mapas antes de mostrar o mapa certo
        containersMapa.forEach(container => {
            container.classList.remove('visivel');
        });
        
        if (mapa) {
            mapa.classList.add('visivel');
            botaoFechar.classList.add('visivel'); // Torna o botão de fechar visível
        }
    });
});

// Lógica para o botão de fechar
botaoFechar.addEventListener('click', () => {
    // Esconde todos os mapas
    containersMapa.forEach(container => {
        container.classList.remove('visivel');
    });
    
    botaoFechar.classList.remove('visivel'); // Esconde o botão de fechar
});