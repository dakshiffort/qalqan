import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Chat() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/chat", { message: input });
      setMessages([...newMessages, { role: "bot", content: res.data.reply }]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="p-4 bg-gray-800 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/qalqan-logo.png" alt="Qalqan AI Logo" width={50} height={50} />
          <h1 className="text-xl font-bold ml-2">Qalqan AI</h1>
        </div>
        <div>
          <button onClick={() => i18n.changeLanguage("en")} className="mx-2 p-2 bg-blue-600 rounded">English</button>
          <button onClick={() => i18n.changeLanguage("ru")} className="mx-2 p-2 bg-red-600 rounded">Русский</button>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={\`p-3 my-2 max-w-xs rounded-lg \${msg.role === "user" ? "bg-blue-600 ml-auto" : "bg-gray-700"}\`}>
            {msg.content}
          </motion.div>
        ))}
        {loading && <div className="p-3 my-2 bg-gray-700">...</div>}
      </div>
      <div className="p-4 bg-gray-800 flex">
        <input value={input} onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 bg-gray-700 rounded" placeholder={t("Type a message...")} />
        <button onClick={sendMessage} className="ml-2 p-2 bg-green-600 rounded">{t("Send")}</button>
      </div>
    </div>
  );
}
