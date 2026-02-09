/* ========================================
   DOCUMENTAÇÃO: JavaScript - Filtro Trabalhos
   ========================================
   
   ELEMENTOS MANIPULADOS:
   - Todos os .tab-btn: Botões de filtro
   - Todos os .trabalho-item: Items de trabalho
   
   FUNÇÕES PRINCIPAIS:
   - filterTrabalhos(filter): Filtra itens baseado em data-filter
   
   DATA ATTRIBUTES USADOS:
   - data-filter="todos": Mostra todos os trabalhos
   - data-filter="pendentes": Mostra status-pendente
   - data-filter="andamento": Mostra status-andamento
   - data-filter="concluidos": Mostra status-concluido
   
   LÓGICA:
   1. Adiciona event listeners a todos os tabs
   2. Quando clicado, obtém o filtro (data-filter)
   3. Remove classe "active" de todos os tabs
   4. Adiciona classe "active" ao tab clicado
   5. Oculta todos os trabalhos (display: none)
   6. Mostra apenas trabalhos que correspondem ao filtro
   
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const trabalhoItems = document.querySelectorAll('.trabalho-item');

    // Função para filtrar trabalhos
    function filterTrabalhos(filter) {
        trabalhoItems.forEach(item => {
            if (filter === 'todos') {
                item.style.display = 'block';
            } else {
                // Remove o 'status-' prefix para comparar
                const itemStatus = Array.from(item.classList)
                    .find(cls => cls.startsWith('status-'))
                    ?.replace('status-', '');
                
                if (itemStatus === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    }

    // Adiciona event listeners aos tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove classe active de todos
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Adiciona classe active ao clicado
            this.classList.add('active');
            
            // Filtra os trabalhos
            const filter = this.getAttribute('data-filter');
            filterTrabalhos(filter);
        });
    });
});
