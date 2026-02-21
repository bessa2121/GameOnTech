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
        const response = getManagerResponse(message);
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

function getManagerResponse(userMessage) {
    const lowerMessage = removeAccents(userMessage.toLowerCase());

    const responses = [
        {
            keywords: ['o que devo', 'proximas tarefas', 'proximos passos'],
            response: `Você tem alguns itens importantes para esta semana:

1. Configurar o ambiente de desenvolvimento
2. Participar da reunião de alinhamento de sprint (amanhã às 09:00)
3. Revisar a documentação do projeto
4. Fazer uma 1-on-1 comigo

Qual desses você gostaria de abordar primeiro?`
        },
        {
            keywords: ['como estou', 'feedback', 'desempenho', 'avaliacao'],
            response: `Você está indo muito bem! Sua integração foi excelente.

Gosto da sua qualidade de código e da sua atitude com o time. Continue assim!

Uma dica: documente um pouco mais seu trabalho para que outros entendam seu raciocínio.`
        },
        {
            keywords: ['com quem', 'qual departamento', 'tecnico', 'falar com'],
            response: `Depende do que você precisa:

- Problemas técnicos: Carlos (Líder Técnico)
- RH/Benefícios: Maria
- Infraestrutura: Time de TI
- Projeto: Scrum Master Bruno

Se preferir, pode falar comigo primeiro!`
        },
        {
            keywords: ['beneficios', 'vale', 'plano', 'saude', 'auxilio'],
            response: `Você tem acesso a:

💊 Plano de saúde
🦷 Plano odontológico
🍽️ Vale-refeição
🚌 Vale-transporte
💻 Cursos e certificações
🏋️ Academia interna

A Maria do RH pode explicar melhor!`
        },
        {
            keywords: ['ferias', 'licenca', 'home office', 'registrar ponto', 'solicitar ferias', 'rh e ponto'],
            response: `Para RH e ponto:

- Registrar ponto: Use o app interno ou portal RH (acesse via intranet).
- Solicitar férias: Entre no sistema RH e submeta o pedido com antecedência de 30 dias.
- Home office: Disponível 2x por semana, solicite via e-mail para seu gestor.

Precisa de ajuda com algo específico?`
        },
        {
            keywords: ['1-on-1', 'reuniao', 'agendar', 'quinta'],
            response: `Nossas 1-on-1s são toda quinta às 15:00.

Usamos para:
- Feedback
- Planejamento
- Desenvolvimento

Esse horário funciona para você?`
        },
        {
            keywords: ['nao sei', 'duvida', 'ajuda', 'confuso'],
            response: `Sem problemas! Esse é seu momento de aprendizado.

✓ Faça perguntas
✓ Ninguém nasce sabendo
✓ O time está aqui para ajudar

Prefiro que pergunte do que erre em silêncio!`
        },
        {
            keywords: ['acesso e-mail', 'vpn', 'acesso corporativo'],
            response: `Para acesso ao e-mail corporativo e VPN:

1. E-mail: Use suas credenciais do AD (Active Directory). Acesse via Outlook ou webmail.
2. VPN: Baixe o cliente da intranet e conecte-se com suas credenciais.
3. Primeiro acesso: Entre em contato com o suporte de TI para configuração inicial.

Se tiver problemas, abra um chamado no portal de suporte.`
        },
        {
            keywords: ['politicas', 'documentos internos', 'docs'],
            response: `Os documentos internos e políticas estão disponíveis na intranet:

- Políticas: Seção "Políticas Corporativas" (códigos de conduta, segurança, etc.).
- Documentos: Pasta compartilhada no Drive ou SharePoint.
- Acesso: Use suas credenciais corporativas.

Se não conseguir acessar, peça ajuda ao time de TI.`
        },
        {
            keywords: ['suporte tecnico', 'abrir chamado', 'fluxo suporte'],
            response: `Para abrir um chamado de suporte técnico:

1. Acesse o portal de suporte (link na intranet).
2. Selecione a categoria (ex.: TI, Infraestrutura).
3. Descreva o problema detalhadamente.
4. Prioridade: Baixa, Média, Alta ou Crítica.

O time de TI responderá em até 24h. Para urgências, ligue para a central (ramal 1234).`
        },
        {
            keywords: ['cursos obrigatorios', 'treinamentos'],
            response: `Cursos obrigatórios para onboarding:

1. Segurança da Informação (conclua em 30 dias).
2. Código de Conduta Ética.
3. Treinamento em Produtos da Empresa.
4. Certificações técnicas (se aplicável ao seu cargo).

Acesse a plataforma de aprendizado (LMS) via intranet. Precisa de prazos ou ajuda para inscrição?`
        }
    ];

    for (const item of responses) {
        for (const keyword of item.keywords) {
            if (removeAccents(lowerMessage).includes(removeAccents(keyword))) {
                return item.response;
            }
        }
    }

    return 'Ótima pergunta! Pode me dar um pouco mais de contexto? Estou aqui para ajudar!';
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
    messageGroup.innerHTML = '<div class="message"><p>Olá! Bem-vindo. Como posso ajudá-lo? Fique livre para fazer qualquer pergunta.</p></div>';
    messagesArea.appendChild(messageGroup);
}