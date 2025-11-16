import dotenv from "dotenv";
dotenv.config();

export const config = {
  jira: {
    baseUrl: process.env.JIRA_BASE_URL,
    email: process.env.JIRA_EMAIL,
    token: process.env.JIRA_API_TOKEN,
  },
  github: {
    token: process.env.GITHUB_TOKEN,
  },
  openai: {
    key: process.env.OPENAI_API_KEY,
  },
};
