<h2 align="center">
  Aristóteles Alves 👨‍💻
</h2>

<p align="center">Rota de autenticação e cadastro de usuário com API do GitHub</p>

<p align="center">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/AristotelesAlves/Authentication_GitHub?color=green">
<a href="https://www.linkedin.com/in/aristoteles-aleves-de-oliveira-ab8089226/" target="_blank" rel="noopener noreferrer">
<img alt="Feito por" src="https://img.shields.io/badge/Feito%20por-Arist%C3%B3teles-green"> 
</a>
<a href="https://github.com/AristotelesAlves/Authentication_GitHub/commits/main">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/AristotelesAlves/Authentication_GitHub?color=green">
</a>
<a href="https://github.com/AristotelesAlves/Authentication_GitHub/issues">
<img alt="Repository issues" src="https://img.shields.io/github/issues/AristotelesAlves/Authentication_GitHub?color=green">
</a>
</p>

## ✅ Sobre o projeto

API RESTful que acessa o token da API do GitHub,
em seguida verifica se o id do user está cadastrado no banco de dados local (SQLite), 
caso o user estejá cadastrado ele retorna as informações cadastrada do user, 
else cria uma novo user na tabela com as informações do token do user.

## 🚀 Tecnologias

Tecnologias que usei para desenvolver a aplicação:

- Node.js

- TypeScript

- Express

- Axios

- Prisma.io

## 💻 Como começar

**Clone o projeto e acesse a pasta:**

```bash

$ git clone https://github.com/AristotelesAlves/Authentication_GitHub.git && cd Authentication_GitHub

```

**Siga os seguintes passos:**

```bash
# Instale as dependências:

$ npm install

# Altere suas variáveis ambiente em .env, que são geradas em https://github.com/settings/developers:

$ GITHUB_CLIENT_SECRET e GITHUB_CLIENT_ID

# Para inicializar o projeto:

$ npm run dev

# Visite no seu navegador:

$ http://localhost:4000/github

# Com token gerado, faça o POST { code:"token_gerado" }:

$ http://localhost:4000/authenticate

# Muito bem, o projeto está funcionando!
```
Feito com 💓 por Aristóteles Alves 🤝 [veja meu linkedin](https://www.linkedin.com/in/aristoteles-aleves-de-oliveira-ab8089226/)
