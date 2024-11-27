import type { OllamaResponseJsonProps } from "../../types/types";

export default function ExtractJson(
    input: string,
): OllamaResponseJsonProps | null {
    const jsonRegex = /```json([\s\S]*?)```/i;
    const match = input.match(jsonRegex);

    if (match) {
        try {
            return JSON.parse(match[1].trim());
        } catch (error) {
            console.error("Erro ao parsear o JSON:", error);
            return null;
        }
    }

    console.warn("Nenhum JSON encontrado no texto.");
    return null;
}
