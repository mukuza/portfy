import type { ConfigProps } from "../../types/types";

const Config: ConfigProps = {
    baseURLOllama: "http://localhost:11434/v1",             // Endereço padrão Ollama
    baseURLOpenAi: "https://api.openai.com/v1",             // Endereço padrão OpenAI
    useOpenAI: false,                                       // Flag para alternar entre OpenAI e Ollama
    ollamaModel: "llama3.2",                                // Modelo padrão Ollama
    openAiModel: "gpt-4",                                   // Modelo padrão OpenAi
    openAiKey: Bun.env.OPEN_AI_KEY || "ollama",             // Será usado ollama caso não configurada
};

export default Config;
