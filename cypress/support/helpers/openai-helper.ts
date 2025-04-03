import OpenAI from "openai";
import { prompts } from "../prompts/prompts-data";
import { Prompt } from "../prompts/prompt";

export class OpenAiHelper {
  private static model = "gpt-4o";
  private client: OpenAI;

  constructor(apiKey?: string) {
    this.client = this.getClient(apiKey);
  }

  public getClient(apiKey?: string): OpenAI {
    return new OpenAI({
      apiKey: apiKey || process.env["OPENAI_API_KEY"],
      dangerouslyAllowBrowser: true,
    });
  }

  public getPromptByKey(key: string): Prompt {
    return prompts[key] || { instructions: "", input: "" };
  }

  public async generateText(prompt: Prompt): Promise<string> {
    const response = await this.client.responses.create({
      model: OpenAiHelper.model,
      instructions: prompt.instructions,
      input: prompt.input,
      max_output_tokens: 500,
    });
    return response.output_text;
  }

  public async generateTextFromChat(prompt: Prompt): Promise<string> {
    const completion = await this.client.chat.completions.create({
      model: OpenAiHelper.model,
      messages: [{ role: "user", content: prompt.instructions }],
      max_tokens: 500,
    });
    return completion.choices[0].message.content;
  }
}
