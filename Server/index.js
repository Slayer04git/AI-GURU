require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/ask", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt missing" });

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-70b-8192",
        messages: [
          { role: "system", content: "You are an expert coding mentor. Give clear, concise and accurate coding explanations with examples." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ reply: response.data.choices[0].message.content.trim() });
  } catch (err) {
    console.error("Groq API error:", err?.response?.data || err.message);
    res.status(500).json({ error: "Failed to get response from Groq" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
