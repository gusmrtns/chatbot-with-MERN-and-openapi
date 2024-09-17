# Chatbot com MERN Stack

## Objetivo
Este projeto tem como objetivo criar um chatbot utilizando a **MERN Stack** com uma API REST. O chatbot será capaz de interagir com os usuários em tempo real, usando a API da OpenAI para fornecer respostas baseadas em IA, similar ao ChatGPT. Além disso, as conversas dos usuários serão armazenadas em um banco de dados MongoDB para futuras consultas ou exclusão pelo próprio usuário.

## Funcionalidades Principais

- **Guia completo da MERN Stack**
- Autenticação e autorização de usuários
- Validação de dados usando o middleware `express-validators`
- Armazenamento das conversas dos usuários no MongoDB
- Criação de um sistema de autenticação personalizado
- Uso de tokens de autorização JWT e cookies HTTP-Only
- Proteção de rotas de usuário com verificação de autenticação
- Aplicação moderna com **React** e **Vite**
- Interface de usuário (UI) responsiva e bonita usando **Material UI**
- Design moderno e totalmente responsivo
- Integração da **OpenAI API** com **Node** e **Express**
- Clone completo de um chatbot no estilo ChatGPT
- Persistência e gerenciamento de sessões de usuários

## Tecnologias Utilizadas

### Backend
- **Node.js** - Ambiente de execução para JavaScript no lado do servidor.
- **Express** - Framework web para construir APIs RESTful.
- **MongoDB** - Banco de dados NoSQL para armazenar as conversas dos usuários.

### Frontend
- **Vite** - Ferramenta de build rápida para desenvolvimento frontend moderno.
- **React** - Biblioteca JavaScript para construção de interfaces de usuário.
- **Material UI (MUI)** - Biblioteca de componentes para React com design moderno.
- **Context API** - Gerenciamento de estado no React.
- **Axios** - Cliente HTTP para realizar requisições à API.
- **React Router** - Navegação entre as rotas da aplicação.

### Autenticação e Validação
- **JWT (JSON Web Tokens)** - Autenticação segura de usuários.
- **HTTP-Only Cookies** - Cookies seguros para armazenar tokens de autenticação.
- **Express-Validators** - Middleware para validação de dados no backend.

### IA
- **OpenAI API** - Para geração de respostas com IA.

## O que é MERN Stack?

A **MERN Stack** é uma coleção de tecnologias JavaScript que permitem criar um ambiente de desenvolvimento web completo, abrangendo tanto o backend quanto o frontend.

- **MongoDB**: Banco de dados NoSQL, utilizado para armazenar as conversas dos usuários.
- **ExpressJS**: Framework minimalista para Node.js, responsável por lidar com as requisições e fornecer as APIs RESTful.
- **ReactJS**: Biblioteca para construção de interfaces de usuário no frontend.
- **NodeJS**: Plataforma de execução de JavaScript no lado do servidor, permitindo criar APIs e lógica de negócio.

### Por que usar a MERN Stack?

- **Compatibilidade FullStack**: Tecnologias JavaScript do início ao fim.
- **Desenvolvimento Web Moderno**: Suporte para bibliotecas e frameworks de ponta.
- **Escalabilidade**: Aplicações de fácil crescimento.
- **Aplicações em Tempo Real**: Capacidade de lidar com funcionalidades em tempo real.
- **Cross-Plataform**: Compatível com diferentes plataformas.
- **Open Source**: Comunidade ativa e muitas ferramentas de código aberto.

## Introdução do Projeto

Este é um projeto de **IA moderna** que utiliza a **OpenAI API** para criar um chatbot com respostas em tempo real, similar ao **ChatGPT**. A aplicação permite ao usuário armazenar conversas em um banco de dados MongoDB, com a opção de excluí-las quando desejar. Além disso, a interface do usuário é capaz de exibir blocos de código formatados, se solicitado.

## Como Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/chatbot-mern.git
    ```
2. Instale as dependências do backend:
    ```bash
    cd backend
    npm install
    ```
3. Instale as dependências do frontend:
    ```bash
    cd frontend
    npm install
    ```
4. Configure as variáveis de ambiente conforme o `.env.example`.
5. Rode o backend:
    ```bash
    npm run dev
    ```
6. Rode o frontend:
    ```bash
    npm run dev
    ```

## Contribuições

Sinta-se à vontade para abrir issues e pull requests, sugerir melhorias e ajudar na evolução do projeto!

## Licença

Este projeto está sob a licença MIT.
