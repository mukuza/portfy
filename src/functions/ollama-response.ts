import ollama from "ollama";
import OpenAI from "openai";
import Config from "../config/config";

export default async function OllamaRespose(
    text: string,
): Promise<string | null> {
    const modelName = Config.useOpenAI ? Config.openAiModel : Config.ollamaModel;

    const systemMessage = "Baseado no texto a seguir, quero que vc me gere um titulo, descrição, tags com informações importantes. O texto é todo o conteudo de texto de um website, preciso que analise cuidadosamente tudo para poder retornar de forma consisa e coesa as informações solicitadas. Retorne as informações em formato JSON na estrutura project: {title: string, description: string, tags: string[]}.";

    const openai = new OpenAI({
        baseURL: Config.useOpenAI ? Config.baseURLOpenAi : Config.baseURLOllama,
        apiKey: Config.useOpenAI ? Config.openAiKey : "ollama",
    });

    try {
        const completion = await openai.chat.completions.create({
            model: modelName,
            messages: [
                { role: "system", content: systemMessage },
                { role: "user", content: text },
            ],
        });

        const messageContent = completion.choices?.[0]?.message?.content;
        return messageContent || null;
    } catch (error) {
        console.error("Erro ao gerar resposta com Ollama/OpenAI:", error);
        return null;
    }

    // const response = await ollama.chat({
    //     model: modelName,
    //     messages: [
    //         { role: "system", content: systemMessage },
    //         { role: "user", content: text },
    //     ],
    // });
}
