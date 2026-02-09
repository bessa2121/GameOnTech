document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('pixel-canvas');
    const title = document.getElementById('pixel-title');

    if (!canvas || !title) return;

    // Ajusta o canvas para o tamanho exato do h1
    const rect = title.getBoundingClientRect();
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";

    const cols = 40; // Quantidade de colunas de quadradinhos
    const rows = 6;  // Quantidade de linhas
    const totalBlocks = cols * rows;

    canvas.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // 1. Criar os blocos
    for (let i = 0; i < totalBlocks; i++) {
        const block = document.createElement('div');
        block.classList.add('pixel-block');
        canvas.appendChild(block);
    }

    // 2. Embaralhar os índices (Efeito Aleatório)
    let indices = Array.from(Array(totalBlocks).keys());
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // 3. Remover os blocos um por um
    const blocks = document.querySelectorAll('.pixel-block');
    indices.forEach((randomIndex, i) => {
        setTimeout(() => {
            blocks[randomIndex].classList.add('exit');
        }, i * 8); // Velocidade da "decodificação"
    });
});