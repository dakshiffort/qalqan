# Qalqan AI 🚀
### A Business AI Chatbot powered by DeepSeek & GPT-4o

Qalqan AI is an AI-powered chatbot that intelligently answers questions based on a **business-specific knowledge base**. If the question is **not business-related**, it redirects users to relevant business information.

---

## 🌟 Features
✅ **ChatGPT-style conversation**  
✅ **Knowledge base integration** (custom business Q&A)  
✅ **DeepSeek / GPT-4o API support**  
✅ **English & Russian language support**  
✅ **Modern UI with Tailwind CSS**  
✅ **Auto-deployment with Vercel**  

---

## 🚀 Live Demo
👉 **[Try Qalqan AI Live](https://qalqan-ai.vercel.app/)** (If deployed on Vercel)

---

## 📂 Project Structure
```
qalqan-ai/
│── pages/
│   ├── index.js  # Chat UI
│   ├── api/chat.js  # Backend API for AI responses
│── locales/
│   ├── en.json  # English translations
│   ├── ru.json  # Russian translations
│── styles/
│   ├── globals.css  # Tailwind CSS styling
│── tailwind.config.js  # Tailwind config
│── package.json  # Dependencies
│── .gitignore  # Files to ignore in Git
│── README.md  # Documentation
```

---

## 📌 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR-USERNAME/qalqan-ai.git
cd qalqan-ai
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Project Locally (Optional)
```sh
npm run dev
```
Then, open **http://localhost:3000/** in your browser.

---

## 🌍 Deploying on Vercel
1. Push this repository to **GitHub**
2. **Go to** [Vercel](https://vercel.com/)
3. Click **"New Project"**
4. Select **`qalqan-ai` repository**
5. Click **"Deploy"**

---

## ⚙️ Environment Variables
For AI chatbot integration, create a **.env.local** file and add:
```
DEEPSEEK_API_KEY=your_api_key_here
```
(Get your **API Key** from DeepSeek or OpenAI)

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📜 License
This project is licensed under the **MIT License**.
