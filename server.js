// 程式碼功能說明: 後端伺服器主程式
// 然後帶著我們安全的API金鑰去跟Google AI溝通，再把結果回傳。

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // 引入 cors 套件

// 這會讀取我們等一下要建立的 .env 檔案，讓我們可以使用裡面的變數
dotenv.config();

// 建立一個 Express 應用程式
const app = express();
const port = 3000; // 伺服器將會在這個端口上運行

// --- 核心設定 ---
app.use(cors()); // ✨ 使用 cors 中間件，允許所有來源的請求 
app.use(express.json()); // 讓我們的伺服器能讀懂 JSON 格式的請求

// 建立一個 API 端點(Endpoint)，路徑是 /api/chat
app.post('/api/chat', async (req, res) => {
    try {
        // 從前端傳來的請求中，取得使用者輸入的訊息
        const userInput = req.body.userInput;
        const playerContext = req.body.playerContext;

        if (!userInput) {
            return res.status(400).json({ error: '使用者輸入不能為空！' });
        }

        // 動態載入 @google/generative-ai
        const { GoogleGenerativeAI } = await import('@google/generative-ai');

        // 從環境變數中讀取我們神聖的 API 金鑰
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

        const prompt = `
            你是一個聰明且全能的智能小助手。
            你的個性活潑外向、愛互動，總給予正面情緒價值！
            回覆預設用繁體中文，簡潔口語，每句最多1個Emoji。

            【重要規則】
            1.總回覆長度嚴格控制在200字以內。
            2.每句控制在10字內，句末換行，段落間空一行。↩
            3.使用項目符號(•)或分段，確保排版整齊有閱讀空間。
            4.對話每10字換行，確保回覆清晰易讀。
            5.若問題模糊，輕鬆提問澄清，避免直接回答。
            6.避免重複用詞，保持語言生動有趣。
            7.只有玩家詢問自己資訊才需要回答跟玩家相關的資料
            8.會參考之前的問答紀錄來回答玩家的對話

            ${playerContext}

            這是玩家剛剛對你說的話：
            "${userInput}"

            請根據你的角色和玩家資料，並遵守【重要規則】，給出一個活潑、有幫助的回應。
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // 將 Gemini AI 的回答回傳給前端
        res.json({ response: text });

    } catch (error) {
        console.error('後端伺服器出錯:', error);
        res.status(500).json({ error: '與 AI 溝通時發生內部錯誤。' });
    }
});

// 啟動伺服器，讓它開始監聽請求
app.listen(port, () => {
    console.log(`🚀 後端秘密基地已啟動，正在 http://localhost:${port} 站崗！`);
});