/* ========================================
   DOCUMENTAÇÃO: JavaScript - Filtro de Tarefas
   ========================================
   
   ELEMENTOS MANIPULADOS:
   - Todos os .tab-btn: Botões de filtro
   - Todos os .tarefa-item: Items de tarefa
   
   FUNÇÕES PRINCIPAIS:
   - filterTarefas(filter): Filtra items baseado no status
   
   DATA ATTRIBUTES USADOS:
   - data-filter="todos": Mostra todas as tarefas
   - data-filter="andamento": Mostra status-andamento
   - data-filter="concluido": Mostra status-concluido
   - data-filter="cancelado": Mostra status-cancelado
   
   LÓGICA:
   1. Adiciona event listeners a todos os tabs
   2. Quando clicado, obtém o filtro (data-filter)
   3. Remove classe "active" de todos os tabs
   4. Adiciona classe "active" ao tab clicado
   5. Oculta todas as tarefas (display: none)
   6. Mostra apenas tarefas que correspondem ao filtro
   
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tarefaItems = document.querySelectorAll('.tarefa-item');

    // Função para filtrar tarefas
    function filterTarefas(filter) {
        tarefaItems.forEach(item => {
            if (filter === 'todos') {
                item.style.display = 'flex';
            } else {
                // Obtém classes da tarefa
                const itemStatus = Array.from(item.classList)
                    .find(cls => cls.startsWith('status-'))
                    ?.replace('status-', '');
                
                if (itemStatus === filter) {
                    item.style.display = 'flex';
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
            
            // Filtra as tarefas
            const filter = this.getAttribute('data-filter');
            filterTarefas(filter);
        });
    });
});
