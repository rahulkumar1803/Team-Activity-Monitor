---

# 📘 Team Activity Monitor — AI-Powered Activity Insight Tool

This project is an AI-driven tool that helps you quickly understand what your team members are currently working on by pulling their **JIRA tasks**, **GitHub commits**, and generating a simple, readable summary using **OpenAI or Gemini**.

It was built as part of the **Autonomize AI SDE Assignment**, designed to be completed in a 2-day sprint.

---

## 🚀 What This Project Does

Ask the system a question like:

### **“What is Rahul working on these days?”**

…and it will:

* Look up their assigned JIRA issues
* Fetch their recent GitHub commits and pull requests
* Understand your question and detect the person you’re referring to
* Use AI to generate a clean summary
* Show the result inside a modern and responsive UI

This gives you a **quick and clear snapshot** of team activity without needing to check multiple tools manually.

---

## 🧰 Key Features

### 🔹 JIRA Integration

Automatically fetches assigned issues, their status, and progress.

### 🔹 GitHub Integration

Pulls commit history, active PRs, and other contribution details.

### 🔹 AI-Powered Summaries

Uses either **OpenAI** or **Google Gemini** to combine all data into a natural, human-friendly explanation.

### 🔹 Clean, Modern UI

* Animated gradient background
* Glassy container card
* Pop-up modal for summaries
* Fully working **light/dark mode toggle**
* Supports Markdown → HTML formatting

### 🔹 Smart Name Detection

Understands questions without strict format:

* “What is Rahul doing today?”
* “Sarah’s recent commits?”
* “Has Mike worked this week?”

### 🔹 Live Demo

* https://team-activity-monitor.vercel.app/

---

## 🧪 Sample Test Queries

These test inputs were implemented and validated:

* “What is John working on these days?”
* “Show me recent activity for Sarah.”
* “What has Mike been working on this week?”
* Invalid names (handled gracefully)
* Users with no recent activity

---

## 🗂 Project Structure

```text
project/
├── src/
│   ├── server.js
│   ├── jira.js
│   ├── github.js
│   ├── ai.js
│   ├── query-parser.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── package.json
├── .env
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file like:

```env
JIRA_BASE_URL=your-domain.atlassian.net
JIRA_EMAIL=your-email
JIRA_API_TOKEN=your-jira-token

GITHUB_TOKEN=your-github-token

OPENAI_API_KEY=your-openai-key
GEMINI_API_KEY=your-gemini-key
```

You may use **either OpenAI or Gemini** — Gemini is free.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Team-Activity-Monitor
cd Team-Activity-Monitor
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the backend

```bash
node src/server.js
```

### 4️⃣ Open the UI in your browser

```
http://localhost:3000
```

---

## 💡 How the System Works

### 🟣 1. User asks a question

Example:

```
What is Rahul working on?
```

### 🟣 2. Name detection

System extracts the name using regex + cleaned stopwords.

### 🟣 3. Data fetching

The backend retrieves:

* JIRA tasks
* GitHub commits
* GitHub PRs

### 🟣 4. AI Summarization

Uses OpenAI/Gemini to convert raw data into a clean summary.

### 🟣 5. Render in the UI

Displayed inside a stylish pop-up modal with Markdown support.

---

## 🧠 AI Summary Output Includes:

* Current or recent JIRA issues
* PR titles and commit summaries
* Near-term progress
* Recent maintenance or refactor work
* Overall project involvement

If an AI API fails or rate limits are hit, a fallback text-based summary is generated.

---

## 🎨 UI/UX Overview

* **Responsive layout**
* **Animated gradient background**
* **Glassmorphism-style containers**
* **Dark/Light mode toggle switch**
* **Modal with smooth animation**
* **Clean readable output formatting**

The UI is intentionally lightweight and aesthetically modern — perfect for demonstration and everyday usage.

---

## 🤖 APIs Used

| Service                 | Purpose                |
| ----------------------- | ---------------------- |
| **JIRA Cloud REST API** | Fetch user issues      |
| **GitHub REST API**     | Fetch commits & PRs    |
| **OpenAI API**          | Activity summarization |
| **Google Gemini API**   | Backup summarizer      |

---

## 🧩 Assignment Requirements Completed

* ✔ JIRA and GitHub integrations
* ✔ Extract team member names
* ✔ AI summarization implemented
* ✔ Error-handling
* ✔ Clean and interactive UI
* ✔ All test scenarios functional
* ✔ Complete documentation (this README)
* ✔ End-to-End workflow working

---

## 🧠 Challenges & How They Were Solved

| Challenge                 | What I Did                             |
| ------------------------- | -------------------------------------- |
| Name detection issues     | Introduced advanced regex + stopwords  |
| API rate limits           | Added Gemini fallback                  |
| UI readability            | Added glassmorphism + dark mode        |
| JIRA restricted endpoints | Used JQL filters with email assignment |

---

## 🚀 Potential Future Improvements

* Dashboard showing all team members
* Graphs or timelines for activity
* Integration with Slack/Teams
* Scheduled activity digests
* Caching for faster responses
* Multi-project support

---

## 👨‍💻 Author

**Rahul Kumar**

Thank you for reviewing this project!

---
