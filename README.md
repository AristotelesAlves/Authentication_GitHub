
## Sobre


## Instructions

1. Clone o repo: git clone https://github.com/AristotelesAlves/Authentication_GitHub
2. Instalar pacotes: npm install
3. Altere as variaveis ambiente GITHUB_CLIENT_SECRET e GITHUB_CLIENT_ID
4. Iniciar apliacação: npm run dev
5. Visite no seu navegador em: http://localhost:4000/github
6. Com token gerado, faça o POST do { code:"token_gerado" } em: http://localhost:4000/authenticate

<h3 align="center">
  Aristóteles Alves :sunflower:
</h3>

<p align="center">Rota de autenticação com GitHub</p>

<p align="center">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/AristotelesAlves/Authentication_GitHub?color=%237844e9">
<a href="https://www.linkedin.com/in/aristoteles-aleves-de-oliveira-ab8089226/" target="_blank" rel="noopener noreferrer">
<img alt="Made by" src="https://img.shields.io/badge/made%20by-matheus-7844e9">
</a>
<a href="https://github.com/AristotelesAlves/Authentication_GitHub/commits/main">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/AristotelesAlves/Authentication_GitHub?color=%237844e9">
</a>
<a href="https://github.com/AristotelesAlves/Authentication_GitHub/issues">
<img alt="Repository issues" src="https://img.shields.io/github/issues/AristotelesAlves/Authentication_GitHub?color=%237844e9">
</a>
</p>

## ✅ Sobre o projeto

API RESTful que acessa o token do user da API do GitHub,
em seguida verifica se o id do user está cadastrado no banco de dados local (SQLite), 
caso o user estejá cadastrado ele retorna as informações cadastrada do user, 
else cria uma novo user na tabela com as informações do token do user.

## 🚀 Tecnologias
