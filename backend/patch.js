const fs = require('fs');
const content = fs.readFileSync('routes/aiRoutes.js', 'utf8');

const prefix = content.split('// Note: To use the real LLM, you must set process.env.GEMINI_API_KEY')[0];
const suffix = content.split('// 2. Ask AI Tutor Endpoint')[1];

const newRoute = `// Note: To use the real LLM, you must set process.env.GROQ_API_KEY
const getGroqClient = () => {
    if (!process.env.GROQ_API_KEY) return null;
    return new Groq({ apiKey: process.env.GROQ_API_KEY });
};

const chunkText = (text, size) => {
    const chunks = [];
    for (let i = 0; i < text.length; i += size) {
        chunks.push(text.substring(i, i + size));
    }
    return chunks;
};

// 1. Summarize PDF Endpoint -> Accepts a PDF file via form-data
router.post('/summarize', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No PDF file uploaded.' });
        }

        const pdfData = await pdfParse(req.file.buffer);
        const fullText = pdfData.text;

        const groq = getGroqClient();

        if (groq) {
            const chunks = chunkText(fullText, 45000);
            const chunkSummaries = [];

            for (let i = 0; i < chunks.length; i++) {
                const chunkPrompt = \`You are an expert academic assistant. A student is preparing for exams.
Analyze these pages and extract EVERYTHING important:
For EACH topic/concept found:
- Write the FULL definition exactly as given
- Write ALL examples mentioned with complete working
- Write ALL rules, properties, and theorems with explanations
- Write ALL formulas and notations explained step by step
- If there is a diagram or automata described, explain it in detail
Be EXHAUSTIVE. Do not skip anything. Cover every concept.
--- PAGES CONTENT ---
\${chunks[i]}
Now provide the detailed notes:\`;

                try {
                    const response = await groq.chat.completions.create({
                        messages: [{ role: 'user', content: chunkPrompt }],
                        model: 'llama-3.3-70b-versatile',
                        max_tokens: 4096
                    });
                    chunkSummaries.push(response.choices[0]?.message?.content || "");
                } catch (err) {
                    console.error("Groq Chunk Error:", err);
                }
            }

            const combinedNotes = chunkSummaries.join("\\n\\n").substring(0, 30000);
            
            const finalPrompt = \`You are an expert academic assistant. Below are detailed notes from all chunks of a student's PDF.
Create the ULTIMATE EXAM STUDY GUIDE.
IMPORTANT: Return ONLY a valid JSON array of objects. DO NOT wrap it in markdown.
The JSON array MUST conform to this exact structural format:
[
  { "title": "📖 COMPLETE OVERVIEW", "content": "8-10 sentences strict overview." },
  { "title": "🎯 ALL TOPICS COVERED", "content": "every single topic, with full explanation" },
  { "title": "📝 ALL DEFINITIONS", "content": "every term defined with example" },
  { "title": "💡 ALL FORMULAS & RULES", "content": "every formula explained" },
  { "title": "🖼️ DIAGRAMS EXPLAINED", "content": "explain diagrams correctly" },
  { "title": "❓ POSSIBLE EXAM QUESTIONS", "content": "10 likely questions with brief answers" },
  { "title": "✅ QUICK REVISION POINTS", "content": "bullet points" }
]

--- CHUNK NOTES ---
\${combinedNotes}

Produce the strict JSON array:\`;

            try {
                const finalResponse = await groq.chat.completions.create({
                    messages: [{ role: 'user', content: finalPrompt }],
                    model: 'llama-3.3-70b-versatile',
                    response_format: { type: "json_object" },
                    max_tokens: 4096
                });

                let aiText = finalResponse.choices[0]?.message?.content || "[]";
                let summaryArr;
                try {
                    let jsonStr = aiText;
                    if (jsonStr.includes('\`\`\`json')) jsonStr = jsonStr.split('\`\`\`json')[1].split('\`\`\`')[0];
                    else if (jsonStr.includes('\`\`\`')) jsonStr = jsonStr.split('\`\`\`')[1].split('\`\`\`')[0];
                    
                    const parsed = JSON.parse(jsonStr.trim());
                    if (!Array.isArray(parsed)) {
                        const keys = Object.keys(parsed);
                        if (keys.length > 0 && Array.isArray(parsed[keys[0]])) summaryArr = parsed[keys[0]];
                        else summaryArr = Object.values(parsed).filter(val => typeof val === 'object' && val.title);
                    } else {
                        summaryArr = parsed;
                    }
                } catch (e) {
                    console.error("JSON parse error from LLM:", e.message);
                    return res.status(500).json({ success: false, message: 'AI format error. Please retry.' });
                }

                return res.status(200).json({ success: true, summary: summaryArr });
            } catch (err) {
                console.error("Groq Final Err:", err);
                return res.status(500).json({ success: false, message: err.message });
            }
        } else {
            console.warn("No GROQ_API_KEY");
            res.status(200).json({ success: true, summary: [{ title: 'Mock', content: 'No API KEY'}]});
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// 2. Ask AI Tutor Endpoint`;

const finalFileContent = prefix + newRoute + suffix;

fs.writeFileSync('routes/aiRoutes.js', finalFileContent, 'utf8');
console.log("Successfully updated aiRoutes.js");
