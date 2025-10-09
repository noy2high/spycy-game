// --- Card List for SPYCY (105 Cards) ---
const cards = [
    // IMPORTANT: Paste your entire 105-card list here.
    "Lakukan gestur monyet setiap ingin bicara selama 3 ronde. Jika lupa, TENGGAK 2x.",
    "TENGGAK 1x tanpa menggunakan pergelangan tanganmu sama sekali.",
    "Ambil gelas pemain kanan dan kirimu, jadikan satu dengan gelasmu lalu habiskan tanpa jeda.",
    "Pilih satu orang untuk menjadi 'Pengawal'. Pengawal harus TENGGAK setiap kali kamu TENGGAK.",
    "Menghadap belakang selama 3 ronde.",
    "Jadikan pemain di sebelah kananmu sebagai 'cerminmu' selama 2 putaran. Lakukan apa pun yang dia lakukan.",
    "Pilih 2 orang. Mereka harus beradu panco. Yang kalah TENGGAK 3x.",
    "Buat snapgram dengan muka ter-anehmu, hanya boleh dihapus saat ada yg like/reply.",
    "Tebak lagu yang sedang diputar. Gagal? TENGGAK 5x.",
    "Lakukan 5 push-up atau TENGGAK 3x.",
    "Tahan tawa dengan air di mulut bersama pemain terdekat, yang bocor duluan harus TENGGAK 3x",
    "Pilih 2 orang, lalu habiskan gelas mereka sekarang juga. TANPA ALASAN.",
    "Sebutkan semua Presiden Indonesia secara urut. Gagal? 3x TENGGAK.",
    "Sesuai putaran, masing-masing pemain keluarkan suara binatang. Yang paling jelek TENGGAK 2x.",
    "Yang terkahir berdiri dan angkat 1 kaki, harus TENGGAK semua gelas pemain lainnya.",
    "Sesuai putaran, lakukan satu gestur, pemain berikutnya harus menirui dan menambah gestur baru, lakukan terus sampai ada yang lupa atau mengulang. Yang kalah TENGGAK 4x.",
    "Berdiri dan lakukan tarian robot selama 15 detik atau TENGGAK 3x.",
    "THE FLOOR IS LAVA! yang terakhir menghindari lantai harus TENGGAK.",
    "Sesuai putaran, sebutkan nama-nama kota di Pulau Jawa. Yang mengulang atau gagal menjawab TENGGAK.",
    "Cium kaki pemain sebelah kirimu atau TENGGAK 3x.",
    "Sebelum Rupiah, apa mata uang yang digunakan pada masa awal kemerdekaan Indonesia? Salah, TENGGAK 2x.",
    "Abisin aja gelas lo sekarang, gausah cacicu.",
    "Tunjukan Bookmarks Twittermu kepada semua pemain, lalu TENGGAK 1x.",
    "Caci maki pemain sebelah kirimu. Kalau tidak berantem, kalian berdua TENGGAK 1x.",
    "Pemain yang paling mabuk, tunjuk 1 pemain untuk bantu menghabiskan gelasmu.",
    "Sesuai putaran, berhitung dari angka 1 sampai 21. Pemain yang mendapat nomor 21, harus TENGGAK kedua gelas pemain kanan dan kiri-nya.",
    "Sesuai putaran, sebutkan nama-nama kota di Pulau Jawa. Yang mengulang atau gagal menjawab TENGGAK.",
    "Setiap berbicara, keluarkan suara babi pada akhiran kalimat selama 3 ronde. Jika lupa, TENGGAK 1x",
    "Selama 1 putaran, setiap kali ada yang menyebut namamu, kamu harus mengeong. Lupa? TENGGAK 1x",
    "Pilih pemain di sebelah kananmu. Kalian berdua harus bertukar tempat tanpa menggunakan kaki. (misal: merangkak atau berguling).",
    "Kumpulkan 5 benda berwarna merah di sekitarmu dalam 10 detik. Jika gagal, TENGGAK 2x.",
    "Minum 5x. Lalu, berikan pelukan awkward selama 15 detik kepada objek mati di ruangan itu (misal: lemari atau kursi).",
    "Pemain di sebelah kirimu bebas memberi perintah (tugas kecil) padamu 1x dalam putaran ini.",
    "Pilih lagu di YouTube. Semuanya harus menyanyikan bait pertamanya. Yang paling diam TENGGAK 1x.",
    "Tunjuk ke luar jendela (atau dinding) dan jelaskan apa yang baru saja kamu lihat.",
    "Spill it. Ceritakan tiga orang di grup ini yang pernah kamu bayangkan tanpa pakaian.",
    "Truth. Apa *chat* terakhir kamu ke mantan (atau gebetan)? Spill atau TENGGAK 4x.",
    "TENGGAK 3x jika kamu pernah melakukan *one-night stand*.",
    "TENGGAK 4x jika kamu pernah mabuk sampai hilang ingatan dan melakukan sesuatu yang memalukan.",
    "Ceritakan *crush* teraneh yang pernah kamu miliki.",
    "Apa hal yang kamu cari di Google secara rahasia yang paling memalukan baru-baru ini?",
    "Jawab atau TENGGAK. Siapa di grup ini yang paling mungkin menjadi bos *mafia*?",
    "TENGGAK 2x jika kamu pernah *ghosting* seseorang setelah kencan yang sangat panas.",
    "Spill it. Apa fantasi seksual paling aneh yang kamu miliki? Spill atau TENGGAK 5x.",
    "Pernahkah kamu *stalking* akun mantan/gebetan sampai ke postingan lebih dari 5 tahun yang lalu?",
    "Siapa di grup ini yang kamu pikir paling sering *ghosting* orang?",
    "TENGGAK 1x jika kamu pernah *flirting* dengan atasan/dosenmu.",
    "Apa investasi terburuk (uang atau waktu) yang pernah kamu lakukan yang kamu tutupi dari teman-teman?",
    "Pernahkah kamu membaca pesan pribadi di HP orang lain tanpa izin?",
    "TENGGAK 3x jika kamu pernah *unfollow* atau *mute* teman di media sosial (dan mereka ada di sini).",
    "Jawab Jujur. Apa rahasia paling memalukan yang kamu sembunyikan dari grup ini?",
    "Ceritakan kisah tentang saat kamu gagal total (seksual atau profesional).",
    "TENGGAK 1x jika kamu pernah *download* aplikasi kencan rahasia (yang kamu sembunyikan).",
    "Siapa yang *story*-nya di Instagram sering kamu *skip*?",
    "TENGGAK 2x jika kamu pernah *flirting* dengan sesama jenis (meskipun kamu lurus).",
    "Sebutkan 3 Hal yang kamu lakukan yang mungkin membuatmu dipecat (seandainya bos tahu).",
    "TENGGAK 4x jika kamu pernah mengatakan 'Aku cinta kamu' pada orang yang salah.",
    "Pernahkah kamu menyalahkan orang lain atas kesalahanmu di tempat kerja/sekolah?",
    "Kapan terakhir kali kamu menangis karena masalah *cinta*? Jelaskan alasannya.",
    "TENGGAK 1x jika kamu pernah tidur dengan *tetangga*mu.",
    "TENGGAK 2x jika kamu pernah berpura-pura tahu tentang suatu topik agar terlihat keren di depan *gebetan*.",
    "Apa *tinder date* atau kencan terburukmu yang harus kamu tinggalkan secara diam-diam?",
    "TENGGAK 3x jika kamu pernah mengirim pesan teks ke orang yang salah dengan pesan yang sangat pribadi (dan itu *spicy*).",
    "Jawab Jujur. Apa ketakutan terbesar dalam hubunganmu saat ini?",
    "TENGGAK 1x jika kamu pernah *googling* nama mantanmu dalam 24 jam terakhir.",
    "SPIL! Apa hal paling aneh yang pernah kamu temukan di ponsel pasanganmu?",
    "TENGGAK 2x jika kamu pernah berpura-pura menjadi seseorang yang berbeda di media sosial.",
    "TENGGAK 3x jika kamu pernah mencuri sesuatu (tidak harus besar).",
    "TENGGAK 1x jika kamu pernah pacaran *backstreet* (sembunyi-sembunyi).",
    "TENGGAK 2x jika kamu pernah berbohong tentang umurmu untuk masuk ke tempat 21+.",
    "RULES CARD: Semua orang harus mengatakan 'Cheers, SPYCY!' sebelum TENGGAK. Lupa? TENGGAK 2x.",
    "KATEGORI HOT: Sebutkan Kategori: 'Posisi Seks'. Pemain harus menyebutkan 5 posisi berbeda dalam 10 detik, berputaran. Yang gagal TENGGAK 3x.",
    "RHETORIC: Tunjuk orang lain. Kalian harus berbalas-balasan pertanyaan (tidak boleh menjawab atau mengulang kata). Yang gagal TENGGAK 3x.",
    "RULES CARD: Kamu adalah 'Raja Jempol'. Letakkan jempol di meja kapan saja. Semua harus ikut. Yang terakhir TENGGAK 3x.",
    "JEMBATAN MASA LALU: Kamu dan orang di sebelah kanan harus TENGGAK bersama sambil menceritakan satu penyesalan terbesar mereka.",
    "RULES CARD: Tidak boleh menggunakan kata 'iya' dan 'tidak' sampai putaranmu datang lagi. Jika ada yang melanggar, pemain itu TENGGAK 2x.",
    "SEBUT 5 HOT: Sebutkan 5 jenis kondom/pelumas/sex toys dalam 10 detik. Gagal? TENGGAK 4x.",
    "PILIH TEMAN SETIA: Pilih satu orang. Mulai sekarang, setiap kali kamu TENGGAK, dia harus TENGGAK juga.",
    "SEMUA ORANG PAKAI HITAM: Semua yang memakai pakaian berwarna hitam TENGGAK 2x.",
    "SEMUA JOMBLO: Semua yang berstatus jomblo saat ini TENGGAK 3x.",
    "TUKAR TEMPAT dengan orang yang paling mungkin telanjang di pantai umum.",
    "RULES CARD: Semua orang harus memegang gelas dengan tangan non-dominan. Lupa? TENGGAK 2x.",
    "TERAKHIR SENTUH LANTAI: Yang paling akhir menyentuh lantai dengan kedua tangan harus TENGGAK 3x.",
    "RULES CARD: Kamu boleh menunjuk dua orang untuk beradu 'suit' (jepang/gunting-batu-kertas). Yang kalah TENGGAK 3x.",
    "PUNISHMENT: Kamu boleh memilih satu orang di grup ini untuk TENGGAK 4x dan mengucapkan terima kasih setelahnya.",
    "ATURAN BARU FINAL: Buat aturan baru yang harus diikuti semua orang sampai game berakhir. Yang melanggar, TENGGAK 2x.",
    "PASANGAN TERBAIK: Semua yang lahir di bulan yang sama denganmu harus TENGGAK 2x.",
    "MIMIK: Kamu harus TENGGAK 1x. Semua orang harus meniru ekspresi wajah terakhirmu.",
    "AKTOR/AKTRIS NSFW: Tunjuk orang lain. Sebutkan nama Aktor/Aktris (porno) yang namanya dimulai dengan huruf terakhir nama yang disebutkan sebelumnya. Yang gagal TENGGAK 3x.",
    "SEMUA YANG PUNYA TATO: Semua yang memiliki tato TENGGAK 2x.",
    "DEBAT KONYOL: Kamu dan orang di sebelah kiri harus berdebat selama 10 detik tentang topik konyol (misal: lebih baik jomblo atau diselingkuhi).",
    "TANTANGAN FOTO: Tunjukkan 3 foto *selfie* pertama di galeri HP-mu. Yang paling malu harus TENGGAK 3x.",
    "CERITA CINTA:* Ceritakan satu pengalaman cinta yang paling aneh yang pernah kamu alami. Jika ada yang tertawa, dia TENGGAK 3x.",
    "RULES CARD: Kamu adalah 'Kritikus'. Setiap kali ada yang TENGGAK, kamu harus memberikan kritik yang *pedas* tentang pilihan TENGGAKannya.",
    "SEMUA ORANG JALAN JAUH: Semua yang menempuh perjalanan lebih dari 30 menit ke tempat ini harus TENGGAK 2x.",
    "RULES CARD: Semua orang harus memanggilmu 'Tuan/Nyonya SPYCY' sampai kartu ini muncul lagi. Lupa? TENGGAK 1x.",
    "BUKA GALERI NSFW: Tunjukkan foto yang paling berisiko yang ada di folder tersembunyi/galerimu. Yang gagal TENGGAK 4x.",
    "TEBAK LAGU HOT: Nyanyikan satu baris lagu dengan tema eksplisit. Yang paling cepat menebak TENGGAK 2x.",
    "TENGGAK SEMUA: Semua orang harus TENGGAK 2x dan mengucapkan terima kasih pada orang di sebelah kanan.",
    "SEMUA ORANG BERPASANGAN: Semua yang sudah memiliki pasangan (menikah/pacaran) TENGGAK 2x.",
    "RULES CARD: Tidak boleh menunjuk dengan jari telunjuk. Gunakan siku. Lupa? TENGGAK 1x.",
    "TENGGAK 3x jika kamu pernah meninggalkan rumah tanpa celana dalam.",
    "RULES CARD: Sebelum TENGGAK, kamu harus memutar pinggulmu 2x. Lupa? TENGGAK 2x.",
    "DRAMA TEGUK: Kamu harus TENGGAK dengan sangat dramatis, seolah-olah itu adalah TENGGAKan terakhirmu.",
    "TENGGAK *WATERFALL*: Semua mulai TENGGAK bareng. Kamu berhenti dulu, lalu disusul pemain di sebelah kananmu, dan seterusnya.",
    "TENGGAK 3x jika kamu pernah tidur di rumah teman tanpa izin.",
    "RULES CARD: Kamu adalah 'Raja Pose'. Setiap kali kamu TENGGAK, kamu harus membuat pose seksi. Lupa? TENGGAK 1x."
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
const container = document.querySelector('.container');
const turnTrackerArea = document.querySelector('.turn-tracker-area');

let players = [];
let availableCards = [...cards]; 
let currentPlayerIndex = -1; 

// --- Player Management Logic ---

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

// --- Game Flow Logic ---

function switchScreen(activeId) {
    // We use a blend of display:none (in .hidden) and opacity for smooth transitions
    if (activeId === 'registration') {
        regScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
    } else {
        regScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
    }
}

function startGame() {
    if (players.length < 2) return; 

    container.classList.add('fade-out');

    setTimeout(() => {
        // Player order is reversed: last-in is first to play.
        players.reverse(); 
        currentPlayerIndex = 0; 
        
        shuffle(availableCards);
        updateCounter();
        updateTurnTracker(true); 
        
        container.classList.remove('fade-out');
        switchScreen('gameplay');
    }, 500); 
}

function updateTurnTracker(shouldFlash = false) {
    if (players.length > 0) {
        const currentName = players[currentPlayerIndex % players.length];
        turnTrackerElement.textContent = currentName;
        
        if (shouldFlash) {
            turnTrackerArea.classList.remove('flash');
            void turnTrackerArea.offsetWidth; 
            turnTrackerArea.classList.add('flash');
            setTimeout(() => {
                turnTrackerArea.classList.remove('flash');
            }, 300);
        }

        currentPlayerIndex++;
    }
}

// --- Card Drawing Logic ---

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
        updateTurnTracker(true); 
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const drawnCard = availableCards.splice(randomIndex, 1)[0]; 
    const category = getCardCategory(drawnCard);
    
    // Clear previous card classes and set the new category class
    cardDisplay.className = 'card'; 
    cardDisplay.classList.add(category.className);
    
    // Animate the card flip
    cardDisplay.style.transform = 'rotateY(90deg)';
    
    setTimeout(() => {
        cardDisplay.innerHTML = `
            <div class="card-tag">${category.name}</div>
            <p class="prompt-text">${drawnCard}</p>
        `;
        cardDisplay.style.transform = 'rotateY(0deg)';
    }, 250); 
    
    updateCounter();
    updateTurnTracker(true); 
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

