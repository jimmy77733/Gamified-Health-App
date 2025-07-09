// server.js (最終修正版 - 補上遺漏的變數)
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

// ✨ 修正點 #1：補上用來儲存使用者和 session 的變數 ✨
const users = {}; 
const sessions = {};

// ✨ 修正點 #2：補上初始化 Google AI 的關鍵程式碼 ✨
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '')));

// 新增的註冊 API
app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
    if (users[email]) {
        return res.status(400).json({ message: '此 Email 已被註冊' });
    }
    users[email] = { password };
    console.log('新用戶註冊:', email);
    res.status(201).json({ message: '註冊成功！現在你可以登入了。' });
});

// 新增的登入 API
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users[email];
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Email 或密碼錯誤' });
    }
    const token = `token_${Date.now()}_${email}`;
    sessions[token] = { email };
    console.log('用戶登入:', email);
    res.json({ token, email });
});

// 設定 AI 聊天的 API 路徑
app.post('/api/chat', async (req, res) => {
    try {
        const { userInput, playerContext } = req.body;
        // 這裡現在可以正常使用 genAI 了
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

// 設定「後備」路由 (Fallback Route)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`伺服器正在 http://localhost:${port} 上運行`);
});