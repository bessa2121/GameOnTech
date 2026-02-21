function sendMessage(quickReply = null) {
    const input = document.getElementById('messageInput');
    const message = quickReply || input.value.trim();

    if (!message) return;

    // Limpa input
    input.value = '';
    input.focus();

    // Adiciona mensagem do usuário
    addMessage(message, true);

    // Simula delay da resposta do gestor
    setTimeout(() => {
        const response = getBossResponse(message);
        addMessage(response, false);
    }, 500);
}

function addMessage(text, isUser) {
    const messagesArea = document.getElementById('messagesArea');
    const messageGroup = document.createElement('div');
    messageGroup.className = `message-group ${isUser ? 'user' : 'system'}`;

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';

    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    messageDiv.appendChild(paragraph);
    messageGroup.appendChild(messageDiv);
    messagesArea.appendChild(messageGroup);

    // Scroll automático para última mensagem
    messagesArea.scrollTop = messagesArea.scrollHeight;
}

function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function getBossResponse(userMessage) {
    const lowerMessage = removeAccents(userMessage.toLowerCase());

    const responses = [
        {
            keywords: ['prioridades', 'esta semana', 'semana'],
            response: `Suas prioridades para esta semana:

1. Finalizar a configuração do ambiente de desenvolvimento (prazo: hoje).
2. Participar da reunião de alinhamento de sprint (amanhã às 09:00).
3. Revisar a documentação do projeto e fazer uma primeira contribuição.
4. Preparar-se para a 1-on-1 de quinta-feira.

Foque no que te deixa mais confortável primeiro. Qual dessas você quer priorizar?`
        },
        {
            keywords: ['revisar progresso', 'onboarding', 'progresso'],
            response: `Vamos revisar seu progresso no onboarding:

✅ Ambiente configurado: 80% (falta testar integração).
✅ Conhecimento do projeto: Bom, mas precisa de mais prática.
✅ Integração com o time: Excelente! Você se adaptou rápido.
✅ Cursos obrigatórios: 2 de 4 concluídos.

Você está no caminho certo! Alguma área específica que quer discutir?`
        },
        {
            keywords: ['melhorar comunicacao', 'comunicacao', 'time'],
            response: `Para melhorar sua comunicação com o time:

- Seja proativo: Compartilhe ideias nas reuniões diárias.
- Use ferramentas: Slack para conversas rápidas, Jira para tarefas.
- Peça feedback: Pergunte como está indo.
- Documente: Anote decisões para evitar mal-entendidos.

Você tem alguma situação específica em mente?`
        },
        {
            keywords: ['agendar 1-on-1', '1-on-1', 'marcar reuniao'],
            response: `Nossas 1-on-1s são toda quinta-feira às 15:00.

Agenda típica:
- Revisão de progresso
- Feedback mútuo
- Planejamento de desenvolvimento
- Discussão de desafios

Esse horário funciona? Podemos ajustar se precisar.`
        },
        {
            keywords: ['pedir acesso', 'acesso ferramenta', 'ferramenta'],
            response: `Para pedir acesso a uma ferramenta:

1. Identifique a ferramenta e o motivo (ex.: Jira para gestão de tarefas).
2. Envie um e-mail para suporte@gameontech.com com os detalhes.
3. Eu aprovo e o time de TI configura (leva 1-2 dias úteis).

Qual ferramenta você precisa? Posso acelerar o processo.`
        },
        {
            keywords: ['expectativas', 'proximos 3 meses', 'metas', '3 meses'],
            response: `Expectativas para os próximos 3 meses:

- Mês 1: Concluir onboarding e primeira contribuição significativa.
- Mês 2: Assumir tarefas independentes e participar de code reviews.
- Mês 3: Liderar uma pequena feature e receber feedback avançado.

Foco em crescimento técnico e colaboração. Vamos alinhar metas específicas na próxima 1-on-1?`
        }
    ];

    for (const item of responses) {
        for (const keyword of item.keywords) {
            if (removeAccents(lowerMessage).includes(removeAccents(keyword))) {
                return item.response;
            }
        }
    }

    return 'Boa pergunta! Me dê mais detalhes para eu poder ajudar melhor.';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function resetChat() {
    const messagesArea = document.getElementById('messagesArea');
    messagesArea.innerHTML = '';

    // Mensagem inicial
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group system';
    messageGroup.innerHTML = '<div class="message"><p>Oi! Podemos conversar. Como posso ajudar no seu desenvolvimento?</p></div>';
    messagesArea.appendChild(messageGroup);
}