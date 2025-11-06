import { seasons } from './season.js';

document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('content');
    const loadingElement = document.getElementById('loading');

    // 獲取面板元素
    const seasonsPanel = document.getElementById('seasons-panel');
    const chaptersPanel = document.getElementById('chapters-panel');
    const missionsPanel = document.getElementById('missions-panel');
    const detailsPanel = document.getElementById('details-panel');

    // 當前選擇狀態
    let currentSeason = null;
    let currentChapter = null;
    let currentMission = null;

    // 過濾掉佔位符任務和章節
    function filterPlaceholders(data) {
        if (!data || !Array.isArray(data)) {
            console.error('數據格式錯誤: seasons 不是數組或未定義');
            return [];
        }

        const filteredSeasons = data.map(season => {
            // 檢查season結構
            if (!season) return null;

            // 檢查chapters是否存在且是數組
            const chapters = Array.isArray(season.chapters) ? season.chapters : [];

            const filteredChapters = chapters
                .filter(chapter => {
                    if (!chapter) return false;
                    return chapter.code && !chapter.code.includes('placeholder');
                })
                .map(chapter => {
                    const missions = Array.isArray(chapter.missions) ? chapter.missions : [];

                    const filteredMissions = missions.filter(mission => {
                        if (!mission) return false;
                        return mission.code && !mission.code.includes('placeholder');
                    });

                    return {
                        ...chapter,
                        missions: filteredMissions
                    };
                })
                .filter(chapter => {
                    // 保留有任務或有描述的章節
                    const hasMissions = chapter.missions && chapter.missions.length > 0;
                    const hasDescription = chapter.description &&
                        Array.isArray(chapter.description) &&
                        chapter.description.some(desc => desc && desc.trim() !== '');
                    return hasMissions || hasDescription;
                });

            return {
                ...season,
                chapters: filteredChapters
            };
        }).filter(season => season && season.chapters && season.chapters.length > 0);

        return filteredSeasons;
    }

    // 渲染季節列表
    function renderSeasons(seasonsData) {
        const seasonsList = document.getElementById('seasons-list');
        seasonsList.innerHTML = '';

        if (!seasonsData || seasonsData.length === 0) {
            seasonsList.innerHTML = '<div class="no-selection">沒有可顯示的季節數據</div>';
            return;
        }

        seasonsData.forEach((season, seasonIndex) => {
            const seasonElement = document.createElement('div');
            seasonElement.className = 'season-item';
            seasonElement.textContent = season.name || '未命名季節';
            seasonElement.dataset.index = seasonIndex;

            seasonElement.addEventListener('click', function () {
                // 移除其他季節的active狀態
                document.querySelectorAll('.season-item').forEach(item => {
                    item.classList.remove('active');
                });

                // 設置當前季節為active
                seasonElement.classList.add('active');

                // 更新當前選擇
                currentSeason = season;
                currentChapter = null;
                currentMission = null;

                // 渲染章節列表
                renderChapters(season.chapters);

                // 清空任務和詳情面板
                renderMissions([]);
                renderDetails(null, null, null);
            });

            seasonsList.appendChild(seasonElement);
        });

        // 顯示內容，隱藏加載提示
        contentContainer.style.display = 'flex';
        loadingElement.style.display = 'none';
    }

    // 渲染章節列表
    function renderChapters(chapters) {
        const chaptersList = document.getElementById('chapters-list');
        chaptersList.innerHTML = '';

        if (!chapters || !Array.isArray(chapters) || chapters.length === 0) {
            chaptersList.innerHTML = '<div class="no-selection">暫無章節信息</div>';
            return;
        }

        chapters.forEach((chapter, chapterIndex) => {
            if (!chapter) return;

            const chapterElement = document.createElement('div');
            chapterElement.className = 'chapter-item';
            chapterElement.textContent = chapter.name || '未命名章節';
            chapterElement.dataset.index = chapterIndex;

            chapterElement.addEventListener('click', function () {
                // 移除其他章節的active狀態
                document.querySelectorAll('.chapter-item').forEach(item => {
                    item.classList.remove('active');
                });

                // 設置當前章節為active
                chapterElement.classList.add('active');

                // 更新當前選擇
                currentChapter = chapter;
                currentMission = null;

                // 渲染任務列表
                renderMissions(chapter.missions);

                // 渲染章節詳情
                renderDetails(currentSeason, chapter, null);
            });

            chaptersList.appendChild(chapterElement);
        });
    }

    // 渲染任務列表
    function renderMissions(missions) {
        const missionsList = document.getElementById('missions-list');
        missionsList.innerHTML = '';

        if (!missions || !Array.isArray(missions) || missions.length === 0) {
            missionsList.innerHTML = '<div class="no-selection">暫無任務信息</div>';
            return;
        }

        missions.forEach((mission, missionIndex) => {
            if (!mission) return;

            const missionElement = document.createElement('div');
            missionElement.className = 'mission-item';
            missionElement.textContent = mission.name || '未命名任務';
            missionElement.dataset.index = missionIndex;

            missionElement.addEventListener('click', function () {
                // 移除其他任務的active狀態
                document.querySelectorAll('.mission-item').forEach(item => {
                    item.classList.remove('active');
                });

                // 設置當前任務為active
                missionElement.classList.add('active');

                // 更新當前選擇
                currentMission = mission;

                // 渲染任務詳情
                renderDetails(currentSeason, currentChapter, mission);
            });

            missionsList.appendChild(missionElement);
        });
    }

    // 渲染詳情面板
    function renderDetails(season, chapter, mission) {
        const detailsContent = document.getElementById('details-content');
        detailsContent.innerHTML = '';

        if (mission) {
            // 檢查是否為 info_afterstory_ 開頭的任務
            const isAfterstoryMission = mission.code && mission.code.startsWith('info_afterstory_');
            // 檢查是否為 info_ 開頭的任務
            const isInfoMission = mission.code && mission.code.startsWith('info_') && !isAfterstoryMission;

            // 顯示任務詳情
            const openConditionText = getOpenConditionText(mission.open);

            detailsContent.innerHTML = `
            <h3 class="mission-title">${mission.name || '未命名任務'}</h3>
            ${!isInfoMission ? `
            <div class="mission-details">
                ${!isAfterstoryMission ? `
                <div class="mission-detail-item">
                    <span class="mission-detail-label">任務代碼：</span>
                    <span class="task-code">${mission.code || '無代碼'}</span>
                </div>
                ` : ''}
                <div class="mission-detail-item">
                    <span class="mission-detail-label">開放狀態：</span>
                    <span>${openConditionText}</span>
                </div>
                ${!isAfterstoryMission && mission.file ? `
                <div class="mission-detail-item">
                    <span class="mission-detail-label">文件路徑：</span>
                    <div class="file-path">${mission.file}</div>
                </div>` : ''}
            </div>
            ` : ''}
            ${isAfterstoryMission ?
                    `<div class="mission-description"><p>請完成挑戰以閱讀後記。</p></div>` :
                    (mission.description && Array.isArray(mission.description) && mission.description.length > 0 ?
                        `<div class="mission-description">${renderDescription(mission.description)}</div>` : '')
                }
        `;
        } else if (chapter) {
            // 檢查是否為 info_afterstory_ 開頭的章節
            const isAfterstoryChapter = chapter.code && chapter.code.startsWith('info_afterstory_');
            // 檢查是否為 info_ 開頭的章節
            const isInfoChapter = chapter.code && chapter.code.startsWith('info_') && !isAfterstoryChapter;

            // 顯示章節詳情
            const chapterOpenConditionText = getOpenConditionText(chapter.open);

            detailsContent.innerHTML = `
            <h3 class="mission-title">${chapter.name || '未命名章節'}</h3>
            ${!isInfoChapter ? `
            <div class="mission-details">
                ${!isAfterstoryChapter ? `
                <div class="mission-detail-item">
                    <span class="mission-detail-label">章節代碼：</span>
                    <span class="task-code">${chapter.code || '無代碼'}</span>
                </div>
                ` : ''}
                <div class="mission-detail-item">
                    <span class="mission-detail-label">開放狀態：</span>
                    <span>${chapterOpenConditionText}</span>
                </div>
            </div>
            ` : ''}
            ${isAfterstoryChapter ?
                    `<div class="chapter-description"><p>請完成挑戰以閱讀後記。</p></div>` :
                    (chapter.description && Array.isArray(chapter.description) && chapter.description.length > 0 ?
                        `<div class="chapter-description">${renderDescription(chapter.description)}</div>` : '')
                }
            ${chapter.badgeCodes && Array.isArray(chapter.badgeCodes) && chapter.badgeCodes.length > 0 ?
                    `<div class="badge-section">
                    <h4>可以獲取的勳章：</h4>
                    <div class="badge-list">${renderBadges(chapter.badgeCodes)}</div>
                </div>` : ''}
        `;
        } else {
            // 顯示提示信息
            detailsContent.innerHTML = '<div class="no-selection">請選擇一個任務查看詳情</div>';
        }
    }

    // 渲染描述（處理HTML內容）
    function renderDescription(descriptionArray) {
        if (!descriptionArray || !Array.isArray(descriptionArray) || descriptionArray.length === 0) {
            return '';
        }

        return descriptionArray.map(desc => {
            if (!desc) return '';

            // 如果描述是數組，遞歸處理
            if (Array.isArray(desc)) {
                return renderDescription(desc);
            }

            // 將每行文本包裝在<p>標籤中
            if (typeof desc === 'string') {
                // 檢查是否是表格，如果是表格則直接返回
                if (desc.includes('<table') || desc.includes('</table>')) {
                    return desc;
                }
                // 否則包裝在<p>標籤中
                return `<p>${desc}</p>`;
            }

            return desc;
        }).join('');
    }

    // 渲染徽章列表
    function renderBadges(badgeCodes) {
        if (!badgeCodes || !Array.isArray(badgeCodes) || badgeCodes.length === 0) {
            return '';
        }

        return badgeCodes.map(badge => {
            if (!badge) return '';
            return `<span class="badge">${badge}</span>`;
        }).join('');
    }

    // 獲取開放條件文本
    function getOpenConditionText(openCondition) {
        return openCondition === true ? '<div class="condition-item">無條件開放</div>' : getConditionDetails(openCondition);
    }

    // 獲取條件詳情
    function getConditionDetails(openCondition) {
        if (typeof openCondition !== 'object') {
            return '';
        }

        let conditions = [];

        // 處理需要章節
        if (openCondition.requireChapter) {
            const chapters = Array.isArray(openCondition.requireChapter) ?
                openCondition.requireChapter : [openCondition.requireChapter];

            // 嘗試查找章節名稱
            const chapterContents = chapters.map(chapterCode => {
                const chapterName = findChapterName(chapterCode);
                return chapterName ? `${chapterName}` : chapterCode;
            });

            const content = chapterContents.length > 1 ?
                `<ul>${chapterContents.map(chapter => `<li>${chapter}</li>`).join('')}</ul>` :
                chapterContents[0];
            conditions.push({ label: '需要完成章節', content });
        }

        // 處理需要任務
        if (openCondition.requireMission) {
            const missions = Array.isArray(openCondition.requireMission) ?
                openCondition.requireMission : [openCondition.requireMission];

            // 分組處理單人練習任務和普通任務
            const singlePlayerMissions = [];
            const normalMissions = [];

            missions.forEach(missionCode => {
                if (isSinglePlayerMission(missionCode)) {
                    const formattedCondition = formatSinglePlayerCondition(missionCode);
                    singlePlayerMissions.push(formattedCondition);
                } else {
                    const missionName = findMissionName(missionCode);
                    normalMissions.push(missionName ? `${missionName}` : missionCode);
                }
            });

            // 處理單人練習任務
            if (singlePlayerMissions.length > 0) {
                const singlePlayerContent = singlePlayerMissions.length > 1 ?
                    `<ul>${singlePlayerMissions.map(mission => `<li>${mission}</li>`).join('')}</ul>` :
                    singlePlayerMissions[0];
                conditions.push({ label: '需要通過', content: singlePlayerContent });
            }

            // 處理普通任務
            if (normalMissions.length > 0) {
                const normalContent = normalMissions.length > 1 ?
                    `<ul>${normalMissions.map(mission => `<li>${mission}</li>`).join('')}</ul>` :
                    normalMissions[0];
                conditions.push({ label: '需要完成任務', content: normalContent });
            }
        }

        // 處理需要勳章
        if (openCondition.requireBadge) {
            const badges = Array.isArray(openCondition.requireBadge) ?
                openCondition.requireBadge : [openCondition.requireBadge];
            const content = badges.length > 1 ?
                `<ul>${badges.map(badge => `<li>${badge}</li>`).join('')}</ul>` :
                badges[0];
            conditions.push({ label: '需要擁有勳章', content });
        }

        // 處理需要狀態
        if (openCondition.requireState && Array.isArray(openCondition.requireState) && openCondition.requireState.length > 0) {
            const states = openCondition.requireState.map(state => {
                const formattedValue = typeof state.value === 'string' ? `"${state.value}"` : state.value;
                return `${state.key} === ${formattedValue}`;
            });
            const content = states.length > 1 ?
                `<ul>${states.map(state => `<li>${state}</li>`).join('')}</ul>` :
                states[0];
            conditions.push({ label: '跨任務變數', content });
        }

        // 如果有條件才生成內容
        if (conditions.length > 0) {
            return conditions.map(condition => `
            <div class="condition-item">
                <span class="condition-label">${condition.label}：</span>
                <span class="condition-content-box">${condition.content}</span>
            </div>
        `).join('');
        }

        return '';
    }

    // 查找章節名稱
    function findChapterName(chapterCode) {
        if (!currentSeason || !currentSeason.chapters) return null;

        // 在當前季節中查找
        const chapter = currentSeason.chapters.find(ch => ch.code === chapterCode);
        if (chapter && chapter.name) {
            return chapter.name;
        }

        // 如果當前季節找不到，在所有季節中查找
        for (const season of seasons) {
            if (season.chapters) {
                const foundChapter = season.chapters.find(ch => ch.code === chapterCode);
                if (foundChapter && foundChapter.name) {
                    return foundChapter.name;
                }
            }
        }

        return null;
    }

    // 查找任務名稱 - 特別處理單人練習任務
    function findMissionName(missionCode) {
        // 特別處理單人練習任務的條件顯示
        if (isSinglePlayerMission(missionCode)) {
            return formatSinglePlayerCondition(missionCode);
        }

        if (currentChapter && currentChapter.missions) {
            // 在當前章節中查找
            const mission = currentChapter.missions.find(m => m.code === missionCode);
            if (mission && mission.name) {
                return mission.name;
            }
        }

        if (currentSeason && currentSeason.chapters) {
            // 在當前季節的所有章節中查找
            for (const chapter of currentSeason.chapters) {
                if (chapter.missions) {
                    const mission = chapter.missions.find(m => m.code === missionCode);
                    if (mission && mission.name) {
                        return mission.name;
                    }
                }
            }
        }

        // 如果當前季節找不到，在所有季節中查找
        for (const season of seasons) {
            if (season.chapters) {
                for (const chapter of season.chapters) {
                    if (chapter.missions) {
                        const mission = chapter.missions.find(m => m.code === missionCode);
                        if (mission && mission.name) {
                            return mission.name;
                        }
                    }
                }
            }
        }

        return null;
    }

    // 檢查是否為單人練習任務
    function isSinglePlayerMission(missionCode) {
        return missionCode && (
            missionCode.startsWith('battle_simulation_') ||
            missionCode.startsWith('bullet_hell_') ||
            missionCode.startsWith('flawless_blade_') ||
            missionCode.startsWith('kongfu_practice_') ||
            missionCode.startsWith('survival_mode_') ||
            missionCode.startsWith('slaughter_field_') ||
            missionCode.startsWith('flag_snatch_') ||
            missionCode.startsWith('zombie_invasion_')
        );
    }

    // 格式化單人練習任務條件顯示
    function formatSinglePlayerCondition(missionCode) {
        const parts = missionCode.split('_');

        // 獲取類別名稱映射
        const categoryMap = {
            'battle_simulation': '對戰模擬',
            'bullet_hell': '槍林彈雨',
            'flawless_blade': '刀光劍影',
            'kongfu_practice': '武道修行',
            'survival_mode': '生存模式',
            'slaughter_field': '殺戮戰場',
            'flag_snatch': '搶旗模式',
            'zombie_invasion': '殭屍來襲'
        };

        // 獲取難度名稱映射
        const difficultyMap = {
            'practice': '練習',
            'challenge': '挑戰',
            'beyond': '超越'
        };

        // 查找類別名稱
        let categoryName = '單人練習';
        if (parts.length >= 2) {
            const categoryKey = parts[0] + "_" + parts[1];
            if (categoryMap[categoryKey]) {
                categoryName = categoryMap[categoryKey];
            }
        }

        // 查找難度名稱
        let difficultyName = '';
        if (parts.length >= 3) {
            const difficultyKey = parts[2];
            if (difficultyMap[difficultyKey]) {
                difficultyName = difficultyMap[difficultyKey];
            }
        }

        if (difficultyName) {
            return `「${categoryName}」的「${difficultyName}」難度`;
        }

        return `「${categoryName}」`;
    }

    // 添加觸摸事件支持
    function addMobileSupport() {
        // 為所有可點擊元素添加觸摸事件
        const clickableElements = document.querySelectorAll('.season-item, .chapter-item, .mission-item');

        clickableElements.forEach(element => {
            // 防止雙擊縮放
            element.addEventListener('touchstart', function (e) {
                if (e.touches.length > 1) {
                    e.preventDefault();
                }
            }, { passive: false });

            // 防止長按選擇文本
            element.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
        });
    }

    // 在渲染完成後調用
    setTimeout(addMobileSupport, 100);

    // 初始化
    try {
        console.log('開始處理數據...');

        if (!seasons) {
            throw new Error('seasons 數據未定義');
        }

        const filteredSeasons = filterPlaceholders(seasons);
        console.log('過濾後的季節數據:', filteredSeasons);

        renderSeasons(filteredSeasons);

        console.log('數據渲染完成');

    } catch (error) {
        console.error('加載數據時出錯:', error);
        loadingElement.innerHTML = `
            <div class="error-message">
                <h3>加載數據時出錯</h3>
                <p>錯誤信息: ${error.message}</p>
                <p>請檢查控制台獲取詳細信息</p>
            </div>
        `;
    }

    // 在初始化部分添加移動端檢測
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            window.innerWidth <= 768;
    }

    // 在加載完成後根據設備類型優化
    if (isMobileDevice()) {
        document.body.classList.add('mobile-device');
    }
});