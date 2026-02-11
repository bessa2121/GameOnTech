document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.getElementById("loginOpen");
    const modal = document.getElementById("loginModal");
    const closeButton = document.getElementById("loginClose");

    if (!openButton || !modal || !closeButton) {
        return;
    }

    const openModal = () => {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("login-modal-open");
    };

    const closeModal = () => {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("login-modal-open");
    };

    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    const form = modal.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            closeModal();
        });
    }
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
