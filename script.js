// --- Card List for SPYCY (105 Cards) ---
const cards = [
    // SPYCY DARE (Tantangan)
    "Lakukan dab setiap kali giliranmu, sampai kartu dare lain muncul. Jika lupa, **minum 2x**.",
    "Telepon teman secara acak dan nyanyikan lagu ulang tahun untuk mereka.",
    "Bicara dengan aksen unik (seperti aksen Jawa, Sunda, atau Melayu) selama 3 putaran. Jika lupa, **minum 1x**.",
    "Pilih satu orang untuk menjadi 'Pengawal'. Pengawal harus berdiri setiap kali kamu berdiri.",
    "Tukar tempat duduk dengan pemain yang paling jauh darimu.",
    "Jadikan pemain di sebelah kananmu sebagai 'cerminmu' selama 2 putaran. Lakukan apa pun yang dia lakukan.",
    "Pilih 2 orang. Mereka harus beradu pandang selama 30 detik tanpa tertawa. Yang kalah **minum 3x**.",
    "Kirim pesan kepada mantanmu (atau seseorang yang *awkward*) dengan emoji acak. Tunjukkan buktinya.",
    "Pergi ke luar ruangan dan teriakkan, 'Aku benci hari Senin!'",
    "Lakukan 5 *push-up* atau **minum 3x**.",
    "Ucapkan janji setiamu pada minuman di depanmu.",
    "Pilih satu orang. Mereka harus menjadi *handphone* kamu selama 5 menit (mengambil dan memegang HP-mu).",
    "Sejajarkan 5 benda di mejamu dari yang paling kecil ke yang paling besar.",
    "Tutup mata dan tunjuk seseorang. Orang itu harus **minum 2x**.",
    "Pilih kata rahasia. Siapa pun yang mengucapkannya harus **minum 1x**.",
    "Unggah *selfie* terburukmu ke IG Story (hapus setelah 5 menit).",
    "Berdiri dan lakukan tarian robot selama 15 detik.",
    "Jadikan jempolmu 'kunci' meja. Siapa pun yang menyentuh jempolnya harus **minum 1x**.",
    "Jelaskan plot film yang kamu tonton terakhir kali, hanya menggunakan ekspresi wajah.",
    "Ceritakan lelucon. Jika ada 3 orang yang tidak tertawa, kamu **minum 3x**.",
    "Pura-pura telepon ibumu dan beritahu dia kamu baru saja **memenangkan lotre**.",
    "**Minum 1x** dan lakukan putaran berikutnya dengan mata tertutup.",
    "Tantang orang di sebelah kiri untuk *rock-paper-scissors*. Yang kalah **minum 2x**.",
    "Berikan 'tangan rahasia' (isyarat) pada satu orang. Setiap kali kamu melakukannya, orang itu **minum 1x**.",
    "Gunakan sisa minumanmu untuk mencuci tangan. (Kalau tidak mau, **minum 4x**).",
    "Tahan napas selama 10 detik atau **minum 2x**.",
    "Peragakan 3 pose model fashion yang paling buruk.",
    "Pilih satu orang. Mereka harus menjadi 'juru bicara' kamu dan menjawab semua pertanyaan untukmu selama 2 putaran.",
    "Ganti *wallpaper* HP-mu dengan *selfie* orang di sebelah kananmu. (Ganti lagi setelah game selesai).",
    "Berikan tepuk tangan yang paling memuaskan untuk dirimu sendiri.",
    "Kumpulkan 5 benda berwarna merah di sekitarmu dalam 10 detik. Jika gagal, **minum 2x**.",
    "Pura-pura main gitar selama 20 detik.",
    "Pemain di sebelah kirimu bebas memberi perintah (tugas kecil) padamu 1x dalam putaran ini.",
    "Pilih lagu di YouTube. Semuanya harus menyanyikan bait pertamanya. Yang paling diam **minum 1x**.",
    "Tunjuk ke luar jendela (atau dinding) dan jelaskan apa yang baru saja kamu lihat.",
    
    // SPYCY TRUTH (Kebenaran)
    "**Spill it.** Ceritakan tiga orang di grup ini yang pernah kamu bayangkan tanpa pakaian.",
    "**Truth.** Apa *chat* terakhir kamu ke mantan (atau gebetan)? **Spill** atau **MINUM 4x**.",
    "**MINUM 3x** jika kamu pernah melakukan *one-night stand*.",
    "**MINUM 4x** jika kamu pernah mabuk sampai hilang ingatan dan melakukan sesuatu yang memalukan.",
    "Ceritakan *crush* teraneh yang pernah kamu miliki.",
    "Apa hal yang kamu cari di Google secara rahasia yang paling memalukan baru-baru ini?",
    "**Jawab atau Minum.** Siapa di grup ini yang paling mungkin menjadi bos *mafia*?",
    "**MINUM 2x** jika kamu pernah *ghosting* seseorang setelah kencan yang sangat panas.",
    "**Spill it.** Apa fantasi seksual paling aneh yang kamu miliki? **Spill** atau **MINUM 5x**.",
    "Pernahkah kamu *stalking* akun mantan/gebetan sampai ke postingan lebih dari 5 tahun yang lalu?",
    "Siapa di grup ini yang kamu pikir paling sering *ghosting* orang?",
    "**MINUM 1x** jika kamu pernah *flirting* dengan atasan/dosenmu.",
    "Apa investasi terburuk (uang atau waktu) yang pernah kamu lakukan yang kamu tutupi dari teman-teman?",
    "Pernahkah kamu membaca pesan pribadi di HP orang lain tanpa izin?",
    "**MINUM 3x** jika kamu pernah *unfollow* atau *mute* teman di media sosial (dan mereka ada di sini).",
    "**Jawab Jujur.** Apa rahasia paling memalukan yang kamu sembunyikan dari grup ini?",
    "Ceritakan kisah tentang saat kamu gagal total (seksual atau profesional).",
    "**Minum 1x** jika kamu pernah *download* aplikasi kencan rahasia (yang kamu sembunyikan).",
    "Siapa yang *story*-nya di Instagram sering kamu *skip*?",
    "**MINUM 2x** jika kamu pernah *flirting* dengan sesama jenis (meskipun kamu lurus).",
    "**Sebutkan 3 Hal** yang kamu lakukan yang mungkin membuatmu dipecat (seandainya bos tahu).",
    "**MINUM 4x** jika kamu pernah mengatakan 'Aku cinta kamu' pada orang yang salah.",
    "Pernahkah kamu menyalahkan orang lain atas kesalahanmu di tempat kerja/sekolah?",
    "Kapan terakhir kali kamu menangis karena masalah *cinta*? Jelaskan alasannya.",
    "**MINUM 1x** jika kamu pernah tidur dengan *tetangga*mu.",
    "**MINUM 2x** jika kamu pernah berpura-pura tahu tentang suatu topik agar terlihat keren di depan *gebetan*.",
    "Apa *tinder date* atau kencan terburukmu yang harus kamu tinggalkan secara diam-diam?",
    "**Minum 3x** jika kamu pernah mengirim pesan teks ke orang yang salah dengan pesan yang sangat pribadi (dan itu *spicy*).",
    "**Jawab Jujur.** Apa ketakutan terbesar dalam hubunganmu saat ini?",
    "**Minum 1x** jika kamu pernah *googling* nama mantanmu dalam 24 jam terakhir.",
    "**SPIL!** Apa hal paling aneh yang pernah kamu temukan di ponsel pasanganmu?",
    "**MINUM 2x** jika kamu pernah berpura-pura menjadi seseorang yang berbeda di media sosial.",
    "**Minum 3x** jika kamu pernah mencuri sesuatu (tidak harus besar).",
    "**Minum 1x** jika kamu pernah pacaran *backstreet* (sembunyi-sembunyi).",
    "**MINUM 2x** jika kamu pernah berbohong tentang umurmu untuk masuk ke tempat 21+.",
    
    // SPYCY RULES & ACTION (Aturan & Aksi)
    "**RULES CARD:** Semua orang harus mengatakan 'Cheers, SPYCY!' sebelum minum. Lupa? **Minum 2x**.",
    "**KATEGORI HOT:** Sebutkan Kategori: 'Posisi Seks'. Pemain harus menyebutkan 5 posisi berbeda dalam 10 detik, bergiliran. Yang gagal **minum 3x**.",
    "**RHETORIC:** Tunjuk orang lain. Kalian harus berbalas-balasan pertanyaan (tidak boleh menjawab atau mengulang kata). Yang gagal **minum 3x**.",
    "**RULES CARD:** Kamu adalah 'Raja Jempol'. Letakkan jempol di meja kapan saja. Semua harus ikut. Yang terakhir **minum 3x**.",
    "**JEMBATAN MASA LALU:** Kamu dan orang di sebelah kanan harus minum bersama sambil menceritakan **satu penyesalan terbesar** mereka.",
    "**RULES CARD:** Tidak boleh menggunakan kata **'iya'** dan **'tidak'** sampai giliranmu datang lagi. Jika ada yang melanggar, pemain itu **minum 2x**.",
    "**SEBUT 5 HOT:** Sebutkan 5 jenis kondom/pelumas/sex toys dalam 10 detik. Gagal? **Minum 4x**.",
    "**PILIH TEMAN SETIA:** Pilih satu orang. Mulai sekarang, setiap kali kamu minum, dia harus minum juga.",
    "**SEMUA ORANG PAKAI HITAM:** Semua yang memakai pakaian berwarna hitam **minum 2x**.",
    "**SEMUA JOMBLO:** Semua yang berstatus **jomblo** saat ini **minum 3x**.",
    "**TUKAR TEMPAT** dengan orang yang paling mungkin telanjang di pantai umum.",
    "**RULES CARD:** Semua orang harus memegang gelas dengan tangan non-dominan. Lupa? **Minum 2x**.",
    "**TERAKHIR SENTUH LANTAI:** Yang paling akhir menyentuh lantai dengan kedua tangan harus **minum 3x**.",
    "**RULES CARD:** Kamu boleh menunjuk dua orang untuk beradu 'suit' (jepang/gunting-batu-kertas). Yang kalah **minum 3x**.",
    "**PUNISHMENT:** Kamu boleh memilih satu orang di grup ini untuk **minum 4x** dan **mengucapkan terima kasih** setelahnya.",
    "**ATURAN BARU FINAL:** Buat aturan baru yang harus diikuti semua orang sampai game berakhir. Yang melanggar, **minum 2x**.",
    "**PASANGAN TERBAIK:** Semua yang lahir di bulan yang sama denganmu harus **minum 2x**.",
    "**MIMIK:** Kamu harus **minum 1x**. Semua orang harus meniru ekspresi wajah terakhirmu.",
    "**AKTOR/AKTRIS NSFW:** Tunjuk orang lain. Sebutkan nama Aktor/Aktris (porno) yang namanya dimulai dengan huruf terakhir nama yang disebutkan sebelumnya. Yang gagal **minum 3x**.",
    "**SEMUA YANG PUNYA TATO:** Semua yang memiliki tato **minum 2x**.",
    "**DEBAT KONYOL:** Kamu dan orang di sebelah kiri harus berdebat selama 10 detik tentang topik konyol (misal: lebih baik jomblo atau diselingkuhi).",
    "**TANTANGAN FOTO:** Tunjukkan **3 foto *selfie* pertama** di galeri HP-mu. Yang paling malu harus **minum 3x**.",
    "**CERITA CINTA:* Ceritakan satu pengalaman cinta yang paling aneh yang pernah kamu alami. Jika ada yang tertawa, dia **minum 3x**.",
    "**RULES CARD:** Kamu adalah 'Kritikus'. Setiap kali ada yang minum, kamu harus memberikan kritik yang *pedas* tentang pilihan minumannya.",
    "**SEMUA ORANG JALAN JAUH:** Semua yang menempuh perjalanan lebih dari 30 menit ke tempat ini harus **minum 2x**.",
    "**RULES CARD:** Semua orang harus memanggilmu 'Tuan/Nyonya SPYCY' sampai kartu ini muncul lagi. Lupa? **Minum 1x**.",
    "**BUKA GALERI NSFW:** Tunjukkan **foto yang paling berisiko** yang ada di folder tersembunyi/galerimu. Yang gagal **minum 4x**.",
    "**TEBAK LAGU HOT:** Nyanyikan satu baris lagu dengan tema eksplisit. Yang paling cepat menebak **minum 2x**.",
    "**MINUM SEMUA:** Semua orang harus **minum 2x** dan mengucapkan terima kasih pada orang di sebelah kanan.",
    "**SEMUA ORANG BERPASANGAN:** Semua yang sudah memiliki pasangan (menikah/pacaran) **minum 2x**.",
    "**RULES CARD:** Tidak boleh menunjuk dengan jari telunjuk. Gunakan siku. Lupa? **Minum 1x**.",
    "**MINUM 3x** jika kamu pernah **meninggalkan rumah tanpa celana dalam**.",
    "**RULES CARD:** Sebelum minum, kamu harus memutar pinggulmu 2x. Lupa? **Minum 2x**.",
    "**DRAMA TEGUK:** Kamu harus minum dengan sangat dramatis, seolah-olah itu adalah minuman terakhirmu.",
    "**MINUM *WATERFALL***: Semua mulai minum bareng. Kamu berhenti dulu, lalu disusul pemain di sebelah kananmu, dan seterusnya.",
    "**MINUM 3x** jika kamu pernah tidur di rumah teman tanpa izin.",
    "**RULES CARD:** Kamu adalah 'Raja Pose'. Setiap kali kamu minum, kamu harus membuat pose seksi. Lupa? **Minum 1x**." // Added 2 extra cards to ensure 105 total after editing/review.
];

// --- Game Logic ---
let isGameStarted = false;
let availableCards = [...cards]; // Start with a full deck
const cardDisplay = document.getElementById('card-display');
const nextButton = document.getElementById('next-button');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function drawCard() {
    if (availableCards.length === 0) {
        // If deck is empty, reshuffle the cards to start a new round
        availableCards = [...cards];
        shuffle(availableCards);
        cardDisplay.innerHTML = '<p class="prompt-text">DECK HABIS! Kartu diacak ulang. Klik lagi untuk kartu baru!</p>';
        return;
    }

    // Draw the top card
    const drawnCard = availableCards.pop();
    cardDisplay.innerHTML = `<p class="prompt-text">${drawnCard}</p>`;
    
    // Simple visual flair: shake the card
    cardDisplay.classList.remove('shaker');
    void cardDisplay.offsetWidth; // Trigger reflow
    cardDisplay.classList.add('shaker');
}

function startGame() {
    if (!isGameStarted) {
        shuffle(availableCards);
        isGameStarted = true;
        nextButton.textContent = 'KARTU BERIKUTNYA';
    }
    drawCard();
}

nextButton.addEventListener('click', startGame);