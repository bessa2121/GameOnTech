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