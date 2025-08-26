// Espera o documento HTML carregar completamente antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // Função para carregar os materiais
    function carregarMateriais() {
        fetch('materiais.json') // Busca o arquivo materiais.json
            .then(response => response.json()) // Transforma a resposta em formato JSON
            .then(data => {
                const grid = document.querySelector('.materials-grid'); // Seleciona a div da grade
                if (!grid) return; // Se não encontrar a grade, para a função
                grid.innerHTML = ''; // Limpa qualquer conteúdo existente
                
                // Para cada item no arquivo JSON, cria um card
                data.forEach(material => {
                    const card = document.createElement('div');
                    card.className = 'material-card';
                    card.innerHTML = `
                        <img src="${material.imagem}" alt="${material.alt}">
                        <h4>${material.nome}</h4>
                    `;
                    grid.appendChild(card); // Adiciona o card na grade
                });
            })
            .catch(error => console.error('Erro ao carregar materiais:', error)); // Mostra um erro se algo der errado
    }

    // Função para carregar os projetos
    function carregarProjetos() {
        fetch('projetos.json') // Busca o arquivo projetos.json
            .then(response => response.json())
            .then(data => {
                const grid = document.querySelector('.portfolio-grid');
                if (!grid) return;
                grid.innerHTML = '';

                data.forEach(projeto => {
                    const card = document.createElement('div');
                    card.className = 'portfolio-card';
                    card.innerHTML = `
                        <img src="${projeto.imagem}" alt="${projeto.alt}">
                        <div class="portfolio-card-content">
                            <h4>${projeto.titulo}</h4>
                            <p>${projeto.descricao}</p>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            })
            .catch(error => console.error('Erro ao carregar projetos:', error));
    }

    // Chama as duas funções para carregar tudo na página
    carregarMateriais();
    carregarProjetos();

});