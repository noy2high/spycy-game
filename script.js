// --- Card List for SPYCY (105 Cards) ---
const cards = [
    // IMPORTANT: Paste your entire 105-card list here.
    "Lakukan dab setiap kali giliranmu, sampai kartu dare lain muncul. Jika lupa, minum 2x.",
    "Telepon teman secara acak dan nyanyikan lagu ulang tahun untuk mereka.",
    // ... [paste all 105 cards here] ...
    "MINUM 3x jika kamu pernah meninggalkan rumah tanpa celana dalam.",
    "RULES CARD: Kamu adalah 'Raja Pose'. Setiap kali kamu minum, kamu harus membuat pose seksi. Lupa? Minum 1x."
];
// -------------------------------------------------------------------

// --- DOM Elements & Global State ---
const regScreen = document.getElementById('registration-screen');
const gameScreen = document.getElementById('gameplay-screen');
const nameInput = document.getElementById('player-name-input');
const addPlayerBtn = document.getElementById('add-player-button');
const startGameBtn = document.getElementById('start-game-button');
const playerListElement = document.getElementById('player-list');
const playerCountElement = document.getElementById('player-count');
const turnTrackerElement = document.getElementById('turn-tracker');
const cardDisplay = document.getElementById('card-display');
const nextButton = document.getElementById('next-button');
const counterElement = document.getElementById('counter-display');

let players = [];
let availableCards = [...cards]; 
let currentPlayerIndex = -1; // Index starts at -1, first turn will be 0

// --- Player Management Logic ---

function updatePlayerList() {
    playerListElement.innerHTML = '';
    players.forEach((name, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${name} <button class="remove-btn" data-index="${index}">Hapus</button>`;
        playerListElement.appendChild(li);
    });

    playerCountElement.textContent = players.length;
    startGameBtn.disabled = players.length < 2; // Need at least 2 players to start
    addPlayerBtn.disabled = nameInput.value.trim().length === 0;
}

function handleAddPlayer() {
    const name = nameInput.value.trim();
    if (name) {
        players.push(name);
        nameInput.value = ''; // Clear input
        updatePlayerList();
    }
}

function handleRemovePlayer(e) {
    if (e.target.classList.contains('remove-btn')) {
        const index = parseInt(e.target.dataset.index);
        players.splice(index, 1);
        updatePlayerList();
    }
}

// --- Game Flow Logic ---

function switchScreen(activeId) {
    regScreen.classList.add('hidden');
    regScreen.classList.remove('active');
    gameScreen.classList.add('hidden');
    gameScreen.classList.remove('active');

    if (activeId === 'registration') {
        regScreen.classList.add('active');
        regScreen.classList.remove('hidden');
    } else {
        gameScreen.classList.add('active');
        gameScreen.classList.remove('hidden');
    }
}

function startGame() {
    // Player order is preserved. The last person added (highest index) goes first (index 0).
    // The player array is [LastAdded, ..., FirstAdded]
    players.reverse(); 
    currentPlayerIndex = 0; 
    
    shuffle(availableCards);
    updateCounter();
    updateTurnTracker();
    switchScreen('gameplay');
}

function updateTurnTracker() {
    if (players.length > 0) {
        // Use modulo to cycle through players
        currentPlayerIndex = (currentPlayerIndex) % players.length; 
        const currentName = players[currentPlayerIndex];
        turnTrackerElement.textContent = currentName;
        
        // Prepare for the next turn
        currentPlayerIndex++;
    }
}

// --- Card Drawing Logic (Modified) ---

function updateCounter() {
    counterElement.textContent = `Kartu Tersisa: ${availableCards.length} / ${cards.length}`;
}

function getCardCategory(prompt) {
    if (prompt.includes('RULES CARD') || prompt.includes('KATEGORI') || prompt.includes('RHETORIC')) {
        return 'RULES SPYCY';
    } else if (prompt.includes('Spill') || prompt.includes('Truth') || prompt.includes('Jawab Jujur')) {
        return 'TRUTH SPYCY';
    } else {
        return 'DARE SPYCY';
    }
}

function drawCard() {
    if (availableCards.length === 0) {
        availableCards = [...cards];
        shuffle(availableCards);
        cardDisplay.innerHTML = `<div class="card-tag">RESHUFFLE</div><p class="prompt-text">DECK HABIS! Kartu diacak ulang. Klik 'KARTU BERIKUTNYA' untuk ronde baru!</p>`;
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const drawnCard = availableCards.splice(randomIndex, 1)[0]; 
    const category = getCardCategory(drawnCard);
    
    // Apply visual flip animation
    cardDisplay.style.transform = 'rotateY(90deg)';
    
    setTimeout(() => {
        // Update content during the flip
        cardDisplay.innerHTML = `
            <div class="card-tag">${category}</div>
            <p class="prompt-text">${drawnCard}</p>
        `;
        // Flip back
        cardDisplay.style.transform = 'rotateY(0deg)';
    }, 250); // Half of the 0.5s CSS transition time
    
    updateCounter();
    updateTurnTracker(); // Move to the next player after drawing a card
}


// --- Event Listeners ---
nameInput.addEventListener('input', updatePlayerList); // Button status update
addPlayerBtn.addEventListener('click', handleAddPlayer);
playerListElement.addEventListener('click', handleRemovePlayer);
startGameBtn.addEventListener('click', startGame);
nextButton.addEventListener('click', drawCard);


// Initialize on load
updatePlayerList();
switchScreen('registration');
