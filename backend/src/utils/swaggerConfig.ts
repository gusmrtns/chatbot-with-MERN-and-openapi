import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0', // Necessary for the 3.x OpenAPI version
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API for the MERN Chatbot',
        },
        servers: [
            {
                url: 'http://localhost:5000/api/v1', // base URL from API
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // routers for swagger
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
