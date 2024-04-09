import dotenv from 'dotenv';
import { Integration } from 'src/core/types/integration.type';

dotenv.config();

export const env = {
    PORT: parseInt(process.env.PORT || '3000'),
    AZURE_OPENAI_TRANSLATOR: {
        KEY: process.env.AZURE_OPENAI_TRANSLATOR_API_KEY || '',
        URL: process.env.AZURE_OPENAI_TRANSLATOR_URL || '',
        LOCATION: process.env.AZURE_OPENAI_LOCATION || 'southeastasia',
        VERSION: process.env.AZURE_OPENAI_TRANSLATOR_API_VERSION || '3.0',
    },
    AI_SERVICE: (process.env.AI_SERVICE || 'azureOpenAI') as Integration,
}