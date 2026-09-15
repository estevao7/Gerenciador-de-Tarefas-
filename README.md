# 📝 Lista de Tarefas

Uma aplicação simples e funcional de lista de tarefas (to-do list), construída com HTML, CSS e JavaScript puro, com foco em **acessibilidade** e **design responsivo**.

![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📌 Sobre o projeto

Este projeto permite que o usuário:

- ✅ Adicione novas tarefas
- ✅ Marque tarefas como concluídas
- ✅ Delete tarefas individualmente
- ✅ Visualize a contagem total de tarefas
- ✅ Veja uma mensagem quando não houver tarefas

O principal objetivo foi praticar manipulação do DOM, **delegação de eventos**, acessibilidade (ARIA) e responsividade.

---

## 🚀 Tecnologias utilizadas

- **HTML5** — estrutura semântica e acessível
- **CSS3** — variáveis, Flexbox, Grid, Media Queries
- **JavaScript (ES6+)** — manipulação do DOM, `forEach`, `splice`, `dataset`, `classList`, template strings
- **ARIA** — acessibilidade para leitores de tela

---

## 🎨 Funcionalidades

| Funcionalidade | Descrição |
| :--- | :--- |
| Adicionar tarefa | Digite no input e clique em "Adicionar" (ou aperte Enter) |
| Marcar como concluída | Clique no checkbox da tarefa |
| Deletar tarefa | Clique no botão 🗑️ da tarefa |
| Contador | Mostra quantas tarefas existem, com plural correto |
| Mensagem de vazio | Aparece quando não há tarefas na lista |

---

## ♿ Acessibilidade

O projeto foi desenvolvido pensando em acessibilidade:

- Uso de `aria-labelledby` para nomear seções
- Uso de `aria-label` dinâmico em checkboxes e botões de deletar
- Classe `.sr-only` para rótulos visíveis apenas a leitores de tela
- Estrutura semântica com `<main>`, `<header>`, `<section>`, `<h1>`, `<h2>`
- Alvos de toque com pelo menos 44px no mobile

---

## 📱 Responsividade

O layout se adapta a diferentes tamanhos de tela:

- **Telas grandes:** formulário em linha (input ao lado do botão)
- **Telas pequenas (até 520px):** formulário em coluna, botão maior e paddings ajustados

---

## 📂 Estrutura do projeto
ista-de-tarefas/
├── assets/
│ ├── style.css
│ └── script.js
└── index.html

## ▶️ Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/lista-de-tarefas.git

   Entre na pasta:
    bash
    cd lista-de-tarefas

   🧠 O que eu aprendi
    Manipulação do DOM com createElement, append, textContent
    
    Delegação de eventos com addEventListener no elemento pai
    
    Uso de dataset para armazenar dados em elementos HTML
    
    Acessibilidade com ARIA (aria-label, aria-labelledby)
    
    Design responsivo com Media Queries
    
    Variáveis CSS (:root + var())

   🔮 Melhorias futuras
    □ Salvar tarefas no localStorage
    □ Adicionar filtros (todas / pendentes / concluídas)
    □ Editar o texto de uma tarefa
    □ Adicionar modo escuro
    □ Animações de entrada e saída das tarefas


