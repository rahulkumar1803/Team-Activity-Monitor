import axios from "axios";
import { config } from "../config/config.js";

const githubAPI = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `Bearer ${config.github.token}`,
        "X-GitHub-Api-Version": "2022-11-28"
    }
});

export async function getGithubActivity(username) {
    try {
        const events = await githubAPI.get(`/users/${username}/events`);

        const commits = [];
        const prs = [];

        for (const e of events.data) {
            if (e.type === "PushEvent") {
                commits.push({
                    repo: e.repo.name,
                    message: e.payload.commits[0].message,
                    timestamp: e.created_at
                });
            }

            if (e.type === "PullRequestEvent") {
                prs.push({
                    repo: e.repo.name,
                    title: e.payload.pull_request.title,
                    state: e.payload.pull_request.state,
                    url: e.payload.pull_request.html_url,
                    timestamp: e.created_at
                });
            }
        }

        return { commits, prs };
    } catch (err) {
        console.log(err.response?.data);
        return { error: "Failed to fetch GitHub activity." };
    }
}
