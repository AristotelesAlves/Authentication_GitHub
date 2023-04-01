

API RESTful que acessa o token do user da API do GitHub,
em seguida verifica se o id do user está cadastrado no banco de dados local (SQLite), 
caso o user estejá cadastrado ele retorna as informações cadastrada do user, 
else cria uma novo user na tabela com as informações do token do user.

# Se você gostaria de baixar o código e experimentá-lo por si mesmo:

## Instructions

1. Clone o repo: git clone https://github.com/AristotelesAlves/Authentication_GitHub
2. Instalar pacotes: npm install
3. Altere as variaveis ambiente GITHUB_CLIENT_SECRET e GITHUB_CLIENT_ID
4. Iniciar apliacação: npm run dev
5. Visite no seu navegador em: http://localhost:4000/github
6. Com token gerado, faça o POST do { code:"token_gerado" } em: http://localhost:4000/authenticate
