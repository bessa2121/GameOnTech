/* ========================================
   DOCUMENTAÇÃO: JavaScript - Simulador de Chat
   ========================================
   
   ELEMENTOS MANIPULADOS:
   - <div id="messagesArea">: Área onde aparecem mensagens
   - <input id="messageInput">: Campo de entrada
   - <button class="btn-send">: Botão de envio
   - <button class="reply-btn">: Botões de sugestão rápida
   
   FUNÇÕES PRINCIPAIS:
   - sendMessage(msg): Envia mensagem ou pega do input
   - addMessage(text, isUser): Adiciona mensagem ao chat
   - getManagerResponse(userMessage): Retorna resposta do gestor baseada em palavra-chave
   - handleKeyPress(event): Detecta Enter no input
   - resetChat(): Limpa o chat
   
   LÓGICA:
   1. Usuário envia mensagem (typing ou quick reply)
   2. Mensagem do usuário aparece alinhada à direita (class="user")
   3. Simula delay (500ms) para resposta do gestor
   4. Resposta aparece alinhada à esquerda (class="system")
   5. Scroll automático para última mensagem
   
   ======================================== */

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

function getManagerResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Respostas baseadas em keywords
    const responses = {
        'oque eu devo fazer|próximas tarefas|próximos passos': {
            response: 'Você tem alguns itens importantes para esta semana:\n\n1. Configurar o ambiente de desenvolvimento\n2. Participar da reunião de alinhamento de sprint (amanhã às 09:00)\n3. Revisar a documentação do projeto\n4. Fazer uma 1-on-1 comigo\n\nQuals desses você gostaria de abordar primeiro?',
            keywords: ['oque eu devo|próximas tarefas|próximos passos|o que devo']
        },
        'como estou indo|feedback|meu desempenho|avaliação': {
            response: 'Você está indo muito bem! Sua integração foi excelente. Gosto do sua qualidade de código e sua atitude com o time. Continue assim!\n\nUma dica: documente um pouco mais seu trabalho, para que outros entendam o raciocínio. Podemos conversar mais sobre isso em nossa próxima 1-on-1.',
            keywords: ['como estou|feedback|desempenho|avaliação|como está']
        },
        'com quem devo falar|de quem devo|qual departamento|técnico': {
            response: 'Depende do que você precisa:\n\n- Problemas técnicos: Fale com Carlos Silva (Líder Técnico)\n- Questões de RH/Benefícios: Maria (Recursos Humanos)\n- Infraestrutura: Fale comigo ou com o time de TI\n- Dúvidas sobre projeto: Seu scrum master Bruno\n\nMas fique à vontade para vir comigo primeiro, se quiser!',
            keywords: ['com quem|de quem|qual departamento|técnico|falar com']
        },
        'trabalho em equipe|colaborar|trabalhar com|reunião': {
            response: 'Ótima pergunta! Nossa equipe valoriza:\n\n✓ Comunicação clara e frequente\n✓ Colaboração genuína\n✓ Dar e receber feedback construtivo\n✓ Ajudar os colegas quando possível\n✓ Ser "dona" do seu trabalho\n\nNão hesite em chamar alguém para pair programming ou tirar dúvidas.',
            keywords: ['trabalho em equipe|colaborar|trabalhar com|reunião']
        },
        'objetivos|metas|desenvolvimento|próximos 3 meses': {
            response: 'Vamos definir seus objetivos para os próximos 3 meses na nossa próxima 1-on-1 (quinta-feira). Mas alguns iniciais podem ser:\n\n1. Dominar o stack técnico da empresa\n2. Entregar sua primeira feature completa\n3. Melhorar documentação de código\n4. Fazer pair programming com 2-3 membros do time\n\nCom isso, você estará no caminho certo!',
            keywords: ['objetivos|metas|desenvolvimento|próximos 3 meses']
        },
        'benefícios|vale|plano|saúde|auxílio': {
            response: 'Excelente! Você tem acesso a:\n\n💊 Plano de saúde 100% pago pela empresa\n🦷 Plano odontológico (80% empresa)\n🍽️ Vale-refeição R$ 500/mês\n🚌 Vale-transporte 100%\n💻 Cursos/certificações (até R$3.000/ano)\n🏋️ Academia interna gratuita\n\nA Maria de RH pode explicar tudo melhor. Você já preencheu seu cadastro de benefícios?',
            keywords: ['benefícios|vale|plano|saúde|auxílio']
        },
        'repouso|férias|licença|dias': {
            response: 'Você tem direito a 30 dias de férias por ano, conforme a lei. Também temos política de flexibilidade:\n\n• Home office 2 dias por semana (mediante acordo)\n• Horário flexível (com hora cumprida)\n• Bem-estar mental com psicólogo corporativo\n\nVamos conversar sobre como ajeitar seus horários de forma que funcione bem para você e para a equipe.',
            keywords: ['repouso|férias|licença|dias|home office']
        },
        'quando|próxima reunião|1-on-1|agendar': {
            response: 'Ótimo! Vamos fazer nossas 1-on-1s todas as quintas-feiras às 15:00. Nossa primeira é esta semana!\n\nUsamos esse tempo para:\n• Feedback\n• Planejar desenvolvimento\n• Tirar dúvidas\n• Alinhamento de objetivos\n\nVocê está ok com esse horário?',
            keywords: ['quando|próxima reunião|1-on-1|agendar|quinta']
        },
        'não sei|não entendo|dúvida|ajuda': {
            response: 'Sem problemas! Esse é o seu período de aprendizado. Tenha em mente:\n\n✓ Faça perguntas!\n✓ Ninguém sabe tudo em um trabalho novo\n✓ Seus colegas adoram ajudar\n✓ Documente o que aprender\n\nVem comigo sempre que precisar. Prefiro que você pergunte mil vezes a fazer errado em silêncio!',
            keywords: ['não sei|não entendo|dúvida|ajuda|confuso']
        }
    };
    
    // Procura por match de keywords
    for (const [key, {response, keywords}] of Object.entries(responses)) {
        for (const keyword of keywords) {
            if (lowerMessage.includes(keyword.split('|')[0]) || lowerMessage.match(keyword)) {
                return response;
            }
        }
    }
    
    // Resposta padrão se não encontrar match
    return 'Ótima pergunta! Pode me dar um pouco mais de contexto? Ou você pode agendar uma 1-on-1 para discutir isso com mais profundidade. Estou sempre disponível para ajudar!';
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
