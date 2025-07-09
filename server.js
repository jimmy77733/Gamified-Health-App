// server.js (最終強化版)
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// --- 核心修正點：使用更標準的路由設定 ---

// 1. 設定靜態檔案的提供路徑
// 告訴 Express，所有像是 index.html, .js, .css, .mp3 的檔案，都放在根目錄
app.use(express.static(path.join(__dirname, '')));

// 2. 設定 AI 聊天的 API 路徑 (這個要放在 fallback 前面)
app.post('/api/chat', async (req, res) => {
    try {
        const { userInput, playerContext } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
        res.json({ response: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'AI 伺服器出錯了！' });
    }
});

// 3. 設定「後備」路由 (Fallback Route)
// 這一行非常重要，它會處理所有未被上面匹配到的 GET 請求
// 將它們全部導向到 index.html，這對於單頁應用 (SPA) 是標準做法。
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`伺服器正在 http://localhost:${port} 上運行`);
});