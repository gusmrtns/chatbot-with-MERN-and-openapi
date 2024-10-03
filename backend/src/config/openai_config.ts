import OpenAI from "openai"; // Importa a classe OpenAI

// Configuração da OpenAI
export const configureOpenAI = () => {
    return new OpenAI({
        apiKey: process.env.OPEN_AI_SECRET, // Adicione sua chave da OpenAI
        organization: process.env.OPEN_AI_ORGANIZATION_ID, // Opcional
    });
};
