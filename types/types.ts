export interface ExtractInfo {
    url: string;
    imageWidth: number;
    imageHeight: number;
    captureFullPage: boolean;
}

export interface OllamaResponseJsonProps {
    title: string;
    description: string;
    tags: string[];
}

export interface ConfigProps {
    useOpenAI: boolean;
    ollamaModel:
        | "llama3.2"
        | "qwen2.5-coder"
        | "llama3.1";
    openAiModel:
        | "gpt-4"
        | "gpt-3.5-turbo";
    openAiKey: string | undefined;
    baseURLOllama: string;
    baseURLOpenAi: string;
}
