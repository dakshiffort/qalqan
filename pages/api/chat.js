import axios from "axios";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { message, apiKey } = req.body;

  if (!apiKey || apiKey.trim() === "") {
    return res.json({ reply: "Please provide a valid DeepSeek API key." });
  }

  // Load knowledge base document
  const knowledgeBasePath = path.join(process.cwd(), "knowledge_base.txt");
  const knowledgeBase = fs.readFileSync(knowledgeBasePath, "utf-8").split("\n");

  // Extract relevant content for DeepSeek API
  let relevant_context = "";
  let found = false;
  for (let i = 0; i < knowledgeBase.length; i++) {
    if (knowledgeBase[i].startsWith("**Q:**") && knowledgeBase[i].toLowerCase().includes(message.toLowerCase())) {
      relevant_context += knowledgeBase[i] + "\n" + knowledgeBase[i + 1] + "\n";
      found = true;
    }
  }

  if (!found) {
    return res.json({ reply: "I'm here to assist you with Qalqan AI-related topics. Please ask about our services, features, or support." });
  }

  // Use DeepSeek API with relevant knowledge base context
  try {
    const response = await axios.post("https://api.deepseek.com/v1/chat", {
      messages: [{ role: "system", content: "Use the following business knowledge base to answer: " + relevant_context },
                 { role: "user", content: message }],
      model: "deepseek-chat",
      temperature: 0.7
    }, {
      headers: { Authorization: `Bearer ${apiKey}` }
    });

    return res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error(error);
    return res.json({ reply: "Sorry, I couldn't process your request at the moment. Check your API key." });
  }
}
