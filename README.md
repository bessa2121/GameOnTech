# GameOnTech
Hackathon - OnBoarding

# Onboarding Corporativo – Portal do Colaborador

## 📌 Visão Geral

Este projeto tem como objetivo resolver um problema real e recorrente em empresas:  
**onboardings mal estruturados**, onde novos colaboradores entram sem clareza de função, rotina, expectativas e acompanhamento.

A aplicação simula um **portal corporativo de onboarding**, focado especialmente em **estagiários e desenvolvedores júnior**, oferecendo visibilidade, organização e feedback estruturado desde o primeiro dia.

---

## 🎯 Problema

Em muitos cenários reais:
- O colaborador chega e não sabe o que fazer
- Não entende sua função real
- Não sabe como evoluir na empresa
- Não existe acompanhamento claro
- O onboarding depende apenas de conversas informais

Isso gera:
- Baixa produtividade
- Frustração
- Falta de engajamento
- Desorganização interna

---

## 💡 Solução Proposta

Criar um **sistema de onboarding corporativo** que centraliza:

- 📅 Cronograma de eventos e treinamentos  
- ✅ Trabalhos e tarefas atribuídas  
- 🧾 Logs de atividades e progresso  
- 📜 Políticas da empresa  
- 💬 Feedback estruturado sobre desempenho e evolução  

Tudo conectado a um **processo de onboarding**, com progresso calculado automaticamente.

---

## 🧠 Funcionalidades Principais

### Facilitador de Rotina
- Logs de atividades
- Trabalhos atribuídos
- Cronograma de eventos
- Políticas da empresa

### Feedback e Evolução Profissional
- Como estou trabalhando?
- Onde posso melhorar?
- Quais projetos estou envolvido?
- Qual minha função real dentro da empresa?
- Como posso evoluir?

---

## 🏗️ Arquitetura

```text
[ React (Front-end) ]
        |
        | REST API (JSON)
        v
[ Spring Boot (Back-end) ]
        |
        v
[ MySQL (Banco de Dados) ]
```

# Tipos de Conventional Commits

## Principais tipos
- **feat**: adiciona uma nova funcionalidade.
- **fix**: corrige um bug.
- **docs**: mudanças apenas na documentação.
- **style**: alterações de formatação (espaços, ponto e vírgula, indentação), sem impacto no código.
- **refactor**: mudanças no código que não corrigem bugs nem adicionam funcionalidades.
- **perf**: melhorias de performance.
- **test**: inclusão ou alteração de testes.
- **build**: mudanças que afetam o sistema de build ou dependências externas.
- **ci**: alterações em configuração de integração contínua (CI/CD).
- **chore**: tarefas menores, manutenção, ajustes que não afetam código de produção.
- **revert**: desfaz um commit anterior.

## Estrutura da mensagem
tipo(escopo opcional): descrição curta

### Exemplos
- `feat(user-service): adicionar endpoint de cadastro`
- `fix(auth): corrigir erro de validação no login`
- `docs: atualizar README com instruções de execução`
- `style: ajustar indentação no UserController`
- `refactor: simplificar lógica de autenticação`
- `perf: otimizar consulta no repositório`
- `test: criar testes unitários para UserService`
- `build: atualizar versão do Maven`
- `ci: configurar pipeline no GitHub Actions`
- `chore: atualizar dependências no pom.xml`
- `revert: revert "feat: adicionar endpoint de cadastro"`

---

## 1. Quais sinais mostram que um onboarding falhou logo no primeiro mês?

## 2. Quais funcionalidades são essenciais em um onboarding digital eficiente?

## 3. Vale mais guiar o colaborador passo a passo ou dar autonomia desde o início?

## 4. Na avaliação de um hackathon, pesa mais a profundidade de uma feature ou a variedade de funcionalidades?

## 5. Vale mais demonstrar segurança/autenticação bem feita ou focar só no fluxo funcional?

## 6. Na apresentação final, é melhor focar no problema ou na solução técnica?

## 7. Se pudesse dar apenas um conselho para melhorar o projeto em 7 dias, qual seria?

---

# Outros pontos importantes

## A implementação do backend e do banco a nossa aplicação conta pontos positivos na avaliação?

### Existe algum ponto do onboarding que geralmente é negligenciado pelas empresas?

### É válido focar mais na experiência do estagiário ou também mostrar ferramentas para o gestor/mentor?

### Logs de progresso e pendências fazem sentido como diferencial ou ficariam complexos demais para o tempo do evento?

### Chat e assistente virtual agregam valor real ou podem ser vistos como “extra”?

### O que costuma ser um erro técnico comum em projetos de hackathon?

---
