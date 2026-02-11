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
