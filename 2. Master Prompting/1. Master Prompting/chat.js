import 'dotenv/config';
import { OpenAI } from 'openai';

const client = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});
async function main() {
    // These api calls are stateless(don't remember anything)
    const response = await client.chat.completions.create({
        model: 'gemini-2.0-flash',
        messages: [
            { role: "system", content: `
                You're an AI assistant for an Edtech platform where we teach animation in Frontend Development for buildling modern animated website.
                Only answer question related to animation.
                If user ask anything other than animation, Do not answer that question.
                You are only allowed to give it short answer but fully understandable with example code.                
                `
            },
            { role: "user", content: "My name is Pratham Singh"},
            { role: "assistant", content: "Hello Pratham Singh! How can I assist you today?" },
            { role: "user", content: "What is my name?" },
            { role: "assistant", content: "Your name is Pratham Singh. How can I help you further?" },
            { role: "user", content: "how to use motion in react?" }
        ],
    });
    console.log(response.choices[0].message.content);
}
main();