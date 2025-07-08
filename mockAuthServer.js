// 程式碼功能說明: 模擬後端認證伺服器
// 這個檔案用來模擬一個真實的後端，處理使用者註冊、登入、登出和 session 驗證。
// 在真實的專案中，這部分會被一個用 Node.js, Python, Go 等語言寫的真實後端取代。

const mockAuthServer = (() => {
    const USER_DB_KEY = 'gamifiedAppUserDB'; // 模擬使用者資料庫的 localStorage key
    const SESSION_DB_KEY = 'gamifiedAppSessionDB'; // 模擬 session 資料庫的 key

    // 從 localStorage 讀取或初始化使用者資料庫
    const getUsers = () => {
        try {
            return JSON.parse(localStorage.getItem(USER_DB_KEY)) || {};
        } catch (e) {
            return {};
        }
    };

    // 保存使用者資料庫到 localStorage
    const saveUsers = (users) => {
        localStorage.setItem(USER_DB_KEY, JSON.stringify(users));
    };

    // 讀取/保存 session 資料庫
    const getSessions = () => JSON.parse(localStorage.getItem(SESSION_DB_KEY)) || {};
    const saveSessions = (sessions) => localStorage.setItem(SESSION_DB_KEY, JSON.stringify(sessions));

    // --- 對外公開的 API ---
    return {
        // 註冊新使用者
        register: function(email, password) {
            return new Promise((resolve, reject) => {
                setTimeout(() => { // 模擬網路延遲
                    const users = getUsers();
                    if (users[email]) {
                        reject('這個 Email 已經被註冊過了❌！');
                    } else {
                        // 在真實世界，密碼必須被加密(hash)後才能儲存！
                        users[email] = { password: password }; 
                        saveUsers(users);
                        resolve('註冊成功！現在你可以去登入囉⭕！');
                    }
                }, 500);
            });
        },

        // Email/密碼登入
        login: function(email, password) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const users = getUsers();
                    if (!users[email] || users[email].password !== password) {
                        reject('Email 或密碼錯誤！❌');
                    } else {
                        const token = `session_${Math.random().toString(36).substr(2, 16)}`;
                        const sessions = getSessions();
                        sessions[token] = { email: email, expires: Date.now() + (30 * 24 * 60 * 60 * 1000) }; // session 30天後過期
                        saveSessions(sessions);
                        resolve({ token: token, email: email });
                    }
                }, 500);
            });
        },
        
        // 社交登入 (模擬)
        socialLogin: function(provider) {
             return new Promise((resolve) => {
                setTimeout(() => {
                    const email = `${provider}_user@example.com`; // 模擬一個社交帳號 email
                    const token = `session_social_${Math.random().toString(36).substr(2, 16)}`;
                    const sessions = getSessions();
                    sessions[token] = { email: email, expires: Date.now() + (30 * 24 * 60 * 60 * 1000) };
                    saveSessions(sessions);
                    resolve({ token: token, email: email });
                }, 800);
            });
        },

        // 驗證 Session Token
        verifyToken: function(token) {
            return new Promise((resolve) => {
                const sessions = getSessions();
                if (sessions[token] && sessions[token].expires > Date.now()) {
                    resolve({ email: sessions[token].email });
                } else {
                    resolve(null); // Token 不存在或已過期
                }
            });
        },

        // 登出
        logout: function(token) {
            return new Promise((resolve) => {
                const sessions = getSessions();
                delete sessions[token];
                saveSessions(sessions);
                resolve();
            });
        }
    };
})();