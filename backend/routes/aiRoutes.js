const express = require('express');
const router = express.Router();
const multer = require('multer');
const pdfParse = require('pdf-parse');
const Groq = require('groq-sdk');
const { GoogleGenerativeAI } = require('@google/genai');
const fs = require('fs');

// Simple setup for multer to receive uploaded file in memory
const upload = multer({ storage: multer.memoryStorage() });

// Mock data for PYQ Analysis remains as is
const pyqData = {
    'dl': [
        { topic: 'Convolutional Neural Networks (CNNs)', count: 8 },
        { topic: 'Recurrent Neural Networks (RNNs)', count: 7 },
        { topic: 'Backpropagation Algorithm', count: 6 },
        { topic: 'Optimization Techniques (Adam, RMSProp)', count: 5 },
        { topic: 'Generative Adversarial Networks (GANs)', count: 3 }
    ],
    'ml': [
        { topic: 'Decision Trees', count: 6 },
        { topic: 'Overfitting vs Underfitting', count: 5 },
        { topic: 'Naive Bayes', count: 4 },
        { topic: 'Support Vector Machines (SVM)', count: 4 },
        { topic: 'K-Means Clustering', count: 3 }
    ]
};

// Note: To use the real LLM, you must set process.env.GROQ_API_KEY
const getGroqClient = () => {
    if (!process.env.GROQ_API_KEY) return null;
    return new Groq({ apiKey: process.env.GROQ_API_KEY });
};

const getGenAI = () => {
    if (!process.env.GEMINI_API_KEY) return null;
    return new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
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
                const chunkPrompt = `You are a high-level academic assistant. Your task is to analyze these pages from a technical PDF and extract EVERY detail essential for an exam.
                
Analyze these pages and extract EVERYTHING important:
* For EACH topic: provide a deep, exhaustive definition.
* EXAMPLES: Extract every example with its full mathematical working or step-by-step logic.
* FORMULAS: Identify every formula, explain every variable, and show how it is used.
* DIAGRAMS: Describe any diagrams, automata, or charts in text form with extreme detail.
* CONCEPTS: Explain limitations, advantages, and differences between technologies mentioned.

Be EXHAUSTIVE. Do not skip terminology. Capture the depth requested by a student who needs to skip the PDF entirely.

--- PAGES CONTENT ---
${chunks[i]}

Now provide the exhaustive technical notes:`;

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

            const combinedNotes = chunkSummaries.join("\n\n").substring(0, 30000);
            
            const finalPrompt = `You are an elite academic professor. Transform these technical notes into the DEFINITIVE exam-ready study guide.
            
IMPORTANT: The content must be so detailed and exhaustive that a student can skip reading the original PDF entirely.
FORMATTING RULE: Use Markdown BULLET POINTS for all content. Avoid large paragraphs at all costs.

Return ONLY a valid JSON object with a key "summary" which is an array of section objects.
The JSON must follow this exact structure:
{
  "summary": [
    { 
      "title": "📖 OVERVIEW & CORE CONCEPTS", 
      "content": "* Clear summary of the primary subject matter\n* Key takeaways and high-level goals\n* Why this topic is important for exams" 
    },
    { 
      "title": "🎯 DETAILED TOPIC BREAKDOWN", 
      "content": "* Topic 1: Sub-point with deep explanation and internal details\n* Topic 2: Sub-point with deep explanation and internal details\n* Step-by-step logic for common problems" 
    },
    { 
      "title": "📝 KEY DEFINITIONS & WORKED EXAMPLES", 
      "content": "* **Term 1**: Exhaustive definition\n    * *Worked Example*: Complete step-by-step example from the text\n* **Term 2**: Exhaustive definition\n    * *Worked Example*: Complete step-by-step example from the text" 
    },
    { 
      "title": "💡 FORMULAS, THEOREMS & DERIVATIONS", 
      "content": "* **Formula Name**: The mathematical equation/expression\n* Detailed explanation of every variable\n* Application rules or mathematical constraints" 
    },
    { 
      "title": "🖼️ DIAGRAMS & SYSTEM LOGIC", 
      "content": "* Technical description of state diagrams or charts\n* Sequence of transitions or logic flow explained via bullets\n* Functional logic breakdown" 
    },
    { 
      "title": "❓ PROBABLE EXAM QUESTIONS", 
      "content": "* **Q**: Likely exam question (theory or numerical)\n    * **A**: Exhaustive answer with supporting logic\n* **Q**: Practical problem-solving task\n    * **A**: Step-by-step solution pathway" 
    },
    { 
      "title": "✅ CRISP REVISION SUMMARY", 
      "content": "* Single most critical fact to remember\n* The most important formula/rule\n* Critical edge cases that appear in exams" 
    }
  ]
}

--- PREVIOUSLY EXTRACTED NOTES ---
${combinedNotes}

Construct the ULTIMATE technical JSON summary:`;

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
                    if (jsonStr.includes('```json')) jsonStr = jsonStr.split('```json')[1].split('```')[0];
                    else if (jsonStr.includes('```')) jsonStr = jsonStr.split('```')[1].split('```')[0];
                    
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
        console.error('Summarize error:', e);
        res.status(500).json({ success: false, message: e.message || 'Server error during summarization.' });
    }
});

// 2. Ask AI Tutor Endpoint -> Accepts PDF file and a question
router.post('/ask', upload.single('file'), async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({ success: false, message: 'Question required.' });
        }

        let contextText = "";

        // If a file was uploaded, we parse it to get the context
        if (req.file) {
            const pdfData = await pdfParse(req.file.buffer);
            contextText = pdfData.text.substring(0, 15000);
        }

        const genAI = getGenAI();

        if (genAI) {
            // Live LLM Generation
            let prompt = `You are a helpful and encouraging college AI tutor. The user is asking you a question. Answer the question nicely in plain text (markdown allowed).`;

            if (contextText) {
                prompt += `Use the following text extracted from their lecture notes to inform your answer. If the notes don't contain the answer, use your general knowledge but warn the user that it wasn't explicitly in the provided notes.\n\nNOTES EXTRACT:\n${contextText}\n\n`;
            }

            prompt += `QUESTION: ${question}`;

            const response = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(prompt);

            return res.status(200).json({
                success: true,
                answer: response.response.text()
            });

        } else {
            // Fallback to Mock
            setTimeout(() => {
                let answer = `Mock Answer: You asked "${question}". `;

                if (req.file) {
                    answer += `\n\nI successfully parsed your document. I cannot generate a real answer because my GEMINI_API_KEY environment variable is not set on the backend.`;
                }

                res.status(200).json({
                    success: true,
                    answer: answer
                });
            }, 1000);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error during AI query' });
    }
});


// 3. PYQ Analyzer Endpoint (Mock)
router.get('/pyq-analysis/:subjectId', async (req, res) => {
    try {
        const { subjectId } = req.params;

        // Delay for realism
        setTimeout(() => {
            const data = pyqData[subjectId] || pyqData['ml']; // default to ML if subject not found in mock
            res.status(200).json({
                success: true,
                subject: subjectId,
                statistics: data
            });
        }, 1000);

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error fetching PYQ analysis' });
    } 
});

module.exports = router;
