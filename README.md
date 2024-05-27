# Challenge AluraGeek

Bem-vindo ao repositório do projeto **Challenge AluraGeek**. Esta aplicação simula uma pequena parte de um e-commerce, permitindo visualizar, adicionar, editar e excluir produtos. O projeto é desenvolvido em HTML, CSS, JavaScript, Node.js, Prisma, MongoDB Atlas e Festify.

![alura](https://github.com/claudioares/challenge-AluraGeek/assets/95495192/8d6270a6-edd9-4361-8db1-c696a63315aa)

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [API](#api)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Funcionalidades

- Visualização de produtos em cards.
- Adição de novos produtos.
- Edição de produtos existentes.
- Exclusão de produtos.
- Versão desktop e mobile responsiva.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express, Prisma, MongoDB Atlas, Festify

## Instalação

### Pré-requisitos

- Node.js
- NPM ou Yarn
- Conta no MongoDB Atlas

### Passo a passo

1. Clone o repositório:

```bash
git clone git@github.com:claudioares/challenge-AluraGeek.git
```

2. Instale as dependências do backend:
cd api
```bash 
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo .env na pasta backend e adicione suas credenciais do MongoDB Atlas:

 ```bash 
 DATABASE_URL="sua-url-do-mongodb-atlas" 
 ```
 
  

4. Inicie o servidor backend
npm run dev

5. Inicie o servidor frontend:
   Abra o arquivo index.html

## Uso
Acesse a aplicação em seu navegador.
Navegue pela lista de produtos.
Adicione, edite ou exclua produtos conforme necessário.


## API
Endpoints
GET /products
Retorna todos os produtos.

`POST /products`
Adiciona um novo produto.
body:
```bash
{
  "title": "Nome do Produto",
  "price": 100,
  "image": "http://link-da-imagem.com/imagem.jpg",
  "description": "Descrição do produto"
}
```

`PUT /product/:id`
Edita um produto existente.

Query Params:
`id`: ID do produto a ser editado.
```bash
{
  "title": "Novo Nome",
  "price": 150,
  "image": "http://novo-link-da-imagem.com/imagem.jpg",
  "description": "Nova descrição"
}
```

`DELETE /product`
Exclui um produto.
```bash
{
  "id": "id-do-produto"
}
```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença
Este projeto está licenciado sob a licença MIT.

Feito por Cláudio Soares para concluir o desafio `Challenge AluraGeek`


Este arquivo README.md oferece uma visão geral completa do seu projeto, incluindo instruções para instalação e uso. 

Além disso, está estruturado de forma que outros desenvolvedores possam contribuir facilmente. Se você precisar de ajuda adicional ou quiser adicionar imagens específicas, por favor, me avise!


Acesse minha pagina pessoal: https://claudio-soares-fullstack.vercel.app/
