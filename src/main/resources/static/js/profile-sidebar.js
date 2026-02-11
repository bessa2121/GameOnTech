document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('profileTrigger');
    const sidebar = document.getElementById('profileSidebar');
    const closeBtn = document.getElementById('closeProfile');

    // Criar overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    // Abrir sidebar
    trigger.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    // Fechar sidebar
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Fechar clicando no overlay
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});
  // Função para alternar abas
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Remover active de todos os botões
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                // Adicionar active ao clicado
                btn.classList.add('active');

                // Ocultar todas as seções
                document.querySelectorAll('.logs-section').forEach(section => section.classList.remove('active'));

                // Mostrar a seção correspondente
                const filter = btn.getAttribute('data-filter');
                document.getElementById(filter).classList.add('active');
            });
        });

        // Função para filtrar logs empresariais
        function filterLogs() {
            const filterValue = document.getElementById('status-filter').value;
            const logItems = document.querySelectorAll('#empresarial .log-item');

            logItems.forEach(item => {
                const status = item.getAttribute('data-status');
                if (filterValue === 'all' || status === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        }
