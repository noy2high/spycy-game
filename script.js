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

// --- DOM Elements & Global State (Unchanged) ---
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
const container = document.querySelector('.container');
const turnTrackerArea = document.querySelector('.turn-tracker-area'); // NEW: Get the area for flashing

let players = [];
let availableCards = [...cards]; 
let currentPlayerIndex = -1; 

// --- Player Management Logic (Unchanged) ---

function updatePlayerList() {
    playerListElement.innerHTML = '';
    players.forEach((name) => {
        const li = document.createElement('li');
        li.textContent = name; 
        playerListElement.appendChild(li);
    });

    playerCountElement.textContent = players.length;
    startGameBtn.disabled = players.length < 2; 
    addPlayerBtn.disabled = nameInput.value.trim().length === 0;
}

function handleAddPlayer() {
    const name = nameInput.value.trim();
    if (name) {
        players.push(name);
        nameInput.value = ''; 
        updatePlayerList();
        nameInput.focus();
    }
}

// --- Game Flow Logic (Modified for Dynamic Indicator) ---

function switchScreen(activeId) {
    regScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    
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

    container.classList.add('fade-out');

    setTimeout(() => {
        players.reverse(); 
        currentPlayerIndex = 0; 
        
        shuffle(availableCards);
        updateCounter();
        updateTurnTracker(true); // Call updateTurnTracker with a flash trigger
        
        container.classList.remove('fade-out');
        switchScreen('gameplay');
    }, 500); 
}

// NEW: Function modified to include a flash trigger
function updateTurnTracker(shouldFlash = false) {
    if (players.length > 0) {
        // Cycle through players and display the current one
        const currentName = players[currentPlayerIndex % players.length];
        turnTrackerElement.textContent = currentName;
        
        // Dynamic Player Indicator (Flash)
        if (shouldFlash) {
            turnTrackerArea.classList.remove('flash');
            void turnTrackerArea.offsetWidth; // Trigger reflow
            turnTrackerArea.classList.add('flash');
            setTimeout(() => {
                turnTrackerArea.classList.remove('flash');
            }, 300);
        }

        // Prepare for the next turn
        currentPlayerIndex++;
    }
}

// --- Card Drawing Logic (Modified for Themed Colors) ---

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
    if (prompt.includes('RULES CARD') || prompt.includes('KATEGORI') || prompt.includes('RHETORIC') || prompt.includes('WATERFALL')) {
        return { name: 'RULES SPYCY', className: 'rules-card' };
    } else if (prompt.includes('Spill') || prompt.includes('Truth') || prompt.includes('Jawab Jujur') || prompt.includes('rahasia')) {
        return { name: 'TRUTH SPYCY', className: 'truth-card' };
    } else {
        return { name: 'DARE SPYCY', className: 'dare-card' };
    }
}

function drawCard() {
    if (availableCards.length === 0) {
        availableCards = [...cards];
        shuffle(availableCards);
        cardDisplay.innerHTML = `<div class="card-tag">RESHUFFLE</div><p class="prompt-text">DECK EMPTY! Cards shuffled. Click 'NEXT CARD' for a new round!</p>`;
        // Ensure subsequent draw calls flash the new player's name
        updateTurnTracker(true); 
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const drawnCard = availableCards.splice(randomIndex, 1)[0]; 
    const category = getCardCategory(drawnCard);
    
    // Clear previous card classes and set the new category class
    cardDisplay.className = 'card'; // Reset to base class
    cardDisplay.classList.add(category.className);
    
    cardDisplay.style.transform = 'rotateY(90deg)';
    
    setTimeout(() => {
        cardDisplay.innerHTML = `
            <div class="card-tag">${category.name}</div>
            <p class="prompt-text">${drawnCard}</p>
        `;
        cardDisplay.style.transform = 'rotateY(0deg)';
    }, 250); 
    
    updateCounter();
    updateTurnTracker(true); // Flash the new active player
}


// --- Event Listeners ---
nameInput.addEventListener('input', updatePlayerList); 
addPlayerBtn.addEventListener('click', handleAddPlayer);
startGameBtn.addEventListener('click', startGame);
nextButton.addEventListener('click', drawCard);


// Initialize on load
updatePlayerList();
switchScreen('registration'); 

// Allows 'Enter' key to add a player
nameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleAddPlayer();
    }
});
