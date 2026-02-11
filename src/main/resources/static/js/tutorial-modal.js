// ========================================
// TUTORIAL MODAL - VERSÃO MODIFICADA PARA ABRIR APENAS NO REDIRECIONAMENTO (PRIMEIRA VISITA POR SESSÃO)
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("\n=== 🎬 TUTORIAL MODAL CARREGADO ===\n");

    const modal = document.getElementById("tutorialModal");
    const closeButton = document.getElementById("tutorialClose");
    const tutorialReopenBtn = document.getElementById("tutorialReopen");
    const prevBtn = document.getElementById("tutorialPrev");
    const nextBtn = document.getElementById("tutorialNext");
    const slides = document.querySelectorAll(".tutorial-slide");
    const dots = document.querySelectorAll(".tutorial-dot");
    const currentCounter = document.getElementById("tutorialCurrent");

    if (!modal || !closeButton) {
        console.error("❌ ERRO: Elementos críticos não encontrados");
        return;
    }

    console.log("✓ Modal encontrado");
    console.log("✓ Slides encontrados:", slides.length);

    modal.style.display = "none";
    let currentSlide = 0;

    // ========== FUNÇÕES ==========

    const openTutorial = () => {
        console.log("🎬 Abrindo tutorial...");
        modal.style.display = "flex";
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("tutorial-modal-open");
        showSlide(0);
        console.log("✅ Tutorial aberto");
    };

    const closeTutorial = () => {
        console.log("🔒 Fechando tutorial...");
        modal.style.display = "none";
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("tutorial-modal-open");
        slides.forEach(s => s.classList.remove("active"));
        console.log("✅ Tutorial fechado");
    };

    const showSlide = (index) => {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        if (slides[index]) slides[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
        if (currentCounter) currentCounter.textContent = index + 1;

        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === slides.length - 1;

        currentSlide = index;
    };

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        if (currentSlide > 0) showSlide(currentSlide - 1);
    };

    // ========== LISTENERS ==========

    closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeTutorial();
    });

    if (prevBtn) prevBtn.addEventListener("click", prevSlide);
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);

    modal.addEventListener("click", (e) => {
        if (e.target === modal && modal.classList.contains("is-open")) {
            closeTutorial();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-open")) {
            closeTutorial();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("is-open")) return;
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    if (tutorialReopenBtn) {
        tutorialReopenBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            currentSlide = 0;
            openTutorial();
        });
    }

    // ========== AUTO-OPEN APENAS NA PRIMEIRA VISITA POR SESSÃO ==========

    const hasSeenTutorial = sessionStorage.getItem("tutorialSeen");

    if (!hasSeenTutorial) {
        console.log("🎉 PRIMEIRA VISITA NESSA SESSÃO! Abrindo tutorial em 300ms...");
        setTimeout(() => {
            openTutorial();
            sessionStorage.setItem("tutorialSeen", "true");
            console.log("✅ sessionStorage.tutorialSeen = true");
        }, 300);
    } else {
        console.log("⏭️ Tutorial já visto nessa sessão (sessionStorage.tutorialSeen = true)");
    }

    // ========== FUNÇÃO DE RESET ==========

    window.tutorialReset = () => {
        console.log("\n🔄 RESETANDO TUTORIAL");
        sessionStorage.removeItem("tutorialSeen");
        closeTutorial();
        console.log("✅ Recarregue a página: location.reload()");
    };

    console.log("\n✅ Tutorial pronto! Use: tutorialReset()\n");
});