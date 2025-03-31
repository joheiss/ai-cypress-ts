import OpenAI from 'openai';

export async function askOpenAI(): Promise<any> {
    const client = new OpenAI({
        apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    });

    const response = await client.responses.create({
        model: 'gpt-4o',
        instructions: 'You are a software test engineer and you prepare a testplan for the web pages of an IAM (Identity and Access Management) system',
        input: 'Please prepare the testplan for the IAM web pages.',
    });
}
