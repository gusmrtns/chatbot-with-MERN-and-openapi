# 🤖 Chatbot com MERN Stack

## 🎯 Objetivo
Este projeto tem como objetivo criar um chatbot utilizando a **MERN Stack** com uma API REST. O chatbot será capaz de interagir com os usuários em tempo real, usando a API da OpenAI para fornecer respostas baseadas em IA, similar ao ChatGPT. Além disso, as conversas dos usuários serão armazenadas em um banco de dados MongoDB para futuras consultas ou exclusão pelo próprio usuário.

## ⚙️ Funcionalidades Principais

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

## 🛠️ Tecnologias Utilizadas

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) 
- ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) 
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) 

### Frontend
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) 
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) 
- ![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white) 
- ![Context API](https://img.shields.io/badge/Context--API-61DAFB?style=for-the-badge&logo=react&logoColor=white) 
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) 
- ![React Router](https://img.shields.io/badge/React--Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 

### Autenticação e Validação
- ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white) 
- ![HTTP-Only Cookies](https://img.shields.io/badge/HTTP--Only--Cookies-FFD700?style=for-the-badge) 
- Middleware para validação de dados no backend.

### IA
- ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white) 

## 🧰 O que é MERN Stack?

A **MERN Stack** é uma coleção de tecnologias JavaScript que permitem criar um ambiente de desenvolvimento web completo, abrangendo tanto o backend quanto o frontend.

- **MongoDB**: Banco de dados NoSQL, utilizado para armazenar as conversas dos usuários.
- **ExpressJS**: Framework minimalista para Node.js, responsável por lidar com as requisições e fornecer as APIs RESTful.
- **ReactJS**: Biblioteca para construção de interfaces de usuário no frontend.
- **NodeJS**: Plataforma de execução de JavaScript no lado do servidor, permitindo criar APIs e lógica de negócio.

### 🤔 Por que usar a MERN Stack?

- **Compatibilidade FullStack**: Tecnologias JavaScript do início ao fim.
- **Desenvolvimento Web Moderno**: Suporte para bibliotecas e frameworks de ponta.
- **Escalabilidade**: Aplicações de fácil crescimento.
- **Aplicações em Tempo Real**: Capacidade de lidar com funcionalidades em tempo real.
- **Cross-Plataform**: Compatível com diferentes plataformas.
- **Open Source**: Comunidade ativa e muitas ferramentas de código aberto.

## 💡 Introdução do Projeto

Este é um projeto de **IA moderna** que utiliza a **OpenAI API** para criar um chatbot com respostas em tempo real, similar ao **ChatGPT**. A aplicação permite ao usuário armazenar conversas em um banco de dados MongoDB, com a opção de excluí-las quando desejar. Além disso, a interface do usuário é capaz de exibir blocos de código formatados, se solicitado.

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/gusmrtns/chatbot-with-MERN-and-openapi.git
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

4. **Configure as variáveis de ambiente:**
    - No diretório `backend`, existe um arquivo chamado `.env.example`. Ele contém placeholders para as variáveis de ambiente necessárias para rodar o projeto.
    - Renomeie esse arquivo para `.env`:
      ```bash
      cp .env.example .env
      ```
    - Preencha os valores necessários, incluindo as suas chaves de API (como a chave da OpenAI) e outros secrets que o projeto possa exigir.

    **Exemplo de um arquivo `.env`:**
    ```env
    OPENAI_API_KEY=your_openai_api_key_here
    DB_PASSWORD=your_database_password_here
    ```

5. Rode o backend:
    ```bash
    npm run dev
    ```

6. Rode o frontend:
    ```bash
    npm run dev
    ```


## 🤝 Contribuições

Sinta-se à vontade para abrir issues e pull requests, sugerir melhorias e ajudar na evolução do projeto!
