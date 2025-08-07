# 📊 Filtro Diário de Editais - Dautin

Este projeto automatiza a **captação, filtragem e notificação de licitações públicas brasileiras** com uso de ferramentas low-code e APIs públicas, economizando tempo e entregando alta relevância para empresas contratantes.

---

## ✅ Objetivo

Automatizar a busca diária de oportunidades no portal PNCP (Portal Nacional de Contratações Públicas), com envio de notificações personalizadas por **e-mail** e **WhatsApp** com base no perfil de cada cliente.

---


## 🧭 Visão Geral do Projeto

### 📌 Diagrama do Fluxo

![Diagrama do Fluxo](./imagens/diagrama-do-fluxo.png)

### 🔄 Captura de Licitações (n8n)

![Captura de Licitações](./imagens/captura-de-licitacoes.png)

### 🧠 Filtro de Licitações e Notificações (n8n)

![Filtro de Licitações](./imagens/filtro-de-licitacoes.png)

---

## 🧩 Tecnologias Utilizadas

| Tecnologia  | Função |
|-------------|--------|
| [n8n](https://n8n.io) | Orquestração dos fluxos automatizados |
| [Supabase](https://supabase.com) | Banco de dados relacional (PostgreSQL + API) |
| [Pipefy](https://www.pipefy.com) | Origem dos dados dos clientes |
| [Postmark](https://postmarkapp.com) | Disparo de e-mails transacionais |
| [Z-API](https://www.z-api.io) | Envio de mensagens via WhatsApp |
| [Hostinger VPS](https://www.hostinger.com.br) | Infraestrutura para rodar o n8n |

---

## ⚙️ Funcionalidades

- 🔄 Captação diária de licitações do PNCP por API
- 🔍 Filtro inteligente por palavras-chave e estados
- 📬 Notificações automáticas por e-mail (HTML responsivo)
- 📱 Notificações por WhatsApp com destaque nas maiores oportunidades
- 🧠 Tratamento de dados com JavaScript nos nós do n8n
- 📦 Armazenamento seguro dos dados em Supabase

---

## 📁 Estrutura do Projeto

```
filtro-licitacoes-n8n/
├── docs/                 # Documentação geral (PDF)
├── scripts/              # Códigos JavaScript usados nos nós do n8n
├── exemplos-json/        # Exemplo de entradas e saídas
├── imagens/              # Prints e diagramas do fluxo
└── README.md             # Este arquivo
```

---

## 🧠 Destaques Técnicos

- Uso avançado de `Code Nodes` no n8n com JavaScript puro
- Normalização de texto para busca de palavras-chave (sem acentos, case-insensitive)
- Geração automática de HTML com destaque visual das palavras encontradas
- Agrupamento de licitações por estado e ordenação por valor
- Otimização de mensagens de WhatsApp com resumo das top 5 licitações

---

## 📌 Exemplos

Você pode conferir:

- [📄 Documentação técnica (PDF)](./docs/documentacao-filtro-licitacoes.pdf)
- [💻 Códigos dos fluxos](./scripts/)
- [📦 Exemplos JSON](./exemplos-json/)

---

## 👨‍💻 Autor

Anderson Corrêa de Liz  
Desenvolvedor | Automação com n8n | Projetos de Integração e APIs Públicas

[LinkedIn](www.linkedin.com/in/andersondeliz-pm)

---
