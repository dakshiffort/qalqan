# Qalqan AI 🤖

Qalqan AI is a smart chatbot powered by **DeepSeek API**, designed to provide business-specific responses based on a knowledge document. If a user asks an **off-topic** question, the bot redirects the conversation back to the business domain.

## 🚀 Features
✅ **AI-Powered Chat** (DeepSeek API)  
✅ **Business Knowledge Integration** (Predefined Q&A from `knowledge_base.txt`)  
✅ **Supports English & Russian** (i18next)  
✅ **Responsive & Clean UI** (TailwindCSS)  
✅ **Animated Messages** (Framer Motion)  
✅ **Fast Deployment on Vercel**  

## 📂 Project Structure
```
/qalqan-ai
├── pages/
│   ├── index.js        # Chat UI
│   ├── api/chat.js     # API for AI & knowledge base
│
├── locales/
│   ├── en.json         # English translations
│   ├── ru.json         # Russian translations
│
├── styles/
│   ├── globals.css     # TailwindCSS styles
│
├── public/qalqan-logo.png # Client Logo
│
├── knowledge_base.txt  # Business-related Q&A
│
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind config
├── .gitignore          # Git ignored files
└── README.md           # This file
```

## 🔧 Installation & Running Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/qalqan-ai.git
   cd qalqan-ai
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

## 🚀 Deployment (Vercel)
1. Push your project to **GitHub**.
2. Go to [Vercel](https://vercel.com/) and click **New Project**.
3. Select **your GitHub repo (`qalqan-ai`)**.
4. Click **Deploy**.  
   Your app will be live at:
   ```
   https://qalqan-ai.vercel.app
   ```

## 📜 License
This project is open-source and free to use under the **MIT License**.

---

### 🌟 **Like this project? Give it a ⭐ on GitHub!**
