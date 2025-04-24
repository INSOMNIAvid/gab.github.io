// Game State
const gameState = {
    coins: parseInt(localStorage.getItem('insomniaCoins')) || 0,
    clickPower: 1,
    refCount: parseInt(localStorage.getItem('refCount')) || 0,
    refEarned: parseInt(localStorage.getItem('refEarned')) || 0,
    REF_REWARD: 100,
    premiumActive: localStorage.getItem('premiumActive') === 'true' || false,
    premiumEndDate: localStorage.getItem('premiumEndDate'),
    selectedButtonColor1: localStorage.getItem('buttonColor1') || "#6e45e2",
    selectedButtonColor2: localStorage.getItem('buttonColor2') || "#88d3ce",
    selectedBgColor: localStorage.getItem('bgColor') || "#1a1a2e",
    selectedProgressColor1: localStorage.getItem('progressColor1') || "#6e45e2",
    selectedProgressColor2: localStorage.getItem('progressColor2') || "#88d3ce",
    MAX_CLICKS: 200,
    clicksLeft: parseInt(localStorage.getItem('clicksLeft')) || 200,
    regenStartTime: localStorage.getItem('regenStartTime') ? parseInt(localStorage.getItem('regenStartTime')) : Date.now(),
    REGEN_RATE: 1, // 1 click per second
    CLICK_DELAY: 300, // Delay before adding click in ms
    timerInterval: null,
    clickRefreshInterval: null,
    lastClickTime: 0,
    CLICK_COOLDOWN: 100, // Delay between clicks in ms
    currentLanguage: localStorage.getItem('language') || 'en',
    totalClicks: parseInt(localStorage.getItem('totalClicks')) || 0,
    completedQuests: JSON.parse(localStorage.getItem('completedQuests')) || [],
    paymentStatus: localStorage.getItem('paymentStatus') || 'not_started',
    dailyRewards: JSON.parse(localStorage.getItem('dailyRewards')) || {
        streak: 0,
        lastClaimed: null,
        claimedDays: []
    },
    customEmoji: localStorage.getItem('customEmoji') || '🌙',
    bgEmoji: localStorage.getItem('bgEmoji') || '⭐',
    playerName: localStorage.getItem('playerName') || 'Player',
    playerTag: localStorage.getItem('playerTag') || '#' + generatePlayerId(),
    playerLevel: parseInt(localStorage.getItem('playerLevel')) || 1,
    playerXP: parseInt(localStorage.getItem('playerXP')) || 0,
    achievements: JSON.parse(localStorage.getItem('achievements')) || {
        firstClick: { unlocked: false, progress: 0, max: 1 },
        hundredClicks: { unlocked: false, progress: 0, max: 100 },
        thousandClicks: { unlocked: false, progress: 0, max: 1000 },
        firstCoin: { unlocked: false, progress: 0, max: 1 },
        hundredCoins: { unlocked: false, progress: 0, max: 100 },
        thousandCoins: { unlocked: false, progress: 0, max: 1000 },
        firstRef: { unlocked: false, progress: 0, max: 1 },
        fiveRefs: { unlocked: false, progress: 0, max: 5 },
        tenRefs: { unlocked: false, progress: 0, max: 10 },
        firstQuest: { unlocked: false, progress: 0, max: 1 },
        allQuests: { unlocked: false, progress: 0, max: 4 },
        premium: { unlocked: false, progress: 0, max: 1 },
        firstFriend: { unlocked: false, progress: 0, max: 1 },
        joinClan: { unlocked: false, progress: 0, max: 1 }
    },
    friends: JSON.parse(localStorage.getItem('friends')) || [],
    clans: JSON.parse(localStorage.getItem('clans')) || [
        {
            id: 'clan1',
            name: 'Night Owls',
            tag: 'NO',
            icon: '🦉',
            level: 3,
            description: 'We click all night long!',
            members: [
                { id: 'admin1', name: 'Admin', tag: '#00001', role: 'leader' },
                { id: 'member1', name: 'Member1', tag: '#00002', role: 'member' },
                { id: 'member2', name: 'Member2', tag: '#00003', role: 'member' }
            ],
            totalClicks: 12500,
            created: Date.now() - 86400000 * 3 // 3 days ago
        },
        {
            id: 'clan2',
            name: 'Click Masters',
            tag: 'CM',
            icon: '👑',
            level: 5,
            description: 'The best clickers in the world!',
            members: [
                { id: 'admin2', name: 'Leader', tag: '#00004', role: 'leader' },
                { id: 'member3', name: 'Pro1', tag: '#00005', role: 'co-leader' },
                { id: 'member4', name: 'Pro2', tag: '#00006', role: 'member' },
                { id: 'member5', name: 'Noob', tag: '#00007', role: 'member' }
            ],
            totalClicks: 25000,
            created: Date.now() - 86400000 * 7 // 7 days ago
        },
        {
            id: 'clan3',
            name: 'Insomniacs',
            tag: 'INS',
            icon: '🌙',
            level: 2,
            description: 'We never sleep!',
            members: [
                { id: 'admin3', name: 'Boss', tag: '#00008', role: 'leader' },
                { id: 'member6', name: 'Helper', tag: '#00009', role: 'member' }
            ],
            totalClicks: 7500,
            created: Date.now() - 86400000 // 1 day ago
        }
    ],
    myClan: JSON.parse(localStorage.getItem('myClan')) || null,
    selectedFriend: null,
    selectedClan: null
};
// Game State with all new features
const gameState = {
    coins: parseInt(localStorage.getItem('insomniaCoins')) || 0,
    clickPower: 1,
    refCount: parseInt(localStorage.getItem('refCount')) || 0,
    refEarned: parseInt(localStorage.getItem('refEarned')) || 0,
    REF_REWARD: 100,
    premiumActive: localStorage.getItem('premiumActive') === 'true' || false,
    premiumEndDate: localStorage.getItem('premiumEndDate'),
    selectedButtonColor1: localStorage.getItem('buttonColor1') || "#6e45e2",
    selectedButtonColor2: localStorage.getItem('buttonColor2') || "#88d3ce",
    selectedBgColor: localStorage.getItem('bgColor') || "#1a1a2e",
    selectedProgressColor1: localStorage.getItem('progressColor1') || "#6e45e2",
    selectedProgressColor2: localStorage.getItem('progressColor2') || "#88d3ce",
    MAX_CLICKS: 200,
    clicksLeft: parseInt(localStorage.getItem('clicksLeft')) || 200,
    regenStartTime: localStorage.getItem('regenStartTime') ? parseInt(localStorage.getItem('regenStartTime')) : Date.now(),
    REGEN_RATE: 1, // 1 click per second
    CLICK_DELAY: 300, // Delay before adding click in ms
    timerInterval: null,
    clickRefreshInterval: null,
    lastClickTime: 0,
    CLICK_COOLDOWN: 100, // Delay between clicks in ms
    currentLanguage: localStorage.getItem('language') || 'en',
    totalClicks: parseInt(localStorage.getItem('totalClicks')) || 0,
    completedQuests: JSON.parse(localStorage.getItem('completedQuests')) || [],
    paymentStatus: localStorage.getItem('paymentStatus') || 'not_started',
    dailyRewards: JSON.parse(localStorage.getItem('dailyRewards')) || {
        streak: 0,
        lastClaimed: null,
        claimedDays: []
    },
    customEmoji: localStorage.getItem('customEmoji') || '🌙',
    bgEmoji: localStorage.getItem('bgEmoji') || '⭐',
    playerName: localStorage.getItem('playerName') || 'Player',
    playerTag: localStorage.getItem('playerTag') || '#' + generatePlayerId(),
    playerLevel: parseInt(localStorage.getItem('playerLevel')) || 1,
    playerXP: parseInt(localStorage.getItem('playerXP')) || 0,
    achievements: JSON.parse(localStorage.getItem('achievements')) || {
        firstClick: { unlocked: false, progress: 0, max: 1 },
        hundredClicks: { unlocked: false, progress: 0, max: 100 },
        thousandClicks: { unlocked: false, progress: 0, max: 1000 },
        firstCoin: { unlocked: false, progress: 0, max: 1 },
        hundredCoins: { unlocked: false, progress: 0, max: 100 },
        thousandCoins: { unlocked: false, progress: 0, max: 1000 },
        firstRef: { unlocked: false, progress: 0, max: 1 },
        fiveRefs: { unlocked: false, progress: 0, max: 5 },
        tenRefs: { unlocked: false, progress: 0, max: 10 },
        firstQuest: { unlocked: false, progress: 0, max: 1 },
        allQuests: { unlocked: false, progress: 0, max: 4 },
        premium: { unlocked: false, progress: 0, max: 1 },
        firstFriend: { unlocked: false, progress: 0, max: 1 },
        joinClan: { unlocked: false, progress: 0, max: 1 }
    },
    friends: JSON.parse(localStorage.getItem('friends')) || [],
    clans: JSON.parse(localStorage.getItem('clans')) || [
        {
            id: 'clan1',
            name: 'Night Owls',
            tag: 'NO',
            icon: '🦉',
            level: 3,
            description: 'We click all night long!',
            privacy: 'open',
            members: [
                { id: 'admin1', name: 'Admin', tag: '#00001', level: 5, role: 'leader' },
                { id: 'member1', name: 'Member1', tag: '#00002', level: 3, role: 'member' },
                { id: 'member2', name: 'Member2', tag: '#00003', level: 2, role: 'member' }
            ],
            totalClicks: 12500,
            created: Date.now() - 86400000 * 3 // 3 days ago
        },
        {
            id: 'clan2',
            name: 'Click Masters',
            tag: 'CM',
            icon: '👑',
            level: 5,
            description: 'The best clickers in the world!',
            privacy: 'closed',
            members: [
                { id: 'admin2', name: 'Leader', tag: '#00004', level: 7, role: 'leader' },
                { id: 'member3', name: 'Pro1', tag: '#00005', level: 5, role: 'co-leader' },
                { id: 'member4', name: 'Pro2', tag: '#00006', level: 4, role: 'member' },
                { id: 'member5', name: 'Noob', tag: '#00007', level: 1, role: 'member' }
            ],
            totalClicks: 25000,
            created: Date.now() - 86400000 * 7 // 7 days ago
        },
        {
            id: 'clan3',
            name: 'Insomniacs',
            tag: 'INS',
            icon: '🌙',
            level: 2,
            description: 'We never sleep!',
            privacy: 'open',
            members: [
                { id: 'admin3', name: 'Boss', tag: '#00008', level: 4, role: 'leader' },
                { id: 'member6', name: 'Helper', tag: '#00009', level: 2, role: 'member' }
            ],
            totalClicks: 7500,
            created: Date.now() - 86400000 // 1 day ago
        }
    ],
    myClan: JSON.parse(localStorage.getItem('myClan')) || null,
    selectedFriend: null,
    selectedClan: null,
    soundEnabled: localStorage.getItem('soundEnabled') !== 'false',
    musicEnabled: localStorage.getItem('musicEnabled') !== 'false',
    theme: localStorage.getItem('theme') || 'dark',
    lastOfflineTime: localStorage.getItem('lastOfflineTime') || Date.now(),
    antiCheat: {
        lastClickTimestamp: 0,
        maxClicksPerSecond: 20,
        maxCoinsPerHour: 10000
    }
};

// Audio elements
const audioElements = {
    click: document.getElementById('click-sound'),
    coin: document.getElementById('coin-sound'),
    premium: document.getElementById('premium-sound'),
    error: document.getElementById('error-sound'),
    music: document.getElementById('bg-music')
};

// Play sound with volume control
function playSound(sound, volume = 0.5) {
    if (!gameState.soundEnabled) return;
    
    try {
        audioElements[sound].currentTime = 0;
        audioElements[sound].volume = volume;
        audioElements[sound].play();
    } catch (e) {
        console.error("Error playing sound:", e);
    }
}

// Toggle sound
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    localStorage.setItem('soundEnabled', gameState.soundEnabled);
    
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
        soundToggle.innerHTML = `<i>${gameState.soundEnabled ? '🔊' : '🔇'}</i> <span data-i18n="soundToggle">Sound: ${gameState.soundEnabled ? 'ON' : 'OFF'}</span>`;
        translatePage(gameState.currentLanguage);
    }
    
    showToast(`Sound ${gameState.soundEnabled ? 'enabled' : 'disabled'}`);
}

// Toggle music
function toggleMusic() {
    gameState.musicEnabled = !gameState.musicEnabled;
    localStorage.setItem('musicEnabled', gameState.musicEnabled);
    
    if (gameState.musicEnabled) {
        audioElements.music.volume = 0.3;
        audioElements.music.play().catch(e => console.log("Audio play failed:", e));
    } else {
        audioElements.music.pause();
    }
    
    showToast(`Music ${gameState.musicEnabled ? 'enabled' : 'disabled'}`);
}

// Toggle theme
function toggleTheme() {
    gameState.theme = gameState.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', gameState.theme);
    applyTheme();
}

// Apply current theme
function applyTheme() {
    document.body.className = `${gameState.theme}-theme`;
}

// Calculate offline earnings
function calculateOfflineEarnings() {
    if (!gameState.lastOfflineTime) return;
    
    const now = Date.now();
    const offlineTime = Math.min((now - gameState.lastOfflineTime) / 1000, 86400); // Max 24 hours
    const offlineHours = offlineTime / 3600;
    
    if (offlineHours < 0.1) return; // Less than 6 minutes
    
    // Calculate earnings based on click rate and power
    const clicksPerHour = gameState.premiumActive ? 1000 : 500; // Estimated clicks per hour
    const earnings = Math.floor(clicksPerHour * offlineHours * gameState.clickPower * 0.8); // 80% of normal rate
    
    if (earnings > 0) {
        gameState.coins += earnings;
        updateBalance();
        
        const hours = Math.floor(offlineHours);
        const minutes = Math.floor((offlineHours % 1) * 60);
        
        showToast(`While you were away (${hours}h ${minutes}m), you earned ${earnings} $INSOMNIA!`);
    }
    
    gameState.lastOfflineTime = now;
    localStorage.setItem('lastOfflineTime', gameState.lastOfflineTime);
}

// Anti-cheat system
function checkAntiCheat() {
    const now = Date.now();
    const timeSinceLastClick = now - gameState.antiCheat.lastClickTimestamp;
    
    // Reset if more than 1 second passed
    if (timeSinceLastClick > 1000) {
        gameState.antiCheat.lastClickTimestamp = now;
        return true;
    }
    
    // Check click rate
    if (gameState.antiCheat.clicksThisSecond > gameState.antiCheat.maxClicksPerSecond) {
        console.warn("Anti-cheat: Click rate too high");
        return false;
    }
    
    gameState.antiCheat.lastClickTimestamp = now;
    return true;
}

// [Previous helper functions remain the same, with additions below]

// Update Clan Settings
function updateClanSettings() {
    if (!gameState.myClan) return;
    
    // Check if player is clan leader
    const playerMember = gameState.myClan.members.find(m => m.id === 'player_' + gameState.playerTag);
    if (playerMember && playerMember.role === 'leader') {
        elements.clanSettingsBtn.style.display = 'block';
    } else {
        elements.clanSettingsBtn.style.display = 'none';
    }
}

// Show Clan Settings
function showClanSettings() {
    if (!gameState.myClan) return;
    
    elements.clanDescriptionEdit.value = gameState.myClan.description || '';
    elements.clanPrivacyEdit.value = gameState.myClan.privacy || 'open';
    
    // Select current icon
    document.querySelectorAll('#clan-settings-popup .clan-icon-option').forEach(option => {
        option.classList.remove('selected');
        if (option.textContent === gameState.myClan.icon) {
            option.classList.add('selected');
        }
    });
    
    elements.clanSettingsPopup.classList.add('active');
}

// Save Clan Settings
function saveClanSettings() {
    if (!gameState.myClan) return;
    
    gameState.myClan.description = elements.clanDescriptionEdit.value;
    gameState.myClan.privacy = elements.clanPrivacyEdit.value;
    
    // Get selected icon
    const selectedIconOption = document.querySelector('#clan-settings-popup .clan-icon-option.selected');
    if (selectedIconOption) {
        gameState.myClan.icon = selectedIconOption.textContent;
    }
    
    // Update in clans list
    const clanIndex = gameState.clans.findIndex(c => c.id === gameState.myClan.id);
    if (clanIndex !== -1) {
        gameState.clans[clanIndex] = gameState.myClan;
    }
    
    localStorage.setItem('myClan', JSON.stringify(gameState.myClan));
    localStorage.setItem('clans', JSON.stringify(gameState.clans));
    
    elements.clanSettingsPopup.classList.remove('active');
    updateClanInfo();
    updateTopClansList();
    
    showToast("Clan settings updated!");
}

// Add Friend by ID
function addFriendById() {
    const friendId = elements.friendIdInput.value.trim();
    if (!friendId) return;
    
    // In a real app, this would search for the friend by ID
    // For demo purposes, we'll simulate finding a friend
    
    // Check if already friends
    if (gameState.friends.some(f => f.tag === friendId)) {
        showToast("You're already friends with this player");
        return;
    }
    
    // Simulate finding a friend
    const newFriend = {
        id: 'friend_' + Date.now(),
        name: "Friend_" + Math.floor(Math.random() * 1000),
        tag: friendId,
        level: Math.floor(1 + Math.random() * 10),
        clicks: Math.floor(Math.random() * 5000),
        coins: Math.floor(Math.random() * 10000),
        clan: Math.random() > 0.5 ? 'Night Owls' : null
    };
    
    gameState.friends.push(newFriend);
    localStorage.setItem('friends', JSON.stringify(gameState.friends));
    
    elements.friendIdInput.value = '';
    updateFriendsList();
    checkAchievements();
    
    showToast("Friend added successfully!");
}

// [Previous initialization code remains the same, with additions below]

// Initialize the game with all new features
function initGame() {
    // Apply theme
    applyTheme();
    
    // Calculate offline earnings
    calculateOfflineEarnings();
    
    // Start background music if enabled
    if (gameState.musicEnabled) {
        audioElements.music.volume = 0.3;
        audioElements.music.play().catch(e => console.log("Audio play failed:", e));
    }
    
    // [Previous initialization code remains the same]
    
    // Add new event listeners
    elements.soundToggle.addEventListener('click', toggleSound);
    elements.clanSettingsBtn.addEventListener('click', showClanSettings);
    elements.closeClanSettings.addEventListener('click', () => {
        elements.clanSettingsPopup.classList.remove('active');
    });
    elements.saveClanSettings.addEventListener('click', saveClanSettings);
    elements.addFriendBtn.addEventListener('click', addFriendById);
    
    // Update sound toggle display
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
        soundToggle.innerHTML = `<i>${gameState.soundEnabled ? '🔊' : '🔇'}</i> <span data-i18n="soundToggle">Sound: ${gameState.soundEnabled ? 'ON' : 'OFF'}</span>`;
    }
    
    // Update clan settings button visibility
    updateClanSettings();
    
    // Initialize anti-cheat
    gameState.antiCheat.lastClickTimestamp = Date.now();
    gameState.antiCheat.clicksThisSecond = 0;
    
    setInterval(() => {
        gameState.antiCheat.clicksThisSecond = 0;
    }, 1000);
}

// [Rest of the previous code remains the same]

// Handle Click with sound and anti-cheat
function handleClick(event) {
    const now = Date.now();
    
    // Anti-cheat check
    if (!checkAntiCheat()) {
        playSound('error');
        return;
    }
    
    gameState.antiCheat.clicksThisSecond++;
    
    // Check click cooldown
    if (now - gameState.lastClickTime < gameState.CLICK_COOLDOWN) return;
    gameState.lastClickTime = now;
    
    // Check if clicks are available
    if (!gameState.premiumActive && gameState.clicksLeft <= 0) {
        playSound('error');
        return;
    }
    
    // Decrease clicks left if not premium
    if (!gameState.premiumActive) {
        gameState.clicksLeft--;
        updateClicksCounter();
    }
    
    // Calculate coins earned
    const coinsEarned = gameState.clickPower;
    gameState.coins += coinsEarned;
    gameState.totalClicks++;
    
    // Update UI
    updateBalance();
    animateClick();
    
    // Play sounds
    playSound('click');
    if (coinsEarned > 1) {
        playSound('coin', 0.3);
    }
    
    // Create effects
    createEmojiEffect(event.clientX, event.clientY);
    createCoinEffect(event.clientX, event.clientY, coinsEarned);
    
    // Save state
    localStorage.setItem('totalClicks', gameState.totalClicks);
    localStorage.setItem('regenStartTime', Date.now());
    
    // Check achievements
    checkAchievements();
    checkClickQuest();
    
    // Update clan stats if in a clan
    if (gameState.myClan) {
        gameState.myClan.totalClicks = (gameState.myClan.totalClicks || 0) + 1;
        localStorage.setItem('myClan', JSON.stringify(gameState.myClan));
        
        // Update clan in the clans list
        const clanIndex = gameState.clans.findIndex(c => c.id === gameState.myClan.id);
        if (clanIndex !== -1) {
            gameState.clans[clanIndex].totalClicks = gameState.myClan.totalClicks;
            localStorage.setItem('clans', JSON.stringify(gameState.clans));
        }
    }
}

// Activate Premium with sound
function activatePremium() {
    gameState.premiumActive = true;
    localStorage.setItem('premiumActive', 'true');
    gameState.clickPower = 2;
    elements.premiumBadge.style.display = "inline";
    elements.refBonusText.textContent = translations[gameState.currentLanguage]['refBonusTextPremium'];
    elements.buyPremiumBtn.textContent = translations[gameState.currentLanguage]['premiumActive'];
    elements.buyPremiumBtn.classList.add('premium-btn');
    elements.timeLeft.style.display = "block";
    elements.regenInfo.textContent = translations[gameState.currentLanguage]['unlimitedClicks'];
    elements.changeEmojiBtn.style.display = "block";
    elements.changeBgEmojiBtn.style.display = "block";
    
    gameState.clicksLeft = Infinity;
    updateClicksCounter();
    
    applySavedColors();
    document.body.classList.add('premium-bg');
    updateBgEmoji();
    
    playSound('premium');
    showToast(translations[gameState.currentLanguage]['premiumActivated']);
    checkPremiumQuest();
    checkAchievements();
}

// [Rest of the previous code remains the same]
// Generate unique player ID
function generatePlayerId() {
    let playerId = localStorage.getItem('playerId');
    
    if (!playerId) {
        if (!localStorage.getItem('lastPlayerId')) {
            playerId = '00000';
            localStorage.setItem('lastPlayerId', '0');
        } else {
            const lastId = parseInt(localStorage.getItem('lastPlayerId'));
            playerId = (lastId + 1).toString().padStart(5, '0');
            localStorage.setItem('lastPlayerId', (lastId + 1).toString());
        }
        
        localStorage.setItem('playerId', playerId);
    }
    
    return playerId;
}

// Translations
const translations = {
    en: {
        title: "Insomnia Clicker",
        premiumBadge: "PREMIUM",
        balance: "Balance:",
        clicksLeft: "Clicks left:",
        regenInfo: "Ready! Maximum clicks",
        buyPremium: "Buy PREMIUM",
        referralTitle: "Referral system",
        refBonusText: "Get +100 $INSOMNIA for each friend!",
        refBonusTextPremium: "Get +200 $INSOMNIA for each friend! (PREMIUM 2X)",
        copyRefLink: "Copy referral link",
        invitedFriends: "Invited",
        friends: "friends",
        earned: "Earned",
        walletTitle: "Wallet connection",
        connected: "Connected",
        network: "Network",
        clickerTab: "Clicker",
        friendsTab: "Friends",
        walletTab: "Wallet",
        questsTab: "Quests",
        clansTab: "Clans",
        premiumTitle: "PREMIUM subscription",
        premiumFeature1: "2X coins per click",
        premiumFeature2: "2X coins for referrals",
        premiumFeature3: "Unlimited clicks",
        premiumFeature4: "🎨 Button and background color selection",
        premiumFeature5: "2X daily rewards",
        premiumFeature6: "✨ Custom button emoji",
        premiumFeature7: "🌌 Custom background emoji",
        premiumFeature8: "💎 Exclusive background",
        chooseButtonColor: "Choose button color:",
        chooseBgColor: "Choose background color:",
        chooseProgressColor: "Choose progress bar color:",
        confirmPayment: "I have paid",
        close: "Close",
        privacy: "Privacy Policy",
        support: "Support",
        resetProgress: "Reset progress",
        language: "Language",
        privacyTitle: "Insomnia Clicker Privacy Policy",
        privacyIntro: "This Privacy Policy describes how your information is collected, used and protected when using our Insomnia Clicker application.",
        dataCollection: "1. Data collection",
        dataCollectionText: "The Insomnia Clicker app collects the following data:",
        data1: "Locally stored data about your game progress (balance, number of clicks, referrals)",
        data2: "Information about connected wallets (if you choose to connect)",
        data3: "Anonymous usage statistics to improve the app",
        dataUsage: "2. Data usage",
        dataUsageText: "The collected data is used for:",
        usage1: "Providing game functionality",
        usage2: "Improving user experience",
        usage3: "Analyzing the effectiveness of application features",
        dataStorage: "3. Data storage",
        dataStorageText: "All game data is stored locally in your browser. You can reset progress at any time in the settings.",
        thirdParty: "4. Third parties",
        thirdPartyText: "The application may integrate with the following services:",
        service1: "Telegram Wallet",
        service2: "Analytics services for collecting anonymous statistics",
        changes: "5. Policy changes",
        changesText: "We reserve the right to update this Privacy Policy. All changes will be reflected in this document.",
        understand: "I understand",
        paymentWallet: "For payment via Telegram Stars click the button below:",
        premiumActive: "PREMIUM active",
        unlimitedClicks: "Unlimited clicks",
        premiumExpiresIn: "PREMIUM expires in",
        premiumActiveFor: "Your subscription is active for",
        premiumOnly: "This feature is for PREMIUM users only!",
        premiumActivated: "PREMIUM activated!",
        premiumActivated7Days: "PREMIUM subscription activated for 7 days!",
        premiumExpired: "PREMIUM subscription expired",
        refReward: "You got",
        forFriendInvite: "for inviting a friend!",
        refLinkCopied: "Referral link copied!\nShare it with friends!",
        walletConnected: "Wallet connected",
        walletError: "Wallet connection error",
        telegramWalletConnected: "Telegram connected!",
        telegramWalletError: "Telegram connection error",
        languageChanged: "Language changed to",
        resetConfirm: "Are you sure you want to reset all progress? This action cannot be undone.",
        progressReset: "Progress reset",
        regenInfo: "Regeneration",
        nextIn: "next +1 in",
        seconds: "sec",
        regenReady: "Ready! Maximum clicks",
        unlimitedClicksPremium: "Unlimited clicks (PREMIUM)",
        paymentMethods: "Payment methods:",
        checkPayment: "Check payment",
        paymentSuccess: "Payment confirmed! PREMIUM activated!",
        paymentPending: "Payment not confirmed yet. Please try again later.",
        paymentFailed: "Payment not found. Please try again.",
        questsTitle: "Quests",
        dailyRewards: "Daily rewards",
        nextRewardTime: "Next reward in:",
        telegramQuestTitle: "Subscribe to Telegram channel",
        telegramQuestDesc: "Subscribe to our channel and get 100 $INSOMNIA",
        clickQuestTitle: "Make 100 clicks",
        clickQuestDesc: "Click 100 times and get 100 $INSOMNIA",
        premiumQuestTitle: "Activate PREMIUM",
        premiumQuestDesc: "Activate PREMIUM subscription and get 1000 $INSOMNIA",
        clanQuestTitle: "Join a clan",
        clanQuestDesc: "Join or create a clan and get 200 $INSOMNIA",
        questCompleted: "Quest completed! +",
        subscribeTelegram: "Subscribe to channel",
        telegramSubscribed: "Thanks for subscribing! Reward credited.",
        telegramPaymentInitiated: "Telegram Stars payment initiated",
        dailyRewardClaimed: "Daily reward claimed! +",
        streakReset: "Daily reward streak reset",
        changeEmoji: "Change button emoji",
        changeBgEmoji: "Change background emoji",
        emojiChanged: "Button emoji changed!",
        bgEmojiChanged: "Background emoji changed!",
        statClicks: "Clicks",
        statCoins: "$INSOMNIA",
        statRefs: "Referrals",
        statQuests: "Quests",
        statClan: "Clan",
        achievements: "Achievements",
        achievementFirstClick: "First click",
        achievementFirstClickDesc: "Make your first click",
        achievementHundredClicks: "100 clicks",
        achievementHundredClicksDesc: "Make 100 clicks",
        achievementThousandClicks: "1000 clicks",
        achievementThousandClicksDesc: "Make 1000 clicks",
        achievementFirstCoin: "First coin",
        achievementFirstCoinDesc: "Earn your first coin",
        achievementHundredCoins: "100 coins",
        achievementHundredCoinsDesc: "Earn 100 coins",
        achievementThousandCoins: "1000 coins",
        achievementThousandCoinsDesc: "Earn 1000 coins",
        achievementFirstRef: "First referral",
        achievementFirstRefDesc: "Invite your first friend",
        achievementFiveRefs: "5 referrals",
        achievementFiveRefsDesc: "Invite 5 friends",
        achievementTenRefs: "10 referrals",
        achievementTenRefsDesc: "Invite 10 friends",
        achievementFirstQuest: "First quest",
        achievementFirstQuestDesc: "Complete your first quest",
        achievementAllQuests: "All quests",
        achievementAllQuestsDesc: "Complete all quests",
        achievementPremium: "PREMIUM",
        achievementPremiumDesc: "Activate PREMIUM subscription",
        achievementFirstFriend: "First friend",
        achievementFirstFriendDesc: "Add your first friend",
        achievementJoinClan: "Clan member",
        achievementJoinClanDesc: "Join or create a clan",
        noFriends: "You don't have friends yet",
        addFriend: "Add Friend",
        sendGift: "Send Gift",
        removeFriend: "Remove Friend",
        noClan: "You're not in a clan",
        createClan: "Create Clan",
        joinClan: "Join Clan",
        viewClan: "View Clan",
        leaveClan: "Leave Clan",
        clanName: "Clan Name",
        clanTag: "Clan Tag",
        clanDescription: "Description",
        clanIcon: "Icon",
        clanMembers: "Members",
        clanTotalClicks: "Total Clicks",
        clanRank: "Rank",
        clanLevel: "Level",
        clanBenefits: "Join or create a clan to get bonuses and compete with others!",
        createClanCost: "Cost: 1000 $INSOMNIA",
        topClans: "Top Clans",
        noDescription: "No description yet",
        clanLeader: "Leader",
        clanCoLeader: "Co-Leader",
        clanMember: "Member",
        inviteToClan: "Invite to Clan",
        promoteToCoLeader: "Promote to Co-Leader",
        demoteToMember: "Demote to Member",
        kickMember: "Kick Member",
        disbandClan: "Disband Clan",
        leaveClanConfirm: "Are you sure you want to leave the clan?",
        disbandClanConfirm: "Are you sure you want to disband the clan? This cannot be undone!",
        kickMemberConfirm: "Are you sure you want to kick this member?",
        clanCreated: "Clan created successfully!",
        clanJoined: "You have joined the clan!",
        clanLeft: "You have left the clan",
        clanDisbanded: "Clan has been disbanded",
        memberKicked: "Member has been kicked",
        memberPromoted: "Member has been promoted",
        memberDemoted: "Member has been demoted",
        notEnoughCoins: "Not enough coins!",
        friendAdded: "Friend added!",
        friendRemoved: "Friend removed",
        giftSent: "Gift sent! +50 $INSOMNIA to your friend"
    },
    ru: {
        title: "Insomnia Clicker",
        premiumBadge: "PREMIUM",
        balance: "Баланс:",
        clicksLeft: "Осталось кликов:",
        regenInfo: "Готово! Максимум кликов",
        buyPremium: "Купить PREMIUM",
        referralTitle: "Реферальная система",
        refBonusText: "Получи +100 $INSOMNIA за каждого друга!",
        refBonusTextPremium: "Получи +200 $INSOMNIA за каждого друга! (PREMIUM 2X)",
        copyRefLink: "Скопировать реферальную ссылку",
        invitedFriends: "Приглашено",
        friends: "друзей",
        earned: "Получено",
        walletTitle: "Подключение кошелька",
        connected: "Подключен",
        network: "Сеть",
        clickerTab: "Кликер",
        friendsTab: "Друзья",
        walletTab: "Кошелёк",
        questsTab: "Задания",
        clansTab: "Кланы",
        premiumTitle: "PREMIUM подписка",
        premiumFeature1: "2X монет за клики",
        premiumFeature2: "2X монет за рефералов",
        premiumFeature3: "Безлимитные клики",
        premiumFeature4: "🎨 Выбор цвета кнопки и фона",
        premiumFeature5: "2X ежедневные награды",
        premiumFeature6: "✨ Настройка эмодзи кнопки",
        premiumFeature7: "🌌 Настройка эмодзи фона",
        premiumFeature8: "💎 Эксклюзивный фон",
        chooseButtonColor: "Выберите цвет кнопки:",
        chooseBgColor: "Выберите цвет фона:",
        chooseProgressColor: "Выберите цвет шкалы кликов:",
        confirmPayment: "Я оплатил",
        close: "Закрыть",
        privacy: "Политика конфиденциальности",
        support: "Поддержка",
        resetProgress: "Сбросить прогресс",
        language: "Язык",
        privacyTitle: "Политика конфиденциальности Insomnia Clicker",
        privacyIntro: "Настоящая Политика конфиденциальности описывает, как собирается, используется и защищается ваша информация при использовании нашего приложения Insomnia Clicker.",
        dataCollection: "1. Сбор данных",
        dataCollectionText: "Приложение Insomnia Clicker собирает следующие данные:",
        data1: "Локально сохраняемые данные о вашем игровом прогрессе (баланс, количество кликов, рефералы)",
        data2: "Информация о подключенных кошельках (если вы решите подключить)",
        data3: "Анонимная статистика использования для улучшения приложения",
        dataUsage: "2. Использование данных",
        dataUsageText: "Собранные данные используются для:",
        usage1: "Обеспечения работы игровых функций",
        usage2: "Улучшения пользовательского опыта",
        usage3: "Анализа эффективности функций приложения",
        dataStorage: "3. Хранение данных",
        dataStorageText: "Все игровые данные хранятся локально в вашем браузере. Вы можете в любой момент сбросить прогресс в настройках.",
        thirdParty: "4. Третьи стороны",
        thirdPartyText: "Приложение может интегрироваться со следующими сервисами:",
        service1: "Telegram Wallet",
        service2: "Аналитические сервисы для сбора анонимной статистики",
        changes: "5. Изменения в политике",
        changesText: "Мы оставляем за собой право обновлять данную Политику конфиденциальности. Все изменения будут отражены в этом документе.",
        understand: "Понятно",
        paymentWallet: "Для оплаты через Telegram Stars нажмите кнопку ниже:",
        premiumActive: "PREMIUM активна",
        unlimitedClicks: "Безлимитные клики",
        premiumExpiresIn: "PREMIUM истекает через",
        premiumActiveFor: "Ваша подписка активна в течение",
        premiumOnly: "Эта функция только для PREMIUM пользователей!",
        premiumActivated: "PREMIUM активирована!",
        premiumActivated7Days: "PREMIUM подписка активирована на 7 дней!",
        premiumExpired: "PREMIUM подписка истекла",
        refReward: "Вы получили",
        forFriendInvite: "за приглашение друга!",
        refLinkCopied: "Реферальная ссылка скопирована!\nПоделитесь с друзьями!",
        walletConnected: "Кошелёк подключён",
        walletError: "Ошибка подключения кошелька",
        telegramWalletConnected: "Telegram подключён!",
        telegramWalletError: "Ошибка подключения Telegram",
        languageChanged: "Язык изменён на",
        resetConfirm: "Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя отменить.",
        progressReset: "Прогресс сброшен",
        regenInfo: "Регенерация",
        nextIn: "следующий +1 через",
        seconds: "сек",
        regenReady: "Готово! Максимум кликов",
        unlimitedClicksPremium: "Безлимитные клики (PREMIUM)",
        paymentMethods: "Способы оплаты:",
        checkPayment: "Проверить оплату",
        paymentSuccess: "Оплата подтверждена! PREMIUM активирована!",
        paymentPending: "Оплата ещё не подтверждена. Попробуйте позже.",
        paymentFailed: "Оплата не найдена. Попробуйте ещё раз.",
        questsTitle: "Задания",
        dailyRewards: "Ежедневные награды",
        nextRewardTime: "Следующая награда через:",
        telegramQuestTitle: "Подпишись на Telegram канал",
        telegramQuestDesc: "Подпишись на наш канал и получи 100 $INSOMNIA",
        clickQuestTitle: "Сделай 100 кликов",
        clickQuestDesc: "Кликни 100 раз и получи 100 $INSOMNIA",
        premiumQuestTitle: "Активируй PREMIUM",
        premiumQuestDesc: "Активируй PREMIUM подписку и получи 1000 $INSOMNIA",
        clanQuestTitle: "Вступи в клан",
        clanQuestDesc: "Вступи или создай клан и получи 200 $INSOMNIA",
        questCompleted: "Задание выполнено! +",
        subscribeTelegram: "Подписаться на канал",
        telegramSubscribed: "Спасибо за подписку! Награда зачислена.",
        telegramPaymentInitiated: "Платёж через Telegram Stars инициирован",
        dailyRewardClaimed: "Ежедневная награда получена! +",
        streakReset: "Серия ежедневных наград сброшена",
        changeEmoji: "Изменить эмодзи кнопки",
        changeBgEmoji: "Изменить эмодзи фона",
        emojiChanged: "Эмодзи кнопки изменён!",
        bgEmojiChanged: "Эмодзи фона изменён!",
        statClicks: "Кликов",
        statCoins: "$INSOMNIA",
        statRefs: "Рефералов",
        statQuests: "Заданий",
        statClan: "Клан",
        achievements: "Достижения",
        achievementFirstClick: "Первый клик",
        achievementFirstClickDesc: "Сделайте свой первый клик",
        achievementHundredClicks: "100 кликов",
        achievementHundredClicksDesc: "Сделайте 100 кликов",
        achievementThousandClicks: "1000 кликов",
        achievementThousandClicksDesc: "Сделайте 1000 кликов",
        achievementFirstCoin: "Первая монета",
        achievementFirstCoinDesc: "Заработайте свою первую монету",
        achievementHundredCoins: "100 монет",
        achievementHundredCoinsDesc: "Заработайте 100 монет",
        achievementThousandCoins: "1000 монет",
        achievementThousandCoinsDesc: "Заработайте 1000 монет",
        achievementFirstRef: "Первый реферал",
        achievementFirstRefDesc: "Пригласите первого друга",
        achievementFiveRefs: "5 рефералов",
        achievementFiveRefsDesc: "Пригласите 5 друзей",
        achievementTenRefs: "10 рефералов",
        achievementTenRefsDesc: "Пригласите 10 друзей",
        achievementFirstQuest: "Первое задание",
        achievementFirstQuestDesc: "Выполните своё первое задание",
        achievementAllQuests: "Все задания",
        achievementAllQuestsDesc: "Выполните все задания",
        achievementPremium: "PREMIUM",
        achievementPremiumDesc: "Активируйте PREMIUM подписку",
        achievementFirstFriend: "Первый друг",
        achievementFirstFriendDesc: "Добавьте первого друга",
        achievementJoinClan: "Член клана",
        achievementJoinClanDesc: "Вступите или создайте клан",
        noFriends: "У вас пока нет друзей",
        addFriend: "Добавить друга",
        sendGift: "Отправить подарок",
        removeFriend: "Удалить друга",
        noClan: "Вы не состоите в клане",
        createClan: "Создать клан",
        joinClan: "Вступить в клан",
        viewClan: "Просмотр клана",
        leaveClan: "Покинуть клан",
        clanName: "Название клана",
        clanTag: "Тег клана",
        clanDescription: "Описание",
        clanIcon: "Иконка",
        clanMembers: "Участники",
        clanTotalClicks: "Всего кликов",
        clanRank: "Ранг",
        clanLevel: "Уровень",
        clanBenefits: "Вступите или создайте клан, чтобы получать бонусы и соревноваться с другими!",
        createClanCost: "Стоимость: 1000 $INSOMNIA",
        topClans: "Топ кланов",
        noDescription: "Описание отсутствует",
        clanLeader: "Лидер",
        clanCoLeader: "Зам. лидера",
        clanMember: "Участник",
        inviteToClan: "Пригласить в клан",
        promoteToCoLeader: "Повысить до зам. лидера",
        demoteToMember: "Понизить до участника",
        kickMember: "Исключить участника",
        disbandClan: "Распустить клан",
        leaveClanConfirm: "Вы уверены, что хотите покинуть клан?",
        disbandClanConfirm: "Вы уверены, что хотите распустить клан? Это нельзя отменить!",
        kickMemberConfirm: "Вы уверены, что хотите исключить этого участника?",
        clanCreated: "Клан успешно создан!",
        clanJoined: "Вы вступили в клан!",
        clanLeft: "Вы покинули клан",
        clanDisbanded: "Клан распущен",
        memberKicked: "Участник исключён",
        memberPromoted: "Участник повышен",
        memberDemoted: "Участник понижен",
        notEnoughCoins: "Недостаточно монет!",
        friendAdded: "Друг добавлен!",
        friendRemoved: "Друг удалён",
        giftSent: "Подарок отправлен! +50 $INSOMNIA вашему другу"
    }
};

// DOM Elements
const elements = {
    balance: document.getElementById('balance'),
    premiumBadge: document.getElementById('premium-badge'),
    refBonusText: document.getElementById('ref-bonus-text'),
    buyPremiumBtn: document.getElementById('buy-premium'),
    timeLeft: document.getElementById('time-left'),
    regenInfo: document.getElementById('regen-info'),
    progressBar: document.getElementById('progress-bar'),
    clicksLeft: document.getElementById('clicks-left'),
    clickArea: document.getElementById('click-area'),
    refCount: document.getElementById('ref-count'),
    refEarned: document.getElementById('ref-earned'),
    refLink: document.getElementById('ref-link'),
    premiumModal: document.getElementById('premium-modal'),
    premiumTimeInfo: document.getElementById('premium-time-info'),
    closePremiumModal: document.getElementById('close-premium-modal'),
    walletInfo: document.getElementById('wallet-info'),
    walletAddress: document.getElementById('wallet-address'),
    walletNetwork: document.getElementById('wallet-network'),
    telegramWalletConnect: document.getElementById('telegram-wallet-connect'),
    settingsBtn: document.getElementById('settings-btn'),
    settingsMenu: document.getElementById('settings-menu'),
    languageBtn: document.getElementById('language-btn'),
    languageMenu: document.getElementById('language-menu'),
    resetProgress: document.getElementById('reset-progress'),
    privacyBtn: document.getElementById('privacy-btn'),
    supportBtn: document.getElementById('support-btn'),
    privacyModal: document.getElementById('privacy-modal'),
    closePrivacy: document.getElementById('close-privacy'),
    toast: document.getElementById('toast'),
    telegramQuest: document.getElementById('telegram-quest'),
    clickQuest: document.getElementById('click-quest'),
    premiumQuest: document.getElementById('premium-quest'),
    clanQuest: document.getElementById('clan-quest'),
    payTelegram: document.getElementById('pay-telegram'),
    telegramPayment: document.getElementById('telegram-payment'),
    paymentOptions: document.getElementById('payment-options'),
    initTelegramPayment: document.getElementById('init-telegram-payment'),
    day1: document.getElementById('day1'),
    day2: document.getElementById('day2'),
    day3: document.getElementById('day3'),
    day4: document.getElementById('day4'),
    day5: document.getElementById('day5'),
    day6: document.getElementById('day6'),
    day7: document.getElementById('day7'),
    nextRewardTime: document.getElementById('next-reward-time'),
    changeEmojiBtn: document.getElementById('change-emoji-btn'),
    changeBgEmojiBtn: document.getElementById('change-bg-emoji-btn'),
    emojiSelector: document.getElementById('emoji-selector'),
    bgEmojiSelector: document.getElementById('bg-emoji-selector'),
    playerProfile: document.getElementById('player-profile'),
    profilePopup: document.getElementById('profile-popup'),
    playerAvatar: document.getElementById('player-avatar'),
    playerName: document.getElementById('player-name'),
    playerTag: document.getElementById('player-tag'),
    playerLevel: document.getElementById('player-level'),
    profileAvatar: document.getElementById('profile-avatar'),
    profileName: document.getElementById('profile-name'),
    profileTag: document.getElementById('profile-tag'),
    profileLevel: document.getElementById('profile-level'),
    statClicks: document.getElementById('stat-clicks'),
    statCoins: document.getElementById('stat-coins'),
    statRefs: document.getElementById('stat-refs'),
    statQuests: document.getElementById('stat-quests'),
    achievementsGrid: document.getElementById('achievements-grid'),
    achievementsCount: document.getElementById('achievements-count'),
    friendsList: document.getElementById('friends-list'),
    addFriendBtn: document.getElementById('add-friend-btn'),
    clanInfo: document.getElementById('clan-info'),
    createClanBtn: document.getElementById('create-clan-btn'),
    joinClanBtn: document.getElementById('join-clan-btn'),
    clansList: document.getElementById('clans-list'),
    friendProfilePopup: document.getElementById('friend-profile-popup'),
    friendProfileAvatar: document.getElementById('friend-profile-avatar'),
    friendProfileName: document.getElementById('friend-profile-name'),
    friendProfileTag: document.getElementById('friend-profile-tag'),
    friendProfileLevel: document.getElementById('friend-profile-level'),
    friendStatClicks: document.getElementById('friend-stat-clicks'),
    friendStatCoins: document.getElementById('friend-stat-coins'),
    friendStatClan: document.getElementById('friend-stat-clan'),
    sendGiftBtn: document.getElementById('send-gift-btn'),
    removeFriendBtn: document.getElementById('remove-friend-btn'),
    closeFriendProfile: document.getElementById('close-friend-profile'),
    clanPopup: document.getElementById('clan-popup'),
    clanIcon: document.getElementById('clan-icon'),
    clanName: document.getElementById('clan-name'),
    clanTag: document.getElementById('clan-tag'),
    clanLevel: document.getElementById('clan-level'),
    clanMembers: document.getElementById('clan-members'),
    clanTotalClicks: document.getElementById('clan-total-clicks'),
    clanRank: document.getElementById('clan-rank'),
    clanDescription: document.getElementById('clan-description'),
    clanMembersList: document.getElementById('clan-members-list'),
    clanActions: document.getElementById('clan-actions'),
    closeClanPopup: document.getElementById('close-clan-popup'),
    createClanPopup: document.getElementById('create-clan-popup'),
    closeCreateClan: document.getElementById('close-create-clan'),
    createClanConfirm: document.getElementById('create-clan-confirm'),
    clanNameInput: document.getElementById('clan-name-input'),
    clanTagInput: document.getElementById('clan-tag-input'),
    clanDescriptionInput: document.getElementById('clan-description-input'),
    myClanTab: document.getElementById('my-clan-tab'),
    noClanTab: document.getElementById('no-clan-tab'),
    myClanName: document.getElementById('my-clan-name'),
    myClanMembers: document.getElementById('my-clan-members'),
    myClanLevel: document.getElementById('my-clan-level'),
    myClanRank: document.getElementById('my-clan-rank'),
    myClanDescription: document.getElementById('my-clan-description'),
    viewClanBtn: document.getElementById('view-clan-btn'),
    leaveClanBtn: document.getElementById('leave-clan-btn'),
    createClanTabBtn: document.getElementById('create-clan-tab-btn'),
    joinClanTabBtn: document.getElementById('join-clan-tab-btn'),
    topClansList: document.getElementById('top-clans-list')
};

// Helper Functions
function showToast(message, duration = 3000) {
    elements.toast.textContent = message;
    elements.toast.style.display = 'block';
    
    elements.toast.style.animation = 'none';
    void elements.toast.offsetWidth;
    elements.toast.style.animation = `fadeIn 0.3s, fadeOut 0.3s ${duration/1000 - 0.3}s forwards`;
    
    setTimeout(() => {
        elements.toast.style.display = 'none';
    }, duration);
}

function animateClick() {
    elements.clickArea.style.transform = 'scale(0.95)';
    setTimeout(() => {
        elements.clickArea.style.transform = 'scale(1)';
    }, 100);
}

function createEmojiEffect(x, y) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji-effect';
    emoji.textContent = gameState.customEmoji;
    emoji.style.left = `${x}px`;
    emoji.style.top = `${y}px`;
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, 1000);
}

function createCoinEffect(x, y, amount) {
    const coin = document.createElement('div');
    coin.className = 'coin-effect';
    coin.textContent = `+${amount}`;
    coin.style.left = `${x}px`;
    coin.style.top = `${y}px`;
    document.body.appendChild(coin);
    
    setTimeout(() => {
        coin.remove();
    }, 1000);
}

// Translate the page
function translatePage(lang) {
    gameState.currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                const textNodes = [];
                const walker = document.createTreeWalker(
                    element, 
                    NodeFilter.SHOW_TEXT, 
                    null, 
                    false
                );
                
                let node;
                while (node = walker.nextNode()) {
                    textNodes.push(node);
                }
                
                if (textNodes.length > 0 && textNodes[0].nodeValue.trim() !== '') {
                    textNodes[0].nodeValue = translations[lang][key];
                }
            }
        }
    });
    
    updateClicksCounter();
    updatePremiumTimeInfo();
    updateDailyRewardsDisplay();
    
    if (gameState.premiumActive) {
        elements.buyPremiumBtn.textContent = translations[lang]['premiumActive'];
        elements.buyPremiumBtn.classList.add('premium-btn');
        elements.refBonusText.textContent = translations[lang]['refBonusTextPremium'];
    } else {
        elements.buyPremiumBtn.textContent = translations[lang]['buyPremium'];
        elements.buyPremiumBtn.classList.remove('premium-btn');
    }
    
    updateProfileStats();
    updateAchievements();
    updateFriendsList();
    updateClanInfo();
    updateTopClansList();
}

// Update Player Profile
function updatePlayerProfile() {
    elements.playerName.textContent = gameState.playerName;
    elements.playerTag.textContent = gameState.playerTag;
    elements.playerLevel.textContent = `${translations[gameState.currentLanguage]['clanLevel']} ${gameState.playerLevel}`;
    elements.profileName.textContent = gameState.playerName;
    elements.profileTag.textContent = gameState.playerTag;
    elements.profileLevel.textContent = `${translations[gameState.currentLanguage]['clanLevel']} ${gameState.playerLevel}`;
    
    const firstChar = gameState.playerName.charAt(0).toUpperCase();
    elements.playerAvatar.textContent = firstChar;
    elements.profileAvatar.textContent = firstChar;
    
    updateProfileStats();
}

// Update Profile Stats
function updateProfileStats() {
    elements.statClicks.textContent = gameState.totalClicks;
    elements.statCoins.textContent = gameState.coins;
    elements.statRefs.textContent = gameState.refCount;
    elements.statQuests.textContent = gameState.completedQuests.length;
    
    const completedAchievements = Object.values(gameState.achievements).filter(a => a.unlocked).length;
    const totalAchievements = Object.keys(gameState.achievements).length;
    elements.achievementsCount.textContent = `${completedAchievements}/${totalAchievements}`;
}

// Update Achievements
function updateAchievements() {
    elements.achievementsGrid.innerHTML = '';
    
    const achievementsList = [
        { id: 'firstClick', icon: '👆', name: translations[gameState.currentLanguage]['achievementFirstClick'], desc: translations[gameState.currentLanguage]['achievementFirstClickDesc'] },
        { id: 'hundredClicks', icon: '🖱️', name: translations[gameState.currentLanguage]['achievementHundredClicks'], desc: translations[gameState.currentLanguage]['achievementHundredClicksDesc'] },
        { id: 'thousandClicks', icon: '💻', name: translations[gameState.currentLanguage]['achievementThousandClicks'], desc: translations[gameState.currentLanguage]['achievementThousandClicksDesc'] },
        { id: 'firstCoin', icon: '💰', name: translations[gameState.currentLanguage]['achievementFirstCoin'], desc: translations[gameState.currentLanguage]['achievementFirstCoinDesc'] },
        { id: 'hundredCoins', icon: '💵', name: translations[gameState.currentLanguage]['achievementHundredCoins'], desc: translations[gameState.currentLanguage]['achievementHundredCoinsDesc'] },
        { id: 'thousandCoins', icon: '💎', name: translations[gameState.currentLanguage]['achievementThousandCoins'], desc: translations[gameState.currentLanguage]['achievementThousandCoinsDesc'] },
        { id: 'firstRef', icon: '👥', name: translations[gameState.currentLanguage]['achievementFirstRef'], desc: translations[gameState.currentLanguage]['achievementFirstRefDesc'] },
        { id: 'fiveRefs', icon: '👨‍👩‍👧‍👦', name: translations[gameState.currentLanguage]['achievementFiveRefs'], desc: translations[gameState.currentLanguage]['achievementFiveRefsDesc'] },
        { id: 'tenRefs', icon: '🌐', name: translations[gameState.currentLanguage]['achievementTenRefs'], desc: translations[gameState.currentLanguage]['achievementTenRefsDesc'] },
        { id: 'firstQuest', icon: '✅', name: translations[gameState.currentLanguage]['achievementFirstQuest'], desc: translations[gameState.currentLanguage]['achievementFirstQuestDesc'] },
        { id: 'allQuests', icon: '🏆', name: translations[gameState.currentLanguage]['achievementAllQuests'], desc: translations[gameState.currentLanguage]['achievementAllQuestsDesc'] },
        { id: 'premium', icon: '🌟', name: translations[gameState.currentLanguage]['achievementPremium'], desc: translations[gameState.currentLanguage]['achievementPremiumDesc'] },
        { id: 'firstFriend', icon: '🤝', name: translations[gameState.currentLanguage]['achievementFirstFriend'], desc: translations[gameState.currentLanguage]['achievementFirstFriendDesc'] },
        { id: 'joinClan', icon: '🛡️', name: translations[gameState.currentLanguage]['achievementJoinClan'], desc: translations[gameState.currentLanguage]['achievementJoinClanDesc'] }
    ];
    
    achievementsList.forEach(achievement => {
        const achievementData = gameState.achievements[achievement.id];
        if (!achievementData) return;
        
        const progressPercent = Math.min(100, (achievementData.progress / achievementData.max) * 100);
        
        const achievementElement = document.createElement('div');
        achievementElement.className = `achievement ${achievementData.unlocked ? '' : 'locked'}`;
        achievementElement.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-progress" style="width: ${progressPercent}%"></div>
            <div class="achievement-tooltip">
                <div class="achievement-tooltip-title">${achievement.name}</div>
                <div class="achievement-tooltip-desc">${achievement.desc}</div>
                ${!achievementData.unlocked ? `<div class="achievement-tooltip-progress">${achievementData.progress}/${achievementData.max}</div>` : ''}
            </div>
        `;
        
        elements.achievementsGrid.appendChild(achievementElement);
    });
    
    updateProfileStats();
}

// Check and unlock achievements
function checkAchievements() {
    // First click
    if (gameState.totalClicks > 0) {
        gameState.achievements.firstClick.progress = 1;
        if (!gameState.achievements.firstClick.unlocked) {
            gameState.achievements.firstClick.unlocked = true;
            showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementFirstClick']}`);
        }
    }
    
    // 100 clicks
    gameState.achievements.hundredClicks.progress = Math.min(gameState.totalClicks, gameState.achievements.hundredClicks.max);
    if (gameState.totalClicks >= gameState.achievements.hundredClicks.max && !gameState.achievements.hundredClicks.unlocked) {
        gameState.achievements.hundredClicks.unlocked = true;
        showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementHundredClicks']}`);
    }
    
    // 1000 clicks
    gameState.achievements.thousandClicks.progress = Math.min(gameState.totalClicks, gameState.achievements.thousandClicks.max);
    if (gameState.totalClicks >= gameState.achievements.thousandClicks.max && !gameState.achievements.thousandClicks.unlocked) {
        gameState.achievements.thousandClicks.unlocked = true;
        showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementThousandClicks']}`);
    }
    
    // First coin
    if (gameState.coins > 0) {
        gameState.achievements.firstCoin.progress = 1;
        if (!gameState.achievements.firstCoin.unlocked) {
            gameState.achievements.firstCoin.unlocked = true;
            showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementFirstCoin']}`);
        }
    }
    
    // 100 coins
    gameState.achievements.hundredCoins.progress = Math.min(gameState.coins, gameState.achievements.hundredCoins.max);
    if (gameState.coins >= gameState.achievements.hundredCoins.max && !gameState.achievements.hundredCoins.unlocked) {
        gameState.achievements.hundredCoins.unlocked = true;
        showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementHundredCoins']}`);
    }
    
    // 1000 coins
    gameState.achievements.thousandCoins.progress = Math.min(gameState.coins, gameState.achievements.thousandCoins.max);
    if (gameState.coins >= gameState.achievements.thousandCoins.max && !gameState.achievements.thousandCoins.unlocked) {
        gameState.achievements.thousandCoins.unlocked = true;
        showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementThousandCoins']}`);
    }
    
    // First referral
    if (gameState.refCount > 0) {
        gameState.achievements.firstRef.progress = 1;
        if (!gameState.achievements.firstRef.unlocked) {
            gameState.achievements.firstRef.unlocked = true;
            showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementFirstRef']}`);
        }
    }
    
    // 5 referrals
    gameState.achievements.fiveRefs.progress = Math.min(gameState.refCount, gameState.achievements.fiveRefs.max);
    if (gameState.refCount >= gameState.achievements.fiveRefs.max && !gameState.achievements.fiveRefs.unlocked) {
        gameState.achievements.fiveRefs.unlocked = true;
        showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementFiveRefs']}`);
    }
    
    // 10 referrals
    gameState.achievements.tenRefs.progress = Math.min(gameState.refCount, gameState.achievements.tenRefs.max);
    if (gameState.refCount >= gameState.achievements.tenRefs.max && !gameState.achievements.tenRefs.unlocked) {
        gameState.achievements.tenRefs.unlocked = true;
        showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementTenRefs']}`);
    }
    
    // First quest
    if (gameState.completedQuests.length > 0) {
        gameState.achievements.firstQuest.progress = 1;
        if (!gameState.achievements.firstQuest.unlocked) {
            gameState.achievements.firstQuest.unlocked = true;
            showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementFirstQuest']}`);
        }
    }
    
    // All quests
    gameState.achievements.allQuests.progress = Math.min(gameState.completedQuests.length, gameState.achievements.allQuests.max);
    if (gameState.completedQuests.length >= gameState.achievements.allQuests.max && !gameState.achievements.allQuests.unlocked) {
        gameState.achievements.allQuests.unlocked = true;
        showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementAllQuests']}`);
    }
    
    // Premium
    if (gameState.premiumActive) {
        gameState.achievements.premium.progress = 1;
        if (!gameState.achievements.premium.unlocked) {
            gameState.achievements.premium.unlocked = true;
            showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementPremium']}`);
        }
    }
    
    // First friend
    if (gameState.friends.length > 0) {
        gameState.achievements.firstFriend.progress = 1;
        if (!gameState.achievements.firstFriend.unlocked) {
            gameState.achievements.firstFriend.unlocked = true;
            showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementFirstFriend']}`);
        }
    }
    
    // Join clan
    if (gameState.myClan) {
        gameState.achievements.joinClan.progress = 1;
        if (!gameState.achievements.joinClan.unlocked) {
            gameState.achievements.joinClan.unlocked = true;
            showToast(`${translations[gameState.currentLanguage]['achievementUnlocked']}: ${translations[gameState.currentLanguage]['achievementJoinClan']}`);
        }
    }
    
    localStorage.setItem('achievements', JSON.stringify(gameState.achievements));
    updateAchievements();
}

// Check Premium Status
function checkPremiumStatus() {
    if (gameState.premiumEndDate && new Date() < new Date(gameState.premiumEndDate)) {
        activatePremium();
        startTimer();
    } else if (gameState.premiumActive) {
        gameState.premiumActive = false;
        localStorage.setItem('premiumActive', 'false');
    }
}

// Activate Premium
function activatePremium() {
    gameState.premiumActive = true;
    localStorage.setItem('premiumActive', 'true');
    gameState.clickPower = 2;
    elements.premiumBadge.style.display = "inline";
    elements.refBonusText.textContent = translations[gameState.currentLanguage]['refBonusTextPremium'];
    elements.buyPremiumBtn.textContent = translations[gameState.currentLanguage]['premiumActive'];
    elements.buyPremiumBtn.classList.add('premium-btn');
    elements.timeLeft.style.display = "block";
    elements.regenInfo.textContent = translations[gameState.currentLanguage]['unlimitedClicks'];
    elements.changeEmojiBtn.style.display = "block";
    elements.changeBgEmojiBtn.style.display = "block";
    
    gameState.clicksLeft = Infinity;
    updateClicksCounter();
    
    applySavedColors();
    document.body.classList.add('premium-bg');
    updateBgEmoji();
    
    showToast(translations[gameState.currentLanguage]['premiumActivated']);
    checkPremiumQuest();
    checkAchievements();
}

// Update Background Emoji
function updateBgEmoji() {
    if (gameState.premiumActive) {
        document.body.style.backgroundImage = 
            `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 800 800"><g fill="rgba(255,215,0,0.2)"><text x="400" y="400" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="200" y="200" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="600" y="600" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="100" y="300" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="700" y="500" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="300" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="500" y="700" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="50" y="600" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="750" y="200" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="150" y="700" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="650" y="100" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="250" y="500" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="550" y="300" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="350" y="650" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text><text x="450" y="150" font-size="20" text-anchor="middle" dominant-baseline="middle">${gameState.bgEmoji}</text></g></svg>')`;
    }
}

// Start Premium Timer
function startTimer() {
    clearInterval(gameState.timerInterval);
    
    gameState.timerInterval = setInterval(() => {
        const now = new Date();
        const endDate = new Date(gameState.premiumEndDate);
        const diff = endDate - now;
        
        if (diff <= 0) {
            clearInterval(gameState.timerInterval);
            gameState.premiumActive = false;
            localStorage.setItem('premiumActive', 'false');
            elements.premiumBadge.style.display = "none";
            elements.buyPremiumBtn.textContent = translations[gameState.currentLanguage]['buyPremium'];
            elements.buyPremiumBtn.classList.remove('premium-btn');
            elements.timeLeft.style.display = "none";
            elements.changeEmojiBtn.style.display = "none";
            elements.changeBgEmojiBtn.style.display = "none";
            gameState.clicksLeft = gameState.MAX_CLICKS;
            updateClicksCounter();
            startClickRefresh();
            document.body.classList.remove('premium-bg');
            showToast(translations[gameState.currentLanguage]['premiumExpired']);
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        elements.timeLeft.textContent = 
            `${translations[gameState.currentLanguage]['premiumExpiresIn']}: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        
        updatePremiumTimeInfo();
    }, 1000);
}

// Start Click Refresh
function startClickRefresh() {
    clearInterval(gameState.clickRefreshInterval);
    
    if (gameState.premiumActive) return;
    
    gameState.clickRefreshInterval = setInterval(() => {
        const now = Date.now();
        const timePassed = (now - gameState.regenStartTime) / 1000;
        const regenerated = Math.floor(timePassed * gameState.REGEN_RATE);
        
        if (gameState.clicksLeft < gameState.MAX_CLICKS) {
            gameState.clicksLeft = Math.min(gameState.MAX_CLICKS, regenerated);
            updateClicksCounter();
            
            if (gameState.clicksLeft < gameState.MAX_CLICKS) {
                const nextClickIn = Math.ceil(1 - (timePassed % 1));
                elements.regenInfo.textContent = 
                    `${translations[gameState.currentLanguage]['regenInfo']}: ${gameState.clicksLeft}/${gameState.MAX_CLICKS} ` + 
                    `(${translations[gameState.currentLanguage]['nextIn']} ${nextClickIn}${translations[gameState.currentLanguage]['seconds']})`;
            } else {
                elements.regenInfo.textContent = translations[gameState.currentLanguage]['regenReady'];
            }
        }
    }, 100);
}

// Update Premium Time Info
function updatePremiumTimeInfo() {
    if (!gameState.premiumActive) return;
    
    const now = new Date();
    const endDate = new Date(gameState.premiumEndDate);
    const diff = endDate - now;
    
    if (diff <= 0) return;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    elements.premiumTimeInfo.innerHTML = 
        `<p style="color:gold;">${translations[gameState.currentLanguage]['premiumActiveFor']} ${days}d ${hours}h ${minutes}m</p>`;
}

// Update Clicks Counter
function updateClicksCounter() {
    const progressPercent = gameState.premiumActive ? 100 : (gameState.clicksLeft / gameState.MAX_CLICKS) * 100;
    elements.progressBar.style.background = 
        `linear-gradient(90deg, ${gameState.selectedProgressColor1}, ${gameState.selectedProgressColor2})`;
    elements.progressBar.style.width = `${progressPercent}%`;
    
    if (gameState.premiumActive) {
        elements.clicksLeft.textContent = translations[gameState.currentLanguage]['unlimitedClicksPremium'];
    } else {
        const [before] = elements.clicksLeft.textContent.split(':');
        elements.clicksLeft.textContent = `${before || translations[gameState.currentLanguage]['clicksLeft']}: ${gameState.clicksLeft}/${gameState.MAX_CLICKS}`;
    }
    
    localStorage.setItem('clicksLeft', gameState.clicksLeft);
}

// Update Balance
function updateBalance() {
    elements.balance.textContent = gameState.coins;
    localStorage.setItem('insomniaCoins', gameState.coins);
    checkAchievements();
}

// Apply Saved Colors
function applySavedColors() {
    if (gameState.premiumActive) {
        elements.clickArea.style.background = 
            `linear-gradient(45deg, ${gameState.selectedButtonColor1}, ${gameState.selectedButtonColor2})`;
        document.body.style.backgroundColor = gameState.selectedBgColor;
        elements.progressBar.style.background = 
            `linear-gradient(90deg, ${gameState.selectedProgressColor1}, ${gameState.selectedProgressColor2})`;
    }
}

// Handle Click
function handleClick(event) {
    const now = Date.now();
    
    // Check click cooldown
    if (now - gameState.lastClickTime < gameState.CLICK_COOLDOWN) return;
    gameState.lastClickTime = now;
    
    // Check if clicks are available
    if (!gameState.premiumActive && gameState.clicksLeft <= 0) {
        return;
    }
    
    // Decrease clicks left if not premium
    if (!gameState.premiumActive) {
        gameState.clicksLeft--;
        updateClicksCounter();
    }
    
    // Calculate coins earned
    const coinsEarned = gameState.clickPower;
    gameState.coins += coinsEarned;
    gameState.totalClicks++;
    
    // Update UI
    updateBalance();
    animateClick();
    
    // Create effects
    createEmojiEffect(event.clientX, event.clientY);
    createCoinEffect(event.clientX, event.clientY, coinsEarned);
    
    // Save state
    localStorage.setItem('totalClicks', gameState.totalClicks);
    localStorage.setItem('regenStartTime', Date.now());
    
    // Check achievements
    checkAchievements();
    checkClickQuest();
    
    // Update clan stats if in a clan
    if (gameState.myClan) {
        gameState.myClan.totalClicks = (gameState.myClan.totalClicks || 0) + 1;
        localStorage.setItem('myClan', JSON.stringify(gameState.myClan));
        
        // Update clan in the clans list
        const clanIndex = gameState.clans.findIndex(c => c.id === gameState.myClan.id);
        if (clanIndex !== -1) {
            gameState.clans[clanIndex].totalClicks = gameState.myClan.totalClicks;
            localStorage.setItem('clans', JSON.stringify(gameState.clans));
        }
    }
}

// Check Click Quest
function checkClickQuest() {
    if (gameState.completedQuests.includes('click')) return;
    
    if (gameState.totalClicks >= 100) {
        completeQuest('click');
    }
}

// Complete Quest
function completeQuest(questId) {
    if (gameState.completedQuests.includes(questId)) return;
    
    let reward = 0;
    
    switch (questId) {
        case 'telegram':
            reward = 100;
            break;
        case 'click':
            reward = 100;
            break;
        case 'premium':
            reward = 1000;
            break;
        case 'clan':
            reward = 200;
            break;
    }
    
    gameState.completedQuests.push(questId);
    gameState.coins += reward;
    
    localStorage.setItem('completedQuests', JSON.stringify(gameState.completedQuests));
    updateBalance();
    
    // Mark quest as completed in UI
    const questElement = document.getElementById(`${questId}-quest`);
    if (questElement) {
        questElement.classList.add('quest-completed');
    }
    
    showToast(`${translations[gameState.currentLanguage]['questCompleted']}${reward} $INSOMNIA`);
    checkAchievements();
}

// Check Premium Quest
function checkPremiumQuest() {
    if (gameState.completedQuests.includes('premium')) return;
    
    if (gameState.premiumActive) {
        completeQuest('premium');
    }
}

// Check Clan Quest
function checkClanQuest() {
    if (gameState.completedQuests.includes('clan')) return;
    
    if (gameState.myClan) {
        completeQuest('clan');
    }
}

// Update Daily Rewards Display
function updateDailyRewardsDisplay() {
    const today = new Date().toDateString();
    const lastClaimed = gameState.dailyRewards.lastClaimed ? new Date(gameState.dailyRewards.lastClaimed).toDateString() : null;
    const isNewDay = lastClaimed !== today;
    
    // Reset streak if more than 1 day passed
    if (lastClaimed && isNewDay) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (new Date(lastClaimed).toDateString() !== yesterday.toDateString()) {
            gameState.dailyRewards.streak = 0;
            showToast(translations[gameState.currentLanguage]['streakReset']);
        }
    }
    
    // Update reward days display
    const rewards = [25, 50, 75, 100, 125, 150, 175];
    const premiumMultiplier = gameState.premiumActive ? 2 : 1;
    
    rewards.forEach((reward, index) => {
        const dayElement = document.getElementById(`day${index + 1}`);
        if (!dayElement) return;
        
        dayElement.textContent = reward * premiumMultiplier;
        
        if (gameState.dailyRewards.claimedDays.includes(index + 1)) {
            dayElement.classList.add('claimed');
        } else {
            dayElement.classList.remove('claimed');
        }
        
        if (index === 6 && gameState.premiumActive) {
            dayElement.classList.add('premium');
        } else {
            dayElement.classList.remove('premium');
        }
        
        // Highlight current day
        if (index === gameState.dailyRewards.streak % 7 && isNewDay) {
            dayElement.classList.add('active');
        } else {
            dayElement.classList.remove('active');
        }
    });
    
    // Update next reward time
    if (!isNewDay && gameState.dailyRewards.lastClaimed) {
        const nextRewardTime = new Date(gameState.dailyRewards.lastClaimed);
        nextRewardTime.setDate(nextRewardTime.getDate() + 1);
        nextRewardTime.setHours(0, 0, 0, 0);
        
        const now = new Date();
        const diff = nextRewardTime - now;
        
        if (diff > 0) {
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            elements.nextRewardTime.textContent = 
                `${translations[gameState.currentLanguage]['nextRewardTime']} ${hours}h ${minutes}m`;
        }
    }
    
    localStorage.setItem('dailyRewards', JSON.stringify(gameState.dailyRewards));
}

// Claim Daily Reward
function claimDailyReward() {
    const today = new Date().toDateString();
    const lastClaimed = gameState.dailyRewards.lastClaimed ? new Date(gameState.dailyRewards.lastClaimed).toDateString() : null;
    const isNewDay = lastClaimed !== today;
    
    if (!isNewDay) return;
    
    const rewards = [25, 50, 75, 100, 125, 150, 175];
    const currentDay = gameState.dailyRewards.streak % 7;
    const premiumMultiplier = gameState.premiumActive ? 2 : 1;
    const reward = rewards[currentDay] * premiumMultiplier;
    
    gameState.coins += reward;
    gameState.dailyRewards.streak++;
    gameState.dailyRewards.lastClaimed = new Date().toISOString();
    gameState.dailyRewards.claimedDays.push(currentDay + 1);
    
    updateBalance();
    updateDailyRewardsDisplay();
    
    showToast(`${translations[gameState.currentLanguage]['dailyRewardClaimed']}${reward} $INSOMNIA`);
    
    // Check if this was the first quest completion
    if (gameState.dailyRewards.streak === 1) {
        checkAchievements();
    }
}

// Update Friends List
function updateFriendsList() {
    elements.friendsList.innerHTML = '';
    
    if (gameState.friends.length === 0) {
        const noFriends = document.createElement('div');
        noFriends.className = 'no-friends';
        noFriends.textContent = translations[gameState.currentLanguage]['noFriends'];
        elements.friendsList.appendChild(noFriends);
        return;
    }
    
    gameState.friends.forEach(friend => {
        const friendElement = document.createElement('div');
        friendElement.className = 'friend-item';
        friendElement.innerHTML = `
            <div class="friend-avatar">${friend.name.charAt(0).toUpperCase()}</div>
            <div class="friend-info">
                <div class="friend-name">${friend.name}</div>
                <div class="friend-level">Level ${friend.level || 1}</div>
            </div>
        `;
        
        friendElement.addEventListener('click', () => showFriendProfile(friend));
        elements.friendsList.appendChild(friendElement);
    });
}

// Show Friend Profile
function showFriendProfile(friend) {
    gameState.selectedFriend = friend;
    
    elements.friendProfileName.textContent = friend.name;
    elements.friendProfileTag.textContent = friend.tag;
    elements.friendProfileLevel.textContent = `Level ${friend.level || 1}`;
    elements.friendProfileAvatar.textContent = friend.name.charAt(0).toUpperCase();
    elements.friendStatClicks.textContent = friend.clicks || 0;
    elements.friendStatCoins.textContent = friend.coins || 0;
    elements.friendStatClan.textContent = friend.clan || '-';
    
    elements.friendProfilePopup.classList.add('active');
}

// Add Friend
function addFriend() {
    // In a real app, this would involve some friend search/request system
    // For demo purposes, we'll just add a random friend
    
    const friendNames = [
        "Alex", "Sam", "Taylor", "Jordan", "Casey", 
        "Riley", "Jamie", "Morgan", "Dylan", "Cameron"
    ];
    
    const randomName = friendNames[Math.floor(Math.random() * friendNames.length)];
    const randomTag = '#' + Math.floor(1000 + Math.random() * 9000);
    const randomLevel = Math.floor(1 + Math.random() * 10);
    const randomClicks = Math.floor(Math.random() * 5000);
    const randomCoins = Math.floor(Math.random() * 10000);
    
    const newFriend = {
        id: 'friend' + Date.now(),
        name: randomName,
        tag: randomTag,
        level: randomLevel,
        clicks: randomClicks,
        coins: randomCoins,
        clan: Math.random() > 0.5 ? 'Night Owls' : null
    };
    
    gameState.friends.push(newFriend);
    localStorage.setItem('friends', JSON.stringify(gameState.friends));
    
    updateFriendsList();
    checkAchievements();
    
    showToast(`${translations[gameState.currentLanguage]['friendAdded']}`);
}

// Remove Friend
function removeFriend() {
    if (!gameState.selectedFriend) return;
    
    gameState.friends = gameState.friends.filter(f => f.id !== gameState.selectedFriend.id);
    localStorage.setItem('friends', JSON.stringify(gameState.friends));
    
    elements.friendProfilePopup.classList.remove('active');
    updateFriendsList();
    
    showToast(`${translations[gameState.currentLanguage]['friendRemoved']}`);
}

// Send Gift to Friend
function sendGift() {
    if (!gameState.selectedFriend) return;
    
    // In a real app, this would actually send coins to the friend
    // For demo purposes, we'll just show a message
    
    showToast(`${translations[gameState.currentLanguage]['giftSent']}`);
}

// Update Clan Info
function updateClanInfo() {
    if (gameState.myClan) {
        elements.noClanTab.style.display = 'none';
        elements.myClanTab.style.display = 'block';
        
        elements.myClanName.textContent = gameState.myClan.name;
        elements.myClanMembers.textContent = `${gameState.myClan.members.length}/20`;
        elements.myClanLevel.textContent = gameState.myClan.level;
        elements.myClanRank.textContent = getClanRank(gameState.myClan);
        
        if (gameState.myClan.description) {
            elements.myClanDescription.textContent = gameState.myClan.description;
        } else {
            elements.myClanDescription.textContent = translations[gameState.currentLanguage]['noDescription'];
        }
    } else {
        elements.noClanTab.style.display = 'block';
        elements.myClanTab.style.display = 'none';
    }
    
    checkClanQuest();
}

// Get Clan Rank
function getClanRank(clan) {
    if (!clan || !gameState.clans) return '-';
    
    // Sort clans by total clicks
    const sortedClans = [...gameState.clans].sort((a, b) => b.totalClicks - a.totalClicks);
    const rank = sortedClans.findIndex(c => c.id === clan.id) + 1;
    
    return rank > 0 ? `#${rank}` : '-';
}

// Update Top Clans List
function updateTopClansList() {
    elements.topClansList.innerHTML = '';
    elements.clansList.innerHTML = '';
    
    // Sort clans by total clicks
    const sortedClans = [...gameState.clans].sort((a, b) => b.totalClicks - a.totalClicks);
    
    // Show top 5 clans in the main clans tab
    sortedClans.slice(0, 5).forEach((clan, index) => {
        const clanElement = document.createElement('div');
        clanElement.className = 'top-clan-item';
        clanElement.innerHTML = `
            <div class="top-clan-rank">${index + 1}</div>
            <div class="top-clan-info">
                <div class="top-clan-name">${clan.name} <span class="clan-tag-small">[${clan.tag}]</span></div>
                <div class="top-clan-stats">
                    <span>${translations[gameState.currentLanguage]['clanLevel']} ${clan.level}</span>
                    <span>${clan.members.length}/20 ${translations[gameState.currentLanguage]['clanMembers']}</span>
                </div>
            </div>
        `;
        
        clanElement.addEventListener('click', () => showClanPopup(clan));
        elements.topClansList.appendChild(clanElement);
    });
    
    // Show all clans in the join clan list
    sortedClans.forEach(clan => {
        const clanElement = document.createElement('div');
        clanElement.className = 'clan-item';
        clanElement.innerHTML = `
            <div class="clan-icon-small">${clan.icon}</div>
            <div class="clan-info-small">
                <div class="clan-name-small">${clan.name}</div>
                <div class="clan-tag-small">[${clan.tag}] Level ${clan.level}</div>
            </div>
        `;
        
        clanElement.addEventListener('click', () => showClanPopup(clan));
        elements.clansList.appendChild(clanElement);
    });
}

// Show Clan Popup
function showClanPopup(clan) {
    gameState.selectedClan = clan;
    
    elements.clanName.textContent = clan.name;
    elements.clanTag.textContent = `[${clan.tag}]`;
    elements.clanLevel.textContent = `Level ${clan.level}`;
    elements.clanIcon.textContent = clan.icon;
    elements.clanMembers.textContent = `${clan.members.length}/20`;
    elements.clanTotalClicks.textContent = clan.totalClicks;
    elements.clanRank.textContent = getClanRank(clan);
    
    if (clan.description) {
        elements.clanDescription.textContent = clan.description;
    } else {
        elements.clanDescription.textContent = translations[gameState.currentLanguage]['noDescription'];
    }
    
    // Update members list
    elements.clanMembersList.innerHTML = '';
    clan.members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'clan-member';
        memberElement.innerHTML = `
            <div class="clan-member-avatar">${member.name.charAt(0).toUpperCase()}</div>
            <div class="clan-member-info">
                <div class="clan-member-name">${member.name}</div>
                <div class="clan-member-level">Level ${member.level || 1}</div>
            </div>
            <div class="clan-member-role">${translations[gameState.currentLanguage][`clan${member.role.charAt(0).toUpperCase() + member.role.slice(1)}`]}</div>
        `;
        elements.clanMembersList.appendChild(memberElement);
    });
    
    // Update clan actions based on whether user is in the clan
    elements.clanActions.innerHTML = '';
    
    if (gameState.myClan && gameState.myClan.id === clan.id) {
        // User is in this clan
        const leaveBtn = document.createElement('button');
        leaveBtn.className = 'clan-action-btn danger';
        leaveBtn.textContent = translations[gameState.currentLanguage]['leaveClan'];
        leaveBtn.addEventListener('click', leaveClan);
        elements.clanActions.appendChild(leaveBtn);
    } else if (!gameState.myClan) {
        // User is not in any clan
        const joinBtn = document.createElement('button');
        joinBtn.className = 'clan-action-btn primary';
        joinBtn.textContent = translations[gameState.currentLanguage]['joinClan'];
        joinBtn.addEventListener('click', joinClan);
        elements.clanActions.appendChild(joinBtn);
    }
    
    elements.clanPopup.classList.add('active');
}

// Join Clan
function joinClan() {
    if (!gameState.selectedClan || gameState.myClan) return;
    
    // Add player to clan members
    const playerMember = {
        id: 'player_' + gameState.playerTag,
        name: gameState.playerName,
        tag: gameState.playerTag,
        level: gameState.playerLevel,
        role: 'member'
    };
    
    gameState.selectedClan.members.push(playerMember);
    gameState.myClan = gameState.selectedClan;
    
    // Update in clans list
    const clanIndex = gameState.clans.findIndex(c => c.id === gameState.selectedClan.id);
    if (clanIndex !== -1) {
        gameState.clans[clanIndex] = gameState.selectedClan;
    }
    
    localStorage.setItem('myClan', JSON.stringify(gameState.myClan));
    localStorage.setItem('clans', JSON.stringify(gameState.clans));
    
    elements.clanPopup.classList.remove('active');
    updateClanInfo();
    updateTopClansList();
    checkClanQuest();
    checkAchievements();
    
    showToast(`${translations[gameState.currentLanguage]['clanJoined']}`);
}

// Leave Clan
function leaveClan() {
    if (!gameState.myClan) return;
    
    if (!confirm(translations[gameState.currentLanguage]['leaveClanConfirm'])) {
        return;
    }
    
    // Remove player from clan members
    gameState.myClan.members = gameState.myClan.members.filter(
        m => m.id !== 'player_' + gameState.playerTag
    );
    
    // Update in clans list
    const clanIndex = gameState.clans.findIndex(c => c.id === gameState.myClan.id);
    if (clanIndex !== -1) {
        gameState.clans[clanIndex] = gameState.myClan;
    }
    
    gameState.myClan = null;
    
    localStorage.setItem('myClan', JSON.stringify(gameState.myClan));
    localStorage.setItem('clans', JSON.stringify(gameState.clans));
    
    elements.clanPopup.classList.remove('active');
    updateClanInfo();
    updateTopClansList();
    
    showToast(`${translations[gameState.currentLanguage]['clanLeft']}`);
}

// Show Create Clan Popup
function showCreateClanPopup() {
    elements.createClanPopup.classList.add('active');
}

// Create Clan
function createClan() {
    const name = elements.clanNameInput.value.trim();
    const tag = elements.clanTagInput.value.trim().toUpperCase();
    const description = elements.clanDescriptionInput.value.trim();
    
    if (!name || name.length < 3) {
        showToast("Clan name must be at least 3 characters");
        return;
    }
    
    if (!tag || tag.length < 2 || tag.length > 5) {
        showToast("Clan tag must be 2-5 characters");
        return;
    }
    
    if (gameState.coins < 1000) {
        showToast(translations[gameState.currentLanguage]['notEnoughCoins']);
        return;
    }
    
    // Check if tag is already taken
    if (gameState.clans.some(c => c.tag === tag)) {
        showToast("Clan tag is already taken");
        return;
    }
    
    // Get selected icon
    const selectedIconOption = document.querySelector('.clan-icon-option.selected');
    const icon = selectedIconOption ? selectedIconOption.textContent : '🛡️';
    
    // Create new clan
    const newClan = {
        id: 'clan_' + Date.now(),
        name: name,
        tag: tag,
        icon: icon,
        level: 1,
        description: description,
        members: [{
            id: 'player_' + gameState.playerTag,
            name: gameState.playerName,
            tag: gameState.playerTag,
            level: gameState.playerLevel,
            role: 'leader'
        }],
        totalClicks: gameState.totalClicks,
        created: Date.now()
    };
    
    gameState.myClan = newClan;
    gameState.clans.push(newClan);
    gameState.coins -= 1000;
    
    localStorage.setItem('myClan', JSON.stringify(gameState.myClan));
    localStorage.setItem('clans', JSON.stringify(gameState.clans));
    localStorage.setItem('insomniaCoins', gameState.coins);
    
    elements.createClanPopup.classList.remove('active');
    updateBalance();
    updateClanInfo();
    updateTopClansList();
    checkClanQuest();
    checkAchievements();
    
    showToast(`${translations[gameState.currentLanguage]['clanCreated']}`);
}

// Initialize the game
function initGame() {
    // Set up event listeners
    elements.clickArea.addEventListener('click', handleClick);
    
    elements.buyPremiumBtn.addEventListener('click', () => {
        elements.premiumModal.style.display = 'flex';
    });
    
    elements.closePremiumModal.addEventListener('click', () => {
        elements.premiumModal.style.display = 'none';
    });
    
    elements.refLink.addEventListener('click', () => {
        const refLink = `${window.location.origin}${window.location.pathname}?ref=${gameState.playerTag}`;
        navigator.clipboard.writeText(refLink).then(() => {
            showToast(translations[gameState.currentLanguage]['refLinkCopied']);
        });
    });
    
    elements.telegramWalletConnect.addEventListener('click', () => {
        // In a real app, this would connect to Telegram Wallet
        // For demo purposes, we'll just simulate a connection
        elements.walletInfo.style.display = 'block';
        elements.walletAddress.textContent = '0x' + Math.random().toString(16).substr(2, 10) + '...' + Math.random().toString(16).substr(2, 10);
        elements.walletNetwork.textContent = 'TON';
        
        showToast(translations[gameState.currentLanguage]['telegramWalletConnected']);
    });
    
    elements.settingsBtn.addEventListener('click', () => {
        elements.settingsMenu.classList.toggle('active');
        elements.languageMenu.classList.remove('active');
    });
    
    elements.languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        elements.languageMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            translatePage(lang);
            elements.languageMenu.classList.remove('active');
            showToast(`${translations[gameState.currentLanguage]['languageChanged']} ${option.textContent}`);
        });
    });
    
    elements.resetProgress.addEventListener('click', () => {
        if (confirm(translations[gameState.currentLanguage]['resetConfirm'])) {
            resetGame();
            showToast(translations[gameState.currentLanguage]['progressReset']);
        }
    });
    
    elements.privacyBtn.addEventListener('click', () => {
        elements.privacyModal.style.display = 'flex';
    });
    
    elements.closePrivacy.addEventListener('click', () => {
        elements.privacyModal.style.display = 'none';
    });
    
    elements.supportBtn.addEventListener('click', () => {
        // In a real app, this would open a support chat
        showToast("Support feature coming soon!");
    });
    
    // Daily rewards
    elements.day1.addEventListener('click', claimDailyReward);
    elements.day2.addEventListener('click', claimDailyReward);
    elements.day3.addEventListener('click', claimDailyReward);
    elements.day4.addEventListener('click', claimDailyReward);
    elements.day5.addEventListener('click', claimDailyReward);
    elements.day6.addEventListener('click', claimDailyReward);
    elements.day7.addEventListener('click', claimDailyReward);
    
    // Quests
    elements.telegramQuest.addEventListener('click', () => {
        if (gameState.completedQuests.includes('telegram')) return;
        
        // In a real app, this would check Telegram subscription
        // For demo purposes, we'll just complete the quest
        completeQuest('telegram');
    });
    
    // Premium payment
    elements.initTelegramPayment.addEventListener('click', () => {
        // In a real app, this would initiate Telegram Stars payment
        // For demo purposes, we'll just simulate payment
        showToast(translations[gameState.currentLanguage]['telegramPaymentInitiated']);
        
        setTimeout(() => {
            activatePremiumFor7Days();
        }, 2000);
    });
    
    // Change emoji
    elements.changeEmojiBtn.addEventListener('click', () => {
        elements.emojiSelector.classList.toggle('active');
    });
    
    elements.changeBgEmojiBtn.addEventListener('click', () => {
        elements.bgEmojiSelector.classList.toggle('active');
    });
    
    document.querySelectorAll('.emoji-option').forEach(option => {
        option.addEventListener('click', () => {
            gameState.customEmoji = option.textContent;
            localStorage.setItem('customEmoji', gameState.customEmoji);
            elements.clickArea.textContent = gameState.customEmoji;
            elements.emojiSelector.classList.remove('active');
            showToast(translations[gameState.currentLanguage]['emojiChanged']);
        });
    });
    
    document.querySelectorAll('.bg-emoji-option').forEach(option => {
        option.addEventListener('click', () => {
            gameState.bgEmoji = option.textContent;
            localStorage.setItem('bgEmoji', gameState.bgEmoji);
            elements.bgEmojiSelector.classList.remove('active');
            updateBgEmoji();
            showToast(translations[gameState.currentLanguage]['bgEmojiChanged']);
        });
    });
    
    // Color selection
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            
            if (option.hasAttribute('data-color1')) {
                gameState.selectedButtonColor1 = option.getAttribute('data-color1');
                gameState.selectedButtonColor2 = option.getAttribute('data-color2');
                localStorage.setItem('buttonColor1', gameState.selectedButtonColor1);
                localStorage.setItem('buttonColor2', gameState.selectedButtonColor2);
                applySavedColors();
            } else if (option.hasAttribute('data-bg')) {
                gameState.selectedBgColor = option.getAttribute('data-bg');
                localStorage.setItem('bgColor', gameState.selectedBgColor);
                applySavedColors();
            } else if (option.hasAttribute('data-progress1')) {
                gameState.selectedProgressColor1 = option.getAttribute('data-progress1');
                gameState.selectedProgressColor2 = option.getAttribute('data-progress2');
                localStorage.setItem('progressColor1', gameState.selectedProgressColor1);
                localStorage.setItem('progressColor2', gameState.selectedProgressColor2);
                applySavedColors();
            }
        });
    });
    
    // Player profile
    elements.playerProfile.addEventListener('click', () => {
        elements.profilePopup.classList.toggle('active');
    });
    
    // Profile tabs
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Add friend
    elements.addFriendBtn.addEventListener('click', addFriend);
    
    // Close friend profile
    elements.closeFriendProfile.addEventListener('click', () => {
        elements.friendProfilePopup.classList.remove('active');
    });
    
    // Send gift
    elements.sendGiftBtn.addEventListener('click', sendGift);
    
    // Remove friend
    elements.removeFriendBtn.addEventListener('click', removeFriend);
    
    // Clan buttons
    elements.createClanBtn.addEventListener('click', showCreateClanPopup);
    elements.joinClanBtn.addEventListener('click', () => {
        elements.clansList.style.display = 'block';
    });
    
    elements.createClanTabBtn.addEventListener('click', showCreateClanPopup);
    elements.joinClanTabBtn.addEventListener('click', () => {
        elements.clansList.style.display = 'block';
    });
    
    // Close clan popup
    elements.closeClanPopup.addEventListener('click', () => {
        elements.clanPopup.classList.remove('active');
    });
    
    // Close create clan popup
    elements.closeCreateClan.addEventListener('click', () => {
        elements.createClanPopup.classList.remove('active');
    });
    
    // Create clan confirm
    elements.createClanConfirm.addEventListener('click', createClan);
    
    // Clan icon selection
    document.querySelectorAll('.clan-icon-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.clan-icon-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
    
    // View clan
    elements.viewClanBtn.addEventListener('click', () => {
        if (gameState.myClan) {
            showClanPopup(gameState.myClan);
        }
    });
    
    // Leave clan
    elements.leaveClanBtn.addEventListener('click', leaveClan);
    
    // Navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Initialize game state
    checkPremiumStatus();
    startClickRefresh();
    updateBalance();
    updateClicksCounter();
    updateDailyRewardsDisplay();
    translatePage(gameState.currentLanguage);
    updatePlayerProfile();
    updateFriendsList();
    updateClanInfo();
    updateTopClansList();
    
    // Set click area emoji
    elements.clickArea.textContent = gameState.customEmoji;
    
    // Check if coming from referral
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');
    
    if (refParam && refParam !== gameState.playerTag) {
        // In a real app, you'd verify the referral and track it properly
        // For demo purposes, we'll just show a toast
        showToast(`${translations[gameState.currentLanguage]['refReward']} ${gameState.REF_REWARD} ${translations[gameState.currentLanguage]['forFriendInvite']}`);
    }
}

// Activate Premium for 7 days (demo function)
function activatePremiumFor7Days() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    
    gameState.premiumEndDate = endDate.toISOString();
    localStorage.setItem('premiumEndDate', gameState.premiumEndDate);
    
    activatePremium();
    startTimer();
    
    showToast(translations[gameState.currentLanguage]['premiumActivated7Days']);
}

// Reset Game
function resetGame() {
    localStorage.clear();
    
    // Reset game state
    gameState.coins = 0;
    gameState.clickPower = 1;
    gameState.refCount = 0;
    gameState.refEarned = 0;
    gameState.premiumActive = false;
    gameState.premiumEndDate = null;
    gameState.selectedButtonColor1 = "#6e45e2";
    gameState.selectedButtonColor2 = "#88d3ce";
    gameState.selectedBgColor = "#1a1a2e";
    gameState.selectedProgressColor1 = "#6e45e2";
    gameState.selectedProgressColor2 = "#88d3ce";
    gameState.clicksLeft = 200;
    gameState.regenStartTime = Date.now();
    gameState.totalClicks = 0;
    gameState.completedQuests = [];
    gameState.dailyRewards = {
        streak: 0,
        lastClaimed: null,
        claimedDays: []
    };
    gameState.customEmoji = '🌙';
    gameState.bgEmoji = '⭐';
    gameState.playerName = 'Player';
    gameState.playerTag = '#' + generatePlayerId();
    gameState.playerLevel = 1;
    gameState.playerXP = 0;
    gameState.achievements = {
        firstClick: { unlocked: false, progress: 0, max: 1 },
        hundredClicks: { unlocked: false, progress: 0, max: 100 },
        thousandClicks: { unlocked: false, progress: 0, max: 1000 },
        firstCoin: { unlocked: false, progress: 0, max: 1 },
        hundredCoins: { unlocked: false, progress: 0, max: 100 },
        thousandCoins: { unlocked: false, progress: 0, max: 1000 },
        firstRef: { unlocked: false, progress: 0, max: 1 },
        fiveRefs: { unlocked: false, progress: 0, max: 5 },
        tenRefs: { unlocked: false, progress: 0, max: 10 },
        firstQuest: { unlocked: false, progress: 0, max: 1 },
        allQuests: { unlocked: false, progress: 0, max: 4 },
        premium: { unlocked: false, progress: 0, max: 1 },
        firstFriend: { unlocked: false, progress: 0, max: 1 },
        joinClan: { unlocked: false, progress: 0, max: 1 }
    };
    gameState.friends = [];
    gameState.myClan = null;
    
    // Reset UI
    elements.premiumBadge.style.display = "none";
    elements.buyPremiumBtn.textContent = translations[gameState.currentLanguage]['buyPremium'];
    elements.buyPremiumBtn.classList.remove('premium-btn');
    elements.timeLeft.style.display = "none";
    elements.changeEmojiBtn.style.display = "none";
    elements.changeBgEmojiBtn.style.display = "none";
    document.body.classList.remove('premium-bg');
    
    // Reinitialize the game
    initGame();
}

// Start the game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);
