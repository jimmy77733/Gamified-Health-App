// 程式碼功能說明: 道具主列表
// 這是遊戲中所有可能出現的道具資料庫。
export const masterItemList = [
    // --- [裝備] --- (icon 已全面更新為 Emoji ✨ 且無重複)
    { id: 'EQ101', name: '辦公室拖鞋', type: '裝備', rarity: 'Ferrum', icon: '👟', desc: '在辦公室健步如飛的秘訣，但請注意地板濕滑。', stats: { agility: 5 } },
    { id: 'EQ201', name: '防窺螢幕保護貼', type: '裝備', rarity: 'Ferrum', icon: '📲', desc: '有效防止同事窺探你的摸魚網站，提供基礎的職場防禦。', stats: { luck: 5 } },
    { id: 'EQ102', name: '人體工學鍵盤', type: '裝備', rarity: 'Fulmen', icon: '⌨️', desc: '敲打起來特別響亮，能有效宣告你正在努力工作。', stats: { intelligence: 12 } },
    { id: 'EQ202', name: '藍光過濾眼鏡', type: '裝備', rarity: 'Fulmen', icon: '👓', desc: '長時間盯著螢幕，至少要讓眼睛覺得你關心過它。', stats: { stamina: 12 } },
    { id: 'EQ103', name: '降噪耳機', type: '裝備', rarity: 'Scintilla', icon: '🎧', desc: '戴上它，全世界的喧囂都與你無關，除了老闆的聲音。', stats: { intelligence: 15, stamina: 5 } },
    { id: 'EQ203', name: '智能體重計', type: '裝備', rarity: 'Scintilla', icon: '⚖️', desc: '它不僅能測體重，還能精準打擊你的自信心。', stats: { strength: 10, luck: -5 } },
    { id: 'EQ104', name: '鈦合金保溫杯', type: '裝備', rarity: 'Luna', icon: '🏺', desc: '不僅保溫，還能在關鍵時刻充當防身武器。', stats: { stamina: 25 } },
    { id: 'EQ204', name: '站立式升降桌', type: '裝備', rarity: 'Luna', icon: '🖥️', desc: '讓你體驗站著把錢掙了的感覺，雖然腿有點酸。', stats: { strength: 15, stamina: 10 } },
    { id: 'EQ105', name: '多功能瑞士刀', type: '裝備', rarity: 'Sol', icon: '🔪', desc: '從開包裹到修眼鏡，無所不能，除了幫你加薪。', stats: { strength: 20, luck: 10 } },
    { id: 'EQ205', name: '高速Wi-Fi分享器', type: '裝備', rarity: 'Sol', icon: '📶', desc: '網路順暢的保證，是現代人的馬斯洛底層需求。', stats: { agility: 20, intelligence: 10 } },
    { id: 'EQ106', name: '頂級經理人鋼筆', type: '裝備', rarity: 'Stella', icon: '✒️', desc: '用它簽署的文件，似乎都帶上了一絲「不容拒絕」的氣勢。', stats: { intelligence: 30, luck: 15 } },
    { id: 'EQ206', name: 'VR虛擬實境頭盔', type: '裝備', rarity: 'Stella', icon: '🥽', desc: '讓你暫時逃離現實，進入一個沒有KPI的奇幻世界。', stats: { intelligence: 25, stamina: 20 } },
    { id: 'EQ107', name: 'CEO的限量公事包', type: '裝備', rarity: 'Caelum', icon: '💼', desc: '傳說裡面裝的不是文件，而是整個公司的未來。', stats: { strength: 25, stamina: 25, agility: 25, intelligence: 25, luck: 25 } },
    { id: 'EQ207', name: '無人機空拍機', type: '裝備', rarity: 'Caelum', icon: '🛸', desc: '用上帝視角看世界，你會發現自己的煩惱有多渺小，停車位有多難找。', stats: { agility: 30, intelligence: 20, luck: 10 } },
    { id: 'EQ108', name: '創世神的滑鼠', type: '裝備', rarity: 'Divum', icon: '🖱️', desc: '每一次點擊，似乎都在創造或毀滅一個世界。小心使用。', stats: { strength: 50, stamina: 50, agility: 50, intelligence: 50, luck: 50 } },
    { id: 'EQ208', name: '區塊鏈冷錢包', type: '裝備', rarity: 'Divum', icon: '🔒', desc: '儲存著你的數位資產和暴富夢想，前提是你沒忘記密碼。', stats: { intelligence: 75, luck: 75 } },

    // --- [消耗品] --- (icon 已全面更新為 Emoji ✨ 且無重複)
    { id: 'CN101', name: '廉價提神飲料', type: '消耗品', rarity: 'Ferrum', icon: '🥤', desc: '用化學與糖分堆疊出的短暫清醒。', effects: { type: 'buff', stat: 'strength', multiplier: 1.1, duration: 1800 } },
    { id: 'CN201', name: '即期打折飯糰', type: '消耗品', rarity: 'Ferrum', icon: '🍙', desc: '在月底，它嚐起來就像米其林三星。', effects: { type: 'buff', stat: 'stamina', multiplier: 1.1, duration: 1800 } },
    { id: 'CN102', name: '綜合維他命', type: '消耗品', rarity: 'Fulmen', icon: '💊', desc: '吞下去，感覺自己今天又健康了一點點。', effects: { type: 'buff', stat: 'stamina', multiplier: 1.2, duration: 3600 } },
    { id: 'CN202', name: '超商的茶葉蛋', type: '消耗品', rarity: 'Fulmen', icon: '🥚', desc: '一顆永流傳，入味程度與你的加班時數成正比。', effects: { type: 'buff', stat: 'strength', multiplier: 1.2, duration: 3600 } },
    { id: 'CN103', name: '專注力口香糖', type: '消耗品', rarity: 'Scintilla', icon: '🍃', desc: '咀嚼時，思緒彷彿變得更清晰，直到你吹出一個泡泡。', effects: { type: 'buff', stat: 'agility', multiplier: 1.3, duration: 1800 } },
    { id: 'CN203', name: '外送免運券', type: '消耗品', rarity: 'Scintilla', icon: '🛵', desc: '它省下的不是運費，而是你下樓的力氣。', effects: { type: 'buff', stat: 'luck', multiplier: 1.3, duration: 1800 } },
    { id: 'CN104', name: '靈感特調咖啡', type: '消耗品', rarity: 'Luna', icon: '☕️', desc: '入口苦澀，但隨之而來的是源源不絕的創意...和心悸。', effects: { type: 'buff', stat: 'intelligence', multiplier: 1.4, duration: 3600 } },
    { id: 'CN204', name: 'Meme梗圖大全', type: '消耗品', rarity: 'Luna', icon: '😂', desc: '使用後，你將能用最精準的梗圖回應任何工作訊息。', effects: { type: 'buff', stat: 'luck', multiplier: 1.4, duration: 3600 } },
    { id: 'CN105', name: '幸運御守', type: '消耗品', rarity: 'Sol', icon: '🍀', desc: '從遠方寺廟求來的幸運符，據說能帶來一整天的好運。', effects: { type: 'buff', stat: 'luck', multiplier: 1.5, duration: 86400 } },
    { id: 'CN205', name: '薪水小偷攻略本', type: '消耗品', rarity: 'Sol', icon: '🤫', desc: '一本傳說中的秘笈，記載了如何在不被發現的情況下高效摸魚。', effects: { type: 'buff', stat: 'agility', multiplier: 1.5, duration: 86400 } },
    { id: 'CN106', name: '皇家蜂王乳', type: '消耗品', rarity: 'Stella', icon: '👑', desc: '蜂后的御用補品，讓你感受到女王般的活力。', effects: { type: 'buff', stat: ['strength', 'stamina'], multiplier: 1.3, duration: 7200 } },
    { id: 'CN206', name: '知識付費課程', type: '消耗品', rarity: 'Stella', icon: '💡', desc: '花錢買焦慮，但上完第一章後，你感覺自己變聰明了。', effects: { type: 'buff', stat: 'intelligence', multiplier: 1.6, duration: 7200 } },
    { id: 'CN107', name: '賢者之石碎片', type: '消耗品', rarity: 'Caelum', icon: '💎', desc: '傳說中的煉金術產物，蘊含著龐大的能量。', effects: { type: 'buff', stat: ['agility', 'intelligence', 'luck'], multiplier: 1.4, duration: 10800 } },
    { id: 'CN207', name: '五星好評產生器', type: '消耗品', rarity: 'Caelum', icon: '⭐', desc: '使用後，你寫出的評論將充滿真誠與讚美，即使你只用過那產品五分鐘。', effects: { type: 'buff', stat: ['luck', 'intelligence'], multiplier: 1.4, duration: 10800 } },
    { id: 'CN108', name: '神之蜜露', type: '消耗品', rarity: 'Divum', icon: '💧', desc: '奧林帕斯山上的瓊漿玉液，凡人喝一口便能獲得神力。', effects: { type: 'buff', stat: ['strength', 'stamina', 'agility', 'intelligence', 'luck'], multiplier: 1.5, duration: 3600 } },
    { id: 'CN208', name: '財富自由體驗券', type: '消耗品', rarity: 'Divum', icon: '💸', desc: '使用後，你會在一天內忘記所有帳單和貸款，體驗樸實無華的快樂。', effects: { type: 'buff', stat: 'luck', multiplier: 2, duration: 86400 } },

    // --- [Boss 戰利品] --- (icon 已全面更新為 Emoji ✨ 且無重複)
    // --- Boss 1: 想不出午餐吃甚麼的哥布林 ---
    { id: 'BS101', name: '用過的餐巾紙', type: '蒐藏品', rarity: '神諭', bossSource: 1, icon: '📄', desc: '上面似乎有不明的油漬，還有一絲哥布林的悔恨。', effects: { museum_bonus: { luck: 0.003 } } },            
    { id: 'BS102', name: '塑膠免洗湯匙', type: '蒐藏品', rarity: '凡器', bossSource: 1, icon: '🥄', desc: '很普通，但至少證明他曾經試圖決定要吃什麼。', effects: { museum_bonus: { stamina: 0.003 } } },
    { id: 'BS103', name: '過期的折價券', type: '蒐藏品', rarity: '英魂', bossSource: 1, icon: '🎟️', desc: '終於決定要吃什麼的時候，才發現它已經過期了。', effects: { museum_bonus: { luck: -0.01 } } },
    { id: 'BS104', name: '外送平台的客服紀錄', type: '蒐藏品', rarity: '英魂', bossSource: 1, icon: '💬', desc: '「請問...我還能改訂單嗎？」- 來自哥布林的第15次提問。', effects: { museum_bonus: { intelligence: 0.015 } } },
    { id: 'BS105', name: '美食部落客的反推薦', type: '蒐藏品', rarity: '傳頌', bossSource: 1, icon: '👎', desc: '一篇洋洋灑灑的食記，結論是「求你別吃」。', effects: { museum_bonus: { intelligence: 0.025 } } },
    { id: 'BS106', name: '哥布林的口袋名單', type: '蒐藏品', rarity: '傳頌', bossSource: 1, icon: '📓', desc: '一本寫滿了餐廳名字的筆記本，但沒有任何一家被圈起來。', effects: { museum_bonus: { agility: 0.02 } } },
    { id: 'BS107', name: '薛丁格的便當', type: '蒐藏品', rarity: '永恆', bossSource: 1, icon: '🍱', desc: '在你打開它之前，你永遠不知道裡面的主菜是雞腿還是排骨。', effects: { museum_bonus: { luck: 0.05, intelligence: 0.03 } } },
    { id: 'BS108', name: '命運的餐盤', type: '蒐藏品', rarity: '神諭', bossSource: 1, icon: '🎰', desc: '傳說中能終結一切選擇困難的神器，是「命運餐盤」拉霸機的原始版本。', effects: { museum_bonus: { luck: 0.1 } } },
     // --- Boss 2: 愛把超商雞胸肉買光的半獸人 ---
    { id: 'BS201', name: '濕透的運動毛巾', type: '蒐藏品', rarity: '凡器', bossSource: 2, icon: '🧖', desc: '吸滿了半獸人努力的汗水，聞起來...很有力量。', effects: { museum_bonus: { strength: 0.003 } } },
    { id: 'BS202', name: '搖搖杯裡的蛋白粉塊', type: '蒐藏品', rarity: '凡器', bossSource: 2, icon: '🪨', desc: '半獸人忘了加水就狂搖的產物，堅硬如石。', effects: { museum_bonus: { stamina: 0.003 } } },
    { id: 'BS203', name: '健身房的過期會員卡', type: '蒐藏品', rarity: '英魂', bossSource: 2, icon: '💳', desc: '半獸人因為太愛去超商而忘了續約的卡片。', effects: { museum_bonus: { agility: 0.015 } } },
    { id: 'BS204', name: '撕裂的訓練日誌', type: '蒐藏品', rarity: '英魂', bossSource: 2, icon: '📖', desc: '因為訓練成果太好，半獸人興奮地把它撕成兩半。', effects: { museum_bonus: { strength: 0.02 } } },
    { id: 'BS205', name: '半獸人的訓練菜單', type: '蒐藏品', rarity: '傳頌', bossSource: 2, icon: '📋', desc: '上面只有三個字：「雞胸肉」。', effects: { museum_bonus: { strength: 0.02, stamina: 0.01 } } },
    { id: 'BS206', name: '搶購專用購物籃', type: '蒐藏品', rarity: '傳頌', bossSource: 2, icon: '🛒', desc: '被半獸人強化過的購物籃，能裝下正常容量三倍的雞胸肉。', effects: { museum_bonus: { agility: 0.025 } } },
    { id: 'BS207', name: '永不磨損的啞鈴', type: '蒐藏品', rarity: '永恆', bossSource: 2, icon: '🏋️', desc: '一個被半獸人遺落在超商門口的啞鈴，上面連一絲刮痕都沒有。', effects: { museum_bonus: { strength: 0.06 } } },
    { id: 'BS208', name: '蛋白質之神的神諭', type: '蒐藏品', rarity: '神諭', bossSource: 2, icon: '📜', desc: '一張神聖的捲軸，上面用金色大字寫著：「今天，你吃足夠的蛋白質了嗎？」', effects: { museum_bonus: { strength: 0.08, stamina: 0.02 } } },
    // --- Boss 3: 無法完成上司交代專案的風精靈 ---
    { id: 'BS301', name: '隨風飄散的靈感', type: '蒐藏品', rarity: '凡器', bossSource: 3, icon: '💨', desc: '一個絕妙的點子，但在你準備記下來之前就消失了。', effects: { museum_bonus: { agility: 0.005 } } },
    { id: 'BS302', name: '無限延期的提醒事項', type: '蒐藏品', rarity: '凡器', bossSource: 3, icon: '🗓️', desc: '一個不斷提醒你「明天再做」的App通知。', effects: { museum_bonus: { stamina: 0.005 } } },
    { id: 'BS303', name: '空掉的咖啡杯底', type: '蒐藏品', rarity: '英魂', bossSource: 3, icon: '☕', desc: '杯底的咖啡漬見證了一段與睡魔奮鬥的歷史。', effects: { museum_bonus: { intelligence: 0.015 } } },
    { id: 'BS304', name: '斷斷續續的Wi-Fi訊號', type: '蒐藏品', rarity: '英魂', bossSource: 3, icon: '📡', desc: '在你最需要它的時候，它選擇了背叛。', effects: { museum_bonus: { luck: -0.01, intelligence: 0.02 } } },
    { id: 'BS008', name: '被修改了100次的簡報', type: '蒐藏品', rarity: '傳頌', bossSource: 3, icon: '📊', desc: '最終版本和第一版幾乎一模一樣，但過程很痛苦。', effects: { museum_bonus: { agility: 0.025 } } },
    { id: 'BS305', name: '專案經理的催促信', type: '蒐藏品', rarity: '傳頌', bossSource: 3, icon: '📨', desc: '信中充滿了「溫馨提醒」和「最終期限」等恐怖詞彙。', effects: { museum_bonus: { intelligence: 0.03 } } },
    { id: 'BS003', name: '風中凌亂的辭職信', type: '蒐藏品', rarity: '永恆', bossSource: 3, icon: '📄', desc: '寫了又刪，刪了又寫，至今仍在草稿匣裡。', effects: { museum_bonus: { agility: 0.05 } } },
    { id: 'BS306', name: '不存在的「最終版」', type: '蒐藏品', rarity: '永恆', bossSource: 3, icon: '👻', desc: '一個職場傳說，據說見過它的人都已經財富自由了。', effects: { museum_bonus: { intelligence: 0.04, luck: 0.02 } } },
    { id: 'BS307', name: '時間扭曲力場', type: '蒐藏品', rarity: '神諭', bossSource: 3, icon: '🌀', desc: '能讓「五分鐘就好」變成「兩小時過去了」的神秘力量。', effects: { museum_bonus: { intelligence: 0.08, agility: 0.02 } } },
    { id: 'BS308', name: '拖延症的王冠', type: '蒐藏品', rarity: '神諭', bossSource: 3, icon: '👑', desc: '戴上它，你將成為拖延國度的王者，直到截止日期到來。', effects: { museum_bonus: { stamina: 0.1, intelligence: -0.02 } } },
    // --- Boss 4: 整天壓榨員工的魔王 ---
    { id: 'BS401', name: '用剩的釘書針', type: '蒐藏品', rarity: '凡器', bossSource: 4, icon: '🖇️', desc: '魔王用來裝訂你厚重報告的最後一根釘書針。', effects: { museum_bonus: { intelligence: 0.005 } } },
    { id: 'BS402', name: '褪色的公司標語', type: '蒐藏品', rarity: '凡器', bossSource: 4, icon: '🪧', desc: '上面寫著「追求卓越」，但墨水已經快看不清了。', effects: { museum_bonus: { luck: -0.005 } } },
    { id: 'BS403', name: '魔王的打卡鐘', type: '蒐藏品', rarity: '英魂', bossSource: 4, icon: '🕰️', desc: '它的指針似乎永遠指向加班時間。', effects: { museum_bonus: { stamina: 0.015 } } },
    { id: 'BS404', name: '老闆的「辛苦了」', type: '蒐藏品', rarity: '英魂', bossSource: 4, icon: '💬', desc: '一句輕飄飄的問候，但你寧願他給你加薪。', effects: { museum_bonus: { intelligence: 0.02 } } },
    { id: 'BS405', name: '畫餅專用白板筆', type: '蒐藏品', rarity: '傳頌', bossSource: 4, icon: '🖌️', desc: '魔王用來描繪公司宏偉藍圖的筆，但從未實現。', effects: { museum_bonus: { strength: 0.025 } } },
    { id: 'BS406', name: '團隊精神緊箍咒', type: '蒐藏品', rarity: '傳頌', bossSource: 4, icon: '⛓️', desc: '一個無形的枷鎖，在你想要準時下班時就會收緊。', effects: { museum_bonus: { luck: 0.03 } } },
    { id: 'BS009', name: '無盡的會議邀請函', type: '蒐藏品', rarity: '永恆', bossSource: 4, icon: '📅', desc: '一個循環的會議邀請，據說它的終點是世界的盡頭。', effects: { museum_bonus: { intelligence: 0.05 } } },
    { id: 'BS407', name: '賣身契（員工合約）', type: '蒐藏品', rarity: '永恆', bossSource: 4, icon: '📜', desc: '一份看起來很正常，但細思極恐的合約。', effects: { museum_bonus: { stamina: 0.06 } } },
    { id: 'BS004', name: '壓榨員工的KPI', type: '蒐藏品', rarity: '神諭', bossSource: 4, icon: '📉', desc: '一份不可能達成的業績目標，是魔王力量的泉源。', effects: { museum_bonus: { intelligence: 0.1 } } },

    // --- Boss 5: 喜歡到處亂發射核彈的火龍 ---
    { id: 'BS501', name: '被烤熱的龍鱗', type: '蒐藏品', rarity: '凡器', bossSource: 5, icon: '🔥', desc: '一片還帶著餘溫的鱗片，很適合當作冬天的暖暖包。', effects: { museum_bonus: { stamina: 0.005 } } },
    { id: 'BS502', name: '發射井的防塵蓋', type: '蒐藏品', rarity: '凡器', bossSource: 5, icon: '⚙️', desc: '一個看起來很重要的蓋子，但龍好像從來沒蓋上過。', effects: { museum_bonus: { agility: 0.005 } } },
    { id: 'BS503', name: '輻射警告標誌', type: '蒐藏品', rarity: '英魂', bossSource: 5, icon: '☢️', desc: '一個燒得焦黑的警告牌，提醒你此處龍出沒。', effects: { museum_bonus: { strength: 0.015 } } },
    { id: 'BS504', name: '龍息辣椒醬', type: '蒐藏品', rarity: '英魂', bossSource: 5, icon: '🌶️', desc: '火龍最愛的調味料，據說一滴就能點燃你的靈魂。', effects: { museum_bonus: { agility: 0.02 } } },
    { id: 'BS010', name: '核彈發射井鑰匙', type: '蒐藏品', rarity: '傳頌', bossSource: 5, icon: '🔑', desc: '一把沉重的鑰匙，似乎能開啟毀滅世界的力量...或是火龍的儲藏室。', effects: { museum_bonus: { strength: 0.05, luck: 0.05 } } },
    { id: 'BS505', name: '龍之焰打火機', type: '蒐藏品', rarity: '傳頌', bossSource: 5, icon: '🔥', desc: '點火時會發出小小的爆炸聲，非常引人注目。', effects: { museum_bonus: { strength: 0.03 } } },
    { id: 'BS506', name: '發光的冷卻液', type: '蒐藏品', rarity: '傳頌', bossSource: 5, icon: '🧪', desc: '一種會發出詭異綠光的液體，喝起來像螢光色的西瓜汽水。', effects: { museum_bonus: { stamina: 0.03 } } },
    { id: 'BS507', name: '微型核融合反應爐', type: '蒐藏品', rarity: '永恆', bossSource: 5, icon: '⚛️', desc: '一個精緻的模型，會發出無害的綠光，是個不錯的床頭夜燈。', effects: { museum_bonus: { intelligence: 0.04, strength: 0.02 } } },
    { id: 'BS508', name: '龍巢穴的地契', type: '蒐藏品', rarity: '永恆', bossSource: 5, icon: '🗺️', desc: '一張古老的羊皮紙，上面標示著火龍的巢穴，旁邊還有房貸資訊。', effects: { museum_bonus: { luck: 0.06 } } },
    { id: 'BS005', name: '火龍的紅色按鈕', type: '蒐藏品', rarity: '神諭', bossSource: 5, icon: '🔴', desc: '一個寫著「DO NOT PRESS」的紅色按鈕，但你還是忍不住想按。', effects: { museum_bonus: { strength: 0.1, luck: -0.05 } } },
    { id: 'BS509', name: '世界重啟之鑰', type: '蒐藏品', rarity: '神諭', bossSource: 5, icon: '🔄', desc: '一個比核彈按鈕更大的開關，火龍自己也不知道扳下去會發生什麼。', effects: { museum_bonus: { strength: 0.05, agility: 0.05, luck: 0.05 } } },       
];