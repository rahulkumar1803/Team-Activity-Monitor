export function extractName(question) {
    const q = question.toLowerCase();

    // List of real team members (edit easily)
    const knownMembers = {
        rahul: "Rahul",
        john: "John",
        mike: "Mike",
        sarah: "Sarah",
        lisa: "Lisa",
        alex: "Alex",
        ritu: "Ritu"
    };

    // 1️⃣ Try to match known names STRICTLY (best accuracy)
    for (let key in knownMembers) {
        // match names inside full sentence using boundaries
        const regex = new RegExp(`\\b${key}\\b`, "i");
        if (regex.test(q)) {
            return knownMembers[key];
        }
    }

    // 2️⃣ If unknown name → detect proper-noun style words
    const words = question.split(/\W+/);

    // Common English stopwords (NOT names)
    const stopwords = new Set([
        // Question words
        "what", "who", "where", "when", "why", "how",

        // Verbs commonly used in queries
        "is", "are", "am", "was", "were",
        "doing", "working", "going", "showing", "telling", "checking",
        "works", "work", "done", "doing", "did",

        // Helping verbs / Auxiliary verbs
        "do", "does", "did",
        "has", "have", "had",
        "will", "would", "can", "could", "should", "may", "might",

        // Pronouns
        "i", "you", "he", "she", "it", "we", "they",
        "me", "him", "her", "them",
        "my", "your", "his", "their", "our",

        // Prepositions
        "on", "in", "at", "for", "from", "about", "to", "into",
        "with", "without", "over", "under", "between",

        // Articles
        "the", "a", "an",

        // Adverbs
        "today", "now", "recently", "currently", "yesterday",
        "really", "just", "only", "still", "already",

        // Generic nouns NOT names
        "task", "tasks", "status", "work", "activity", "activities",
        "progress", "ticket", "tickets", "issue", "issues",

        // Misc common query words
        "show", "tell", "give", "find", "explain", "list",
        "please", "kindly", "detail", "details"
    ]);


    for (let w of words) {
        const word = w.toLowerCase();
        if (
            word.length >= 3 &&
            /^[a-z]+$/.test(word) &&
            !stopwords.has(word)
        ) {
            // treat as name only if not in stopwords
            return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
        }
    }

    return null;
}
