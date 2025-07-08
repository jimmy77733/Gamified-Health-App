            // --- 任務與稱號系統 核心功能 ---
            // 任務與稱號資料庫

            export const taskData = {
                daily: {
                    steps: [
                        { id: 'D_S_01', desc: '只是出門買個醬油，就走了這麼多路！', target: 3000, icon: '🚶' },
                        { id: 'D_S_02', desc: '進行一次「精神時光屋」級別的散步。', target: 5000, icon: '🚶‍♂️' },
                        { id: 'D_S_03', desc: '今天的地板，我全都要走一遍！', target: 8000, icon: '🏃' },
                        { id: 'D_S_04', desc: '挑戰「萬步鐵人」的稱號！', target: 10000, icon: '🏃‍♂️' },
                        { id: 'D_S_05', desc: '你不是在走路，你是在用雙腳探索城市。', target: 15000, icon: '🗺️' },
                        { id: 'D_S_06', desc: '今天的步數，已經可以繞操場50圈了！', target: 20000, icon: '🚀' },
                    ],
                    calories: [
                        { id: 'D_C_01', desc: '做了一些「微燃」的家務事。', target: 100, icon: '🔥' },
                        { id: 'D_C_02', desc: '進行一次讓心跳「砰然心動」的運動。', target: 200, icon: '❤️' },
                        { id: 'D_C_03', desc: '今天的我，沒有極限！', target: 300, icon: '💥' },
                        { id: 'D_C_04', desc: '汗水是脂肪的眼淚，今天你讓它嚎啕大哭。', target: 450, icon: '🥵' },
                        { id: 'D_C_05', desc: '感覺都能徒手打死一頭牛了！', target: 600, icon: '💪' },
                        { id: 'D_C_06', desc: '燃燒我的卡路里！', target: 800, icon: '☄️' },
                    ],
                    water: [
                        { id: 'D_W_01', desc: '像一株缺水的盆栽一樣補充水分。', target: 1000, icon: '💧' },
                        { id: 'D_W_02', desc: '今天的水分攝取量，讓身體充滿光澤！', target: 1500, icon: '✨' },
                        { id: 'D_W_03', desc: '我不是在喝水，我是在進行體內的水循環。', target: 2000, icon: '💦' },
                        { id: 'D_W_04', desc: '你體內的含水量，已經堪比一顆西瓜。', target: 2500, icon: '🍉' },
                        { id: 'D_W_05', desc: '人體淨水器，就是你！', target: 3000, icon: '🌊' },
                        { id: 'D_W_06', desc: '聽說了嗎？魚類正準備邀請你加入牠們的行列。', target: 3500, icon: '🐠' },
                    ],
                    sleep: [
                        { id: 'D_L_01', desc: '睡得像一隻安詳的貓。', target: 6, icon: '😴' },
                        { id: 'D_L_02', desc: '進行一次深度潛意識旅行。', target: 7, icon: '🛌' },
                        { id: 'D_L_03', desc: '直接睡到不知天地為何物。', target: 8, icon: '😪' },
                        { id: 'D_L_04', desc: '睡神降臨，為你的精神充滿電。', target: 9, icon: '🔋' },
                        { id: 'D_L_05', desc: '與周公下了一盤精彩的棋。', target: 8.8, icon: '🌌' },
                        { id: 'D_L_06', desc: '你的睡眠品質，讓枕頭都感到了幸福。', target: 10, icon: '💤' },
                    ]
                },
                profession: {
                    '社畜': [
                        { id: 'P_SH_01', desc: '在通勤的路上，用眼神殺死所有擋路的人。', type: 'steps', target: 4000, icon: '💼' },
                        { id: 'P_SH_02', desc: '中午只睡15分鐘，下午假裝很有精神。', type: 'sleep', target: 0.25, icon: '☕' },
                        { id: 'P_SH_03', desc: '消耗腦細胞來應付無盡的郵件。', type: 'calories', target: 150, icon: '📧' },
                        { id: 'P_SH_04', desc: '把咖啡當水喝，是基本操作。', type: 'water', target: 1200, icon: '😵' }
                    ],
                    '服務業': [
                        { id: 'P_SV_01', desc: '面帶微笑地走一整天，腳底都磨出火花。', type: 'steps', target: 6000, icon: '🛎️' },
                        { id: 'P_SV_02', desc: '為了保持笑容，消耗了大量臉部肌肉能量。', type: 'calories', target: 200, icon: '😊' },
                        { id: 'P_SV_03', desc: '利用空檔，快速補充能量，準備迎接下一波客人。', type: 'sleep', target: 0.5, icon: '⚡' },
                        { id: 'P_SV_04', desc: '保持喉嚨濕潤，才能喊出「歡迎光臨」。', type: 'water', target: 1800, icon: '🗣️' }
                    ],
                    '零售業': [
                        { id: 'P_RT_01', desc: '在貨架迷宮中穿梭，整理永無止盡的商品。', type: 'steps', target: 7000, icon: '🛍️' },
                        { id: 'P_RT_02', desc: '用三寸不爛之舌說服客人，消耗的口水比汗水多。', type: 'calories', target: 250, icon: '💬' },
                        { id: 'P_RT_03', desc: '確保站櫃時精神飽滿，不讓客人看到你的黑眼圈。', type: 'sleep', target: 7.5, icon: '😴' },
                        { id: 'P_RT_04', desc: '不斷喝水，以應對商場乾燥的空調。', type: 'water', target: 1600, icon: '💧' }
                    ],
                    '教育業': [
                        { id: 'P_ED_01', desc: '在講台和學生座位之間巡迴，步數堪比操場長跑。', type: 'steps', target: 5000, icon: '🍎' },
                        { id: 'P_ED_02', desc: '講課一整天，燃燒的熱情與卡路里成正比。', type: 'calories', target: 300, icon: '😵‍💫' },
                        { id: 'P_ED_03', desc: '昨晚為了備課，壓縮了自己的睡眠時間。', type: 'sleep', target: 6.5, icon: '🦉' },
                        { id: 'P_ED_04', desc: '粉筆灰很嗆，需要大量的水來滋潤喉嚨。', type: 'water', target: 2000, icon: '👩‍🏫' }
                    ],
                    '醫療保健': [
                        { id: 'P_HC_01', desc: '在白色巨塔裡奔走，每一步都是為了生命。', type: 'steps', target: 8000, icon: '⚕️' },
                        { id: 'P_HC_02', desc: '高度專注的精神消耗，不亞於一場馬拉松。', type: 'calories', target: 350, icon: '🧠' },
                        { id: 'P_HC_03', desc: '值完夜班後，需要一次史詩級的補眠。', type: 'sleep', target: 9, icon: '🩺' },
                        { id: 'P_HC_04', desc: '提醒病人喝水，自己也不能忘。', type: 'water', target: 1900, icon: '🩹' }
                    ],
                    '資訊科技': [
                        { id: 'P_IT_01', desc: '從座位到茶水間的距離，就是今天所有的步數。', type: 'steps', target: 2000, icon: '💻' },
                        { id: 'P_IT_02', desc: '修復一個連自己都不知道怎麼寫出來的Bug。', type: 'calories', target: 200, icon: '🐛' },
                        { id: 'P_IT_03', desc: '深夜才是靈感大神降臨的時刻。', type: 'sleep', target: 6, icon: '💡' },
                        { id: 'P_IT_04', desc: '用咖啡因和水，為大腦提供冷卻劑。', type: 'water', target: 1500, icon: '☕' }
                    ],
                    '金融業': [
                        { id: 'P_FN_01', desc: '穿著皮鞋在交易大廳裡快走，氣勢不能輸。', type: 'steps', target: 4000, icon: '💰' },
                        { id: 'P_FN_02', desc: '看著K線圖上下起伏，心臟消耗了大量卡路里。', type: 'calories', target: 180, icon: '📈' },
                        { id: 'P_FN_03', desc: '收盤後才能安心睡個好覺。', type: 'sleep', target: 7, icon: '😴' },
                        { id: 'P_FN_04', desc: '喝水保持冷靜，才能在市場中做出正確判斷。', type: 'water', target: 1700, icon: '💧' }
                    ],
                    '行銷與廣告': [
                        { id: 'P_MK_01', desc: '為了想一個Slogan，在辦公室來回踱步。', type: 'steps', target: 3500, icon: '📣' },
                        { id: 'P_MK_02', desc: '腦力激盪的能量消耗，堪比一場拳擊賽。', type: 'calories', target: 220, icon: '🤯' },
                        { id: 'P_MK_03', desc: '夢裡都在想著點閱率和轉換率。', type: 'sleep', target: 6.8, icon: '📊' },
                        { id: 'P_MK_04', desc: '提案時口若懸河，需要大量水分支援。', type: 'water', target: 1600, icon: '🗣️' }
                    ],
                    '建築與工程': [
                        { id: 'P_CE_01', desc: '巡視工地，每一步都是安全的基石。', type: 'steps', target: 9000, icon: '🏗️' },
                        { id: 'P_CE_02', desc: '搬磚、扛水泥，這都是愛的熱量燃燒。', type: 'calories', target: 500, icon: '🧱' },
                        { id: 'P_CE_03', desc: '日曬雨淋後，需要充足的睡眠來修復身體。', type: 'sleep', target: 8.5, icon: '😴' },
                        { id: 'P_CE_04', desc: '工地的汗水，需要用雙倍的水來補充。', type: 'water', target: 2500, icon: '👷' }
                    ],
                    '法律服務': [
                        { id: 'P_LW_01', desc: '在法院和事務所之間奔波，為正義而走。', type: 'steps', target: 4500, icon: '⚖️' },
                        { id: 'P_LW_02', desc: '鑽研法律條文，大腦的CPU使用率達到100%。', type: 'calories', target: 190, icon: '📚' },
                        { id: 'P_LW_03', desc: '結案後，睡得像個無辜的嬰兒。', type: 'sleep', target: 8, icon: '😪' },
                        { id: 'P_LW_04', desc: '法庭辯論前，多喝水能讓思路更清晰。', type: 'water', target: 1800, icon: '💧' }
                    ],
                    '餐飲業': [
                        { id: 'P_FD_01', desc: '在廚房裡閃轉騰挪，步法不輸給武林高手。', type: 'steps', target: 7500, icon: '🍽️' },
                        { id: 'P_FD_02', desc: '顛鍋甩勺，每一道菜都燃燒著你的卡路里。', type: 'calories', target: 400, icon: '🍳' },
                        { id: 'P_FD_03', desc: '打烊後累癱在床上，是對一天辛勞的最高敬意。', type: 'sleep', target: 8.2, icon: '😴' },
                        { id: 'P_FD_04', desc: '廚房如戰場，不斷喝水才能保持戰鬥力。', type: 'water', target: 2200, icon: '👨‍🍳' }
                    ],
                    '運輸與物流': [
                        { id: 'P_TR_01', desc: '上下貨的步數，累積起來也相當可觀。', type: 'steps', target: 5500, icon: '🚚' },
                        { id: 'P_TR_02', desc: '專注於路況，精神消耗巨大。', type: 'calories', target: 280, icon: '🛣️' },
                        { id: 'P_TR_03', desc: '在休息站小憩，是為了走更長遠的路。', type: 'sleep', target: 7.2, icon: '😴' },
                        { id: 'P_TR_04', desc: '長途跋涉，水是最好的夥伴。', type: 'water', target: 2100, icon: '💧' }
                    ],
                    '製造業': [
                        { id: 'P_MF_01', desc: '在生產線上走動，確保每個環節都完美無缺。', type: 'steps', target: 6500, icon: '🏭' },
                        { id: 'P_MF_02', desc: '操作精密儀器，燃燒的是專注力與卡路里。', type: 'calories', target: 320, icon: '⚙️' },
                        { id: 'P_MF_03', desc: '輪班結束後，需要高質量的睡眠。', type: 'sleep', target: 8, icon: '😪' },
                        { id: 'P_MF_04', desc: '廠房內很悶熱，補充水分是必須的。', type: 'water', target: 2300, icon: '🔧' }
                    ],
                    '媒體與娛樂': [
                        { id: 'P_ME_01', desc: '為了找尋靈感，在大街小巷中遊蕩。', type: 'steps', target: 4800, icon: '🎬' },
                        { id: 'P_ME_02', desc: '剪輯影片時，時間和卡路里一起在燃燒。', type: 'calories', target: 170, icon: '🎥' },
                        { id: 'P_ME_03', desc: '趕稿到天亮，是對藝術的執著。', type: 'sleep', target: 5.5, icon: '✍️' },
                        { id: 'P_ME_04', desc: '一杯又一杯的水，是創意枯竭時的救贖。', type: 'water', target: 1400, icon: '💧' }
                    ],
                    '藝術與設計': [
                        { id: 'P_AD_01', desc: '在博物館和畫廊裡尋找靈感，不知不覺走了萬步。', type: 'steps', target: 6000, icon: '🎨' },
                        { id: 'P_AD_02', desc: '完美的一筆，背後是無數卡路里的燃燒。', type: 'calories', target: 160, icon: '✏️' },
                        { id: 'P_AD_03', desc: '靈感女神總在半夜敲門。', type: 'sleep', target: 6.2, icon: '😴' },
                        { id: 'P_AD_04', desc: '喝水，洗滌心靈，才能看見更美的色彩。', type: 'water', target: 1300, icon: '💧' }
                    ],
                    '科學研究': [
                        { id: 'P_SR_01', desc: '在實驗室裡來回穿梭，每一步都可能導向偉大發現。', type: 'steps', target: 3800, icon: '🔬' },
                        { id: 'P_SR_02', desc: '長時間的實驗與數據分析，是大腦的鐵人三項。', type: 'calories', target: 210, icon: '🧪' },
                        { id: 'P_SR_03', desc: '夢中解開了困擾已久的方程式。', type: 'sleep', target: 7.3, icon: '🧬' },
                        { id: 'P_SR_04', desc: '保持身體水分充足，是進行精密實驗的前提。', type: 'water', target: 1700, icon: '💧' }
                    ],
                    '農業與食品生產': [
                        { id: 'P_AG_01', desc: '在田埂間行走，感受土地的脈動。', type: 'steps', target: 8500, icon: '🌾' },
                        { id: 'P_AG_02', desc: '揮灑汗水，收穫的不仅是作物，還有燃燒的卡路里。', type: 'calories', target: 480, icon: '🧑‍🌾' },
                        { id: 'P_AG_03', desc: '日出而作，日落而息，享受最規律的睡眠。', type: 'sleep', target: 8.6, icon: '😴' },
                        { id: 'P_AG_04', desc: '汗水流失的水分，需要加倍補充回來。', type: 'water', target: 2800, icon: '💧' }
                    ],
                    '房地產': [
                        { id: 'P_RE_01', desc: '帶著客戶看房，上上下下的步數堪比爬山。', type: 'steps', target: 7200, icon: '🏘️' },
                        { id: 'P_RE_02', desc: '簽下一份合約，消耗的能量不只是口才。', type: 'calories', target: 260, icon: '✒️' },
                        { id: 'P_RE_03', desc: '成交後，睡了一個安穩的覺。', type: 'sleep', target: 7.8, icon: '😴' },
                        { id: 'P_RE_04', desc: '不斷與客戶溝通，需要大量喝水保持最佳狀態。', type: 'water', target: 1900, icon: '💧' }
                    ],
                    '人力資源': [
                        { id: 'P_HR_01', desc: '為了面試和會議，在不同辦公室間穿梭。', type: 'steps', target: 4200, icon: '👥' },
                        { id: 'P_HR_02', desc: '處理員工關係，燃燒的是心力與卡路里。', type: 'calories', target: 175, icon: '❤️‍🩹' },
                        { id: 'P_HR_03', desc: '幫別人規劃職涯，也要記得自己的睡眠規劃。', type: 'sleep', target: 7.1, icon: '😴' },
                        { id: 'P_HR_04', desc: '喝口水，繼續傾聽同仁的心聲。', type: 'water', target: 1600, icon: '💧' }
                    ],
                    '公共服務': [
                        { id: 'P_PS_01', desc: '在政府大樓裡奔波，為民眾處理大小事。', type: 'steps', target: 5800, icon: '🏛️' },
                        { id: 'P_PS_02', desc: '枯燥的文書工作，也同樣在燃燒你的生命。', type: 'calories', target: 185, icon: '📄' },
                        { id: 'P_PS_03', desc: '為人民服務後，需要安穩的睡眠來恢復精力。', type: 'sleep', target: 7.6, icon: '😴' },
                        { id: 'P_PS_04', desc: '泡一杯茶，繼續為國家的未來奮鬥。', type: 'water', target: 1700, icon: '🍵' }
                    ],
                    '環境與能源': [
                        { id: 'P_EE_01', desc: '為了勘查現場，深入山林或海岸。', type: 'steps', target: 7800, icon: '♻️' },
                        { id: 'P_EE_02', desc: '身體力行做環保，是最好的卡路里燃燒方式。', type: 'calories', target: 380, icon: '🌿' },
                        { id: 'P_EE_03', desc: '愛護地球，也要愛護自己的肝，好好睡覺。', type: 'sleep', target: 7.9, icon: '😴' },
                        { id: 'P_EE_04', desc: '身體和地球都需要充足的水分。', type: 'water', target: 2400, icon: '💧' }
                    ],
                    '運動與健身': [
                        { id: 'P_SF_01', desc: '以身作則，帶領學員完成高強度間歇訓練。', type: 'steps', target: 6200, icon: '🏋️' },
                        { id: 'P_SF_02', desc: '今天的訓練，讓你的卡路里消耗突破天際。', type: 'calories', target: 700, icon: '🔥' },
                        { id: 'P_SF_03', desc: '肌肉在睡眠中成長，這是最棒的投資。', type: 'sleep', target: 8.3, icon: '😴' },
                        { id: 'P_SF_04', desc: '汗流浹背後，水分補充是第一要務。', type: 'water', target: 3000, icon: '💧' }
                    ],
                    '旅遊與酒店': [
                        { id: 'P_TH_01', desc: '帶著遊客探索景點，自己也成了風景的一部分。', type: 'steps', target: 9500, icon: '✈️' },
                        { id: 'P_TH_02', desc: '處理突發狀況，腎上腺素和卡路里一起飆升。', type: 'calories', target: 330, icon: '🏨' },
                        { id: 'P_TH_03', desc: '在陌生的床上，也要努力睡個好覺。', type: 'sleep', target: 7.4, icon: '😴' },
                        { id: 'P_TH_04', desc: '不斷說話介紹景點，需要大量的水。', type: 'water', target: 2200, icon: '💧' }
                    ],
                    '安全與保安': [
                        { id: 'P_SS_01', desc: '徹夜巡邏，步步為營，守護這片區域的和平。', type: 'steps', target: 8800, icon: '🔒' },
                        { id: 'P_SS_02', desc: '維持高度警惕，精神消耗極大。', type: 'calories', target: 290, icon: '🛡️' },
                        { id: 'P_SS_03', desc: '下哨後，需要完全的安靜才能入眠。', type: 'sleep', target: 8.1, icon: '😴' },
                        { id: 'P_SS_04', desc: '喝水保持清醒，不能放過任何蛛絲馬跡。', type: 'water', target: 2000, icon: '💧' }
                    ],
                    '咨詢服務': [
                        { id: 'P_CS_01', desc: '為了見客戶，在城市的高樓大廈間穿梭。', type: 'steps', target: 4300, icon: '🧠' },
                        { id: 'P_CS_02', desc: '為客戶的難題燃燒大腦，消耗驚人。', type: 'calories', target: 230, icon: '💡' },
                        { id: 'P_CS_03', desc: '解決了世紀難題後，需要一場世紀好眠。', type: 'sleep', target: 7.7, icon: '😴' },
                        { id: 'P_CS_04', desc: '源源不絕的點子，來自源源不絕的水分。', type: 'water', target: 1800, icon: '💧' }
                    ],
                    '電子商務': [
                        { id: 'P_EC_01', desc: '在巨大的倉庫裡撿貨，步數不知不覺破萬。', type: 'steps', target: 6800, icon: '🛒' },
                        { id: 'P_EC_02', desc: '應對購物節的訂單，像是打了一場世界大戰。', type: 'calories', target: 310, icon: '📦' },
                        { id: 'P_EC_03', desc: '大促結束後，終於可以好好睡一覺了。', type: 'sleep', target: 8.4, icon: '😴' },
                        { id: 'P_EC_04', desc: '處理客訴需要保持冷靜，多喝水有幫助。', type: 'water', target: 1700, icon: '💧' }
                    ],
                    '非營利組織': [
                        { id: 'P_NP_01', desc: '為募款活動而奔走，每一步都充滿了愛。', type: 'steps', target: 6300, icon: '🤝' },
                        { id: 'P_NP_02', desc: '將熱情投入到志業中，燃燒自己，照亮他人。', type: 'calories', target: 270, icon: '❤️' },
                        { id: 'P_NP_03', desc: '看到世界的改變，讓你帶著微笑入睡。', type: 'sleep', target: 7.9, icon: '😴' },
                        { id: 'P_NP_04', desc: '善良的心，也需要水分的滋養。', type: 'water', target: 1900, icon: '💧' }
                    ],
                    '航空與航天': [
                        { id: 'P_AS_01', desc: '在停機坪進行航前檢查，繞著飛機走好幾圈。', type: 'steps', target: 5200, icon: '🚀' },
                        { id: 'P_AS_02', desc: '在駕駛艙內高度專注，消耗的能量超乎想像。', type: 'calories', target: 240, icon: '✈️' },
                        { id: 'P_AS_03', desc: '跨越時區後，需要科學的方法調整睡眠。', type: 'sleep', target: 8.7, icon: '😴' },
                        { id: 'P_AS_04', desc: '高空飛行容易口乾舌燥，必須時常補充水分。', type: 'water', target: 2100, icon: '💧' }
                    ],
                    '時尚與美容': [
                        { id: 'P_FB_01', desc: '為了採購最新潮的單品，逛街逛到腿軟。', type: 'steps', target: 7700, icon: '💅' },
                        { id: 'P_FB_02', desc: '創造一個完美的妝容，是精細的體力活。', type: 'calories', target: 195, icon: '💄' },
                        { id: 'P_FB_03', desc: '睡個美容覺，明天才能光彩照人。', type: 'sleep', target: 8.8, icon: '😴' },
                        { id: 'P_FB_04', desc: '皮膚要水嫩，就要多喝水。', type: 'water', target: 2200, icon: '💧' }
                    ],
                    '數據科學': [
                        { id: 'P_DS_01', desc: '為了讓模型跑得更順，繞著伺服器走了幾圈祈禱。', type: 'steps', target: 2500, icon: '📊' },
                        { id: 'P_DS_02', desc: '清洗TB等級的數據，大腦熱到可以煎蛋。', type: 'calories', target: 225, icon: '📈' },
                        { id: 'P_DS_03', desc: '夢到了一組完美的超參數。', type: 'sleep', target: 7.5, icon: '😴' },
                        { id: 'P_DS_04', desc: '數據是新的石油，而水是你的石油。', type: 'water', target: 1800, icon: '💧' }
                    ],
                },
                achievement: [
                    // --- 通用成就任務 ---
                    { id: 'A_G_01', titleId: 'T_G_01', desc: '【萬步鐵人】單日總步數達到 10000 步。', type: 'steps', target: 10000, icon: '🏆' },
                    { id: 'A_G_02', titleId: 'T_G_02', desc: '【卡路里粉碎者】單日總消耗卡路里達到 1000 大卡。', type: 'calories', target: 1000, icon: '🏆' },
                    { id: 'A_G_03', titleId: 'T_G_03', desc: '【水之領主】單日總飲水量達到 4000 毫升。', type: 'water', target: 4000, icon: '🏆' },
                    { id: 'A_G_04', titleId: 'T_G_04', desc: '【深度 slumber】單日總睡眠時數達到 10 小時。', type: 'sleep', target: 10, icon: '🏆' },
                    { id: 'A_G_05', titleId: 'T_G_05', desc: '【初窺門徑】玩家等級達到 10 級。', type: 'level', target: 10, icon: '🏆' },
                    { id: 'A_G_06', titleId: 'T_G_06', desc: '【資深冒險者】玩家等級達到 50 級。', type: 'level', target: 50, icon: '🏆' },
                    { id: 'A_G_07', titleId: 'T_G_07', desc: '【寶箱獵人】總計開啟寶箱 50 次。', type: 'special', target: 50, icon: '🏆' },
                    { id: 'A_G_08', titleId: 'T_G_08', desc: '【魔王終結者】成功擊敗第 5 階段的最終 Boss。', type: 'special', target: 1, icon: '🏆' },
                    { id: 'A_G_09', titleId: 'T_G_09', desc: '【收藏家】道具圖鑑（Codex）解鎖數量達到 50 種。', type: 'special', target: 50, icon: '🏆' },
                    { id: 'A_G_10', titleId: 'T_G_10', desc: '【天選之人】獲得一件「神諭」或「Divum」稀有度的道具。', type: 'special', target: 1, icon: '🏆' },
                ],
                professionAchievement: {
                    '社畜': [
                        { id: 'A_P_SH_01', titleId: 'T_P_SH_01', desc: '【薪水小偷】達到「社畜」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_SH_02', titleId: 'T_P_SH_02', desc: '【會議室戰神】達到「社畜」職業等級 50。', type: 'level', target: 50, icon: '🏆' },
                        { id: 'A_P_SH_03', titleId: 'T_P_SH_03', desc: '【辦公室傳奇】達到「社畜」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_SH_04', titleId: 'T_P_SH_04', desc: '【通勤專家】完成 20 次「社畜」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_SH_05', titleId: 'T_P_SH_05', desc: '【爆肝戰士】連續三天睡眠少於6小時。', type: 'special', target: 3, icon: '🏆' }
                    ],
                    '服務業': [
                        { id: 'A_P_SV_01', titleId: 'T_P_SV_01', desc: '【店長風範】達到「服務業」職業等級 20。', type: 'level', target: 20, icon: '🏆' },
                        { id: 'A_P_SV_02', titleId: 'T_P_SV_02', desc: '【客戶體驗總監】達到「服務業」職業等級 50。', type: 'level', target: 50, icon: '🏆' },
                        { id: 'A_P_SV_03', titleId: 'T_P_SV_03', desc: '【服務的化身】達到「服務業」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_SV_04', titleId: 'T_P_SV_04', desc: '【微笑天使】完成 20 次「服務業」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_SV_05', titleId: 'T_P_SV_05', desc: '【奧客退散】累積因健康行為獲得的運氣值超過 500。', type: 'special', target: 500, icon: '🏆' }
                    ],
                    '零售業': [
                        { id: 'A_P_RT_01', titleId: 'T_P_RT_01', desc: '【銷售主管】達到「零售業」職業等級 20。', type: 'level', target: 20, icon: '🏆' },
                        { id: 'A_P_RT_02', titleId: 'T_P_RT_02', desc: '【商店經理】達到「零售業」職業等級 40。', type: 'level', target: 40, icon: '🏆' },
                        { id: 'A_P_RT_03', titleId: 'T_P_RT_03', desc: '【零售界的王者】達到「零售業」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_RT_04', titleId: 'T_P_RT_04', desc: '【業績冠軍】完成 20 次「零售業」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_RT_05', titleId: 'T_P_RT_05', desc: '【金牌推銷員】累積因健康行為獲得的力量值超過 1000。', type: 'special', target: 1000, icon: '🏆' }
                    ],
                    '教育業': [
                        { id: 'A_P_ED_01', titleId: 'T_P_ED_01', desc: '【資深教師】達到「教育業」職業等級 20。', type: 'level', target: 20, icon: '🏆' },
                        { id: 'A_P_ED_02', titleId: 'T_P_ED_02', desc: '【校長】達到「教育業」職業等級 60。', type: 'level', target: 60, icon: '🏆' },
                        { id: 'A_P_ED_03', titleId: 'T_P_ED_03', desc: '【教育部長】達到「教育業」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_ED_04', titleId: 'T_P_ED_04', desc: '【春風化雨】完成 20 次「教育業」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_ED_05', titleId: 'T_P_ED_05', desc: '【桃李滿天下】累積因健康行為獲得的智力值超過 1000。', type: 'special', target: 1000, icon: '🏆' }
                    ],
                    '醫療保健': [
                        { id: 'A_P_HC_01', titleId: 'T_P_HC_01', desc: '【護理長】達到「醫療保健」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_HC_02', titleId: 'T_P_HC_02', desc: '【醫院院長】達到「醫療保健」職業等級 80。', type: 'level', target: 80, icon: '🏆' },
                        { id: 'A_P_HC_03', titleId: 'T_P_HC_03', desc: '【醫療帝國】達到「醫療保健」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_HC_04', titleId: 'T_P_HC_04', desc: '【白衣天使】完成 20 次「醫療保健」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_HC_05', titleId: 'T_P_HC_05', desc: '【仁心仁術】累積因健康行為獲得的耐力值超過 1500。', type: 'special', target: 1500, icon: '🏆' }
                    ],
                    '資訊科技': [
                        { id: 'A_P_IT_01', titleId: 'T_P_IT_01', desc: '【軟體工程師】達到「資訊科技」職業等級 20。', type: 'level', target: 20, icon: '🏆' },
                        { id: 'A_P_IT_02', titleId: 'T_P_IT_02', desc: '【技術總監】達到「資訊科技」職業等級 50。', type: 'level', target: 50, icon: '🏆' },
                        { id: 'A_P_IT_03', titleId: 'T_P_IT_03', desc: '【科技巨頭】達到「資訊科技」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_IT_04', titleId: 'T_P_IT_04', desc: '【代碼藝術家】完成 20 次「資訊科技」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_IT_05', titleId: 'T_P_IT_05', desc: '【沒有我修不好的Bug】累積修復 (完成任務) 1024 次。', type: 'special', target: 1024, icon: '🏆' }
                    ],
                    '金融業': [
                        { id: 'A_P_FN_01', titleId: 'T_P_FN_01', desc: '【投資經理】達到「金融業」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_FN_02', titleId: 'T_P_FN_02', desc: '【財務長】達到「金融業」職業等級 60。', type: 'level', target: 60, icon: '🏆' },
                        { id: 'A_P_FN_03', titleId: 'T_P_FN_03', desc: '【金融界的王者】達到「金融業」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_FN_04', titleId: 'T_P_FN_04', desc: '【華爾街之狼】完成 20 次「金融業」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_FN_05', titleId: 'T_P_FN_05', desc: '【點石成金】累積因健康行為獲得的運氣值超過 1000。', type: 'special', target: 1000, icon: '🏆' }
                    ],
                    '行銷與廣告': [
                        { id: 'A_P_MK_01', titleId: 'T_P_MK_01', desc: '【品牌經理】達到「行銷與廣告」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_MK_02', titleId: 'T_P_MK_02', desc: '【首席行銷官】達到「行銷與廣告」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_MK_03', titleId: 'T_P_MK_03', desc: '【行銷傳奇】達到「行銷與廣告」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_MK_04', titleId: 'T_P_MK_04', desc: '【創意大師】完成 20 次「行銷與廣告」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_MK_05', titleId: 'T_P_MK_05', desc: '【爆款製造機】累積因健康行為獲得的智力值超過 1200。', type: 'special', target: 1200, icon: '🏆' }
                    ],
                    '建築與工程': [
                        { id: 'A_P_CE_01', titleId: 'T_P_CE_01', desc: '【工程經理】達到「建築與工程」職業等級 40。', type: 'level', target: 40, icon: '🏆' },
                        { id: 'A_P_CE_02', titleId: 'T_P_CE_02', desc: '【工程集團總裁】達到「建築與工程」職業等級 80。', type: 'level', target: 80, icon: '🏆' },
                        { id: 'A_P_CE_03', titleId: 'T_P_CE_03', desc: '【建築世界的締造者】達到「建築與工程」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_CE_04', titleId: 'T_P_CE_04', desc: '【工地主任】完成 20 次「建築與工程」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_CE_05', titleId: 'T_P_CE_05', desc: '【基建狂魔】累積因健康行為獲得的力量值超過 2000。', type: 'special', target: 2000, icon: '🏆' }
                    ],
                    '法律服務': [
                        { id: 'A_P_LW_01', titleId: 'T_P_LW_01', desc: '【法務經理】達到「法律服務」職業等級 40。', type: 'level', target: 40, icon: '🏆' },
                        { id: 'A_P_LW_02', titleId: 'T_P_LW_02', desc: '【資深合夥人】達到「法律服務」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_LW_03', titleId: 'T_P_LW_03', desc: '【最高法院法官】達到「法律服務」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_LW_04', titleId: 'T_P_LW_04', desc: '【律政菁英】完成 20 次「法律服務」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_LW_05', titleId: 'T_P_LW_05', desc: '【法外狂徒】累積因健康行為獲得的智力值超過 1500。', type: 'special', target: 1500, icon: '🏆' }
                    ],
                    '餐飲業': [
                        { id: 'A_P_FD_01', titleId: 'T_P_FD_01', desc: '【主廚】達到「餐飲業」職業等級 20。', type: 'level', target: 20, icon: '🏆' },
                        { id: 'A_P_FD_02', titleId: 'T_P_FD_02', desc: '【餐飲總監】達到「餐飲業」職業等級 50。', type: 'level', target: 50, icon: '🏆' },
                        { id: 'A_P_FD_03', titleId: 'T_P_FD_03', desc: '【國際名廚】達到「餐飲業」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_FD_04', titleId: 'T_P_FD_04', desc: '【美食獵人】完成 20 次「餐飲業」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_FD_05', titleId: 'T_P_FD_05', desc: '【米其林三星】累積因健康行為獲得的耐力值超過 1300。', type: 'special', target: 1300, icon: '🏆' }
                    ],
                    '運輸與物流': [
                        { id: 'A_P_TR_01', titleId: 'T_P_TR_01', desc: '【物流經理】達到「運輸與物流」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_TR_02', titleId: 'T_P_TR_02', desc: '【供應鏈總監】達到「運輸與物流」職業等級 60。', type: 'level', target: 60, icon: '🏆' },
                        { id: 'A_P_TR_03', titleId: 'T_P_TR_03', desc: '【全球物流巨擘】達到「運輸與物流」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_TR_04', titleId: 'T_P_TR_04', desc: '【使命必達】完成 20 次「運輸與物流」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_TR_05', titleId: 'T_P_TR_05', desc: '【風之使者】累積因健康行為獲得的敏捷值超過 1100。', type: 'special', target: 1100, icon: '🏆' }
                    ],
                    '製造業': [
                        { id: 'A_P_MF_01', titleId: 'T_P_MF_01', desc: '【廠長】達到「製造業」職業等級 40。', type: 'level', target: 40, icon: '🏆' },
                        { id: 'A_P_MF_02', titleId: 'T_P_MF_02', desc: '【製造副總裁】達到「製造業」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_MF_03', titleId: 'T_P_MF_03', desc: '【工業帝國】達到「製造業」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_MF_04', titleId: 'T_P_MF_04', desc: '【生產力之王】完成 20 次「製造業」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_MF_05', titleId: 'T_P_MF_05', desc: '【品質保證】累積因健康行為獲得的力量值超過 1800。', type: 'special', target: 1800, icon: '🏆' }
                    ],
                    '媒體與娛樂': [
                        { id: 'A_P_ME_01', titleId: 'T_P_ME_01', desc: '【製作人】達到「媒體與娛樂」職業等級 20。', type: 'level', target: 20, icon: '🏆' },
                        { id: 'A_P_ME_02', titleId: 'T_P_ME_02', desc: '【創意總監】達到「媒體與娛樂」職業等級 60。', type: 'level', target: 60, icon: '🏆' },
                        { id: 'A_P_ME_03', titleId: 'T_P_ME_03', desc: '【娛樂巨星】達到「媒體與娛樂」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_ME_04', titleId: 'T_P_ME_04', desc: '【流量密碼】完成 20 次「媒體與娛樂」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_ME_05', titleId: 'T_P_ME_05', desc: '【奧斯卡得主】累積因健康行為獲得的運氣值超過 1300。', type: 'special', target: 1300, icon: '🏆' }
                    ],
                    '藝術與設計': [
                        { id: 'A_P_AD_01', titleId: 'T_P_AD_01', desc: '【設計主管】達到「藝術與設計」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_AD_02', titleId: 'T_P_AD_02', desc: '【創意總監】達到「藝術與設計」職業等級 60。', type: 'level', target: 60, icon: '🏆' },
                        { id: 'A_P_AD_03', titleId: 'T_P_AD_03', desc: '【設計界的傳奇】達到「藝術與設計」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_AD_04', titleId: 'T_P_AD_04', desc: '【靈感捕手】完成 20 次「藝術與設計」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_AD_05', titleId: 'T_P_AD_05', desc: '【神來一筆】累積因健康行為獲得的敏捷值超過 1400。', type: 'special', target: 1400, icon: '🏆' }
                    ],
                    '科學研究': [
                        { id: 'A_P_SR_01', titleId: 'T_P_SR_01', desc: '【資深研究員】達到「科學研究」職業等級 20。', type: 'level', target: 20, icon: '🏆' },
                        { id: 'A_P_SR_02', titleId: 'T_P_SR_02', desc: '【首席科學家】達到「科學研究」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_SR_03', titleId: 'T_P_SR_03', desc: '【諾貝爾獎得主】達到「科學研究」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_SR_04', titleId: 'T_P_SR_04', desc: '【真理探求者】完成 20 次「科學研究」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_SR_05', titleId: 'T_P_SR_05', desc: '【世紀發現】累積因健康行為獲得的智力值超過 2000。', type: 'special', target: 2000, icon: '🏆' }
                    ],
                    '農業與食品生產': [
                        { id: 'A_P_AG_01', titleId: 'T_P_AG_01', desc: '【農場經理】達到「農業與食品生產」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_AG_02', titleId: 'T_P_AG_02', desc: '【集團總裁】達到「農業與食品生產」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_AG_03', titleId: 'T_P_AG_03', desc: '【糧食之王】達到「農業與食品生產」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_AG_04', titleId: 'T_P_AG_04', desc: '【大地之子】完成 20 次「農業與食品生產」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_AG_05', titleId: 'T_P_AG_05', desc: '【豐收之神】累積因健康行為獲得的耐力值超過 1800。', type: 'special', target: 1800, icon: '🏆' }
                    ],
                    '房地產': [
                        { id: 'A_P_RE_01', titleId: 'T_P_RE_01', desc: '【房產經理】達到「房地產」職業等級 40。', type: 'level', target: 40, icon: '🏆' },
                        { id: 'A_P_RE_02', titleId: 'T_P_RE_02', desc: '【集團總裁】達到「房地產」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_RE_03', titleId: 'T_P_RE_03', desc: '【地產大亨】達到「房地產」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_RE_04', titleId: 'T_P_RE_04', desc: '【王牌業務】完成 20 次「房地產」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_RE_05', titleId: 'T_P_RE_05', desc: '【黃金地段】累積因健康行為獲得的運氣值超過 1200。', type: 'special', target: 1200, icon: '🏆' }
                    ],
                    '人力資源': [
                        { id: 'A_P_HR_01', titleId: 'T_P_HR_01', desc: '【招聘經理】達到「人力資源」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_HR_02', titleId: 'T_P_HR_02', desc: '【首席人力資源官】達到「人力資源」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_HR_03', titleId: 'T_P_HR_03', desc: '【人才磁鐵】達到「人力資源」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_HR_04', titleId: 'T_P_HR_04', desc: '【伯樂】完成 20 次「人力資源」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_HR_05', titleId: 'T_P_HR_05', desc: '【團隊核心】累積因健康行為獲得的智力值超過 1300。', type: 'special', target: 1300, icon: '🏆' }
                    ],
                    '公共服務': [
                        { id: 'A_P_PS_01', titleId: 'T_P_PS_01', desc: '【處長】達到「公共服務」職業等級 40。', type: 'level', target: 40, icon: '🏆' },
                        { id: 'A_P_PS_02', titleId: 'T_P_PS_02', desc: '【政府首長】達到「公共服務」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_PS_03', titleId: 'T_P_PS_03', desc: '【人民公僕】完成 20 次「公共服務」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_PS_04', titleId: 'T_P_PS_04', desc: '【鐵飯碗】累積因健康行為獲得的耐力值超過 1600。', type: 'special', target: 1600, icon: '🏆' },
                        { id: 'A_P_PS_05', titleId: 'T_P_PS_05', desc: '【改革先鋒】累積因健康行為獲得的力量值超過 1400。', type: 'special', target: 1400, icon: '🏆' }
                    ],
                    '環境與能源': [
                        { id: 'A_P_EE_01', titleId: 'T_P_EE_01', desc: '【永續總監】達到「環境與能源」職業等級 50。', type: 'level', target: 50, icon: '🏆' },
                        { id: 'A_P_EE_02', titleId: 'T_P_EE_02', desc: '【集團總裁】達到「環境與能源」職業等級 80。', type: 'level', target: 80, icon: '🏆' },
                        { id: 'A_P_EE_03', titleId: 'T_P_EE_03', desc: '【地球守護者】達到「環境與能源」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_EE_04', titleId: 'T_P_EE_04', desc: '【綠色和平】完成 20 次「環境與能源」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_EE_05', titleId: 'T_P_EE_05', desc: '【自然之友】累積因健康行為獲得的敏捷值超過 1500。', type: 'special', target: 1500, icon: '🏆' }
                    ],
                    '運動與健身': [
                        { id: 'A_P_SF_01', titleId: 'T_P_SF_01', desc: '【中心經理】達到「運動與健身」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_SF_02', titleId: 'T_P_SF_02', desc: '【集團總裁】達到「運動與健身」職業等級 80。', type: 'level', target: 80, icon: '🏆' },
                        { id: 'A_P_SF_03', titleId: 'T_P_SF_03', desc: '【健身之神】達到「運動與健身」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_SF_04', titleId: 'T_P_SF_04', desc: '【魔鬼教練】完成 20 次「運動與健身」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_SF_05', titleId: 'T_P_SF_05', desc: '【力拔山河】累積因健康行為獲得的力量值超過 2500。', type: 'special', target: 2500, icon: '🏆' }
                    ],
                    '旅遊與酒店': [
                        { id: 'A_P_TH_01', titleId: 'T_P_TH_01', desc: '【酒店經理】達到「旅遊與酒店」職業等級 40。', type: 'level', target: 40, icon: '🏆' },
                        { id: 'A_P_TH_02', titleId: 'T_P_TH_02', desc: '【集團總裁】達到「旅遊與酒店」職業等級 80。', type: 'level', target: 80, icon: '🏆' },
                        { id: 'A_P_TH_03', titleId: 'T_P_TH_03', desc: '【環球旅行家】達到「旅遊與酒店」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_TH_04', titleId: 'T_P_TH_04', desc: '【金牌導遊】完成 20 次「旅遊與酒店」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_TH_05', titleId: 'T_P_TH_05', desc: '【讀萬卷書行萬里路】累積總步數達到 100 萬步。', type: 'special', target: 1000000, icon: '🏆' }
                    ],
                    '安全與保安': [
                        { id: 'A_P_SS_01', titleId: 'T_P_SS_01', desc: '【安全總監】達到「安全與保安」職業等級 40。', type: 'level', target: 40, icon: '🏆' },
                        { id: 'A_P_SS_02', titleId: 'T_P_SS_02', desc: '【集團總裁】達到「安全與保安」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_SS_03', titleId: 'T_P_SS_03', desc: '【和平捍衛者】達到「安全與保安」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_SS_04', titleId: 'T_P_SS_04', desc: '【不動如山】完成 20 次「安全與保安」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_SS_05', titleId: 'T_P_SS_05', desc: '【絕對防禦】累積因健康行為獲得的耐力值超過 2000。', type: 'special', target: 2000, icon: '🏆' }
                    ],
                    '咨詢服務': [
                        { id: 'A_P_CS_01', titleId: 'T_P_CS_01', desc: '【專案經理】達到「咨詢服務」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_CS_02', titleId: 'T_P_CS_02', desc: '【管理合夥人】達到「咨詢服務」職業等級 80。', type: 'level', target: 80, icon: '🏆' },
                        { id: 'A_P_CS_03', titleId: 'T_P_CS_03', desc: '【思想領袖】達到「咨詢服務」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_CS_04', titleId: 'T_P_CS_04', desc: '【問題解決者】完成 20 次「咨詢服務」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_CS_05', titleId: 'T_P_CS_05', desc: '【智慧的化身】累積因健康行為獲得的智力值超過 1800。', type: 'special', target: 1800, icon: '🏆' }
                    ],
                    '電子商務': [
                        { id: 'A_P_EC_01', titleId: 'T_P_EC_01', desc: '【行銷經理】達到「電子商務」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_EC_02', titleId: 'T_P_EC_02', desc: '【平台總裁】達到「電子商務」職業等級 80。', type: 'level', target: 80, icon: '🏆' },
                        { id: 'A_P_EC_03', titleId: 'T_P_EC_03', desc: '【電商巨擘】達到「電子商務」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_EC_04', titleId: 'T_P_EC_04', desc: '【訂單處理大師】完成 20 次「電子商務」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_EC_05', titleId: 'T_P_EC_05', desc: '【雙十一傳奇】累積因健康行為獲得的敏捷值超過 1600。', type: 'special', target: 1600, icon: '🏆' }
                    ],
                    '非營利組織': [
                        { id: 'A_P_NP_01', titleId: 'T_P_NP_01', desc: '【發展總監】達到「非營利組織」職業等級 40。', type: 'level', target: 40, icon: '🏆' },
                        { id: 'A_P_NP_02', titleId: 'T_P_NP_02', desc: '【執行長】達到「非營利組織」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_NP_03', titleId: 'T_P_NP_03', desc: '【慈善家】達到「非營利組織」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_NP_04', titleId: 'T_P_NP_04', desc: '【愛心大使】完成 20 次「非營利組織」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_NP_05', titleId: 'T_P_NP_05', desc: '【人間天使】累積因健康行為獲得的運氣值超過 1500。', type: 'special', target: 1500, icon: '🏆' }
                    ],
                    '航空與航天': [
                        { id: 'A_P_AS_01', titleId: 'T_P_AS_01', desc: '【機組長】達到「航空與航天」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_AS_02', titleId: 'T_P_AS_02', desc: '【集團總裁】達到「航空與航天」職業等級 80。', type: 'level', target: 80, icon: '🏆' },
                        { id: 'A_P_AS_03', titleId: 'T_P_AS_03', desc: '【星際領航員】達到「航空與航天」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_AS_04', titleId: 'T_P_AS_04', desc: '【王牌飛行員】完成 20 次「航空與航天」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_AS_05', titleId: 'T_P_AS_05', desc: '【征服天空】累積因健康行為獲得的敏捷值超過 1700。', type: 'special', target: 1700, icon: '🏆' }
                    ],
                    '時尚與美容': [
                        { id: 'A_P_FB_01', titleId: 'T_P_FB_01', desc: '【時尚總監】達到「時尚與美容」職業等級 30。', type: 'level', target: 30, icon: '🏆' },
                        { id: 'A_P_FB_02', titleId: 'T_P_FB_02', desc: '【品牌總裁】達到「時尚與美容」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_FB_03', titleId: 'T_P_FB_03', desc: '【時尚教主】達到「時尚與美容」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_FB_04', titleId: 'T_P_FB_04', desc: '【潮流引領者】完成 20 次「時尚與美容」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_FB_05', titleId: 'T_P_FB_05', desc: '【行走的費洛蒙】累積因健康行為獲得的運氣值超過 1400。', type: 'special', target: 1400, icon: '🏆' }
                    ],
                    '數據科學': [
                        { id: 'A_P_DS_01', titleId: 'T_P_DS_01', desc: '【數據科學家】達到「數據科學」職業等級 20。', type: 'level', target: 20, icon: '🏆' },
                        { id: 'A_P_DS_02', titleId: 'T_P_DS_02', desc: '【首席數據官】達到「數據科學」職業等級 70。', type: 'level', target: 70, icon: '🏆' },
                        { id: 'A_P_DS_03', titleId: 'T_P_DS_03', desc: '【數據之神】達到「數據科學」職業等級 90。', type: 'level', target: 90, icon: '🏆' },
                        { id: 'A_P_DS_04', titleId: 'T_P_DS_04', desc: '【預言家】完成 20 次「數據科學」每日任務。', type: 'special', target: 20, icon: '🏆' },
                        { id: 'A_P_DS_05', titleId: 'T_P_DS_05', desc: '【洞察一切之人】累積因健康行為獲得的智力值超過 2200。', type: 'special', target: 2200, icon: '🏆' }
                    ],
                }
            };
                //稱號
            export const titleData = {
                    // --- 通用稱號 ---
                    'T_G_01': { name: '萬步鐵人', desc: '你用雙腳丈量了大地。', bonus: { agility: 0.01 } },
                    'T_G_02': { name: '卡路里粉碎者', desc: '脂肪見了你都要退避三舍。', bonus: { strength: 0.01 } },
                    'T_G_03': { name: '水之領主', desc: '你的身體裡住著一片海洋。', bonus: { stamina: 0.01 } },
                    'T_G_04': { name: '深度Slumber', desc: '你的夢境比電影還精彩。', bonus: { intelligence: 0.01 } },
                    'T_G_05': { name: '初窺門徑', desc: '冒險的大門已為你敞開。', bonus: { luck: 0.01 } },
                    'T_G_06': { name: '資深冒險者', desc: '你的名字已在酒館中流傳。', bonus: { strength: 0.01, stamina: 0.01, agility: 0.01, intelligence: 0.01, luck: 0.01 } },
                    'T_G_07': { name: '寶箱獵人', desc: '開箱的快樂，你最懂。', bonus: { luck: 0.02 } },
                    'T_G_08': { name: '魔王終結者', desc: '世界的和平由你守護。', bonus: { strength: 0.03 } },
                    'T_G_09': { name: '收藏家', desc: '你的倉庫是座小型博物館。', bonus: { luck: 0.03 } },
                    'T_G_10': { name: '天選之人', desc: '傳說中的歐皇，就是你。', bonus: { luck: 0.05 } },
                    // --- 職業稱號 ---
                    // 1. 社畜
                    'T_P_SH_01': { name: '薪水小偷', desc: '在無盡的會議中練就了眼神放空的絕技。', bonus: { agility: 0.02 } },
                    'T_P_SH_02': { name: '會議室戰神', desc: '能用最少的內容，說出最冗長的發言。', bonus: { intelligence: 0.02 } },
                    'T_P_SH_03': { name: '辦公室傳奇', desc: '你的事蹟在辦公室流傳。', bonus: { all: 0.01 } },
                    'T_P_SH_04': { name: '通勤專家', desc: '你熟悉每一條捷徑與交通尖峰。', bonus: { agility: 0.015 } },
                    'T_P_SH_05': { name: '爆肝戰士', desc: '你的肝，是黑色的。', bonus: { stamina: 0.03 } },
                    // 2. 服務業
                    'T_P_SV_01': { name: '店長風範', desc: '你掌管一家店的生殺大權。', bonus: { intelligence: 0.02 } },
                    'T_P_SV_02': { name: '客戶體驗總監', desc: '你的任務是讓每位顧客都帶著滿意的微笑離開。', bonus: { luck: 0.02 } },
                    'T_P_SV_03': { name: '服務的化身', desc: '你的一舉一動都牽動著整個行業的脈動。', bonus: { all: 0.01 } },
                    'T_P_SV_04': { name: '微笑天使', desc: '你的笑容能融化最冰冷的奧客。', bonus: { luck: 0.015 } },
                    'T_P_SV_05': { name: '奧客退散', desc: '你用耐心與智慧化解了一切危機。', bonus: { stamina: 0.03 } },
                    // 3. 零售業
                    'T_P_RT_01': { name: '銷售主管', desc: '你的口號是「成交！成交！再成交！」', bonus: { strength: 0.02 } },
                    'T_P_RT_02': { name: '商店經理', desc: '一家店的總指揮，從陳列到促銷，無一不精。', bonus: { intelligence: 0.02 } },
                    'T_P_RT_03': { name: '零售界的王者', desc: '你的名字就是銷售的代名詞。', bonus: { all: 0.01 } },
                    'T_P_RT_04': { name: '業績冠軍', desc: '業績榜的第一名，永遠是你的指定席。', bonus: { luck: 0.015 } },
                    'T_P_RT_05': { name: '金牌推銷員', desc: '能把梳子賣給和尚的傳說級人物。', bonus: { intelligence: 0.03 } },
                    // 4. 教育業
                    'T_P_ED_01': { name: '資深教師', desc: '桃李滿天下，學生們都搶著上你的課。', bonus: { intelligence: 0.02 } },
                    'T_P_ED_02': { name: '校長', desc: '一校之長，肩負著教育的重任。', bonus: { stamina: 0.02 } },
                    'T_P_ED_03': { name: '教育部長', desc: '國家教育的最高決策者。', bonus: { all: 0.01 } },
                    'T_P_ED_04': { name: '春風化雨', desc: '你的教誨如春風，吹拂著學生的心田。', bonus: { intelligence: 0.015 } },
                    'T_P_ED_05': { name: '桃李滿天下', desc: '你的學生遍布各行各業，成為社會的棟樑。', bonus: { luck: 0.03 } },
                    // 5. 醫療保健
                    'T_P_HC_01': { name: '護理長', desc: '管理護理團隊，是病房的「定海神針」。', bonus: { stamina: 0.02 } },
                    'T_P_HC_02': { name: '醫院院長', desc: '醫院的最高管理者，領導力決定了醫院的聲譽。', bonus: { intelligence: 0.02 } },
                    'T_P_HC_03': { name: '醫療帝國', desc: '你的願景將改變人類的健康福祉。', bonus: { all: 0.01 } },
                    'T_P_HC_04': { name: '白衣天使', desc: '用專業與愛心守護生命。', bonus: { stamina: 0.015 } },
                    'T_P_HC_05': { name: '仁心仁術', desc: '你的醫術和醫德，都達到了頂峰。', bonus: { intelligence: 0.03 } },
                    // 6. 資訊科技
                    'T_P_IT_01': { name: '軟體工程師', desc: '不只寫程式，還能設計架構。', bonus: { intelligence: 0.02 } },
                    'T_P_IT_02': { name: '技術總監', desc: '制定技術發展方向，技術視野決定了產品的未來。', bonus: { intelligence: 0.03 } },
                    'T_P_IT_03': { name: '科技巨頭', desc: '科技帝國的締造者，你的名字就是科技的代名詞。', bonus: { all: 0.01 } },
                    'T_P_IT_04': { name: '代碼藝術家', desc: '你寫的不是程式碼，是詩。', bonus: { intelligence: 0.015 } },
                    'T_P_IT_05': { name: '沒有我修不好的Bug', desc: '傳說中的除錯之神。', bonus: { luck: 0.03 } },
                    // 7. 金融業
                    'T_P_FN_01': { name: '投資經理', desc: '管理龐大資金，你的投資決策牽動著市場的神經。', bonus: { luck: 0.02 } },
                    'T_P_FN_02': { name: '財務長', desc: '公司的錢袋子，財務管理能力決定了公司的命脈。', bonus: { intelligence: 0.02 } },
                    'T_P_FN_03': { name: '金融界的王者', desc: '你的名字就是財富的象徵。', bonus: { all: 0.01 } },
                    'T_P_FN_04': { name: '華爾街之狼', desc: '在市場的腥風血雨中，你永遠是贏家。', bonus: { strength: 0.015 } },
                    'T_P_FN_05': { name: '點石成金', desc: '被你碰過的投資項目，都會變成黃金。', bonus: { luck: 0.03 } },
                    // 8. 行銷與廣告
                    'T_P_MK_01': { name: '品牌經理', desc: '塑造品牌形象，你的品牌故事能深入人心。', bonus: { intelligence: 0.02 } },
                    'T_P_MK_02': { name: '首席行銷官', desc: '公司的行銷靈魂，你的行銷智慧引領著企業的成長。', bonus: { intelligence: 0.03 } },
                    'T_P_MK_03': { name: '行銷傳奇', desc: '你的名字就是創意的代名詞。', bonus: { all: 0.01 } },
                    'T_P_MK_04': { name: '創意大師', desc: '你的腦中彷彿住著一個繆斯。', bonus: { intelligence: 0.015 } },
                    'T_P_MK_05': { name: '爆款製造機', desc: '經你手的產品，沒有不火的。', bonus: { luck: 0.03 } },
                    // 9. 建築與工程
                    'T_P_CE_01': { name: '工程經理', desc: '管理工程團隊，你的領導力決定了專案的進度與品質。', bonus: { strength: 0.02 } },
                    'T_P_CE_02': { name: '工程集團總裁', desc: '工程界的王者，你的名字就是品質與創新的代名詞。', bonus: { stamina: 0.03 } },
                    'T_P_CE_03': { name: '建築世界的締造者', desc: '你的願景將改變城市的輪廓。', bonus: { all: 0.01 } },
                    'T_P_CE_04': { name: '工地主任', desc: '你的聲音，是工地上最權威的指令。', bonus: { strength: 0.015 } },
                    'T_P_CE_05': { name: '基建狂魔', desc: '你對建造的熱情，能移山填海。', bonus: { stamina: 0.03 } },
                    // 10. 法律服務
                    'T_P_LW_01': { name: '法務經理', desc: '管理公司的法律事務，確保公司運營合法合規。', bonus: { intelligence: 0.02 } },
                    'T_P_LW_02': { name: '資深合夥人', desc: '在法律界享有盛譽，你的名字就是權威的象徵。', bonus: { luck: 0.02 } },
                    'T_P_LW_03': { name: '最高法院法官', desc: '法律的最終解釋者。', bonus: { all: 0.01 } },
                    'T_P_LW_04': { name: '律政菁英', desc: '法庭上的常勝將軍。', bonus: { intelligence: 0.015 } },
                    'T_P_LW_05': { name: '法外狂徒', desc: '你不是在鑽法律漏洞，你是在進行壓力測試。', bonus: { agility: 0.03 } },
                    // 11. 餐飲業
                    'T_P_FD_01': { name: '主廚', desc: '掌管廚房的靈魂人物，你的菜品能讓食客流連忘返。', bonus: { stamina: 0.02 } },
                    'T_P_FD_02': { name: '餐飲總監', desc: '制定餐飲策略，你的美食理念將引領潮流。', bonus: { intelligence: 0.02 } },
                    'T_P_FD_03': { name: '國際名廚', desc: '將美食推向全球，你的餐飲帝國遍布世界各地。', bonus: { all: 0.01 } },
                    'T_P_FD_04': { name: '美食獵人', desc: '你的味蕾，能分辨出世界上最細微的味道。', bonus: { luck: 0.015 } },
                    'T_P_FD_05': { name: '米其林三星', desc: '你的餐廳，是美食家們的朝聖之地。', bonus: { luck: 0.03 } },
                    // 12. 運輸與物流
                    'T_P_TR_01': { name: '物流經理', desc: '負責物流環節的規劃與執行，讓貨物暢通無阻。', bonus: { agility: 0.02 } },
                    'T_P_TR_02': { name: '供應鏈總監', desc: '管理整個供應鏈，確保從生產到銷售的每一個環節都高效協調。', bonus: { intelligence: 0.02 } },
                    'T_P_TR_03': { name: '全球物流巨擘', desc: '全球物流的掌舵者，你的願景將改變世界的貿易格局。', bonus: { all: 0.01 } },
                    'T_P_TR_04': { name: '使命必達', desc: '風雨無阻，使命必達。', bonus: { stamina: 0.015 } },
                    'T_P_TR_05': { name: '風之使者', desc: '你的速度，連風都追不上。', bonus: { agility: 0.03 } },
                    // 13. 製造業
                    'T_P_MF_01': { name: '廠長', desc: '掌管整個工廠的運作，你的決策影響著生產的命脈。', bonus: { strength: 0.02 } },
                    'T_P_MF_02': { name: '製造副總裁', desc: '製造帝國的幕後推手，你的決策影響著全球供應鏈。', bonus: { stamina: 0.02 } },
                    'T_P_MF_03': { name: '工業帝國', desc: '工業世界的締造者，你的願景將改變全球的生產模式。', bonus: { all: 0.01 } },
                    'T_P_MF_04': { name: '生產力之王', desc: '你的生產效率，是業界的標竿。', bonus: { strength: 0.015 } },
                    'T_P_MF_05': { name: '品質保證', desc: 'Made by you，就是品質的保證。', bonus: { intelligence: 0.03 } },
                    // 14. 媒體與娛樂
                    'T_P_ME_01': { name: '製作人', desc: '將創意化為現實，你的製作能力讓作品大放異彩。', bonus: { luck: 0.02 } },
                    'T_P_ME_02': { name: '創意總監', desc: '創意的源泉，你的創意能讓作品獨樹一幟。', bonus: { intelligence: 0.02 } },
                    'T_P_ME_03': { name: '娛樂巨星', desc: '娛樂世界的締造者，你的願景將改變人們的休閒生活。', bonus: { all: 0.01 } },
                    'T_P_ME_04': { name: '流量密碼', desc: '你掌握了網路時代的流量密碼。', bonus: { luck: 0.015 } },
                    'T_P_ME_05': { name: '奧斯卡得主', desc: '你的作品，是藝術的巔峰。', bonus: { luck: 0.03 } },
                    // 15. 藝術與設計
                    'T_P_AD_01': { name: '設計主管', desc: '帶領設計團隊，你的指導能讓作品更上一層樓。', bonus: { intelligence: 0.02 } },
                    'T_P_AD_02': { name: '創意總監', desc: '創意的核心，你的創意能讓品牌獨具風格。', bonus: { agility: 0.02 } },
                    'T_P_AD_03': { name: '設計界的傳奇', desc: '你的名字就是美學的代名詞。', bonus: { all: 0.01 } },
                    'T_P_AD_04': { name: '靈感捕手', desc: '靈感在你眼中，無所遁形。', bonus: { intelligence: 0.015 } },
                    'T_P_AD_05': { name: '神來一筆', desc: '你的每一筆，都是神來之筆。', bonus: { luck: 0.03 } },
                    // 16. 科學研究
                    'T_P_SR_01': { name: '資深研究員', desc: '經驗豐富的科學家，能在複雜的實驗中找到突破口。', bonus: { intelligence: 0.02 } },
                    'T_P_SR_02': { name: '首席科學家', desc: '公司的科學靈魂，你的科學智慧引領著企業的創新。', bonus: { intelligence: 0.03 } },
                    'T_P_SR_03': { name: '諾貝爾獎得主', desc: '科學界的最高榮譽。', bonus: { all: 0.01 } },
                    'T_P_SR_04': { name: '真理探求者', desc: '你對真理的追求，永無止境。', bonus: { intelligence: 0.015 } },
                    'T_P_SR_05': { name: '世紀發現', desc: '你的發現，將改變世界。', bonus: { luck: 0.03 } },
                    // 17. 農業與食品生產
                    'T_P_AG_01': { name: '農場經理', desc: '負責農業生產計畫，你的管理能力是豐收的保障。', bonus: { stamina: 0.02 } },
                    'T_P_AG_02': { name: '集團總裁', desc: '農業食品界的王者，你的名字就是豐盛與健康的代名詞。', bonus: { strength: 0.02 } },
                    'T_P_AG_03': { name: '糧食之王', desc: '你的願景將解決世界的糧食問題。', bonus: { all: 0.01 } },
                    'T_P_AG_04': { name: '大地之子', desc: '你與土地的連結，無人能及。', bonus: { stamina: 0.015 } },
                    'T_P_AG_05': { name: '豐收之神', desc: '你所到之處，皆是豐收。', bonus: { luck: 0.03 } },
                    // 18. 房地產
                    'T_P_RE_01': { name: '房產經理', desc: '管理房地產專案，確保交易順利進行。', bonus: { luck: 0.02 } },
                    'T_P_RE_02': { name: '集團總裁', desc: '房地產界的王者，你的名字就是財富與地標的代名詞。', bonus: { intelligence: 0.02 } },
                    'T_P_RE_03': { name: '地產大亨', desc: '你的願景將改變世界的城市面貌。', bonus: { all: 0.01 } },
                    'T_P_RE_04': { name: '王牌業務', desc: '沒有你賣不出去的房子。', bonus: { luck: 0.015 } },
                    'T_P_RE_05': { name: '黃金地段', desc: '你站的地方，就是黃金地段。', bonus: { luck: 0.03 } },
                    // 19. 人力資源
                    'T_P_HR_01': { name: '招聘經理', desc: '為公司招募頂尖人才，你的獵頭能力無人能及。', bonus: { luck: 0.02 } },
                    'T_P_HR_02': { name: '首席人力資源官', desc: '公司的首席人力資源官，你的智慧引領著企業的人才戰略。', bonus: { intelligence: 0.03 } },
                    'T_P_HR_03': { name: '人才磁鐵', desc: '你的願景將改變企業的命運。', bonus: { all: 0.01 } },
                    'T_P_HR_04': { name: '伯樂', desc: '千里馬常有，而你常在。', bonus: { luck: 0.015 } },
                    'T_P_HR_05': { name: '團隊核心', desc: '有你在，團隊就有凝聚力。', bonus: { stamina: 0.03 } },
                    // 20. 公共服務
                    'T_P_PS_01': { name: '處長', desc: '負責一個處的運作，你的領導力是公共服務的保障。', bonus: { intelligence: 0.02 } },
                    'T_P_PS_02': { name: '政府首長', desc: '國家的最高領導人，你的願景將引領國家走向繁榮。', bonus: { all: 0.01 } },
                    'T_P_PS_03': { name: '人民公僕', desc: '為人民服務，是你的最高宗旨。', bonus: { stamina: 0.015 } },
                    'T_P_PS_04': { name: '鐵飯碗', desc: '你的飯碗，比鐵還硬。', bonus: { stamina: 0.03 } },
                    'T_P_PS_05': { name: '改革先鋒', desc: '你的決策，將改變國家的未來。', bonus: { strength: 0.03 } },
                    // 21. 環境與能源
                    'T_P_EE_01': { name: '永續總監', desc: '制定永續發展策略，你的理念將引領綠色未來。', bonus: { intelligence: 0.02 } },
                    'T_P_EE_02': { name: '集團總裁', desc: '環境與能源界的王者，你的名字就是綠色未來的代名詞。', bonus: { stamina: 0.02 } },
                    'T_P_EE_03': { name: '地球守護者', desc: '你的願景將拯救地球。', bonus: { all: 0.01 } },
                    'T_P_EE_04': { name: '綠色和平', desc: '你的存在，就是對地球最好的愛。', bonus: { luck: 0.015 } },
                    'T_P_EE_05': { name: '自然之友', desc: '你與自然的連結，無人能及。', bonus: { agility: 0.03 } },
                    // 22. 運動與健身
                    'T_P_SF_01': { name: '中心經理', desc: '管理健身中心的運作，你的領導力是中心的保障。', bonus: { strength: 0.02 } },
                    'T_P_SF_02': { name: '集團總裁', desc: '運動健身界的王者，你的名字就是健康與活力的代名詞。', bonus: { stamina: 0.02 } },
                    'T_P_SF_03': { name: '健身之神', desc: '你的願景將改變人類的生活方式。', bonus: { all: 0.01 } },
                    'T_P_SF_04': { name: '魔鬼教練', desc: '你的訓練，能讓學員脫胎換骨。', bonus: { strength: 0.015 } },
                    'T_P_SF_05': { name: '力拔山河', desc: '你的力量，能撼動山河。', bonus: { strength: 0.03 } },
                    // 23. 旅遊與酒店
                    'T_P_TH_01': { name: '酒店經理', desc: '管理酒店的日常運營，確保每一位客人都有賓至如歸的體驗。', bonus: { luck: 0.02 } },
                    'T_P_TH_02': { name: '集團總裁', desc: '旅遊酒店界的王者，你的名字就是奢華與體驗的代名詞。', bonus: { intelligence: 0.02 } },
                    'T_P_TH_03': { name: '環球旅行家', desc: '你的願景將改變人們的旅行方式。', bonus: { all: 0.01 } },
                    'T_P_TH_04': { name: '金牌導遊', desc: '你的解說，能讓風景活起來。', bonus: { intelligence: 0.015 } },
                    'T_P_TH_05': { name: '讀萬卷書行萬里路', desc: '你的足跡，遍布世界各地。', bonus: { agility: 0.03 } },
                    // 24. 安全與保安
                    'T_P_SS_01': { name: '安全總監', desc: '制定安全策略，你的安全理念將引領行業標準。', bonus: { stamina: 0.02 } },
                    'T_P_SS_02': { name: '集團總裁', desc: '安全保安界的王者，你的名字就是和平與秩序的代名詞。', bonus: { strength: 0.02 } },
                    'T_P_SS_03': { name: '和平捍衛者', desc: '你的願景將為世界帶來安寧。', bonus: { all: 0.01 } },
                    'T_P_SS_04': { name: '不動如山', desc: '你的防守，固若金湯。', bonus: { stamina: 0.015 } },
                    'T_P_SS_05': { name: '絕對防禦', desc: '沒有人能突破你的防線。', bonus: { stamina: 0.03 } },
                    // 25. 咨詢服務
                    'T_P_CS_01': { name: '專案經理', desc: '管理諮詢專案，確保專案順利進行並達成目標。', bonus: { intelligence: 0.02 } },
                    'T_P_CS_02': { name: '管理合夥人', desc: '諮詢公司的最高管理者，你的領導力決定了公司的發展方向。', bonus: { luck: 0.02 } },
                    'T_P_CS_03': { name: '思想領袖', desc: '你的願景將改變企業的未來。', bonus: { all: 0.01 } },
                    'T_P_CS_04': { name: '問題解決者', desc: '沒有你解決不了的問題。', bonus: { intelligence: 0.015 } },
                    'T_P_CS_05': { name: '智慧的化身', desc: '你的智慧，是公司的寶貴資產。', bonus: { intelligence: 0.03 } },
                    // 26. 電子商務
                    'T_P_EC_01': { name: '行銷經理', desc: '策劃電商行銷活動，你的創意能引爆購物熱潮。', bonus: { luck: 0.02 } },
                    'T_P_EC_02': { name: '平台總裁', desc: '電商平台的王者，你的名字就是線上購物的代名詞。', bonus: { intelligence: 0.02 } },
                    'T_P_EC_03': { name: '電商巨擘', desc: '你的願景將改變人們的購物方式。', bonus: { all: 0.01 } },
                    'T_P_EC_04': { name: '訂單處理大師', desc: '你的效率，讓訂單飛速流轉。', bonus: { agility: 0.015 } },
                    'T_P_EC_05': { name: '雙十一傳奇', desc: '你的業績，是業界的傳奇。', bonus: { luck: 0.03 } },
                    // 27. 非營利組織
                    'T_P_NP_01': { name: '發展總監', desc: '制定組織發展策略，你的理念將讓愛心傳播更廣。', bonus: { luck: 0.02 } },
                    'T_P_NP_02': { name: '執行長', desc: '非營利組織的最高管理者，你的願景將改變社會。', bonus: { intelligence: 0.02 } },
                    'T_P_NP_03': { name: '慈善家', desc: '你的名字就是大愛的代名詞。', bonus: { all: 0.01 } },
                    'T_P_NP_04': { name: '愛心大使', desc: '你的愛心，能溫暖整個世界。', bonus: { luck: 0.015 } },
                    'T_P_NP_05': { name: '人間天使', desc: '你的存在，是世界的光。', bonus: { luck: 0.03 } },
                    // 28. 航空與航天
                    'T_P_AS_01': { name: '機組長', desc: '管理機組成員，確保飛行任務順利完成。', bonus: { stamina: 0.02 } },
                    'T_P_AS_02': { name: '集團總裁', desc: '航空航天界的王者，你的名字就是速度與探索的代名詞。', bonus: { agility: 0.02 } },
                    'T_P_AS_03': { name: '星際領航員', desc: '你的願景將開啟人類探索宇宙的新篇章。', bonus: { all: 0.01 } },
                    'T_P_AS_04': { name: '王牌飛行員', desc: '你的駕駛技術，是業界的標竿。', bonus: { agility: 0.015 } },
                    'T_P_AS_05': { name: '征服天空', desc: '天空，是你的遊樂場。', bonus: { agility: 0.03 } },
                    // 29. 時尚與美容
                    'T_P_FB_01': { name: '時尚總監', desc: '制定時尚趨勢，你的眼光決定了下一季的流行。', bonus: { luck: 0.02 } },
                    'T_P_FB_02': { name: '品牌總裁', desc: '時尚美容界的王者，你的名字就是美麗與奢華的代名詞。', bonus: { intelligence: 0.02 } },
                    'T_P_FB_03': { name: '時尚教主', desc: '你的願景將改變人們對美的定義。', bonus: { all: 0.01 } },
                    'T_P_FB_04': { name: '潮流引領者', desc: '你穿的，就是潮流。', bonus: { luck: 0.015 } },
                    'T_P_FB_05': { name: '行走的費洛蒙', desc: '你的魅力，無人能擋。', bonus: { luck: 0.03 } },
                    // 30. 數據科學
                    'T_P_DS_01': { name: '數據科學家', desc: '用演算法預測未來，你的模型能解決複雜問題。', bonus: { intelligence: 0.02 } },
                    'T_P_DS_02': { name: '首席數據官', desc: '公司的數據靈魂，你的智慧引領著企業的數據化轉型。', bonus: { intelligence: 0.03 } },
                    'T_P_DS_03': { name: '數據之神', desc: '你的願景將改變世界的運作方式。', bonus: { all: 0.01 } },
                    'T_P_DS_04': { name: '預言家', desc: '你的預測，從未失手。', bonus: { intelligence: 0.015 } },
                    'T_P_DS_05': { name: '洞察一切之人', desc: '在數據的海洋中，你看見了未來。', bonus: { luck: 0.03 } },

            };


