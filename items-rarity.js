        // 程式碼功能說明: 稀有度設定檔
        // 定義了所有道具稀有度的名稱、顏色和CSS class，方便統一管理。
        export const rarityConfig = {
            Ferrum: { name: '凡鐵', color: 'var(--rarity-ferrum)', class: 'rarity-ferrum' },
            Fulmen: { name: '森輝', color: 'var(--rarity-fulmen)', class: 'rarity-fulmen' },
            Scintilla: { name: '星芒', color: 'var(--rarity-scintilla)', class: 'rarity-scintilla' },
            Luna: { name: '月燦', color: 'var(--rarity-luna)', class: 'rarity-luna' },
            Sol: { name: '日冕', color: 'var(--rarity-sol)', class: 'rarity-sol' },
            Stella: { name: '星皇', color: 'var(--rarity-stella)', class: 'rarity-stella' },
            Caelum: { name: '嵐皇', color: 'var(--rarity-caelum)', class: 'rarity-caelum' },
            Divum: { name: '神耀', color: 'var(--rarity-divum)', class: 'rarity-divum' },
        };

        export const bossRarityConfig = {
            '凡器': { name: '凡器', color: 'var(--rarity-boss-common)', class: 'rarity-boss-common' },
            '英魂': { name: '英魂', color: 'var(--rarity-boss-uncommon)', class: 'rarity-boss-uncommon' },
            '傳頌': { name: '傳頌', color: 'var(--rarity-boss-rare)', class: 'rarity-boss-rare' },
            '永恆': { name: '永恆', color: 'var(--rarity-boss-epic)', class: 'rarity-boss-epic' },
            '神諭': { name: '神諭', color: 'var(--rarity-boss-legendary)', class: 'rarity-boss-legendary' },
        };