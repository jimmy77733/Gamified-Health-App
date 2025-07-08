        // 程式碼功能說明: BOSS 階段設定檔
        // 定義了所有BOSS的階段、名稱、血量、圖示和獎勵。
        export  const bossStages = [
                { stage: 1, name: '想不出午餐吃甚麼的哥布林', hp: 30000, icon: '🧌', quote: "午餐...選擇困難...",  rewardCount: 3 },
                { stage: 2, name: '愛把超商雞胸肉買光的半獸人', hp: 50000, icon: '🧑🏾‍🌾', quote: "我...我的...我的蛋白質!!!", rewardCount: 3 },
                { stage: 3, name: '無法完成上司交代專案的風精靈', hp: 100000, icon: '🧚🏻', quote: "上班...好可怕..想回家...",  rewardCount: 3 },
                { stage: 4, name: '整天壓榨員工的魔王', hp: 200000, icon: '🧛🏼', quote: "你們的肝是我的！揮灑你們的血與汗八!!!", rewardCount: 3 },
                { stage: 5, name: '喜歡到處亂發射核彈的火龍', hp: 250000, icon: '🐲', quote: "BOOM！藝術！",  rewardCount: 3 }
            ];

            // 程式碼功能說明: BOSS 戰利品稀有度設定檔
        export  const bossRarityConfig = {
                '凡器': { name: '凡器', color: 'var(--rarity-boss-common)', class: 'rarity-boss-common' },
                '英魂': { name: '英魂', color: 'var(--rarity-boss-uncommon)', class: 'rarity-boss-uncommon' },
                '傳頌': { name: '傳頌', color: 'var(--rarity-boss-rare)', class: 'rarity-boss-rare' },
                '永恆': { name: '永恆', color: 'var(--rarity-boss-epic)', class: 'rarity-boss-epic' },
                '神諭': { name: '神諭', color: 'var(--rarity-boss-legendary)', class: 'rarity-boss-legendary' },
            };

        export  const bossLootDropRates = {
                1: { '凡器': 65, '英魂': 20, '傳頌': 10, '永恆': 4.5, '神諭': 0.5 },
                2: { '凡器': 30, '英魂': 40, '傳頌': 20, '永恆': 9,   '神諭': 1 },
                3: { '凡器': 15, '英魂': 45, '傳頌': 25, '永恆': 12,  '神諭': 3 },
                4: { '凡器': 10, '英魂': 35, '傳頌': 30, '永恆': 20,  '神諭': 5 },
                5: { '凡器': 5,  '英魂': 20, '傳頌': 35, '永恆': 30,  '神諭': 10 }
            };