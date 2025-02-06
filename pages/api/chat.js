import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { message } = req.body;
  const knowledgeBase = {
    "who is the founder of qalqan ai?": "The founder of Qalqan AI is John Doe.",
    "what does qalqan ai do?": "Qalqan AI provides AI-powered business solutions."
  };
  const answer = knowledgeBase[message.toLowerCase()];
  if (answer) return res.json({ reply: answer });

  try {
    const response = await axios.post("https://api.deepseek.com/v1/chat", {
      messages: [{ role: "user", content: message }],
      model: "deepseek-chat",
      temperature: 0.7
    }, {
      headers: { Authorization: `Bearer YOUR_DEEPSEEK_API_KEY` }
    });

    return res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error(error);
    return res.json({ reply: "Sorry, I couldn't process your request." });
  }
}
