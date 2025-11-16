import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function fallbackSummary(name, jira, github) {
    return `
Summary for ${name} (Fallback Mode)
-----------------------------------
JIRA Issues:
${JSON.stringify(jira, null, 2)}

GitHub Activity:
${JSON.stringify(github, null, 2)}

(Note: Gemini API failed. This is a local fallback response.)
`;
}

export async function generateAIResponse(name, jira, github) {
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"  // ✔ This works in new SDK
        });

        const prompt = `
Summarize the activity for ${name}.
JIRA Issues: ${JSON.stringify(jira, null, 2)}
GitHub Activity: ${JSON.stringify(github, null, 2)}
`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();

    } catch (err) {
        // console.log(err);
        return fallbackSummary(name, jira, github);
    }
}
