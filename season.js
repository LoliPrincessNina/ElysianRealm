export const seasons = [
    {
        "name": "往世樂土",
        "chapters": [
            {
                "code": "info_chapter_placeholder",
                "name": "",
                "open": false,
                "description": [],
                "missions": [
                    {
                        "code": "info_mission_placeholder",
                        "name": "",
                        "open": false,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": []
                    }
                ]
            },
            {
                "code": "singleplayer_fairy",
                "name": "單人練習",
                "open": true,
                "badgeCodes": [
                    "fairy_elite_arena",
                    "fairy_elite_ammo",
                    "fairy_elite_blade",
                    "fairy_elite_kongfu",
                    "fairy_elite_survive",
                    "fairy_elite_slaughter",
                    "fairy_elite_flag",
                    "fairy_elite_zombie"
                ],
                "description": [
                    "玩家在熟悉光暈的戰鬥方式前，能在單人練習模式中磨練你的戰技。模式中有AI充當對手，也有AI戰友與你一同戰鬥，幫助你體驗多人對戰時的戰況。",
                    "此模式提供玩家許多不同玩法的挑戰，每種玩法分三個等級。你需要循序漸進，攻破最後的精英挑戰。",
                    "在單人練習中雖然無法獲得陣營聲望，但能以較穩定的方式賺取光暈幣。",
                    "※一般對戰可使用的武器(如迴旋標、冰劍等)都可以在單人練習模式中使用。"
                ],
                "missions": [
                    {
                        "code": "info_singleplayer_battle_simulation",
                        "name": "⚔️ 對戰模擬",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "必須殲滅所有標示為「敵人」的角色才算過關。",
                            "<font color=pink>花靈宮</font>的敵人為 <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font>、<font color=lime>盜賊幫</font>以及<font color=magenta>無魂軍</font>。"
                        ]
                    },
                    {
                        "code": "battle_simulation_practice",
                        "name": "練習",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/singleplayer/battle_simulation/battle_simulation_practice.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 2</font> / <font color=red>× 2</font> / <font color=orange>× 2</font> / <font color=lime>× 2</font> / <font color=magenta>× 2</font>",
                            "敵方血量：100%",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "battle_simulation_challenge",
                        "name": "挑戰",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "battle_simulation_practice"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/battle_simulation/battle_simulation_challenge.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 6</font> / <font color=red>× 6</font> / <font color=orange>× 6</font> / <font color=lime>× 6</font> / <font color=magenta>× 6</font>",
                            "敵方血量：100%",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "battle_simulation_beyond",
                        "name": "超越",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "battle_simulation_challenge"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/battle_simulation/battle_simulation_beyond.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>×10</font> / <font color=red>×10</font> / <font color=orange>×10</font> / <font color=lime>×10</font> / <font color=magenta>×10</font>",
                            "敵方血量：100%",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_singleplayer_bullet_hell",
                        "name": "🏹 槍林彈雨",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "必須殲滅所有標示為「敵人」的角色才算過關。",
                            "所有角色會獲得一層受近戰攻擊無效並等額反傷的永久護盾。",
                            "AI角色會暫時無視陣營仇恨，並以玩家作為第一攻擊目標。",
                            "根據難度會對關卡作出不同的限制，同時敵人的基礎血量會依難度增加。"
                        ]
                    },
                    {
                        "code": "bullet_hell_practice",
                        "name": "練習",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/singleplayer/bullet_hell/bullet_hell_practice.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 2</font> / <font color=red>× 2</font> / <font color=orange>× 2</font> / <font color=lime>× 2</font> / <font color=magenta>× 2</font>",
                            "敵方血量：105%",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "bullet_hell_challenge",
                        "name": "挑戰",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "bullet_hell_practice"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/bullet_hell/bullet_hell_challenge.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 3</font> / <font color=red>× 3</font> / <font color=orange>× 3</font> / <font color=lime>× 3</font> / <font color=magenta>× 3</font>",
                            "敵方血量：125%",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "bullet_hell_beyond",
                        "name": "超越",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "bullet_hell_challenge"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/bullet_hell/bullet_hell_beyond.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 4</font> / <font color=red>× 4</font> / <font color=orange>× 4</font> / <font color=lime>× 4</font> / <font color=magenta>× 4</font>",
                            "敵方血量：150%",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_singleplayer_flawless_blade",
                        "name": "🗡️ 刀光劍影",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "必須殲滅所有標示為「敵人」的角色才算過關。",
                            "只能使用近戰武器攻擊，任意角色造成擊殺後會恢復所有真氣。",
                            "AI角色會暫時無視陣營仇恨，並以玩家作為第一攻擊目標。",
                            "根據難度會對關卡作出不同的限制，同時敵人的基礎血量會依難度增加。"
                        ]
                    },
                    {
                        "code": "flawless_blade_practice",
                        "name": "練習",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/singleplayer/flawless_blade/flawless_blade_practice.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 1</font> / <font color=red>× 1</font> / <font color=orange>× 1</font> / <font color=lime>× 1</font> / <font color=magenta>× 1</font>",
                            "敵方血量：150%",
                            "商店道具：限用非武器類、近戰武器類",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "flawless_blade_challenge",
                        "name": "挑戰",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "flawless_blade_practice"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/flawless_blade/flawless_blade_challenge.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 2</font> / <font color=red>× 2</font> / <font color=orange>× 2</font> / <font color=lime>× 2</font> / <font color=magenta>× 2</font>",
                            "敵方血量：250%",
                            "商店道具：限用非武器類、近戰武器類",
                            "地圖限制：移除所有可推石塊",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "flawless_blade_beyond",
                        "name": "超越",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "flawless_blade_challenge"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/flawless_blade/flawless_blade_beyond.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 2</font> / <font color=red>× 2</font> / <font color=orange>× 2</font> / <font color=lime>× 2</font> / <font color=magenta>× 2</font>",
                            "敵方血量：400%",
                            "商店道具：限用非武器類",
                            "地圖限制：移除所有可推石塊、移除所有商店武器",
                            "禁用技能：花影迷蹤",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_singleplayer_kongfu_practice",
                        "name": "✊🏻 武道修行",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "必須殲滅所有標示為「敵人」的角色才算過關。",
                            "只能使用拳頭類武器及光暈拳譜上的功夫攻擊。",
                            "AI角色會暫時無視陣營仇恨，並以玩家作為第一攻擊目標。",
                            "戰場上所有武器將被移除，且玩家預設武器將被變更為雙手拳頭。",
                            "玩家可能需要自備光暈拳譜、火焰戒指、闇銀指虎等。"
                        ]
                    },
                    {
                        "code": "kongfu_practice_practice",
                        "name": "練習",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/singleplayer/kongfu_practice/kongfu_practice_practice.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 1</font> / <font color=red>× 1</font> / <font color=orange>× 1</font> / <font color=lime>× 1</font> / <font color=magenta>× 1</font>",
                            "敵方血量：100%",
                            "商店道具：限用非武器類、拳頭武器類",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "kongfu_practice_challenge",
                        "name": "挑戰",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "kongfu_practice_practice"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/kongfu_practice/kongfu_practice_challenge.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 2</font> / <font color=red>× 2</font> / <font color=orange>× 2</font> / <font color=lime>× 2</font> / <font color=magenta>× 2</font>",
                            "敵方血量：100%",
                            "商店道具：限用非武器類、拳頭武器類",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "kongfu_practice_beyond",
                        "name": "超越",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "kongfu_practice_challenge"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/kongfu_practice/kongfu_practice_beyond.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=gold>× 3</font> / <font color=red>× 3</font> / <font color=orange>× 3</font> / <font color=lime>× 3</font> / <font color=magenta>× 3</font>",
                            "敵方血量：100%",
                            "商店道具：限用非武器類、拳頭武器類",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_singleplayer_survival_mode",
                        "name": "⏳ 生存模式",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "只要時間倒計時結束時，你還活在戰場上就算過關。"
                        ]
                    },
                    {
                        "code": "survival_mode_practice",
                        "name": "練習",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/singleplayer/survival_mode/survival_mode_practice.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "友方數量：<font color=pink>× 15</font>",
                            "敵方血量：100%",
                            "關卡目標：存活2分鐘",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 存活至時間倒計時結束時 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "survival_mode_challenge",
                        "name": "挑戰",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "survival_mode_practice"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/survival_mode/survival_mode_challenge.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "友方數量：<font color=pink>× 12</font>",
                            "敵方血量：100%",
                            "關卡目標：存活4分鐘",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 存活至時間倒計時結束時 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "survival_mode_beyond",
                        "name": "超越",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "survival_mode_challenge"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/survival_mode/survival_mode_beyond.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "友方數量：<font color=pink>× 9</font>",
                            "敵方血量：100%",
                            "關卡目標：存活7分鐘",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 存活至時間倒計時結束時 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_singleplayer_slaughter_field",
                        "name": "🔪 殺戮戰場",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "在殺戮戰場上通盡情發揮你的戰鬥技巧擊殺敵人，並活到最後一秒鐘。",
                            "時間結束時的殺敵數必須超過最低門檻才算過關。"
                        ]
                    },
                    {
                        "code": "slaughter_field_practice",
                        "name": "練習",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/singleplayer/slaughter_field/slaughter_field_practice.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "友方數量：<font color=pink>× 15</font>",
                            "敵方血量：100%",
                            "關卡目標：存活3分鐘、至少擊殺5名敵人",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 存活至時間倒計時結束時 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 殺敵數未超過最低門檻 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "slaughter_field_challenge",
                        "name": "挑戰",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "slaughter_field_practice"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/slaughter_field/slaughter_field_challenge.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "友方數量：<font color=pink>× 12</font>",
                            "敵方血量：100%",
                            "關卡目標：存活4分鐘、至少擊殺8名敵人",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 存活至時間倒計時結束時 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 殺敵數未超過最低門檻 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "slaughter_field_beyond",
                        "name": "超越",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "slaughter_field_challenge"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/slaughter_field/slaughter_field_beyond.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "友方數量：<font color=pink>× 9</font>",
                            "敵方血量：100%",
                            "關卡目標：存活5分鐘、至少擊殺12名敵人",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 存活至時間倒計時結束時 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 殺敵數未超過最低門檻 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_singleplayer_flag_snatch",
                        "name": "🚩 搶旗模式",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "在地圖上找到插在地上的旗幟，並將旗幟搶回陣地。",
                            "地圖上會持續出現新的旗幟。",
                            "時間結束時搶回陣地的旗幟數量必須超過最低門檻才算過關。"
                        ]
                    },
                    {
                        "code": "flag_snatch_practice",
                        "name": "練習",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/singleplayer/flag_snatch/flag_snatch_practice.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "友方數量：<font color=pink>× 20</font>",
                            "敵方血量：100%",
                            "關卡目標：存活2分鐘、搶回至少5面旗幟",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 存活至時間倒計時結束時 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 搶回陣地的旗幟數量未超過最低門檻 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "flag_snatch_challenge",
                        "name": "挑戰",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "flag_snatch_practice"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/flag_snatch/flag_snatch_challenge.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "友方數量：<font color=pink>× 20</font>",
                            "敵方血量：100%",
                            "關卡目標：存活4分鐘、搶回至少10面旗幟",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 存活至時間倒計時結束時 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 搶回陣地的旗幟數量未超過最低門檻 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "flag_snatch_beyond",
                        "name": "超越",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "flag_snatch_challenge"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/flag_snatch/flag_snatch_beyond.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "友方數量：<font color=pink>× 20</font>",
                            "敵方血量：100%",
                            "關卡目標：存活6分鐘、搶回至少15面旗幟",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 存活至時間倒計時結束時 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 搶回陣地的旗幟數量未超過最低門檻 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_singleplayer_zombie_invasion",
                        "name": "🌘 殭屍來襲",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "在地圖上放置守軍協助你阻止殭屍的攻勢並保護四位村民見到第十天的陽光。",
                            "　",
                            "基本規則：",
                            "<ul><li>白天行動正常、但夜晚行動力會大大降低。</li><li>殭屍只會在夜晚出現，射殺後可賺取金幣以僱用槍手。</li><li>受僱的槍手們會在定點對射程內的殭屍們進行攻擊。</li><li>玩家的預設武器為沒有攻擊力的拳頭。</li><li>限制可使用的商店道具種類(僅非武器類道具可用)。</li><li>可拾取僱槍手死亡後留下來的武器。</li><li>村民全滅則任務失敗。</li><li>每天天亮時，所有生還者可獲注射一劑回魂生血劑。</li><li>此模式下的殭屍不會自動加血，並能以一般攻擊予以消滅。</li></ul>"
                        ]
                    },
                    {
                        "code": "zombie_invasion_practice",
                        "name": "練習",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/singleplayer/zombie_invasion/zombie_invasion_practice.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=green>×10</font> / <font color=green>×17</font> / <font color=green>×31</font> / <font color=green>×40</font> / <font color=green>×50</font> / <font color=green>×64</font> / <font color=green>×73</font> / <font color=green>×88</font> / <font color=green>×112</font>",
                            "商店道具：限用非武器類",
                            "地圖限制：移除所有武器",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 見到第十天的陽光 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 村民全滅 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_invasion_challenge",
                        "name": "挑戰",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_invasion_practice"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/zombie_invasion/zombie_invasion_challenge.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=green>×15</font> / <font color=green>×27</font> / <font color=green>×49</font> / <font color=green>×63</font> / <font color=green>×92</font> / <font color=green>×125</font> / <font color=green>×155</font> / <font color=green>×184</font> / <font color=green>×233</font>",
                            "商店道具：限用非武器類",
                            "地圖限制：移除所有武器",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 見到第十天的陽光 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 村民全滅 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_invasion_beyond",
                        "name": "超越",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_invasion_challenge"
                        },
                        "file": "CG.FlowerFairyPalace/singleplayer/zombie_invasion/zombie_invasion_beyond.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "敵方數量：<font color=green>×20</font> / <font color=green>×37</font> / <font color=green>×54</font> / <font color=green>×91</font> / <font color=green>×117</font> / <font color=green>×173</font> / <font color=green>×223</font> / <font color=green>×276</font> / <font color=green>×354</font>",
                            "商店道具：限用非武器類",
                            "地圖限制：移除所有武器",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 見到第十天的陽光 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 村民全滅 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_singleplayer_debug",
                        "name": "🗺️ 地圖探索",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/singleplayer/singleplayer_test.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "僅供地圖參觀，無實際內容。",
                            "此處可供遊玩天啟事件。",
                            "　",
                            "以下是在單人練習中支援的地圖。",
                            "　",
                            "來自 TwilightWars (小哈片刻)：",
                            "<ul><li>長平古戰場</li><li>阿茲提克廢墟</li><li>血污小徑</li><li>科羅密尼洛城</li><li>但丁小屋</li><li>旱漠高原</li><li>迪拉克農場</li><li>火龍巢穴</li><li>地球復原組織研究所</li><li>地球復原組織東大陸分部</li><li>艾爾瑪村</li><li>費加洛荒城</li><li>銀杏小園</li><li>南極冰環島</li><li>熊湖城</li><li>北極大裂口</li><li>浣熊村</li><li>羅摩長堤</li><li>拉亞爾廢墟</li><li>紅河三角洲</li><li>紅河密林</li><li>羅德島審判大廳</li><li>光印操練室</li><li>阿莫可祭壇</li><li>多隆雙城</li><li>傭兵團第二野戰區</li><li>索爾之門</li><li>桑達斯遺跡</li><li>尤雅娜都</li><li>札伊兒支流</li></ul>",
                            "來自 FlowerFairyPalace (桜璃奈)：",
                            "<ul><li>上古封印之地</li><li>梵天盜賊團巢穴</li><li>帝都競技場</li><li>默輝山脈</li><li>黃昏小屋</li><li>歌德邊境</li><li>璃谷</li><li>迷途沼澤</li><li>法爾特小型市集</li></ul>",
                            "來自 a000001 (阝千翎) ：",
                            "<ul><li>谷見島港口倉庫</li><li>溫莎古堡</li></ul>",
                            "來自 thief-mission (H.T) ：",
                            "<ul><li>艾爾瑪谷</li><li>北鄙礦場</li><li>景陽莊</li><li>四季小屋(夏、秋、冬)</li><li>唐古拉山麓</li></ul>",
                            "來自 testella (R.I) ：",
                            "<ul><li>黃河聚落</li><li>濁清港</li></ul>",
                            "來自 zombies-legion & twilight-new-era (ĄŊʏᴇᴇᴇᴇᴇɴ) ：",
                            "<ul><li>翠凌村</li><li>赫斯頓研究所</li><li>戰壕雙城</li><li>納斯卡城</li><li>納斯卡村</li><li>煉獄修羅場</li><li>紅河流域</li><li>日光河谷</li><li>盜賊巢穴深處</li></ul>",
                            "來自 mechanoids (Kii)",
                            "<ul><li>奧古斯堡</li><li>卡尼略驛站</li><li>鷹巢山脈</li><li>魔造機兵收容站</li><li>聖巴托洛教堂</li></ul>",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 自由探索地圖 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "biography",
                "name": "人物傳記",
                "open": true,
                "description": [
                    "時光的角落裡，藏著未被訴說的故事。",
                    "這些篇章，記錄了英雄們在鎂光燈照不到的陰影處，",
                    "那些沉默的抉擇、無人知曉的犧牲、與內心深處的對話。",
                    "這裡沒有史詩戰役的喧囂，只有靈魂的真實樣貌，",
                    "以及……那些被刻意遺忘，卻決定了命運走向的瞬間。",
                    "當你讀懂這些沉默，便讀懂了他們的一生。"
                ],
                "missions": [
                    {
                        "code": "info_biography_kanetsugu",
                        "name": "💉 本川兼次",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "想在傭兵團裡追求權力與地位的最有效方法無疑是讓上位者看到你的智慧，或者實力。",
                            "除開「勝者為王」的準則之外，進入抹殺者的行列，無疑是最快的捷徑。",
                            "不過作為新進傭兵團的毛頭小子，直接跳過傭兵團資格戰，直接挑戰抹殺者資格戰，還是有點有太超過了。",
                            "這時候的本川，被作為引路人的九手評價為「妄尊自大」、「不知所謂」。"
                        ]
                    },
                    {
                        "code": "biography_kanetsugu_1",
                        "name": "紫雲嶺",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/biography/kanetsugu/biography_kanetsugu_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "這次本川比較走運，接到的是一個送信任務—除開這山上有帝國軍新近研發出來的智械兵團守護著。",
                            "要怎麼毀壞掉這堆魔造機兵、或者避開他們的機械眼睛，是一個大問題。",
                            "　",
                            "任務等級：S",
                            "紫雲嶺是一條分佈於日光地的崎嶇山脈。",
                            "無法收入手下掌管的紫雲嶺一直是傭兵團的煩惱，因為這將極大地阻礙傭兵團之間的通訊往來。",
                            "傭兵團給你任務就是找出任何方法，穿過紫雲嶺，去到紫雲嶺另一邊的八手吉娜駐地的之一，把這封信交給在此陣地駐守八手副手—紋。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找穿越紫雲嶺的方法 </td></tr> <tr><th> 參與陣營 </th><td> <font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "fanissions",
                "name": "靈感迴廊",
                "open": true,
                "badgeCodes": [
                    "fanissions_riurivalley",
                    "fanissions_astraeafortress",
                    "fanissions_soulcatcher",
                    "minigames_zombieapocalypse",
                    "minigames_zombieapocalypse_month",
                    "minigames_zombieapocalypse_rage",
                    "minigames_zombieapocalypse_zomboss",
                    "minigames_unwelcomeschool"
                ],
                "description": [
                    "這裡收藏著靈感閃現的瞬間。",
                    "漫步於此並見證想法的萌芽與綻放吧。"
                ],
                "missions": [
                    {
                        "code": "atlantisaction",
                        "name": "亞特蘭提斯",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/atlantisaction.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "古城—亞特蘭提斯。一座傳說中的水底城市。",
                            "為何突然浮上水面的原因不明，但這或許藏有古代遺跡和寶藏的古城已經被帝國先一步佔領了。",
                            "作為傭兵團的一份子，請跟隨你們的上級一起進攻，擊敗帝國軍隊。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 進入亞特蘭提斯 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 隨緣陣亡<br>茶茶陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "aurorapolaris",
                        "name": "破曉夕曦",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/aurorapolaris.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "歐若拉是一位美麗的女神。作為【曙光女神】，她掌管晨光，代表旭日东升前的黎明。",
                            "每天早晨时分，她都會飞向天空，向大地宣布黎明的来臨。",
                            "　",
                            "然而，有一天，這一切突然被歐若拉的妹妹，【月亮女神】露娜，奪走了。",
                            "【惡作劇之神】洛基，在一次實驗失誤之下，將裝有一種他打算放到凡間的病毒，「緋」，的瓶子打翻到了地上。",
                            "恰巧來到此處拜訪的露娜因而染上了。",
                            "發狂的露娜不知道為什麼，突然闖入了【極光虛境】，把歐若拉趕了出來。",
                            "失去主控權的歐若拉失去了神職，神力無以為繼。",
                            "在【眾神之父】奧丁的引導下，歐若拉來到了凡間召集了數名勇士，協助歐若拉取回極光虛境。",
                            "　",
                            "要取回極光虛境，便得深入到虛境的最深處，「曙光」，打敗發狂的露娜。",
                            "洛基雖然已經成功配制解藥，但發狂的露娜是不可能願意服下的，只得先將她打暈。",
                            "洛基還發現，他領下的一片凍土，大量埋藏於此的大體都神奇消失了。",
                            "不用多說，這些大體已然復活，成為如今極光虛境的守衛了。",
                            "在得到虛境的【晨曦祝福】後，這些守衛能夠短暫地擁有生前的實力。",
                            "　",
                            "花費了萬分功夫，歐若拉總算成功召集到勇士了。現在，便是帶領勇士前往極光虛境的時候了。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 奪回極光虛境 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "besiegingcity",
                        "name": "圍城之危",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/besiegingcity.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "烽火連天，孤城告急！敵軍如潮水般從四面八方湧來，",
                            "城牆搖搖欲墜，守軍傷亡慘重，最後的希望繫於此戰。",
                            "這不僅是城池的保衛戰，更是你們的存亡之戰！",
                            "在絕境中殺出一條血路，為了榮耀，為了生存！",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 奪回城池 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "celebritiesduel",
                        "name": "人物挑戰",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/celebritiesduel.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "直面傳奇，挑戰自我極限。",
                            "沒有取巧的餘地，唯有純粹的實力碰撞。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 完成人物挑戰 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "coastalbattle",
                        "name": "海岸激戰",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/coastalbattle.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "烈日下的金色沙灘已成血腥戰場！",
                            "幫會與帝國海軍為爭奪海岸控制權要地展開激烈交鋒。",
                            "海浪拍打著染血的岸邊，砲火轟鳴聲與刀劍碰撞聲交織成死亡交響曲。",
                            "這片海岸不僅是登陸點，更是通往秘寶的關鍵門戶！",
                            "為了幫會的榮耀，為了自由與財富，戰至最後一刻！",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 奪取海岸控制權 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "insidemyself",
                        "name": "雙生鏡域",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/insidemyself.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "當你凝視深淵，深淵也凝視著你。",
                            "此刻站在對面的，是最熟悉卻也最陌生的敵人——",
                            "鏡中的自己，擁有你的一切技巧與記憶，",
                            "卻懷抱著你從未察覺的陰暗與執念。",
                            "這是一場與內心陰影的終極對話，",
                            "唯有戰勝自我，方能破鏡而出，領悟真實。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗鏡像 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "loneranger",
                        "name": "獨行者",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/loneranger.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "帝國、議會及傭兵團的包圍網正在收緊，每個角落都潛藏著致命的危機。",
                            "沒有盟友可以依靠，沒有後援可以期待。",
                            "在這場一個人的戰爭中，你唯一的武器就是自己的意志。",
                            "突破重圍，證明孤狼也能在絕境中殺出屬於自己的道路！",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 逃離包圍網 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "prisonescape",
                        "name": "逃離監獄",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/prisonescape.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "你們是因冤枉而入獄的「罪犯」。",
                            "昨天，你們在守衛口中得知行刑之日將近，為了活著找出真相，你們只能被迫逃獄離開。",
                            "只是，你們該如何逃出這守衛森嚴的監獄呢？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 逃離監獄 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "radiantglory",
                        "name": "聖耀之戰",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/radiantglory.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "聖光與暗影在此刻激烈碰撞，世界的命運懸於一線！",
                            "小哈片刻，世界的造物主、如今的強敵，正以壓倒性的力量君臨戰場。",
                            "沒有退路，沒有妥協，此刻正是改寫歷史的關鍵時刻！集結所有力量只為這終極一戰。",
                            "讓聖耀之光驅散黑暗，為這個世界帶來最後的希望！",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗小哈片刻 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "rescueprincess",
                        "name": "拯救公主",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/rescueprincess.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "緊急情況：熒縈公主在幽幻谷附近遭遇伏擊，現已失聯！",
                            "皇室發出最高懸賞令，目標只有一個——不惜一切代價救回公主！",
                            "幽幻谷地形險惡，敵軍佈防嚴密，時間就是生命。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 拯救熒縈公主 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 熒縈公主陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "riurivalley",
                        "name": "璃谷",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/riurivalley.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "『璃谷』內似乎出了異變。",
                            "多方勢力商量後，決定暫休爭鬥，聯合派出一支偵查隊伍查看情況。",
                            "而作為偵察隊的你，被派往璃谷。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 進入璃谷 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "soulcatcher",
                        "name": "勾魂索命",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/soulcatcher.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "你知道嗎，當有人嘗試復活人時，施術者將會被冥界標記，也許在什麼時候就在夢中將你的精魂氣魄全部勾走。",
                            "冥王只讓你成為活死人而不是墜入十八層地獄，已是最大的仁慈。",
                            "當然，要是你能成功活下來的話，那這次的罪孽就一筆勾消。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 魂來歸兮 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "crystalsaber",
                        "name": "霜刃征途",
                        "maxPlayers": 3,
                        "minPlayers": 3,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/crystalsaber.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "極北之境傳來遠古神器「冰劍」與「水晶弓」的召喚。",
                            "勇士們需攜手穿越永凍之地，解開冰封的古老秘密。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 探索永凍秘境 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 任一試煉者陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 3人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "totemstrial",
                        "name": "四象試煉",
                        "maxPlayers": 4,
                        "minPlayers": 4,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/totemstrial.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "傳說中的四象秘境再度開啟，勇士們需放下成見，同心協力通過試煉。",
                            "在此秘境中，不同陣營的能力將產生共鳴，創造出意想不到的戰術組合。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 探索四象秘境 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 任一試煉者陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "astraeafortress",
                        "name": "若涉渊冰",
                        "maxPlayers": 5,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/astraeafortress.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "『冰的光芒劃破黑暗、冰的溫度凍結生命、冰的劍刃左右世界』。",
                            "有關上古兵器冰劍的歌謠，傳說從此地產生。",
                            "取得冰劍真正力量的你們，決定探索阿斯特賴亞要塞，尋找更多有關於冰劍的秘密。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 探索阿斯特賴亞要塞 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-5人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "laststand",
                        "name": "最終防線",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/laststand.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "持續抵禦敵軍浪潮，挑戰你的戰略極限！",
                            "在這場永不停息的戰鬥中，堅守陣線直至最後一刻。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗至少五十名敵人 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "medicsecret",
                        "name": "藥劑的秘密",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/medicsecret.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "你收到了來自世界醫藥公司的委託：潛入保護傘公司，奪取美容藥劑的配方。",
                            "保護傘公司曾經聲稱他們擁有世界上最高級的防衛，能夠將任何入侵者一擊必殺。",
                            "這將會是一場惡戰。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 取得配方 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombieapocalypse",
                        "name": "亡城遊魂",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/zombieapocalypse.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "禁忌病毒因失誤而從實驗室中洩露，大量人們被轉化為殭屍。",
                            "末日降臨，四處皆成廢墟。",
                            "作為幸存者的你們，究竟還能堅持多久？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 存活至第十天天明 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "mazebreaker",
                        "name": "直與曲之迷宮",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/mazebreaker.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "傳說中能夠扭曲時空的古老迷宮再度開啟。",
                            "直線與曲徑在此交錯難辨，真實與虛幻的邊界變得模糊。",
                            "唯有洞察空間本質的冒險者，才能在這悖論之境中找到出路。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗迷宮之主 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "unwelcomeschool",
                        "name": "搶劫黑市銀行",
                        "maxPlayers": 6,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/fanissions/unwelcomeschool.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "對策委員會發現了她們辛苦打工替校還債的金錢全都流向了攻擊她們學校的團體手中。",
                            "在調查後發現，這家銀行是金錢流向的必經之地。不用多問，這家銀行必然是為黑色團體所操蹤的。",
                            "是時候將這些金錢奪回來了！",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 將資金劫走並全身而退 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-6人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "containfail4",
                        "name": "多出的一個...怪物☣? 4",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "【實驗室機密檔案 - 收容失效事件】",
                            "代號『怪物』異常實體已突破收容，設施進入緊急狀態！",
                            "倖存者請注意：你永遠無法確定身邊的同伴是否還是本人...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> <font color=red>🎭　怪物</font>：獨自存活至最後<br><font color=orange>🔪　殺手</font>：獨自存活至最後<br><font color=green>👥普通人</font>：消滅怪物後從大門撤離 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "mission_series",
                "name": "幻想篇章",
                "open": true,
                "badgeCodes": [],
                "description": [
                    "歡迎來到創意匯聚之地，這裡收錄了各種獨特構想的系列任務。",
                    "每個任務都是獨立世界，等待您探索其中的故事與挑戰。",
                    "無論是史詩冒險或趣味實驗，都能在此找到屬於您的精彩篇章。",
                    "準備好展開一場與眾不同的旅程了嗎？"
                ],
                "missions": [
                    {
                        "code": "info_series_snowrevenge",
                        "name": "🩸 血色之雪",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "天影議會為「雪影」下達了指令：進入白馬城，將城內的帝國生化人體研究所摧毀。",
                            "這種不人道的研究所自然會被天影議會所厭惡...",
                            "作為雪影的部下，你們必須跟隨雪影完成任務。"
                        ]
                    },
                    {
                        "code": "series_snowrevenge_1",
                        "name": "雪影夢",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/series/snowrevenge/series_snowrevenge_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "你似乎進入了雪影的夢境中...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 了解雪影的過去 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 雪影幻象被打散 </td></tr> <tr><th> 參與陣營 </th><td> <font color=red>天影十字軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_snowrevenge_2",
                        "name": "血染白馬城",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_snowrevenge_1"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/snowrevenge/series_snowrevenge_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "白馬城只是一座不起眼的小城，城防規模卻非比尋常...",
                            "你們提議使用影輕功潛入，卻發現雪影看著守衛們冒起了滔天的殺氣...",
                            "看來，白馬城將會被守衛們的血所染紅。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 進入研究所 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 雪影陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=red>天影十字軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_snowrevenge_3",
                        "name": "生化研究所",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_snowrevenge_2"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/snowrevenge/series_snowrevenge_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "進入了研究所，發現牆上所顯示的的資料一切正如情報所說。",
                            "清除於此的罪惡，為無辜者而戰！",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 繼續深入研究所 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 雪影陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=red>天影十字軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_snowrevenge_4",
                        "name": "深淵哀嚎",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_snowrevenge_3"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/snowrevenge/series_snowrevenge_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "來到了研究所底層的你們，聽見了一聲巨大的哀嚎...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗生化怪物 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 雪影陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=red>天影十字軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_snowrevenge_5",
                        "name": "密道撤離",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_snowrevenge_4"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/snowrevenge/series_snowrevenge_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "研究所的自毀裝置被啟動了，必需找到能離開研究所的方法。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 平安撤離研究所 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 雪影陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=red>天影十字軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_series_flashwing",
                        "name": "📁 閃翼檔案",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "帝國中央情報局得知天影議會指派了長老艾斯‧懷特前往格蘭威城，但更深入的資料難以得知。",
                            "格蘭威城只是一座普通小城，議會指派了一名長老前往，卻沒有進一步的資料，引起了帝國高層的注意。",
                            "帝國高層指派了妮娜‧米勒，帝國第五十騎士，前往格蘭威城一探究竟。"
                        ]
                    },
                    {
                        "code": "series_flashwing_1",
                        "name": "進入格蘭威城",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/series/flashwing/series_flashwing_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "格蘭威城，天影領地近邊境的一座小城。",
                            "環繞城外有一片小山脈，前往正門的道路非常難走。",
                            "妳決定從側門進入，這裡相較正門好走，而且此處有一座小村落，容易混入潛伏。",
                            "妳必須在不驚動天影和村民的情況下進入城內。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 潛入格蘭威城內部 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 天影入城通報<br>誤傷平民 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_flashwing_2",
                        "name": "城中秘聞",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_flashwing_1"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/flashwing/series_flashwing_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "成功潛入城內之後，妳的下一步任務便是嘗試得知議會派遣長老前往此處的原因。",
                            "雖然城中的守衛可能知道情況，但顯然去問守衛有些不現實。",
                            "然而，無法詢問守衛，卻也擋不住城中民眾的好奇心...",
                            "妳必須在城中居民口中得知議會長老來此的原因。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 獲取情報 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 誤傷平民 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_flashwing_3",
                        "name": "森林蟲蹤",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_flashwing_2"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/flashwing/series_flashwing_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "從居民口中得知城外的森林似乎出現了『屍血蟲』，可能是天影議會指派長老來此地的原因。",
                            "妳確定前往森林查看。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找屍血蟲 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_flashwing_4",
                        "name": "逃生驚魂",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_flashwing_3"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/flashwing/series_flashwing_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "卑鄙的天影小人釋放神經麻痹的毒氣將妳生擒。",
                            "妳醒來之後發現自己正處於一座囚房之中，而禍首就在妳眼前...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 逃出生天 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_flashwing_5",
                        "name": "最終信號",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_flashwing_4"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/flashwing/series_flashwing_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "從長老艾斯口中得知這次行動是為了吸引帝國目光而特設的一場戲。",
                            "面對越來越多的追兵，妳真的能活著向帝國報信嗎？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 逃生並向帝國報信 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_series_angelhealer",
                        "name": "💖 小醫仙的願望",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "小醫仙是最近新進傭兵團的醫生。",
                            "她妙手回春的醫術和友善的性格為她帶來了大家的喜愛。",
                            "雖然沒人知道她的名字，但大家總會親切地稱呼她為小醫仙。",
                            "　",
                            "然而，溫柔可人的小醫仙在最近一次外出為平民治療時，她所在的村子被盜賊團襲擊，一旁護衛的傭兵被全數殲滅。",
                            "村民趕到傭兵團求助時已經是兩天後了。",
                            "根據線報，擄走小醫仙的盜賊團歸屬於托馬斯營地。",
                            "為免打草驚蛇，傭兵團已能先將營地外圍包圍，只待一兩好手潛入營救後再殲滅營地的盜賊。",
                            "你的任務便是從中營救小醫仙。"
                        ]
                    },
                    {
                        "code": "series_angelhealer_1",
                        "name": "托馬斯營地",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/series/angelhealer/series_angelhealer_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "托馬斯營地是一處較大的盜賊營地。",
                            "你必須悄聲無息地營救小醫仙，並護送到傭兵團處。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 營救小醫仙 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 小醫仙陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_angelhealer_2",
                        "name": "村莊遊擊戰",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_angelhealer_1"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/angelhealer/series_angelhealer_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "天色已晚，你只得先帶小醫仙回到村莊暫時休息。",
                            "不料，到達時才驚覺村莊被帝國軍占領了。",
                            "幸好，村莊並未見有屍橫遍野的境況，村民們和守村傭兵應該是安全撤離了。",
                            "但是，正當你想離開之際...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 奪回村莊 </td></tr> <tr><th> 參與陣營 </th><td> <font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_angelhealer_3",
                        "name": "帝國包圍網",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_angelhealer_2"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/angelhealer/series_angelhealer_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "雖然在村莊中有驚無險，然而，帝國卻早已悄無聲息地包圍了整個村莊。",
                            "你經歷了這麼多戰鬥早已疲累不堪。",
                            "在村子裡休息過後，卻才驚現一切已經太遲了...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 死戰至最後一刻 </td></tr> <tr><th> 參與陣營 </th><td> <font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_angelhealer_4",
                        "name": "最後的委託",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_angelhealer_3"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/angelhealer/series_angelhealer_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "面對越來越多的追兵，你快不支倒下了...",
                            "這時候，小醫仙向你委託了最後一個任務：活下去。",
                            "說罷，她便用了身上最後的靈力為你們治療。",
                            "不能辜負小醫仙的期紛，你必需活著離開包圍網。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 逃離帝國包圍網 </td></tr> <tr><th> 參與陣營 </th><td> <font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_angelhealer_5",
                        "name": "隱居的願望",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_angelhealer_4"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/angelhealer/series_angelhealer_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "你千辛萬苦脫離了包圍網，只見突然一陣光芒出現...",
                            "一抺倩影渾身帶血的倒在了你眼前。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 帶小醫仙離開 </td></tr> <tr><th> 參與陣營 </th><td> <font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_series_vigil",
                        "name": "🌈 守望者",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "【守望者】是一個獨立大勢力。",
                            "他們隱流於人跡罕至的之地，彷彿他們的存在於世人而言只是一段傳說。",
                            "其他大勢力會交託己方勢力不便於出手的任務給予守望者。",
                            "守望者自創辦以來一直『掃除黑暗』為宗旨執行任務，且在任務完成時僅留下委託方勢力之名。",
                            "因此，守望者得以與各方勢力相互友善而繫。",
                            "　",
                            "在內部，守望者依實力分為五等：『極』、『字』、『寧』、『夫』、『卒』，其中又以『極』為佼佼者。",
                            "在此之上，守望者又五名最強大的『極』擔任『持戒者』。",
                            "『持戒者』共分五種顏色：黃色、紫色、粉色、綠色、藍色，各自率領一部門，各司其職。",
                            "黃戒主管財務；紫戒主管情報與通訊；粉戒主管醫療與後勤；綠戒負責於各個勢力中接取任務；藍戒負責分發所接取的任務。",
                            "　",
                            "儘管多數任務僅需派遣『夫』『卒』即可完成。",
                            "然而世事難料。近年來，各大勢力戰爭不斷，自各大勢力所接收的任務愈加繁重。",
                            "鑑於人力的折損，近來多得由『極』甚至需要數名出動才能完成任務。",
                            "　",
                            "『持戒者』紫推測，近日越發難而順行的委託似乎與『龍殤之地』有所關連。",
                            "各大勢力在此碰壁又折損不少高端戰力後，不得已只能向【守望者】求助。",
                            "前往龍殤之地的守望者，包括了數名『極』，於進入『龍殤之地』後都失聯了，這讓五位持戒者大受驚訝。"
                        ]
                    },
                    {
                        "code": "series_vigil_1",
                        "name": "龍殤之地",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/series/vigil/series_vigil_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "『龍殤之地』，因從日光地轉為黑暗地時，附近村民聽見有似龍哀號之聲而得名。",
                            "具體是否有龍曾經殞落與否不為人知，但有一點卻是為世人所知：踏入此地者，有去無回。",
                            "　",
                            "守望者的情報顯示，此地山勢險要，於最外圈駐守著一支不明軍隊。",
                            "他們似乎對於外人的到來沒有反應，只會因被動反擊而攻擊。",
                            "然而，近日這支軍隊卻像發瘋一樣，攻擊並殺死任何敢入警戒區的生物，甚至於連蚊子與蒼蠅等小昆蟲也不放過。",
                            "折損了這麼多人手，『持戒者』也不得不出動執行這棘手的任務了。",
                            "目前，僅有『持戒者』粉最接近龍殤之地。",
                            "『持戒者』粉，即奧莉薇雅·阿爾弗雷德(Olivia Alfred)，在守望者中最為精通治療與補給。",
                            "實力不俗，也是為數不多能將體內靈氣轉化成不同陣營的人，是一個棘手的戰鬥對象。",
                            "……",
                            "妳到達現場時，發現這支不明軍隊正在向外擴散警戒線。為了周邊平民的安全，妳也沒法拿取太多的補給，只得先行趕往龍殤之地清除這支不明軍隊了。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅不明軍隊 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_vigil_2",
                        "name": "黃昏女神教",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_vigil_1"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/vigil/series_vigil_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "眼前的與你鏡像一般的不明女士把你邀請進了一所神秘基地。",
                            "神秘基地看起來像是一所實驗室，以及宗教場所的結合產物。",
                            "妳對她所節選的家族秘言不解，因為這絕不可能流傳於世。",
                            "妳心中只得期紛，兄長前來救場，以及她口中『那位大人』的解釋。",
                            "隨著深入，妳心中的不安感越來越強烈。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 與『那位大人』對話 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_vigil_3",
                        "name": "禁忌實驗",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_vigil_2"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/vigil/series_vigil_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "實驗室的真相終於揭曉——黃昏女神教正在進行一項足以顛覆世界的禁忌實驗。",
                            "他們企圖利用龍殤之地的神秘能量，創造出能夠掌控時間與空間的終極兵器。",
                            "而這一切的關鍵，竟然與你血脈相連...",
                            "實驗已進入最後階段，必須在儀式完成前阻止這場災難。",
                            "每一秒的遲疑，都可能讓世界陷入萬劫不復的深淵。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 阻止實驗進行 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 實驗順利進行 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_vigil_4",
                        "name": "命運抉擇",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_vigil_3"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/vigil/series_vigil_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "最殘酷的真相終於浮現——你的兄長奧斯卡，竟是黃昏女神教的創始者之一。",
                            "他站在儀式核心，向你發出最後的邀請：",
                            "「加入我們，我們將重塑這個腐朽的世界...」",
                            "「或者，為了所謂的正義，親手葬送你最後的親人。」",
                            "身後是萬千生靈的期盼，面前是血脈相連的至親。",
                            "這道選擇題，沒有正確答案，只有你內心深處最真實的答案...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 作出抉擇 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "series_vigil_5",
                        "name": "終焉咏嘆詩",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "series_vigil_4"
                        },
                        "file": "CG.FlowerFairyPalace/missions/series/vigil/series_vigil_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "無論你作出了何種選擇，黃昏的終幕都已拉開。",
                            "奧斯卡終究還是啟動了最終儀式，整個龍殤之地開始崩解，現實與虛幻的界線逐漸模糊。",
                            "天空染上不祥的緋紅，大地哀嚎著裂開深淵。",
                            "在這世界終結的倒數時刻，你必須守護最後的希望——",
                            "無論是為了拯救世界，還是為了挽回兄長的神智與靈魂。",
                            "這首終焉的咏嘆詩，將由你來譜寫最後的樂章...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 在黃昏末日中生存 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 奧斯卡陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "lily_garden",
                "name": "百合花園",
                "open": true,
                "badgeCodes": [
                    "resuce_lovers_princess_in_dungeon_1",
                    "resuce_lovers_princess_in_dungeon_2",
                    "resuce_lovers_princess_in_dungeon_3",
                    "resuce_lovers_princess_in_dungeon_4",
                    "resuce_lovers_princess_in_dungeon_5",
                    "resuce_lovers_princess_in_dungeon_0",
                    "resuce_lovers_saintess_of_ceremony_1",
                    "resuce_lovers_saintess_of_ceremony_2",
                    "resuce_lovers_saintess_of_ceremony_3",
                    "resuce_lovers_saintess_of_ceremony_4",
                    "resuce_lovers_saintess_of_ceremony_5",
                    "resuce_lovers_saintess_of_ceremony_0",
                    "resuce_lovers_musician_at_auditorium_1",
                    "resuce_lovers_musician_at_auditorium_2",
                    "resuce_lovers_musician_at_auditorium_3",
                    "resuce_lovers_musician_at_auditorium_4",
                    "resuce_lovers_musician_at_auditorium_5",
                    "resuce_lovers_musician_at_auditorium_0",
                    "resuce_lovers_mechanic_inside_factory_1",
                    "resuce_lovers_mechanic_inside_factory_2",
                    "resuce_lovers_mechanic_inside_factory_3",
                    "resuce_lovers_mechanic_inside_factory_4",
                    "resuce_lovers_mechanic_inside_factory_5",
                    "resuce_lovers_mechanic_inside_factory_0",
                    "resuce_lovers_masterchef_of_heaven_1",
                    "resuce_lovers_masterchef_of_heaven_2",
                    "resuce_lovers_masterchef_of_heaven_3",
                    "resuce_lovers_masterchef_of_heaven_4",
                    "resuce_lovers_masterchef_of_heaven_5",
                    "resuce_lovers_masterchef_of_heaven_0",
                    "resuce_lovers_truth_behind_scenes_1",
                    "resuce_lovers_truth_behind_scenes_2",
                    "resuce_lovers_truth_behind_scenes_3",
                    "resuce_lovers_truth_behind_scenes_4",
                    "resuce_lovers_truth_behind_scenes_5",
                    "resuce_lovers_truth_behind_scenes_0"
                ],
                "description": [
                    "殘垣斷壁，屍嚎片野。",
                    "滅世級別的戰爭爆發，「我」與同伴們並肩作戰，卻仍然擋不住敵軍連綿不絕的進攻。",
                    "同伴、家人、甚至所有生靈，都在妳的面前或死去或化為飛灰。",
                    "即使是作為「神樂巫女」，擁有神術的妳，在無可避免的結局前，將同伴復活也只是讓他們再無意義地死去一次罷了。",
                    "「到此為止了嗎...」在妳拖著殘軀到來衣冠冢前，瀰留之際，妳卻突然想起一個「禁術」。",
                    "「禁術‧冥憶輪迴！」",
                    "在一陣刺眼的白光後，妳的身體恢復了，眼前的世界分明是回到了光暈曆233年。",
                    "「還有2年時間！我...必須做到！」",
                    "與此同時，雅堤米絲似乎突然占卜到了一些非比尋常的東西；而一個與「我」相似的人，正在茫然中醒來。"
                ],
                "missions": [
                    {
                        "code": "info_resuce_lovers_princess_in_dungeon",
                        "name": "👑 公主織夢",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "某一天的早上，妳一覺醒來，突然發現自己旁邊躺著一只睡得很香的蘿莉。",
                            "妳可以確定家裡的窗戶和門都關得很嚴實，這讓你感到匪夷所思。",
                            "當妳搖醒了她之際，她卻開口就把你稱作：「爸爸！」",
                            "小蘿莉自稱依夢，是妳與公主織夢之女。她來自未來，為了將歷史扳回正軌而來，否則她將會消失。",
                            "「可我是女的啊！」妳這麼想著。",
                            "「媽媽現在還在地下城裡被關著呢！」依夢這麼說著，把妳拖了出門口。"
                        ]
                    },
                    {
                        "code": "resuce_lovers_princess_in_dungeon_1",
                        "name": "亡魂哀嚎",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/princess_in_dungeon/resuce_lovers_princess_in_dungeon_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "半拖半拉的，妳不情不願地帶上了裝備出發去了地下城。",
                            "依夢聲稱，「媽媽正被關在地下城底層呢，快點去救她！」",
                            "而妳們就在此刻踏入了地下城的入口。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 清理怪物並進入地下二層 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 依夢身受重傷<br>前往地下二層的道路被堵死 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_princess_in_dungeon_2",
                        "name": "箭斧合鳴",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/princess_in_dungeon/resuce_lovers_princess_in_dungeon_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "通過了地下一層，妳們來到了充滿機關陷阱的地下二層。",
                            "只聽咚的一聲，依夢就閃現到了地下三層的入口。",
                            "「爸爸快點過來，這層沒有怪物看守的~！」",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 通過機械陣並進入地下三層 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_princess_in_dungeon_3",
                        "name": "氣魄永恆",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/princess_in_dungeon/resuce_lovers_princess_in_dungeon_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "驚險地通過了地下二層的機關陣，來到了開闊的地下三層。只是，眼前的敵人似乎有一點奇怪？",
                            "「爸爸，這裡的敵人實際上都是歷史人物的幻象！」",
                            "「她們沒法被徹底打倒的...或許可以試試先把每一個幻象都打散重組一次？」",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 通過歷史幻象的試煉並進入地下四層 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 依夢身受重傷 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_princess_in_dungeon_4",
                        "name": "千古難題",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/princess_in_dungeon/resuce_lovers_princess_in_dungeon_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "通過地下三層的「永恆陣」後，依夢告訴你，地下四層實際上就是一個巨大的數學謎題。",
                            "只要解開謎題，通往B5的道路就會自然打開，不過...",
                            "「爸爸會這個什麼叫單位矩陣的東西嗎？」依夢問道，「還有一堆三角學和log...依夢沒上過中學不會這個啦QAQ！」",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 解開謎題並進入地下五層 </td></tr>  <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 依夢身受重傷 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_princess_in_dungeon_5",
                        "name": "劍心通明",
                        "maxPlayers": 8,
                        "minPlayers": 2,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/princess_in_dungeon/resuce_lovers_princess_in_dungeon_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "好不容易解開了地下四層的謎題，再一睜眼，眼前的景象卻產生了巨大的變化...",
                            "映入你眼中的，是一片未知的空間、一把靈骨劍以及一面鏡子...",
                            "「依夢？」你徒勞無功地叫著，卻始終沒有反應。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 援救織夢 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 2-8人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_princess_in_dungeon_0",
                        "name": "間章‧迷茫",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireBadge": [
                                "resuce_lovers_princess_in_dungeon_1",
                                "resuce_lovers_princess_in_dungeon_2",
                                "resuce_lovers_princess_in_dungeon_3",
                                "resuce_lovers_princess_in_dungeon_4",
                                "resuce_lovers_princess_in_dungeon_5"
                            ]
                        },
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/princess_in_dungeon/resuce_lovers_princess_in_dungeon_0.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "擊碎了幻境後，映入妳眼中的是依夢與織夢...？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 向織夢和依夢詢問現況 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_resuce_lovers_saintess_of_ceremony",
                        "name": "🌟 聖女米娜",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "好不容易把織夢救出來後，得知所謂的「公主」其實就是邪教泛信徒對她的稱呼。",
                            "高層一般稱為「神女」，是地位僅次於「我主」的存在，但她本人實際上沒帶任何實際身份。",
                            "你們聊著聊著，時光飛逝，一周的時間就過去了。",
                            "歷史總是驚人的相似，又一只小蘿莉被發現在妳清醒之際睡著在妳身旁。",
                            "這次，她自稱媞娜，是妳與聖女米娜之女。",
                            "「媽媽現在被困婚禮前夕的宣告典禮上呢，快把她救回家！」"
                        ]
                    },
                    {
                        "code": "resuce_lovers_saintess_of_ceremony_1",
                        "name": "疲命脫逃",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/saintess_of_ceremony/resuce_lovers_saintess_of_ceremony_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "深入瞭解之後，妳和織夢發現，依夢和媞娜實際上來自不同的時間片段。",
                            "她們相互之間本來不認識，現在卻被強行賦與了相處的記憶...就像是有一雙大手把不同時間段的人強行揉進同一處時空同一個世界裡。",
                            "雖然疑惑及不解，但米娜現正處於危機當中是肯定的。商量過後，妳決定單刀赴會(？)。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 援救米娜 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_saintess_of_ceremony_2",
                        "name": "抉擇交界",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/saintess_of_ceremony/resuce_lovers_saintess_of_ceremony_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "離開大教堂後，妳帶領著米娜一路來到了邊境。",
                            "雖然事發突然，但帝國軍方面應急向來迅速，妳估計現在已經有大批部隊在追擊了。邊境士兵或許也早就收到了訊息。",
                            "留在面前的是備用計劃的兩個選擇：越過邊境，往西南方的寧靜森林躲藏處；沿著邊境北上溪流，迷惑帝國軍。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 進入西南方的寧靜森林<br>或沿著溪流北上 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 米娜身受重傷<br>米娜被帝國境衛軍發現蹤跡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_saintess_of_ceremony_3",
                        "name": "密林遊蹤",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/saintess_of_ceremony/resuce_lovers_saintess_of_ceremony_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "好不容易穿過邊界線，總算是躲入密林中的藏身處了。",
                            "只是，妳心中的危機感似乎並未完全散去。",
                            "這一天凌晨，妳似乎聽到了一些不同尋常的聲音。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找異常聲音的來源 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_saintess_of_ceremony_4",
                        "name": "護航閃戰",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/saintess_of_ceremony/resuce_lovers_saintess_of_ceremony_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "沿邊境北上後，妳們到達了預定的溪流。米娜表示，這似乎與她想像中的溪流相悖。",
                            "妳從口袋中拿出道具，只見它不停變大成一艘小船。",
                            "似乎，乘著這艘船就可以脫離帝國的追捕...了？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 保護米娜以及防止船只遭受破壞 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 米娜被帝國軍接走<br>船只受到嚴重破壞 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_saintess_of_ceremony_5",
                        "name": "殊途同歸",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/saintess_of_ceremony/resuce_lovers_saintess_of_ceremony_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "不論選擇哪條路逃離，似乎都是無法逃過第三騎士的「預言天書」。",
                            "依芙告訴妳，能帶走米娜的唯一方法，是到帝都競技場裡。",
                            "只有堂堂正正地擊敗丹尼，才能獲得他的認可。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗丹尼．伊萬斯及他的手下 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_saintess_of_ceremony_0",
                        "name": "間章‧生機漸起",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireBadge": [
                                "resuce_lovers_saintess_of_ceremony_1",
                                "resuce_lovers_saintess_of_ceremony_2",
                                "resuce_lovers_saintess_of_ceremony_3",
                                "resuce_lovers_saintess_of_ceremony_4",
                                "resuce_lovers_saintess_of_ceremony_5"
                            ]
                        },
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/saintess_of_ceremony/resuce_lovers_saintess_of_ceremony_0.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "家中似乎越來越熱鬧了...？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 一起吃飯 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_resuce_lovers_musician_at_auditorium",
                        "name": "🎵 音樂家和紗",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "米娜似乎在離開七月教和婚約的牢籠之後，生活得很開心。",
                            "儘管，這裡沒有僕人，沒有上等美食、也沒有奢華的裝修與享受。",
                            "似乎，對於米娜而言，自由與這個家帶來的溫馨勝於從前所擁有的一切。",
                            "當然，織夢所帶來的，來自帝國方面的通知，抑或是忠告，依舊在困擾著妳。",
                            "又是一周過去了，這次妳早有準備，當場發現了傳送旋渦，然而卻沒有任何靈能反應出現...？",
                            "這次的小蘿莉自稱紗霧，是妳與世界著名音樂家和紗之女。然而，世事總是難以預料...",
                            "不同於以往，她自報家門後，自顧自的跑進了房間把自己關起來了。",
                            "在這三天之內，她對於家裡的幾位都沒有任何反應，直到..."
                        ]
                    },
                    {
                        "code": "resuce_lovers_musician_at_auditorium_1",
                        "name": "寂靜之禮堂",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/musician_at_auditorium/resuce_lovers_musician_at_auditorium_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "周末，紗霧突然從卧室裡跑了出來，把三十多頁畫紙塞在妳手中，然後又把自己關了起來。",
                            "妳滿頭霧水，在看完畫紙上的訊息後，得出了一個結論：「周一，媽媽將會因為心因性失聲症而離奇失蹤於華思萊特大禮堂附近。」",
                            "留給妳的時間不多了，妳必須立即前往華思萊特大禮堂，阻止和紗可能存在的輕生行為。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 前往華思萊特大禮堂 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_musician_at_auditorium_2",
                        "name": "失蹤之樂者",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/musician_at_auditorium/resuce_lovers_musician_at_auditorium_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "即使妳提早到達了華思萊特大禮堂，似乎還是無法阻止歷史的必然性。和紗早已失蹤了。",
                            "大禮堂就再大也只是一座禮堂，妳卻尋遍大禮堂卻完全發現不了和紗的痕跡。",
                            "既然如此，大禮堂內可能另有乾坤...？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找大禮堂中的秘密 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_musician_at_auditorium_3",
                        "name": "鏡中之倒影",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/musician_at_auditorium/resuce_lovers_musician_at_auditorium_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "再次使用「力量」搜尋之後，似乎唯一的疑點就在於這面鏡子之上了。",
                            "百思不得其解之下，妳站在此思考了良久。",
                            "正當妳想放棄之際，午夜時分，一個女人的倒影卻在鏡中顯現...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 通過鏡中隨道 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_musician_at_auditorium_4",
                        "name": "相反之世界",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/musician_at_auditorium/resuce_lovers_musician_at_auditorium_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "鏡中果然另有乾坤！只是，映入眼中的世界為何有點似是而非？",
                            "似乎，鏡中世界與現實中左右相反...那麼，鏡中世界的人們呢？",
                            "然而，鏡中的正午時分大禮堂，依然是空無一人。那個女人的倒影，到底預示著什麼？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 通過相反世界的試煉 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_musician_at_auditorium_5",
                        "name": "絕世之和弦",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/musician_at_auditorium/resuce_lovers_musician_at_auditorium_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "空蕩的大禮堂裡，傳來了一陣陣琴聲。",
                            "和紗，似乎在鋼琴之上，演奏著不知名的悲情樂曲。",
                            "「必須把她帶回現實裡去！」",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 安撫和紗 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_musician_at_auditorium_0",
                        "name": "間章‧深夜閒談",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireBadge": [
                                "resuce_lovers_musician_at_auditorium_1",
                                "resuce_lovers_musician_at_auditorium_2",
                                "resuce_lovers_musician_at_auditorium_3",
                                "resuce_lovers_musician_at_auditorium_4",
                                "resuce_lovers_musician_at_auditorium_5"
                            ]
                        },
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/musician_at_auditorium/resuce_lovers_musician_at_auditorium_0.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "為什麼身為母親的和紗是音樂家，但女兒紗霧卻是畫家呢？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 與和紗和紗霧聊天 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_resuce_lovers_mechanic_inside_factory",
                        "name": "🛠️ 機械師索菲亞",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "看著和紗和紗霧的對白，妳突然感覺自己就像一顆電燈泡一樣...",
                            "雖然妳答應了不會再讓和紗失望，但似乎單單讓她們母女相處就已經很開心了。",
                            "紗霧也不像剛來那樣只會把自己鎖在房間裡了，偶爾她也會出來和依夢、媞娜一起玩。",
                            "眨眼間，又是一周過去了。這次你依然只能盯著傳送旋渦掉出又一只蘿莉而無能為力。",
                            "她手上的雙槍立即讓妳回憶起還在學院時的朋友：索菲亞。",
                            "果不其然，她自稱緹法，是妳與索菲亞之女，而索菲亞現在被困於萊因魂器工廠之中。",
                            "儘管緹法想一起去救出索菲亞，但工廠很顯然過於危險，不適合她前去。"
                        ]
                    },
                    {
                        "code": "resuce_lovers_mechanic_inside_factory_1",
                        "name": "濃煙中的工廠",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/mechanic_inside_factory/resuce_lovers_mechanic_inside_factory_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "妳來到萊因魂器工廠。顯然易見，工廠煙霧漫天。視野相對清晰的正門卻有一堆落石擋住去路。",
                            "無奈之下，妳只得摸著煙霧順著牆體走動看看側門是否能進",
                            "前方的煙霧，已經濃到無法讓人看清自己的手了，妳確信這裡是側門的所在處。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找工廠入口 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_mechanic_inside_factory_2",
                        "name": "人工智能暴走",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/mechanic_inside_factory/resuce_lovers_mechanic_inside_factory_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "進入了工廠，煙霧比起外面的情況簡直不值一提。",
                            "而顯然易見的，工廠機器人貌似發生了叛亂...",
                            "就在這時候，妳聽到了一陣熟悉的聲音。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 援救索菲亞 </td></tr> <tr><th width=100px> <tr><th><font color=red>失敗條件</font> </th><td> 索菲亞陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_mechanic_inside_factory_3",
                        "name": "敵蹤連綿不絕",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/mechanic_inside_factory/resuce_lovers_mechanic_inside_factory_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "見到了索菲亞，得知工廠危機源於未知黑客攻擊。因此，當務之急是前往中樞控制室，讓索菲亞對抗病毒。",
                            "正在這時候，又來了一批機器人，妳只得趕快消滅這批機器人，然後護送索菲亞前去中樞。",
                            "只是，門後連綿的機器滴嗒聲，不免讓妳心中寒顫。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找前往中樞控制室的路 </td></tr> <tr><th><font color=red>失敗條件</font> </th><td> 索菲亞陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_mechanic_inside_factory_4",
                        "name": "通道盡頭的光",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/mechanic_inside_factory/resuce_lovers_mechanic_inside_factory_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "機器人連綿不絕也看不見盡頭，消滅一批又來一批，讓妳意識到這樣下去不是辦法。",
                            "幸好，此時索菲亞的混沌力場恢復完畢了，是時候頂著子彈通過長廊了。",
                            "通道另一處是透射的光芒，是中樞控制室的燈光。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 進入中樞控制室 </td></tr> <tr><th><font color=red>失敗條件</font> </th><td> 索菲亞陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_mechanic_inside_factory_5",
                        "name": "最後的倒計時",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/mechanic_inside_factory/resuce_lovers_mechanic_inside_factory_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "終於到達了中樞控制室了，索菲亞連忙架起虛擬電子屏幕和黑客對抗。",
                            "顯然易見，黑客被激怒了，機器人衝擊大門的頻率越來越高，甚至妳還隱約聽見了工廠自爆倒計時。",
                            "現在，只能選擇相信天才機械師索菲亞了，妳必須守住大門不讓她被打擾。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 堅守至索菲亞解決黑客問題 </td></tr> <tr><th><font color=red>失敗條件</font> </th><td> 索菲亞身受重傷，無法對抗黑客 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_mechanic_inside_factory_0",
                        "name": "間章‧緹法之怒",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireBadge": [
                                "resuce_lovers_mechanic_inside_factory_1",
                                "resuce_lovers_mechanic_inside_factory_2",
                                "resuce_lovers_mechanic_inside_factory_3",
                                "resuce_lovers_mechanic_inside_factory_4",
                                "resuce_lovers_mechanic_inside_factory_5"
                            ]
                        },
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/mechanic_inside_factory/resuce_lovers_mechanic_inside_factory_0.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "緹法似乎對於被留在家中這件事有很大的怨言...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 安撫緹法 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_resuce_lovers_masterchef_of_heaven",
                        "name": "🍽️ 主廚繪里奈",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "索菲亞似乎從一開始就知道事情始末了。她本也是其他時空之人，在那個位面認識了「妳」。然而，那個「妳」卻因為救她而重傷致死。",
                            "在葬禮之上，一個神秘人給了她一個再見「妳」的機會，但代價便是失去記憶從小成長，直到拯救事件的發生，在那個位面的記憶才會復蘇。",
                            "很顯然，經歷了兩次拯救事件的她，早已對妳至死不渝了。",
                            "根據預言，接下來就應該是最後一位了。這一天，一只白髮蘿莉突然出現，想把妳拖出門。",
                            "她叫愛麗絲，據她所說，媽媽是知名大廚繪里奈，她則是知名美食家。",
                            "而繪里奈的成名，以及妳和她的相識，都在明天所舉辦的「廚師大聯賽」中。",
                            "「廚師大聯賽」是帝國、議會、傭兵團三方所合作舉辦的，且因為有著和平條約，舉辦的期間還是三方的休戰期。",
                            "很顯然，現在再不去報名參加，就沒辦法與繪里奈相識了。報名的截止日期，就在今天晚上八時。"
                        ]
                    },
                    {
                        "code": "resuce_lovers_masterchef_of_heaven_1",
                        "name": "廚師大聯賽",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/masterchef_of_heaven/resuce_lovers_masterchef_of_heaven_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "大聯賽的報名地點就在眼前了，而最顯眼的自然是那個寫著剩餘人數的報名牌。",
                            "很顯然，旁邊的人們也在奔跑著，想搶奪剩餘的名額...",
                            "妳不自覺的也跟著奔跑了起來...究竟能否搶到名額呢？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 搶到最後的名額 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 最後名額被別人搶走 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_masterchef_of_heaven_2",
                        "name": "團隊與合作",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/masterchef_of_heaven/resuce_lovers_masterchef_of_heaven_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "很顯然，一個如此大的比賽，沒有隊友是不行的。",
                            "不過確定的是，繪里奈必然在眼前的人群之中。",
                            "那麼，要如何找出繪里奈，然後讓她相信妳並與妳組隊呢？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 找出繪里奈 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_masterchef_of_heaven_3",
                        "name": "調味料煩惱",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/masterchef_of_heaven/resuce_lovers_masterchef_of_heaven_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "雖然成功作為幫廚進入了繪里奈的隊伍，但不知為何，繪里奈甚至知道妳會這時候前來。",
                            "繪里奈似乎看出了妳的疑惑，她表示妳必須先幫她贏得這個比賽，妳才會答應妳的要求。",
                            "而目前最大的煩惱，似乎是缺了一項秘制調味料的材料。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 獲得秘制調味料的材料 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_masterchef_of_heaven_4",
                        "name": "發光的料理",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/masterchef_of_heaven/resuce_lovers_masterchef_of_heaven_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "「不會發光的料理不是好料理！」",
                            "顯然，想讓評委們滿意，眼前的料理還缺了一點什麼。",
                            "要如何才能讓眼前的料理，成為發光的料理呢？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 詢問「發光料理」的做法 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_masterchef_of_heaven_5",
                        "name": "天堂的味道",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/masterchef_of_heaven/resuce_lovers_masterchef_of_heaven_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "終於成功做出的傳說中的「發光料理」！",
                            "只要將菜呈上去，勝利必然是屬於繪里奈的！",
                            "究竟評委們的反應會是如何呢？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 將發光料理呈上評委處點評 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_masterchef_of_heaven_0",
                        "name": "間章‧結束了？",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireBadge": [
                                "resuce_lovers_masterchef_of_heaven_1",
                                "resuce_lovers_masterchef_of_heaven_2",
                                "resuce_lovers_masterchef_of_heaven_3",
                                "resuce_lovers_masterchef_of_heaven_4",
                                "resuce_lovers_masterchef_of_heaven_5"
                            ]
                        },
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/masterchef_of_heaven/resuce_lovers_masterchef_of_heaven_0.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "一切似乎落下了帷幕...",
                            "又或者，真的是這樣嗎？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 吃團圓飯 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_resuce_lovers_truth_behind_scenes",
                        "name": "🔎 幕後真相",
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "僅僅只是十人齊聚過後的第一天，似乎世界就產生了大變樣。",
                            "一夜之間，十人憑空消失。剛起床而又一臉迷糊的妳，不知道如何是好。",
                            "而就在此時，門外傳來了巨大的騷動..."
                        ]
                    },
                    {
                        "code": "resuce_lovers_truth_behind_scenes_1",
                        "name": "舉世皆敵",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/truth_behind_scenes/resuce_lovers_truth_behind_scenes_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "這一覺醒來，不僅家人都不見了，甚至放眼望去，沒有任何一個人是友善的。",
                            "哪怕是最無害的小孩子，也要舉起玩具槍指著妳。",
                            "儘管不明白怎麼回事，但是顯然易見，家裡不再是安全地帶了。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 逃離市區 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_truth_behind_scenes_2",
                        "name": "天羅地網",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/truth_behind_scenes/resuce_lovers_truth_behind_scenes_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "逃出市區，也沒有了瘋狂市民們。然而，在此等待著妳的是...",
                            "哈斯卡帝國的第一天位騎士大隊、",
                            "十字軍議會的十位龍紋武士、",
                            "以及，傭兵團八手吉娜的娜妹軍。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 突破封鎖 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_truth_behind_scenes_3",
                        "name": "四面楚歌",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/truth_behind_scenes/resuce_lovers_truth_behind_scenes_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "面對如此光景，妳別無她法，除了逃跑什麼都做不到。",
                            "然而，即使逃離了前者的包圍，後續仍然有帝國靈能部隊和抹殺者在追蹤妳。",
                            "身後似乎已經聽見天隱士們使用影輕功的聲音了...",
                            "前方的大山，會是逃脫的希望嗎？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 逃往前方的深山之中 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_truth_behind_scenes_4",
                        "name": "窮途末路",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/truth_behind_scenes/resuce_lovers_truth_behind_scenes_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "三位帝國御璽者、銀邊‧布朗丹和盜賊們似乎在此等候多時了。",
                            "面對這種等級和數量的敵人和追兵，似乎現在連逃脫都沒法做到了。",
                            "背水一戰，便是最後的生機。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殊死一搏 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_truth_behind_scenes_5",
                        "name": "神臨之光",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireBadge": [
                                "resuce_lovers_truth_behind_scenes_1",
                                "resuce_lovers_truth_behind_scenes_2",
                                "resuce_lovers_truth_behind_scenes_3",
                                "resuce_lovers_truth_behind_scenes_4"
                            ]
                        },
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/truth_behind_scenes/resuce_lovers_truth_behind_scenes_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "隨著最後那一道光芒所降臨的，是「妳」。",
                            "「妳」，也就是幕後這一切的元兇。",
                            "到底最後會是哪一條世界線得以延續，就在「妳」與妳的勝負之間。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗另一個「妳」 </td></tr> <tr><th width=100px> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "resuce_lovers_truth_behind_scenes_0",
                        "name": "後記",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireBadge": [
                                "resuce_lovers_princess_in_dungeon_0",
                                "resuce_lovers_saintess_of_ceremony_0",
                                "resuce_lovers_musician_at_auditorium_0",
                                "resuce_lovers_mechanic_inside_factory_0",
                                "resuce_lovers_masterchef_of_heaven_0",
                                "resuce_lovers_truth_behind_scenes_5"
                            ]
                        },
                        "file": "CG.FlowerFairyPalace/missions/resuce_lovers/truth_behind_scenes/resuce_lovers_truth_behind_scenes_0.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "大家都沒事...真的太好了呢...",
                            "永...別...了...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 完成看望家人的遺願 </td></tr> <tr><th> 參與陣營 </th><td> <font color=gold>皇家騎士團</font>、<font color=red>天影十字軍</font>、<font color=orange>第三勢力</font> <br> <font color=pink>花靈宮</font>、<font color=lime>盜賊幫</font>、<font color=magenta>無魂軍</font>、<font color=aqua>智械兵團</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "花靈宮",
        "chapters": [
            {
                "code": "info_fairy_season1",
                "name": "第一部 - 曙光乍現",
                "open": true,
                "badgeCodes": [
                    "fairy_challenge_3",
                    "fairy_challenge_6",
                    "fairy_challenge_9",
                    "fairy_challenge_12",
                    "fairy_challenge_15",
                    "fairy_challenge_18",
                    "fairy_challenge_21",
                    "fairy_challenge_24",
                    "fairy_challenge_27"
                ],
                "description": [
                    "任務模式以章節分段，提供一系列任務幫助玩家進入光暈故事的世界。",
                    "在某些任務中探索有可能取得商店道具或尋得武功拳譜等贈品。",
                    "完成任務可解鎖下一段故事的任務章節。已完成的任務在章節重置後，仍可以重覆遊玩，但無法獲得完成任務後的獎勵。",
                    "以最低玩家人數完成任務後，可累積「極限模式」的勳章，這些勳章是光暈中最難取得的榮耀之一。"
                ],
                "missions": [
                    {
                        "code": "info_mission_placeholder_fairy1",
                        "name": "",
                        "open": {
                            "requireMission": "info_mission_placeholder"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": []
                    }
                ]
            },
            {
                "code": "season1_chapter0",
                "name": "光暈戰記入門教學",
                "open": true,
                "badgeCodes": [
                    "fairy_tutorial",
                    "fairy_tutorial_twins",
                    "fairy_tutorial_witch"
                ],
                "description": [
                    "介紹光暈戰記的各項系統及玩法，是新手入門最快的方法。",
                    "「所以我在本體玩完三次之後，還要再這邊玩一次？你們同人陣營都是這樣的嗎？」—某不願意透露姓名的單破狂魔，於2023年的名言"
                ],
                "missions": [
                    {
                        "code": "fairy_tutorial",
                        "name": "自然啟靈",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter0/fairy_tutorial.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "課程中將有一位耀花靈教官帶領你進入花靈宮的神秘仙境。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 完成花靈啟靈課程 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "season1_chapter1",
                "name": "花靈仙境迷途",
                "open": {
                    "requireChapter": "season1_chapter0"
                },
                "badgeCodes": [
                    "fairy_train"
                ],
                "description": [
                    "花靈仙境是加入了花靈宮的花靈們晉升的唯一途徑。仙境迷途則是所有花靈們的第一課，只有通過才能晉升為螢花靈，取得外出的資格。"
                ],
                "missions": [
                    {
                        "code": "fairy_train_1",
                        "name": "本固支榮",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter1/fairy_train_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "作為基礎中的基礎，戰鬥能力測驗是考校花靈們能否在外出時擁有自保之力的手段。花靈宮不會讓缺乏戰鬥能力的花靈外出到亂世之間。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 將敵人全數殲滅 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_train_2",
                        "name": "心無旁騖",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_train_1"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter1/fairy_train_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "發揮出花靈宮招式的條件之一便是在干擾之下平靜自己的心，而這也是試煉的其中一課：保持心平氣和，活用花靈宮的招式。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 活用花靈宮招式 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_train_3",
                        "name": "朝花夕拾",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_train_2"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter1/fairy_train_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "作為畢業試煉，記憶戰場是所有花靈們的惡夢。這份記憶，會成為所有畢業花靈的真我力量。",
                            "然而，能夠作為記憶戰場的事件...沒有任何一件是簡單的。這關卡的難度，必然是所有仙境試煉中數一數二的。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 通過記憶戰場的試煉 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 無法改寫結局 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "season1_chapter2",
                "name": "空谷幽蘭",
                "open": {
                    "requireChapter": "season1_chapter1"
                },
                "badgeCodes": [
                    "fairy_friendly"
                ],
                "description": [
                    "好不容易獲得了外出資格，妳決定來一個說走就走的旅程。",
                    "這些年來，在宮中的苦修日子很是無聊，是時候該放鬆一下了。",
                    "在旅行途中一天晚上，妳又如常叨擾了一下附近的村落以住宿。",
                    "只是，在早上起床後，妳發現村民們都愁眉苦臉的聚在了一起..."
                ],
                "missions": [
                    {
                        "code": "fairy_friendly_1",
                        "name": "慧心巧思",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter2/fairy_friendly_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "尼斯特爾村(Needster Village)，是位於日光地邊界的一座小村落。",
                            "村民們多以種植作物與紡織為生計。",
                            "近來，村落附近搬來了一些「友善」的鄰居，居民被騷擾得苦不堪言，甚至有數位村民已經離奇消失了。",
                            "而就在今天早上，村長收到了一封恐嚇信...",
                            "妳決定幫助村民解決這個麻煩。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找盜賊團的駐地 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_friendly_2",
                        "name": "淵思寂慮",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_friendly_1"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter2/fairy_friendly_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "雖然妳成功發現了盜賊團的駐地，然而妳勢單力薄，勢必要尋找一些方法，以小搏大。",
                            "而這項工作，由潛入內部開始。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 潛入盜賊團巢穴內部 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 被盜賊發現蹤跡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_friendly_3",
                        "name": "巾幗風姿",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_friendly_2"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter2/fairy_friendly_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "成功潛入了內部，接下來便是攪亂秩序，混水摸魚的時間了。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 殲滅所有盜賊 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_friendly_4",
                        "name": "璞玉渾金",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_friendly_3"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter2/fairy_friendly_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "好不容易清理了盜賊，突然回歸的盜賊首領卻打了妳一個措手不及，令妳陷入苦戰...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗梵天盜賊團首領 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "season1_chapter3",
                "name": "魂牽夢縈",
                "open": {
                    "requireChapter": "season1_chapter1"
                },
                "badgeCodes": [
                    "fairy_dream"
                ],
                "description": [
                    "近日，宮中出現了一個神秘的花靈，到處尋找隊友。只是不知道什麼原因，其他花靈們都不是很想參與...",
                    "在好奇心的驅使下，妳答應了她的請求...",
                    "奇妙的時間之旅，就此開始..."
                ],
                "missions": [
                    {
                        "code": "fairy_dream_1",
                        "name": "鍾靈毓秀",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter3/fairy_dream_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "神秘花靈自稱為「璃汐」。她向妳介紹了這次旅程的目的地—「歸墟之境」。",
                            "「傳說中，那裡有著穿梭時空、改變歷史的力量...」",
                            "而第一處挑戰，便是要穿過默輝盜賊團的駐地。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 安全通過默輝盜賊團的駐地 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 璃汐陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_dream_2",
                        "name": "昧旦晨興",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_dream_1"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter3/fairy_dream_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "前往歸墟之境的第二處挑戰，就是越過帝國邊境線，進入「無輝之地」。",
                            "在天亮前，帝國的防守力量最為薄弱，此時便可乘機通過。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 在黎明前進入無輝之地 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 被帝國邊防軍發現蹤跡<br>黎明已至 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_dream_3",
                        "name": "望穿秋水",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_dream_2"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter3/fairy_dream_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "好不容易進入了無輝之地，卻發現眼前的歸墟之境入口，正處於天影議會與傭兵團的交戰地帶中間...",
                            "很顯然，他們必然是競爭對手。心急火燎的璃汐，決定直接強行進入歸墟之境。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 消滅競爭對手並進入歸墟之境 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 璃汐陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_dream_4",
                        "name": "九死不悔",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_dream_3"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter3/fairy_dream_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "源源不絕的競爭對手蜂蛹而至。璃汐決定守門，為妳爭取打開歸墟之門的時間。",
                            "而進入了空洞的妳，看見了一頭巨獸...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗歸墟之門的守護獸 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "season1_chapter4",
                "name": "往昔幻影",
                "open": {
                    "requireChapter": "season1_chapter3"
                },
                "badgeCodes": [
                    "fairy_phantom",
                    "fairy_phantom_nohit"
                ],
                "description": [
                    "在大門關閉前的一剎那，璃汐成功趕了進來。",
                    "倒映在妳們眼中的，是一個奇妙的時光長河.....",
                    "要怎麼做，才能安然通過時光長河呢？"
                ],
                "missions": [
                    {
                        "code": "fairy_phantom_1",
                        "name": "迴流魅眸",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter4/fairy_phantom_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "一只眼睛在妳的面前張開，璃汐似乎早有料到因而沒有驚訝。",
                            "在一陣刺眼的光芒中，妳們被傳送到了一條綠色的迴廊......",
                            "　",
                            "<table width=400px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 穿越時空迴廊 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 璃汐陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_phantom_2",
                        "name": "空中樓閣",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_phantom_1"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter4/fairy_phantom_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "看著眼前與風月寶塔別無兩樣的歸墟之塔，璃汐似乎陷入了沉思...",
                            "歸墟之塔，究竟深藏著什麼樣的秘密呢？",
                            "　",
                            "<table width=400px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 登頂歸墟之塔 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 璃汐陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_phantom_3",
                        "name": "矢志不渝",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_phantom_2"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter4/fairy_phantom_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "璃汐被一陣爆炸聲引走了，妳只得繼續前進探索道路...",
                            "妳能否闖過眼前這個重重圍陣？",
                            "　",
                            "<table width=400px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 通過機關迷陣 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_phantom_4",
                        "name": "生如夏花",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_phantom_3"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter4/fairy_phantom_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "登入了歸墟之塔的頂樓，時光之花就在眼前等著妳的挑戰...",
                            "　",
                            "<table width=400px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗時光之花 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_phantom_5",
                        "name": "鏡花水月",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_phantom_4"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season1/chapter4/fairy_phantom_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "璃汐似乎是故意離開妳的。她告訴妳，多人挑戰時光之花將變得十分困難...",
                            "那陣爆炸聲，給了她絕佳的藉口離開妳，從而錯開時間去挑戰。",
                            "不過，似乎她也沒有比妳慢多少...",
                            "無論如何，在這片白色空間裡，璃汐提出了她的訴求：請妳幫忙改變她所想改變的歷史。",
                            "妳思前想後，知道自己並沒有什麼遺憾，於是欣然答應。",
                            "一陣刺眼的光芒後，映入妳眼前的，卻是妳記憶非常深刻的一段...？",
                            "　",
                            "<table width=400px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 改變歷史 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 璃汐陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "info_fairy_season2",
                "name": "第二部 - 屠魔英雄",
                "open": true,
                "badgeCodes": [
                    "fairy_challenge_3",
                    "fairy_challenge_6",
                    "fairy_challenge_9",
                    "fairy_challenge_12",
                    "fairy_challenge_15",
                    "fairy_challenge_18",
                    "fairy_challenge_21",
                    "fairy_challenge_24",
                    "fairy_challenge_27"
                ],
                "description": [
                    "任務模式以章節分段，提供一系列任務幫助玩家進入光暈故事的世界。",
                    "在某些任務中探索有可能取得商店道具或尋得武功拳譜等贈品。",
                    "完成任務可解鎖下一段故事的任務章節。已完成的任務在章節重置後，仍可以重覆遊玩，但無法獲得完成任務後的獎勵。",
                    "以最低玩家人數完成任務後，可累積「極限模式」的勳章，這些勳章是光暈中最難取得的榮耀之一。"
                ],
                "missions": [
                    {
                        "code": "info_mission_placeholder_fairy2",
                        "name": "",
                        "open": {
                            "requireMission": "info_mission_placeholder"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": []
                    }
                ]
            },
            {
                "code": "season2_chapter1",
                "name": "毒瀧惡霧",
                "open": {
                    "requireChapter": "season1_chapter0"
                },
                "badgeCodes": [
                    "fairy_poison"
                ],
                "description": [
                    "一無所獲的宮主琉璃心如死灰的回到了宮中。不過，妳還是因此獲得了輝花靈神印以彰顯妳對她的幫助。",
                    "一個月過後，琉璃突然找上了妳，請求妳幫助她前往墨山處理一些瑣事。",
                    "妳看著她面上不知道是憤怒還是悲哀的複雜表情，還是答應了去幫助她。"
                ],
                "missions": [
                    {
                        "code": "fairy_poison_1",
                        "name": "蒼綠異潭",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/fairy/season2/chapter1/fairy_poison_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "墨山，是一處風景優美的旅遊景點，琉璃曾經將她的姐姐在此的山頂上下葬。",
                            "然而，在妳眼前的是詭異的綠色霧氣，讓人不禁懷疑墨山是否真的有傳頌中的優美風景...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 跟隨並幫助宮主琉璃 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 琉璃陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_poison_2",
                        "name": "毒霧暗影",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_poison_1"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season2/chapter1/fairy_poison_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "見到無魂屍的琉璃宮主知道事情大條了。「死靈復蘇結界」一出，方圓數十里的生命將會滅絕。",
                            "現在也顧不上掃墓了，必須趕快找出結界使用者將其擊殺方為上策。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 到達墨山山頂 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 琉璃陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_poison_3",
                        "name": "冰消瓦解",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_poison_2"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season2/chapter1/fairy_poison_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "登頂以後，映入妳們眼前的，是站在璃汐墓前的神秘男子...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗神秘男子 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "season2_chapter2",
                "name": "柳煙花霧",
                "open": {
                    "requireChapter": "season2_chapter1"
                },
                "badgeCodes": [
                    "fairy_mist"
                ],
                "description": [
                    "眼見著姐姐的身軀從眼前消失，琉璃終究還是崩潰了，如同行屍走肉般緊隨著妳，一副無助的樣子。",
                    "無論妳如何安慰，似乎都沒有發揮太大的作用。",
                    "此刻，只能暫時回宮中尋求對策了。"
                ],
                "missions": [
                    {
                        "code": "fairy_mist_1",
                        "name": "霧中倩影",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/fairy/season2/chapter2/fairy_mist_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "回程時，再一次經過了「迷途沼澤」。但是這次，妳感受到了前所未有的詭異氛圍。",
                            "當妳懷著疑惑的心情，在茫茫迷霧中走著時，妳突然看見了一道模糊的身影。",
                            "妳準備開口詢問，卻發現琉璃正目不轉睛地注視著它。",
                            "是時候勇敢地深入那片迷霧，一探這神秘人影背後的秘密了。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 深入迷途沼澤 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 琉璃陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_mist_2",
                        "name": "雲迷霧鎖",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_mist_1"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season2/chapter2/fairy_mist_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "深入沼澤的那一刻起，世界就已然改變了。",
                            "兇險的食人魚在暗湖靜靜潛伏，時刻等待著下一位不幸的獵物。",
                            "漂浮的斷木像是沉睡的巨獸，隨時隨地隱藏著致命的陷阱。",
                            "濃密的霧氣彷彿是神秘力量的簾幕，將一切事物籠罩在迷離的幻象中。",
                            "然而，儘管詭異的氛圍籠罩，彷彿心中的聲音在黑暗中劃破平靜，指引著妳前進。",
                            "妳忍受著不安與恐懼，內心的驅使使妳不停地踏上了更深的旅程。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 跟隨心中的指引進入沼澤最深處 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_mist_3",
                        "name": "目斷魂銷",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_mist_2"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season2/chapter2/fairy_mist_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "與琉璃分別，妳跟隨著心中的指引，來到了沼澤的深處，試圖尋找璃汐的蹤影...",
                            "這個沼澤彷彿是一個迷宮，濃厚的迷霧籠罩著周遭，讓妳感到迷失在一片未知之地。",
                            "妳的心跳加快，當妳穿越著沼澤的潮濕地面，聆聽著草叢中微弱的聲音。",
                            "妳決心不放棄，孤膽前行，逐漸接近沼澤中心的神秘之地。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找璃汐的蹤影 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "season2_chapter3",
                "name": "霜雪千年",
                "open": {
                    "requireChapter": "season2_chapter2"
                },
                "badgeCodes": [
                    "fairy_winter"
                ],
                "description": [
                    "擊敗了「迷途沼澤」領主，卻得知「璃汐」可能早已離開，憤怒的妳瘋狂地攻擊著四周的一切，卻突然感受到寒風刺骨...",
                    "冷靜下來後，發現琉璃手持大刀站著妳的身前，身體還泛著微微白光。",
                    "「我早應該想到，果然是『他』。那個迷人心魄的魔鬼回來了...」",
                    "就連名字也讓琉璃不敢明說的恐怖存在，究竟是誰？",
                    "「我、妳和她都被『他』的力量迷惑了心智...唉，慘劇啊。」琉璃一邊這麼說著，一邊治療著女巫。",
                    "一段時間後，女巫醒來了，看著她盯著妳的眼神，妳只覺得愧疚。",
                    "「薇薇安...抱歉，都是我的錯。」琉璃卻突然向著女巫下跪。",
                    "「...」一陣無言中，薇薇安突然開口，「『他』逃進了水中天地了，現在要怎麼辦？」",
                    "「也許...我們追進去吧？」"
                ],
                "missions": [
                    {
                        "code": "fairy_winter_1",
                        "name": "寒氣瀰漫",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/fairy/season2/chapter3/fairy_winter_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "薇薇安回到了她的小天地當中準備了良久，帶著一堆不知名的瓶瓶罐罐走了出來。",
                            "「啟程吧。」她這麼說著，然後趁妳不注意踩了妳一腳。",
                            "水中天地的傳送陣後，是一陣陣的刺骨寒風，白茫茫的漫天飄雪。",
                            "「不要離開我們身邊太遠...」薇薇安這麼說著，一腳踏進了另一邊。",
                            "踏進去的瞬間，只感覺到了直達靈魂的寒冷...",
                            "「跟緊我。」琉璃這麼說著，抓住了妳的手。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 跟隨琉璃和薇薇安前進 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 琉璃或薇薇安陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_winter_2",
                        "name": "鏤冰斸雪",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_winter_1"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season2/chapter3/fairy_winter_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "擊破寒風屏障核心之後，妳們便潛入水中，尋找封印之地的門戶—「霜星教堂」。",
                            "霜星教堂在最為繁榮之時，神蹟頻頻，可是受到萬千信徒供奉的香火的。",
                            "只是沒落的現在，遺址裡又會隱藏著什麼樣的危機呢？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 探索霜星教堂遺址 </td></tr> <tr><th> <font color=red>失敗條件</font> </th><td> 琉璃或薇薇安陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "fairy_winter_3",
                        "name": "幽明永隔",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "fairy_winter_2"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season2/chapter3/fairy_winter_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "上古封印之地，「他」的封印之處。",
                            "操控著璃汐身體的「他」現在就在這裡等候著妳的到來。",
                            "緊張的氛圍令妳感到十分壓抑。",
                            "即將來臨的戰鬥，應該就是最終決戰了。",
                            "但是，為什麼總覺得這種場面有點熟悉呢？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找璃汐 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "season2_chapter0",
                "name": "特別挑戰",
                "open": true,
                "badgeCodes": [
                    "fairy_life"
                ],
                "description": [
                    "通關任務章節《霜雪千年》解鎖特別關卡「浮生若夢」。",
                    "　",
                    "欲觀看後記，需要完成挑戰以擁有下列勳章：",
                    "<ul><li>彼岸雙生<br>→　於關卡「自然啟靈」中，進入並通關「雙子」路線</li><br><li>彼此的家人<br>→　於關卡「自然啟靈」中，進入並通關「朋友」路線</li><br><li>時光之花<br>→　於關卡「生如夏花」中，在關卡開啟狀態下，單人無傷通關</li><br><li>花靈之星<br>→　於關卡「浮生若夢」中，單人通關</li><br><li>花靈宮任務極限勳章：27<br>→　以最低人數挑戰任務極限，並完成所有27個花靈宮關卡</li></ul>"
                ],
                "missions": [
                    {
                        "code": "fairy_life",
                        "name": "浮生若夢",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireChapter": "season2_chapter3"
                        },
                        "file": "CG.FlowerFairyPalace/fairy/season2/chapter0/fairy_life.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "浮生即如虛茫，既夢幻又真實。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 通過試煉 </td></tr> <tr><th> 參與陣營 </th><td> <font color=pink>花靈宮</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_afterstory_fairy",
                        "name": "後記",
                        "open": {
                            "requireBadge": [
                                "fairy_tutorial_twins",
                                "fairy_tutorial_witch",
                                "fairy_phantom_nohit",
                                "fairy_life",
                                "fairy_challenge_27"
                            ]
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "感謝大家遊玩花靈宮關卡。",
                            "順便還完成一些挑戰型的成就，取得要看見這段文字的勳章。",
                            "花靈宮的構思從我舊版在做同人陣「極限技能大闖關」時開始已經在構思了。",
                            "主要原因是之前看見H.T做了個盜賊幫，那時我的心態就是「我也能做！」的樣子。",
                            "現在花靈小刀的第一級技能：自然庇祐，其實就是同人陣裡第三的小刀技能（範圍補血）。",
                            "還有另外一些技能的構思也是在製作時，還有和朋友一起破關時構思出來的。",
                            "當然因為舊版壞掉了所以構思被迫終止了。",
                            "　",
                            "新版的花靈宮，第一版是在2021年8月29日已經完成並公開了，不過那時候的第二級技能並沒有完善。",
                            "後來，我和某作者一樣因為小哈隨便更新官方模組連帶影響公開版本的問題爆氣了。",
                            "那時候我越想越氣，然後乾脆地刪掉了整個花靈宮專案。",
                            "然後，我沒幾天就後悔了，反手又把專案弄回來了。",
                            "不過那時候我並不想做回花靈宮，而是受半杯水的任務啟發，做了一系列的一命150%任務。",
                            "當然，就是劇情和內核和半杯水任務根本沒有半點關系的百合花園系列了。",
                            "　",
                            "第二版的花靈宮是在百合花園完結的兩個月後公開的。",
                            "中間這兩個月除了休息，也有在設計花靈宮的技能，以及學習怎麼寫自訂動作、檢查、觸發等。",
                            "後面花靈宮也擺脫了第一版需要事件表寫技能的操作，",
                            "由雪姬、不會取名字教了我怎麼去寫自訂陣營、技能。",
                            "後面我還問到了H.T，要到了盜賊幫技能的資料去以代碼復刻盜賊幫的技能。",
                            "　",
                            "總而言之，歷時2年11個月的花靈宮系列關卡終於完滿結束了。",
                            "感謝大家對花靈宮系列關卡的支持。",
                            "接下來的應該會為盜賊幫、無魂軍等其他同人陣營，",
                            "在取得作者同意後，做一個「同人陣營的同人陣」系列關卡。",
                            "敬請期待！"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "聖石啟示錄",
        "chapters": [
            {
                "code": "info_thief_season1",
                "name": "第一部 - 曙光乍現",
                "open": true,
                "badgeCodes": [
                    "thief_challenge_3",
                    "thief_challenge_6",
                    "thief_challenge_9",
                    "thief_challenge_12",
                    "thief_challenge_15",
                    "thief_challenge_18",
                    "thief_challenge_21",
                    "thief_challenge_24",
                    "thief_challenge_27"
                ],
                "description": [
                    "任務模式以章節分段，提供一系列任務幫助玩家進入光暈故事的世界。",
                    "在某些任務中探索有可能取得商店道具或尋得武功拳譜等贈品。",
                    "完成任務可解鎖下一段故事的任務章節。已完成的任務在章節重置後，仍可以重覆遊玩，但無法獲得完成任務後的獎勵。",
                    "以最低玩家人數完成任務後，可累積「極限模式」的勳章，這些勳章是光暈中最難取得的榮耀之一。"
                ],
                "missions": [
                    {
                        "code": "info_mission_placeholder_thief1",
                        "name": "",
                        "open": {
                            "requireMission": "info_mission_placeholder"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": []
                    }
                ]
            },
            {
                "code": "thief_season1_chapter0",
                "name": "光暈戰記入門教學",
                "open": true,
                "badgeCodes": [
                    "thief_tutorial",
                    "thief_tutorial_despair",
                    "thief_tutorial_undercover"
                ],
                "description": [
                    "介紹光暈戰記的各項系統及玩法，是新手入門最快的方法。",
                    "「對一個能單破的人，我們其實就不用太多指教了。」—某不願意透露姓名的神秘嘉賓，於2024年的名言"
                ],
                "missions": [
                    {
                        "code": "thief_tutorial",
                        "name": "素養培訓",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter0/thief_tutorial.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "課程中將有一位堂主引導你進行加入忠義會前的戰鬥素養培訓。",
                            "　",
                            "<table width=400px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 完成戰鬥素養培訓 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "thief_season1_chapter1",
                "name": "晨曦衛士試煉",
                "open": {
                    "requireChapter": "thief_season1_chapter0"
                },
                "badgeCodes": [
                    "thief_train"
                ],
                "description": [
                    "加入忠義會之後，你就必須提供戰力、財力、權力以及勞動力中的一項。",
                    "作為曾經是平民一份子的你，或許只能提供戰力或勞動力了。",
                    "當然，相比於做苦力，肯定是戰鬥人員獲得的優待更好。",
                    "幸好，忠義會不同於傭兵團，戰鬥訓練不需要讓你與其他成員相互廝殺。"
                ],
                "missions": [
                    {
                        "code": "thief_train_1",
                        "name": "其疾如風",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter1/thief_train_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "晨曦衛士，是忠義會對通過基礎戰鬥訓練的人員的稱呼。",
                            "作為晨曦衛士試煉的第一關，便是通過堂主花影所設下的「無垠長廊」。",
                            "你需要學會應對不同地形與武器的方法，才能繼續下一個試煉。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 到達長廊的另一端 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_train_2",
                        "name": "其徐如林",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_train_1"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter1/thief_train_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "學會應對不同地形與武器後，下一項便是將忠義會教給你的技能融會貫通。",
                            "只要靜下心思，你就能利用技能特性去一一攻克眼前的難關。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 熟練使用技能以應對眼前的試煉 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_train_3",
                        "name": "侵略如火",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_train_2"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter1/thief_train_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "完成技能應用訓練，最後一關便是實戰訓練了。",
                            "只是，僅靠你和堂主，有辦法攻陷眼前這個帝國據點嗎？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 攻陷帕斯特據點 </td></tr>  <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 花影陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "thief_season1_chapter2",
                "name": "失落島嶼",
                "open": {
                    "requireChapter": "thief_season1_chapter1"
                },
                "badgeCodes": [
                    "thief_lost"
                ],
                "description": [
                    "花影截獲了一封帝國線報，情報顯示帝國近期正準備前往古文明「瑪雅」遺址考古。",
                    "你獲承接起這項艱鉅而危險的任務，前往那被時間封存的神秘失落島嶼。",
                    "此行不僅充滿未知與險阻，更是智慧與勇氣的試煉。",
                    "將古文明的寶藏帶回忠義會吧！"
                ],
                "missions": [
                    {
                        "code": "thief_lost_1",
                        "name": "暗夜潛航",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter2/thief_lost_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "在無垠的夜色包裹中，你悄然接近了那艘載往失落島嶼的帝國船隻。",
                            "隱匿於暗影之中你，每一步都需謹慎以免洩露身形。",
                            "收集航線情報，尋找進入的破綻，這是你邁向下一段旅程的關鍵。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 收集線索並潛入船隻 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 被帝國軍發現蹤跡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_lost_2",
                        "name": "幽影遺島",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_lost_1"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter2/thief_lost_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "你的腳步踏上這片被古老傳說環繞的孤島。",
                            "島上隱藏著古文明的斷影，只有敏銳的觀察與冷靜的判斷，才能讓你探尋那屬於失落文明的線索。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 搜索古文明遺址 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_lost_3",
                        "name": "血染殘陽",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_lost_2"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter2/thief_lost_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "你的蹤跡被發現，你被困在敵艦深處，四面楚歌。",
                            "甲板上腳步聲雷動，船員與士兵從四面八方湧來——你必須獨自在這鋼鐵巨獸的腹地殺出一條血路。",
                            "奪取控制權，駕馭這艘戰艦衝破帝國的海上封鎖，是你唯一的生路。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 在軍艦上存活並奪船突圍 </td></tr>  <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "thief_season1_chapter3",
                "name": "血月協奏曲",
                "open": {
                    "requireChapter": "thief_season1_chapter1"
                },
                "badgeCodes": [
                    "thief_concerto",
                    "thief_concerto_spare"
                ],
                "description": [
                    "為了奪取聖物「緋紅之淚」，你潛入了日月公國戒備森嚴的王室秘庫。",
                    "然而行動早已敗露，一場在血月見證下的致命追獵就此展開。"
                ],
                "missions": [
                    {
                        "code": "thief_concerto_1",
                        "name": "緋夜獵影",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter3/thief_concerto_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "王室禁衛軍似乎早已獲悉你的行動，這是一場精心策劃的埋伏。",
                            "在血紅的月光下，你深陷重圍，必須殺出一條通往北部森林的生路。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 向邪魔森林撤退 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_concerto_2",
                        "name": "致命探戈",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_concerto_1"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter3/thief_concerto_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "禁衛軍指揮官親率精銳，在邪魔森林中對你展開不死不休的追擊。",
                            "這是一場與死神共舞的致命遊戲，利用環境反擊是你唯一的生機。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗禁衛軍指揮官 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_concerto_3",
                        "name": "雲巔幻境",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_concerto_2"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter3/thief_concerto_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "擊敗指揮官後，你追蹤著一股神秘的能量波動來到懸崖之巔。",
                            "破曉的晨光刺穿雲層，一座本應只存在於傳說中的空島，正靜靜地懸浮於天際。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 啟動通往空島的古代裝置 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "thief_season1_chapter4",
                "name": "蒼穹遺頁",
                "open": {
                    "requireChapter": "thief_season1_chapter3"
                },
                "badgeCodes": [
                    "thief_heaven"
                ],
                "description": [
                    "成功啟動古代裝置後，你被傳送到了傳說中的天堂堡壘。",
                    "這座懸浮於雲端的遠古遺跡充滿神秘機關與智慧考驗，層層防護守衛著最深處的秘密。",
                    "唯有解開謎題、通過試煉，才能進入堡壘核心，獲取傳說中的天堂堡壘核心。"
                ],
                "missions": [
                    {
                        "code": "thief_heaven_1",
                        "name": "智慧之門",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter4/thief_heaven_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "天堂堡壘的入口被遠古謎題封鎖，複雜的符文與機關需要巧妙解讀。",
                            "唯有展現智慧，才能打開通往堡壘內部的大門。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 解開入口謎題 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 解謎失敗以致觸發防禦機制 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_heaven_2",
                        "name": "鐵衛試煉",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_heaven_1"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter4/thief_heaven_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "堡壘內部充滿了遠古機械守衛，它們各具特性，在長廊中往復巡邏。",
                            "觀察與思考是通過此處的關鍵，莽撞只會招致毀滅。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 到達地下一層入口 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_heaven_3",
                        "name": "機關迴廊",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_heaven_2"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season1/chapter4/thief_heaven_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "最後的考驗是精密運轉的機關迷陣，每一步都需要精準的判斷與時機把握。",
                            "穿越這片危險地帶，就能進入堡壘最深處的密室。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 獲取天堂堡壘核心 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "info_thief_season2",
                "name": "第二部 - 屠魔英雄",
                "open": true,
                "badgeCodes": [
                    "thief_challenge_3",
                    "thief_challenge_6",
                    "thief_challenge_9",
                    "thief_challenge_12",
                    "thief_challenge_15",
                    "thief_challenge_18",
                    "thief_challenge_21",
                    "thief_challenge_24",
                    "thief_challenge_27"
                ],
                "description": [
                    "任務模式以章節分段，提供一系列任務幫助玩家進入光暈故事的世界。",
                    "在某些任務中探索有可能取得商店道具或尋得武功拳譜等贈品。",
                    "完成任務可解鎖下一段故事的任務章節。已完成的任務在章節重置後，仍可以重覆遊玩，但無法獲得完成任務後的獎勵。",
                    "以最低玩家人數完成任務後，可累積「極限模式」的勳章，這些勳章是光暈中最難取得的榮耀之一。"
                ],
                "missions": [
                    {
                        "code": "info_mission_placeholder_thief2",
                        "name": "",
                        "open": {
                            "requireMission": "info_mission_placeholder"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": []
                    }
                ]
            },
            {
                "code": "thief_season2_chapter1",
                "name": "激流湧退",
                "open": {
                    "requireChapter": "thief_season1_chapter0"
                },
                "badgeCodes": [
                    "thief_recede"
                ],
                "description": [
                    "在堡壘密室中獲取天堂堡壘核心後，空島在你眼前逐漸消散，你被一個神奇泡泡送回地面。",
                    "然而，迎接你的不是自由，而是日月公國大軍嚴陣以待的死亡包圍網……"
                ],
                "missions": [
                    {
                        "code": "thief_recede_1",
                        "name": "困獸猶鬥",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/thief/season2/chapter1/thief_recede_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "當保護泡泡讓你在空中緩降之時，你發現落點正處於公國軍團包圍之中。",
                            "在你落地之時，軍團的攻擊如雨點般襲來。",
                            "你必須在包圍圈合攏前找到突破口。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 向西側河流撤退 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 保護泡泡的耐久耗盡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_recede_2",
                        "name": "破浪前行",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_recede_1"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season2/chapter1/thief_recede_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "湍急的河流讓你暫時躲過追兵，但公國的部隊早已在沿岸佈防。",
                            "如果能重新回到邪魔森林，一切或許還有希望。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 突破日月公國軍團的攔截 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_recede_3",
                        "name": "林深迷影",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_recede_2"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season2/chapter1/thief_recede_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "成功突破水上防線後，你進入了熟悉的邪魔森林深處。",
                            "公國派出的部隊緊隨其後，森林地形的天然迷宮，讓這些追兵暈頭轉向。",
                            "只是...前方為何會突然出現一片黑暗地？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 探索 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "thief_season2_chapter2",
                "name": "奇蹟於你",
                "open": {
                    "requireChapter": "thief_season2_chapter1"
                },
                "badgeCodes": [
                    "thief_miracle"
                ],
                "description": [
                    "深入洞穴深處，天堂堡壘核心在你手中泛起奇異的共鳴波紋。",
                    "這件遠古神器彷彿與你的靈魂產生了某種神秘的羈絆。",
                    "隨著核心的指引，你將一步步揭開寧寧所說的「奇蹟」真相。"
                ],
                "missions": [
                    {
                        "code": "thief_miracle_1",
                        "name": "共鳴啟示",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/thief/season2/chapter2/thief_miracle_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "天堂堡壘核心在你掌心綻放溫暖光暈，如同低語般與你心靈相通。",
                            "眼前的古老遺跡中，每一塊石壁都刻印著歲月的無情。",
                            "這裡，或許藏著與核心力量最為密切的真相。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 探索古老遺跡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_miracle_2",
                        "name": "命運試煉",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_miracle_1"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season2/chapter2/thief_miracle_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "踏入遺跡深處的大門，一道散發著神秘氣息的長廊橫亙眼前。",
                            "手中的核心震動愈發強烈，彷彿在回應著某個遠古的呼喚。",
                            "廊道兩側的壁畫中，那些古老的眼眸似乎正隨著你的腳步而轉動...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 穿過通道 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_miracle_3",
                        "name": "靈魂樂章",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_miracle_2"
                        },
                        "file": "CG.FlowerFairyPalace/thief/season2/chapter2/thief_miracle_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "通過試煉後，遺跡的核心聖殿終於向你敞開大門。",
                            "殿堂中央，一個難以名狀的存在靜立其中，四周散落著各式古老的樂器。",
                            "天堂堡壘核心驟然迸發璀璨光華，空氣中迴盪著若有似無的哼唱聲——",
                            "「哼~哼~哼~」那旋律既熟悉又陌生，彷彿來自記憶深處的召喚。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 與奇怪的「人」交談 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "thief_season2_chapter3",
                "name": "罪與罰",
                "open": {
                    "requireChapter": "thief_season2_chapter2"
                },
                "badgeCodes": [
                    "thief_sins"
                ],
                "description": [
                    "體內充盈著嶄新的力量，你滿懷信心地步出遺跡，卻迎面撞見哈斯卡帝國的援軍。",
                    "帝國第五騎士——【天秤的審判官】艾莉絲・露娜，正靜立於遺跡入口，等待執行她的審判。",
                    "這是一場心靈的試煉，神器「善惡天秤」將你無聲無息地拖入層層幻境，你將在不知不覺中歷經七宗罪的考驗。",
                    "你能否展現內心的真善美，從神器的裁決中掙脫？"
                ],
                "missions": [
                    {
                        "code": "thief_sins_1",
                        "name": "色慾",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "無數美麗的身影在迷霧中若隱若現，輕柔的呼喚聲在耳邊迴盪。",
                            "她們伸出誘人的雙手，邀請你進入永恆的歡愉之境。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 沉溺於溫柔鄉？ </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_sins_2",
                        "name": "暴食",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_sins_1"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "長桌上擺滿了珍饈美饌，美酒的香氣瀰漫在空氣中。",
                            "每一道菜餚都在散發著誘人的光澤，令人食指大動。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 盡情享用珍饈美饌？ </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_sins_3",
                        "name": "懶惰",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_sins_2"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "柔軟的床鋪散發著溫暖，舒適的環境讓人想要永遠停留。",
                            "這裡沒有煩惱與壓力，只有永恆的安寧與休息。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 沉眠於安逸中？ </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_sins_4",
                        "name": "憤怒",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_sins_3"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "熾熱的火焰在四周燃燒，心中的怒意如火山般翻騰。",
                            "眼前出現那些曾經傷害過你的人，復仇的慾望在召喚。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 釋放所有的怒火？ </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_sins_5",
                        "name": "嫉妒",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_sins_4"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "你看到他人擁有你渴望的一切，榮耀、財富、愛情應有盡有。",
                            "他們在你面前炫耀著幸福，刺痛著你的心。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 奪走他人的幸福？ </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_sins_6",
                        "name": "貪婪",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_sins_5"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "金銀珠寶堆積如山，權力的寶座就在眼前。",
                            "只要伸手就能擁有一切，無盡的財富在向你招手。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 佔有所有的財富？ </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "thief_sins_7",
                        "name": "傲慢",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "thief_sins_6"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "你站在世界的頂端，眾生如螻蟻般渺小。",
                            "無盡的力量在體內奔湧，讓你覺得自己無所不能。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 成為至高無上的存在？ </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "thief_season2_chapter0",
                "name": "特別挑戰",
                "open": true,
                "badgeCodes": [
                    "thief_dawn"
                ],
                "description": [
                    "通關任務章節《罪與罰》解鎖特別關卡「黎明挽歌」。",
                    "　",
                    "欲觀看後記，需要完成挑戰以擁有下列勳章：",
                    "<ul><li>絕望的未來<br>→　於關卡「素養培訓」中，進入並完成「被俘」路線</li><br><li>聖殿騎士之證<br>→　於關卡「素養培訓」中，進入並通關「英勇」路線</li><br><li>暮光家族徽章<br>→　於關卡「致命探戈」中，進入並完成「饒恕」路線</li><br><li>盜賊之星<br>→　於關卡「黎明挽歌」中，單人通關</li><br><li>盜賊幫任務極限勳章：27<br>→　以最低人數挑戰任務極限，並完成所有27個盜賊幫關卡</li></ul>"
                ],
                "missions": [
                    {
                        "code": "thief_dawn",
                        "name": "黎明挽歌",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireChapter": "thief_season2_chapter3"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "用盡你的全力，守護你的家園吧！",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊退帝國軍的攻勢 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 我方死傷慘重 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_afterstory_thief",
                        "name": "後記",
                        "open": {
                            "requireBadge": [
                                "thief_tutorial_despair",
                                "thief_tutorial_undercover",
                                "thief_concerto_spare",
                                "thief_dawn",
                                "thief_challenge_27"
                            ]
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "占位符"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "憶海迷途",
        "chapters": [
            {
                "code": "info_zombie_season1",
                "name": "第一部 - 曙光乍現",
                "open": true,
                "badgeCodes": [
                    "zombie_challenge_3",
                    "zombie_challenge_6",
                    "zombie_challenge_9",
                    "zombie_challenge_12",
                    "zombie_challenge_15",
                    "zombie_challenge_18",
                    "zombie_challenge_21",
                    "zombie_challenge_24",
                    "zombie_challenge_27"
                ],
                "description": [
                    "任務模式以章節分段，提供一系列任務幫助玩家進入光暈故事的世界。",
                    "在某些任務中探索有可能取得商店道具或尋得武功拳譜等贈品。",
                    "完成任務可解鎖下一段故事的任務章節。已完成的任務在章節重置後，仍可以重覆遊玩，但無法獲得完成任務後的獎勵。",
                    "以最低玩家人數完成任務後，可累積「極限模式」的勳章，這些勳章是光暈中最難取得的榮耀之一。"
                ],
                "missions": [
                    {
                        "code": "info_mission_placeholder_zombie1",
                        "name": "",
                        "open": {
                            "requireMission": "info_mission_placeholder"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": []
                    }
                ]
            },
            {
                "code": "zombie_season1_chapter0",
                "name": "光暈戰記入門教學",
                "open": true,
                "badgeCodes": [
                    "zombie_tutorial",
                    "zombie_tutorial_mutation"
                ],
                "description": [
                    "介紹光暈戰記的各項系統及玩法，是新手入門最快的方法。",
                    "「為什麼一大堆新手教學（」—某不願意透露姓名的單破狂魔，於2024年的名言"
                ],
                "missions": [
                    {
                        "code": "zombie_tutorial",
                        "name": "迷惘甦醒",
                        "maxPlayers": 1,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/zombie/season1/chapter0/zombie_tutorial.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "課程中將有一位無魂軍教官教導你使用武器和技能、如何辨別隊友以及戰場常識。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 完成智力恢復課程 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "zombie_season1_chapter1",
                "name": "無魂新生啟示",
                "open": {
                    "requireChapter": "zombie_season1_chapter0"
                },
                "badgeCodes": [
                    "zombie_train"
                ],
                "description": [
                    "無魂軍為一群因為不明原因而恢復了人類意識的無魂屍，在重獲新生後，所組成的一個軍團。",
                    "他們拿起武器、進行創作和研究，目的是為了在世界上尋找自己過往的記憶以及留下的痕跡。",
                    "在獲得智力測驗證書後，便能夠前往報名「無魂軍入伍測驗」，通過此測驗將可以正式成為無魂軍。"
                ],
                "missions": [
                    {
                        "code": "zombie_train_1",
                        "name": "朽骨重肉",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/zombie/season1/chapter1/zombie_train_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "入伍測驗的第一步就是朽骨重肉。",
                            "你需要在聖火洗禮中燃盡腐肉，並聖水洗禮中獲取過往的身軀。",
                            "最後，你必須通過機關陣，以此證明你已經能熟練使用這副重獲新生的身軀。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 獲得新生 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_train_2",
                        "name": "砥礪前行",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_train_1"
                        },
                        "file": "CG.FlowerFairyPalace/zombie/season1/chapter1/zombie_train_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "在朽骨重肉後，你需要掌握並熟練地運用無魂軍教官給你的技能。",
                            "雖然沒有記憶，但不論你過往從屬於什麼陣營，現在都只剩下無魂軍教給你的技能了，這將是你往後的立身之本。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 完成無魂軍技能應用訓練 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_train_3",
                        "name": "碧血丹心",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_train_2"
                        },
                        "file": "CG.FlowerFairyPalace/zombie/season1/chapter1/zombie_train_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "能夠在訓練場熟練自如地運用技能後，最後一關便是實戰測驗。",
                            "你將在這裡展示出你的戰鬥天賦，讓無魂軍確保你往後擁有保護自己的能力。",
                            "但，這真的只有實戰測驗這麼簡單...嗎？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 通過實戰測驗 </td></tr>  <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "zombie_season1_chapter2",
                "name": "心靈彼岸",
                "open": {
                    "requireChapter": "zombie_season1_chapter1"
                },
                "badgeCodes": [
                    "zombie_heart"
                ],
                "description": [
                    "已然作為無魂軍一份子的你，在一次偶然的直覺中，你發現了自己沒有心跳的事實。",
                    "怎麼回事？重獲新生後，自己的身體應該與常人無異了啊？",
                    "當你對此抱有疑惑時，路過你旁邊的青玉似乎發現了你的狀況。",
                    "「我們本來就是一些因為各種原因而復活的人。」",
                    "「然而，這個世界不允許我們以這種近乎毫無代價的方式復活，」",
                    "「因此，我們也被稱作無心之人。」",
                    "「儘管我們身體內仍有心臟，身體仍是溫熱，但我們的心卻仍是冰冷的。」",
                    "「這就是我們的『罪』。我們必需做一些能夠贖回『復活』之罪的行為，才能讓我們的心重新跳動。」"
                ],
                "missions": [
                    {
                        "code": "zombie_heart_1",
                        "name": "心理作用",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "file": "CG.FlowerFairyPalace/zombie/season1/chapter2/zombie_heart_1.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "自從那次發現後，你總覺得自己的身體在慢慢變冷。",
                            "你開始害怕自己會再次死去，毫無意義的死去。",
                            "你覺得你必需做點什麼事來阻止這種情況的發生。",
                            "當你尋求青玉的幫助時，青玉卻準備帶你外出？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 跟隨青玉 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 禁止使用 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_heart_2",
                        "name": "歧路亡羊",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_heart_1",
                            "requireState": [
                                {
                                    "key": "zombie_heart_direction",
                                    "value": "1"
                                }
                            ]
                        },
                        "file": "CG.FlowerFairyPalace/zombie/season1/chapter2/zombie_heart_2.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "很不幸地，你們迷路了。",
                            "幸好，澄妤認得前方的人身上的衣著，他們似乎從屬於天魂盜賊團。",
                            "承此春風，跟隨並消滅這些盜賊吧，不能讓他們有和大部隊會合的機會！",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找天魂盜賊團的駐點<br>消滅所有行進中的盜賊 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 青玉陣亡<br>澄妤陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_heart_3",
                        "name": "義之所向",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_heart_1",
                            "requireState": [
                                {
                                    "key": "zombie_heart_route",
                                    "value": "2",
                                    "lockMessage": "需要先完成任務: 歧路亡羊"
                                }
                            ]
                        },
                        "file": "CG.FlowerFairyPalace/zombie/season1/chapter2/zombie_heart_3.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "前方就是天魂盜賊團的臨時據點了。",
                            "為了任務賞金，亦或是為了守護無辜的居民，把這些盜賊全數殲滅吧！",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 掃蕩據點內的所有敵人 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 青玉陣亡<br>澄妤陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_heart_4",
                        "name": "不動如山",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_heart_3"
                        },
                        "file": "CG.FlowerFairyPalace/zombie/season1/chapter2/zombie_heart_4.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "總算是清理乾淨了。然而，正當你們到達星羅鎮時，卻發現南方在不久前曾遭受斗靈盜賊團的進攻。",
                            "沒有時間多想了，必須趕緊前往支援，趁著盜賊進攻的空蕩進城協防。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 抵御斗靈盜賊團的攻勢 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 青玉陣亡<br>澄妤陣亡<br>星羅鎮居民出現傷亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_heart_5",
                        "name": "照我以火",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_heart_4"
                        },
                        "file": "CG.FlowerFairyPalace/zombie/season1/chapter2/zombie_heart_5.events",
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "好不容易抵御了這波攻勢，卻看見兩個兇神惡煞的盜賊前來。",
                            "難怪進攻方向會是一南一北，也難怪先前掃蕩天魂盜賊團的據點時，他們像是一盤散沙。",
                            "天魂盜賊團的首領竟然在此，而且看起來與斗靈盜賊團的首領還是兄弟！",
                            "面對如此光景，你們還有信心守好星羅鎮嗎？",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 與天魂、斗靈盜賊團首領進行決戰 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 青玉陣亡<br>澄妤陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "zombie_season1_chapter3",
                "name": "寒刃映仇光",
                "open": {
                    "requireChapter": "zombie_season1_chapter2"
                },
                "badgeCodes": [
                    "zombie_vengeance"
                ],
                "description": [
                    "自你斬滅天魂盜賊團和斗靈盜賊團已過去3年了。",
                    "這些日子你每天都在執行各種任務，但記憶卻從未想起過半分。",
                    "難道，尋找秘境是唯一的出路？",
                    "正當你這麼想著的時候，青玉突然帶來了一則壞消息。",
                    "「你被掛上懸賞令了，賞金奇高，怪事！」",
                    "「這裡對你來說已經不安全了，你還是盡快轉移到安全地點吧。」"
                ],
                "missions": [
                    {
                        "code": "zombie_vengeance_1",
                        "name": "筆似刀",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "一大批傭兵殺手依著懸賞令和你的消息前來嘗試取走賞金。",
                            "當務之急是轉移到安全地點，但你需要先解決包圍你的這一波傭兵。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 逃離包圍圈 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 青玉陣亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_vengeance_2",
                        "name": "心似刀",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_vengeance_1"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "在逃亡途中，激烈的戰鬥觸動了塵封的記憶。",
                            "你突然回想起三年前斬滅盜賊團的片段——那個倒在血泊中的男人，維基‧萬森。",
                            "這段記憶如利刃般刺痛你的心，預示著這次追殺似乎和這段記憶緊密相連。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 突破追兵包圍並繼續逃亡 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_vengeance_3",
                        "name": "身似刀",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_vengeance_2"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "隨著逃亡深入，你敏銳地察覺到追兵的意圖——他們在刻意將你驅趕向某個特定方向。",
                            "與其在這消耗體力，不如順著他們的意圖前進，看看幕後黑手究竟在何處等待。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 順著敵人意圖抵達指定地點 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_vengeance_4",
                        "name": "我似刀",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_vengeance_3"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "一切都明白了。",
                            "懸賞你的，是維基‧萬森的養女，薇薇安娜‧萬森。",
                            "此刻，她正在前方等你前來，正準備手刃仇敵。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗薇薇安娜‧萬森 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "zombie_season1_chapter4",
                "name": "表與裡",
                "open": {
                    "requireChapter": "zombie_season1_chapter3"
                },
                "badgeCodes": [
                    "zombie_innerworld"
                ],
                "description": [
                    "「裡世界」——這是薇薇安娜生命終章留下的唯一謎題。",
                    "然而，當你回到基地向青玉求證時，這位一向有問必答的伙伴卻對此諱莫如深。",
                    "裡世界彷彿成了一個禁忌之名，你只能獨自探索背後的真相。"
                ],
                "missions": [
                    {
                        "code": "zombie_innerworld_1",
                        "name": "未言的秘密",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "意外地，基地中的資料室有著不少有關裡世界的書藉。",
                            "儘管大多只是話本遊記，卻是你如今唯一的線索。",
                            "按照書中的說法，帝國掌握著最容易進入裡世界的道路。",
                            "而你如今，必須孤身在帝國森嚴的防守中，找出唯一正確的方向。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 尋找通往裡世界的線索 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 被帝國境衛軍發現 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_innerworld_2",
                        "name": "裡世界之鑰",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_innerworld_1"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "在帝國邊境深處，你發現了一處古老的遺跡，牆上刻滿了未知的符文。",
                            "這些符文似乎在指引著某種儀式，需要按照特定順序激活才能開啟通道。",
                            "帝國的巡邏隊正在附近搜索，必須在他們發現前完成儀式。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 解讀古代符文並完成啟動儀式 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 儀式失敗以致觸發遺跡防禦機制 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_innerworld_3",
                        "name": "空間旋渦",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_innerworld_2"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "儀式完成後，遺跡中央出現了一個不穩定的空間旋渦，但帝國援軍也在此時趕到。",
                            "這支精銳部隊意圖阻止你進入裡世界，必須在旋渦崩塌前消滅所有敵人。",
                            "時間緊迫，每一秒都關乎著能否成功踏入這個未知領域。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 消滅帝國援軍並進入空間旋渦 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 未能在旋渦崩塌前進入裡世界 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "info_zombie_season2",
                "name": "第二部 - 屠魔英雄",
                "open": true,
                "badgeCodes": [
                    "zombie_challenge_3",
                    "zombie_challenge_6",
                    "zombie_challenge_9",
                    "zombie_challenge_12",
                    "zombie_challenge_15",
                    "zombie_challenge_18",
                    "zombie_challenge_21",
                    "zombie_challenge_24",
                    "zombie_challenge_27"
                ],
                "description": [
                    "任務模式以章節分段，提供一系列任務幫助玩家進入光暈故事的世界。",
                    "在某些任務中探索有可能取得商店道具或尋得武功拳譜等贈品。",
                    "完成任務可解鎖下一段故事的任務章節。已完成的任務在章節重置後，仍可以重覆遊玩，但無法獲得完成任務後的獎勵。",
                    "以最低玩家人數完成任務後，可累積「極限模式」的勳章，這些勳章是光暈中最難取得的榮耀之一。"
                ],
                "missions": [
                    {
                        "code": "info_mission_placeholder_zombie2",
                        "name": "",
                        "open": {
                            "requireMission": "info_mission_placeholder"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": []
                    }
                ]
            },
            {
                "code": "zombie_season2_chapter1",
                "name": "記憶宮殿",
                "open": {
                    "requireChapter": "zombie_season1_chapter0"
                },
                "badgeCodes": [
                    "zombie_palace"
                ],
                "description": [
                    "你跟隨心中的指引踏入旋渦後，映入你眼中的是一座宏偉的宮殿...",
                    "這裡似乎是你內心深處的投影，每一處角落都藏著被遺忘的記憶碎片。",
                    "在這座記憶構築的迷宮中，你將直面過往，尋找屬於自己的真相。"
                ],
                "missions": [
                    {
                        "code": "zombie_palace_1",
                        "name": "入殿",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "殿門緊閉，殿外亦有數個給你帶你危險感覺的石像。",
                            "看來這些石像便是給挑戰者的第一道關卡了。",
                            "當你靠近時，石像突然甦醒，眼中閃爍著詭異的紅光。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 擊敗守護石像 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_palace_2",
                        "name": "探索",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_palace_1"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "進入宮殿後，你發現這裡是一個不斷變化的迷宮。",
                            "牆壁上浮現著你過往的記憶片段，有些熟悉，有些陌生。",
                            "必須在迷宮中找到正確的路徑，避開那些扭曲的記憶陷阱。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 穿越記憶迷宮 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_palace_3",
                        "name": "無垠",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_palace_2"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "迷宮的盡頭是一片無垠的星空，無數光錐在其中閃爍流轉。",
                            "每個光錐都代表著一段重要的記憶，你需要從中找到屬於自己的那一個。",
                            "當你觸碰正確的光錐時，整個記憶宮殿都將為之震動...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 在星空中尋找獨屬於你的光錐 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 迷失在星空之中 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "zombie_season2_chapter2",
                "name": "冥憶輪迴",
                "open": {
                    "requireChapter": "zombie_season2_chapter1"
                },
                "badgeCodes": [
                    "zombie_memory"
                ],
                "description": [
                    "觸碰光錐的瞬間，無數記憶碎片如潮水般湧入你的意識。",
                    "這些被遺忘的過往在你的思緒中不斷輪迴重現。",
                    "你必須直面每一個重要的記憶節點，在輪迴中找回完整的自我。",
                    "這是一場穿越時空的救贖之旅，也是解開所有謎團的關鍵。"
                ],
                "missions": [
                    {
                        "code": "zombie_memory_1",
                        "name": "記憶碎片‧一",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "這塊記憶碎片中閃現的是一場慘烈的搶灘作戰...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 完全體驗此片記憶 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 在幻境中死亡以致失去這片記憶 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_memory_2",
                        "name": "記憶碎片‧二",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_memory_1"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "這塊記憶碎片記錄的是一場驚心動魄的先登作戰...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 完全體驗此片記憶 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 在幻境中死亡以致失去這片記憶 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_memory_3",
                        "name": "記憶碎片‧三",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_memory_2"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "這塊記憶碎片重現了在古老山道中的穿梭經歷...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 完全體驗此片記憶 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 在幻境中死亡以致失去這片記憶 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_memory_4",
                        "name": "記憶碎片‧四",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_memory_3"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "這塊記憶碎片展現了一場在華麗宮殿內的激烈作戰...",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 完全體驗此片記憶 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 在幻境中死亡以致失去這片記憶 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "zombie_season2_chapter3",
                "name": "永序之輪",
                "open": {
                    "requireChapter": "zombie_season2_chapter2"
                },
                "badgeCodes": [
                    "zombie_eternal"
                ],
                "description": [
                    "當所有記憶碎片重新歸位，一座巨大的輪盤在你意識深處緩緩顯現。",
                    "這是維持記憶宇宙平衡的永序之輪，如今卻因記憶的混亂而停滯不前。",
                    "你必須修復這永恒運轉的秩序之輪，讓記憶的長河重新流淌，",
                    "在輪迴的盡頭，你將見證自我意識的終極綻放。"
                ],
                "missions": [
                    {
                        "code": "zombie_eternal_1",
                        "name": "秩序",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": true,
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "永序之輪的核心區域佈滿了錯亂的記憶能量，",
                            "必須按照特定的序列重新排列這些能量節點，",
                            "才能讓停滯的輪盤重新開始轉動。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 修復永序之輪的能量序列 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 能量序列錯亂引致輪盤崩壞 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_eternal_2",
                        "name": "輪迴",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_eternal_1"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "隨著輪盤開始轉動，你被捲入了記憶的輪迴洪流之中，",
                            "必須在不斷重演的過往片段中保持清醒，",
                            "找到通往輪盤核心的最終路徑。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 穿越記憶輪迴洪流抵達核心 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 在輪迴中迷失自我意識 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "zombie_eternal_3",
                        "name": "綻放",
                        "maxPlayers": 4,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireMission": "zombie_eternal_2"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "站在永序之輪的核心，你終於明瞭了一切，",
                            "將所有找回的記憶注入輪盤，讓完整的自我在此刻綻放，",
                            "這光芒將照亮你未來的道路。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 令永序之輪綻放光彩 </td></tr> <tr><th> 參與陣營 </th><td> <font color=magenta>無魂軍</font> </td></tr> <tr><th> 參與人數 </th><td> 1-4人 </td></tr> <tr><th> 近武能力 </th><td> 限用一般近武能力 </td></tr> </table>"
                        ]
                    }
                ]
            },
            {
                "code": "zombie_season2_chapter0",
                "name": "特別挑戰",
                "open": true,
                "badgeCodes": [
                    "zombie_reincarnation"
                ],
                "description": [
                    "通關任務章節《永序之輪》解鎖特別關卡「輪轉不息」。",
                    "　",
                    "欲觀看後記，需要完成挑戰以擁有下列勳章：",
                    "<ul><li>人形孽物<br>→　於關卡「迷惘甦醒」中，進入並完成「孽物」路線</li><br><li>無魂之星<br>→　於關卡「輪轉不息」中，單人通關</li><br><li>無魂軍任務極限勳章：27<br>→　以最低人數挑戰任務極限，並完成所有27個盜賊幫關卡</li></ul>"
                ],
                "missions": [
                    {
                        "code": "zombie_reincarnation",
                        "name": "輪轉不息",
                        "maxPlayers": 8,
                        "minPlayers": 1,
                        "useAbility": 2,
                        "open": {
                            "requireChapter": "zombie_season2_chapter3"
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "裡世界的遊魂正源源不斷地被你身上的「完整性」吸引。",
                            "你必須儘快回到表世界，以阻止它們附身。",
                            "　",
                            "<table width=425px> <tr><th width=100px> <font color=#32C432>主要目標</font> </th><td> 回到表世界 </td></tr> <tr><th width=100px> <font color=red>失敗條件</font> </th><td> 迷失在記憶宮殿之中 </td></tr> <tr><th> 參與陣營 </th><td> <font color=lime>盜賊幫</font> </td></tr> <tr><th> 參與人數 </th><td> 1-8人 </td></tr> <tr><th> 近武能力 </th><td> 開放玩家使用所有等級的近武能力 </td></tr> </table>"
                        ]
                    },
                    {
                        "code": "info_afterstory_zombie",
                        "name": "後記",
                        "open": {
                            "requireBadge": [
                                "zombie_tutorial_mutation",
                                "zombie_reincarnation",
                                "zombie_challenge_27"
                            ]
                        },
                        "camp": [
                            "royal",
                            "skydow",
                            "third"
                        ],
                        "description": [
                            "占位符"
                        ]
                    }
                ]
            }
        ]
    }
]