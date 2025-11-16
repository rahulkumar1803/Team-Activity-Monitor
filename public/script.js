/* MARKDOWN → HTML CONVERTER */
function convertMarkdownToHtml(text) {
    let html = text;

    html = html.replace(/\*\*(.+?)\*\*/gs, "<strong>$1</strong>");
    html = html.replace(/(^|[^*])\*(?!\*)([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
    html = html.replace(/\n/g, "<br>");

    return html;
}

/* HANDLE ASK BUTTON */
async function ask() {
    const questionInput = document.getElementById("question");
    const question = questionInput.value.trim();

    if (!question) return alert("Please enter a valid question!");

    document.getElementById("loader").style.display = "block";
    questionInput.value = "";

    try {
        const res = await fetch("https://team-activity-monitor.onrender.com/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question })
        });

        const data = await res.json();
        const raw = data.answer || "No answer received.";
        const formatted = convertMarkdownToHtml(raw);

        document.getElementById("loader").style.display = "none";
        document.getElementById("output").innerHTML = formatted;
        document.getElementById("resultModal").style.display = "flex";

    } catch (err) {
        console.error("Error:", err);
        document.getElementById("loader").style.display = "none";
        document.getElementById("output").innerHTML = "An error occurred.";
        document.getElementById("resultModal").style.display = "flex";
    }
}

/* CLOSE MODAL */
function closeModal() {
    document.getElementById("resultModal").style.display = "none";
}

/* DARK MODE TOGGLE */
function toggleTheme() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

/* LOAD USER THEME */
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
};
