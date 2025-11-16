import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { extractName } from "./query-parser.js";
import { getJiraIssues } from "./jira.js";
import { getGithubActivity } from "./github.js";
import { generateAIResponse } from "./ai.js";

const app = express();
app.use(express.json());
app.use(cors());

// Serve frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../public")));

app.post("/ask", async (req, res) => {
    const question = req.body.question;
    const name = extractName(question);

    if (!name)
        return res.json({ answer: "Couldn't detect team member name." });

    const jira = await getJiraIssues(name);
    const github = await getGithubActivity(name);

    const answer = await generateAIResponse(name, jira, github);

    res.json({ answer });
});

app.listen(3000, () => console.log("Server running → http://localhost:3000"));
