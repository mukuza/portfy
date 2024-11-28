# Portfy
*Gere automaticamente informações úteis de websites para projetos e portfólios.*

---

Este projeto tem como objetivo fornecer uma ferramenta simples e eficiente para gerar informações automaticamente a partir do conteúdo de um site. Utilizando a API do Ollama (ou OpenAI, caso configurado) e o Puppeteer para capturar screenshots personalizáveis, ele analisa o texto de um site e retorna informações úteis em formato JSON. As dimensões das capturas de tela podem ser configuradas para atender diferentes necessidades, tornando a ferramenta versátil para criar projetos de portfólios ou outras finalidades.

## Funcionalidades

- **Geração automática de título, descrição, tags e imagem**: A partir do conteúdo de um site.
- **Captura de tela personalizada**: Utiliza o Puppeteer para gerar imagens (screenshots) do site, com dimensões configuráveis para atender diferentes necessidades.
- **Suporte para modelos OpenAI e Ollama**: Permite alternar entre o modelo `gpt-3.5-turbo`, `gpt-4` e modelos da Ollama como `llama3.2`, `llama3.1` e `qwen2.5-coder`.
- **Configuração flexível**: É possível alterar entre os dois provedores de AI (OpenAI ou Ollama) com base em um arquivo de configuração.
Geração automática de título, descrição, tags e imagem: A partir do conteúdo de um site.

## Como Funciona

1. O conteúdo textual de um site é enviado para a API do Ollama ou OpenAI.
2. A IA processa o conteúdo e gera um título, descrição e tags relacionadas ao tema do site.
3. As informações são retornadas em formato JSON.

Exemplo de JSON retornado:

```json
{
  "title": "README-AI",
  "description": "Sistema de gerenciamento de documentação com inteligência artificial avançada, permitindo a geração rápida e personalizada de documentação para projetos de software.",
  "tags": [
    "Documentação",
    "Inteligência Artificial",
    "Automatização",
    "Personalização",
    "GitHub",
    "Python"
  ]
}
```

## Como Usar

Clone este repositório para o seu computador:

```sh
git clone https://github.com/mxrqz/portfy.git
cd portfy
```
Instale as dependências:

```sh
bun i
```

Para rodar o projeto, execute o script principal:

```sh
bun run start
```

## Configuração

Você pode configurar o uso do OpenAI ou Ollama diretamente no arquivo `config/config.ts`. O arquivo contém variáveis de configuração que permitem a alternância entre os provedores de IA.

- useOpenAI: Define se será usado o OpenAI ou Ollama. (Padrão: false, Ollama).
- model: O modelo de IA a ser utilizado (ex: gpt-4, llama3.2).
- openAiKey: Sua chave de API do OpenAI (necessário se useOpenAI for true).
- baseURLOpenAi: URL base da API do OpenAI.
- baseURLOllama: URL base da API do Ollama.

## Variáveis de Ambiente
Se você estiver usando a chave de API do OpenAI, é necessário configurar a variável de ambiente `OPEN_AI_KEY` no seu `.env` ou diretamente no código:

```sh
OPEN_AI_KEY=SuaChaveAPI
```