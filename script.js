// --- Card List for SPYCY (105 Cards) ---
const cards = [
    // IMPORTANT: Paste your entire 105-card list here.
    "Lakukan dab setiap kali giliranmu, sampai kartu dare lain muncul. Jika lupa, **minum 2x**.",
    "Telepon teman secara acak dan nyanyikan lagu ulang tahun untuk mereka.",
    // ... [paste all 105 cards here] ...
    "**MINUM 3x** jika kamu pernah meninggalkan rumah tanpa celana dalam.",
    "**RULES CARD:** Kamu adalah 'Raja Pose'. Setiap kali kamu minum, kamu harus membuat pose seksi. Lupa? **Minum 1x**."
];
// -------------------------------------------------------------------

// --- DOM Elements & Global State ---
const regScreen = document.getElementById('registration-screen');
const gameScreen = document.getElementById('gameplay-screen');
const nameInput = document.getElementById('player-name-input');
const addPlayerBtn = document.getElementById('add-player-button');
const startGameBtn = document.getElementById('start-game-button');
const playerListElement = document.getElementById('player-list');
const turnTrackerElement = document.getElementById('turn-tracker');
const cardDisplay = document.getElementById('card-display');
const nextButton = document.getElementById('next-button');
const counterElement = document.getElementById('counter-display');
const container = document.querySelector('.container');

let players = [];
let availableCards = [...cards]; 
let currentPlayerIndex = -1; 

// --- Player Management Logic ---

function updatePlayerList() {
    playerListElement.innerHTML = '';
    players.forEach((name, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${name} <button class="remove-btn" data-index="${index}">REMOVE</button>`;
        playerListElement.appendChild(li);
    });

    // Removed Total Pemain: text
    startGameBtn.disabled = players.length < 2; 
    addPlayerBtn.disabled = nameInput.value.trim().length === 0;
}

function handleAddPlayer() {
    const name = nameInput.value.trim();
    if (name) {
        players.push(name);
        nameInput.value = ''; 
        updatePlayerList();
        nameInput.focus(); // Keep input focused for faster entry
    }
}

function handleRemovePlayer(e) {
    if (e.target.classList.contains('remove-btn')) {
        const index = parseInt(e.target.dataset.index);
        players.splice(index, 1);
        updatePlayerList();
    }
}

// --- Game Flow Logic (START BUTTON FIX & TRANSITION) ---

function switchScreen(activeId) {
    // Hide both screens instantly for setup
    regScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    
    // Show the desired screen
    if (activeId === 'registration') {
        regScreen.classList.remove('hidden');
        regScreen.classList.add('active');
    } else {
        gameScreen.classList.remove('hidden');
        gameScreen.classList.add('active');
    }
}

function startGame() {
    if (players.length < 2) return; 

    // Add fade-out effect to container for smooth transition
    container.classList.add('fade-out');

    setTimeout(() => {
        // Player order is reversed: last-in (top of list) is first to play.
        players.reverse(); 
        currentPlayerIndex = 0; 
        
        shuffle(availableCards);
        updateCounter();
        updateTurnTracker();
        
        // Hide container fade-out effect and switch to gameplay
        container.classList.remove('fade-out');
        switchScreen('gameplay');
    }, 500); // Wait for CSS transition to complete (0.5s)
}

function updateTurnTracker() {
    if (players.length > 0) {
        // Cycle through players and display the current one
        const currentName = players[currentPlayerIndex % players.length];
        turnTrackerElement.textContent = currentName;
        
        // Prepare for the next turn
        currentPlayerIndex++;
    }
}

// --- Card Drawing Logic ---
// (Logic remains mostly the same, ensuring player turn updates on card draw)

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateCounter() {
    counterElement.textContent = `Cards Left: ${availableCards.length} / ${cards.length}`;
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
        cardDisplay.innerHTML = `<div class="card-tag">RESHUFFLE</div><p class="prompt-text">DECK EMPTY! Cards shuffled. Click 'NEXT CARD' for a new round!</p>`;
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
nameInput.addEventListener('input', updatePlayerList); 
addPlayerBtn.addEventListener('click', handleAddPlayer);
playerListElement.addEventListener('click', handleRemovePlayer);
startGameBtn.addEventListener('click', startGame);
nextButton.addEventListener('click', drawCard);


// Initialize on load
updatePlayerList();
switchScreen('registration'); // Ensure registration screen is visible on load

// Allows 'Enter' key to add a player
nameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleAddPlayer();
    }
});
