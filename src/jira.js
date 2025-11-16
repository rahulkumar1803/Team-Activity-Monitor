import axios from "axios";
import { config } from "../config/config.js";

const jiraAPI = axios.create({
    baseURL: `${config.jira.baseUrl}/rest/api/3`,
    auth: {
        username: config.jira.email,
        password: config.jira.token,
    },
    headers: { "Accept": "application/json" }
});

export async function getJiraIssues(name) {
    try {
        const jql = `assignee = "${name}" AND statusCategory != Done ORDER BY updated DESC`;

        // NEW REQUIRED ENDPOINT:
        const res = await jiraAPI.post(
            "/search/jql",
            { jql },   // Body must contain JQL
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        const issues = res.data.issues || [];

        return issues.map(issue => ({
            key: issue.key,
            summary: issue.fields.summary,
            status: issue.fields.status.name,
            updated: issue.fields.updated
        }));

    } catch (err) {
        console.log("JIRA ERROR:", err.response?.data || err.message);
        return { error: "Failed to fetch Jira issues using new JQL API." };
    }
}
