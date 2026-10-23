// Konfigurasi Kunci Keamanan
const CORRECT_PASSCODE = "1010";
let currentInput = "";
// Database Konten Tetap Sama Seperti Sebelumnya
const dataCatatanRama = {
  schedule: `## catatan

### schedule today
☐ membeli mango pudding cake  
☐ bawa lilin. jangan lupa korek.  
☐ membeli buket bunga  
☐ membawa pisau  
☐ temui Yan  

Yan Birthday — 10 Oct 🎂  
password kotak kuenya jangan sampai lupa.

dia bilang tidak perlu hadiah.  
aku tetap mau membawanya.`,
  
  forget: `## catatan

### aku lupa...
aku tadi mau menulis sesuatu.

sepertinya penting, tapi kau menelepon dan setelah mendengar suaramu aku malah lupa.

nanti kalau ingat kutulis lagi.`,
  
  important: `## catatan

### penting 🔒
*catatan terkunci*

**12 september · 23.48**

Aku sudah tahu namanya.

Hún Zhì. Lintah jiwa.

Aku mengulangnya beberapa kali di dalam kepala, berusaha membuat nama itu terdengar biasa. Tidak berhasil. Aku masih merasa mual setiap mengingat apa yang kulihat di dalam tubuhmu.

Tapi tadi kau datang membawa makan malam. Kau mengomel karena aku belum makan sejak siang, lalu duduk di lantai kamarku dan mengambil pengisi daya tanpa meminta izin.

Kau masih ingat aku tidak suka makanan terlalu pedas.

Kau masih memisahkan daun bawang dari makananku.

Yan baik padaku. Kau tidak berubah.

Mungkin ada hal-hal yang belum kupahami. Mungkin aku terlalu cepat merasa takut.

Besok aku akan menemuimu lagi. Aku ingin bisa melihat wajahmu tanpa terus memikirkan sesuatu yang bergerak di balik kulitmu.

—

**15 september · 02.16**

Kau baru saja menelepon.

Awalnya kukira kau tidak bisa tidur. Suaramu pelan, sedikit serak, and aku sudah hampir menyuruhmu minum air ketika kau berkata kedua hamstermu mati.

Aku bertanya apa mereka sakit.

Kau bilang bukan.

“Aku yang membunuhnya.”

Aku menunggu kau tertawa. Kau kadang membuat lelucon yang tidak kupahami, dan aku ingin sekali ini menjadi salah satunya.

Tapi kau hanya mengeluh bahwa mereka berisik. Bahwa kandangnya harus dibersihkan lagi. Bahwa dua makhluk sekecil itu ternyata menyusahkan sekali ketika kau sedang lelah.

Aku tidak tahu harus berkata apa.

Aku ingat kau pernah mengirimiku foto mereka tidur berdempetan. Kau bahkan meminta pendapatku saat memilih nama.

Tadi, sebelum menutup telepon, kau bertanya apakah besok aku mau sarapan bersamamu.

Aku menjawab iya.

Aku tidak tahu kenapa aku menjawab iya secepat itu.

—

**22 september · 19.32**

Aku turut berduka cita atas meninggalnya nenekmu.

Kalimat itu sudah kuketik di ruang percakapan kita ketika kau mengajakku ke warnet.

Kupikir kau tidak ingin sendirian. Jadi aku datang.

Kau sudah memesan dua komputer bersebelahan. Ada minuman untukku di meja, merek yang biasa kubeli. Kau melambaikan tangan ketika melihatku dan menyuruhku cepat duduk karena permainan hampir dimulai.

Kau terlihat gembira.

Aku merasa lega melihatnya. Sekarang aku malu mengakuinya, tetapi saat itu aku benar-benar lega. Kupikir setidaknya kau masih bisa tersenyum di hari seberat ini.

Lalu aku bertanya tentang nenekmu.

Tanganmu tetap bergerak di atas papan ketik.

“Aku yang membunuhnya, Ram.”

Aku masih bisa mendengar suara permainan dari komputermu. Seseorang berteriak lewat headset. Di belakang kita ada yang tertawa.

Kau menoleh kepadaku sambil tersenyum.

Senyum yang jarang sekali kulihat di wajah murammu. Tidak tampak dipaksakan. Kau bahkan terlihat senang akhirnya bisa bercerita kepadaku.

Aku tidak ingat apa yang kujawab.

Aku hanya ingat kakiku mundur sedikit ketika lututmu menyentuh lututku di bawah meja.

Kau menyadarinya. Kau bertanya apakah aku kedinginan.

Aku bilang iya.

—

**23 september · 04.07**

Aku takut.

Sudah berjam-jam aku mencoba menulis kalimat lain supaya catatan kemarin terdengar lebih masuk akal. Tidak ada.

Aku takut kepadamu, Yan.

Aku takut kau menelepon lagi dan menyebut nama seseorang yang kukenal. Aku takut suatu hari kau sedang lelah, seseorang terlalu berisik, lalu menurutmu membunuhnya adalah cara paling mudah untuk beristirahat.

Aku juga takut karena kemarin aku tetap duduk di sebelahmu.

Aku bermain dua ronde lagi.

Aku membiarkanmu mengambil kentang goreng dari piringku.

Lalu aku pulang tanpa memberi tahu siapa pun.

—

**27 september · 00.51**

Darah segar.

Itu yang kau makan.

Lebih sering darah binatang, katamu, karena memburu manusia jauh lebih sulit. Kau mengatakannya seperti sedang menjelaskan kenapa kau membeli makanan di tempat yang lebih dekat.

Aku mencoba mendengarkan sampai selesai. Sungguh.

Tapi ketika kau mulai bercerita, aku harus pergi ke kamar mandi. Aku membuka keran supaya kau tidak mendengar aku muntah.

Ketika aku keluar, kau sudah menyiapkan segelas air.

Kau bertanya apakah aku sakit.

Aku hampir marah kepadamu karena kau terdengar begitu khawatir.

Aku tidak jadi meminumnya.

—

**29 september · 01.14**

Yan sudah mati.

Aku perlu menulisnya tanpa menghapusnya lagi.

Sahabatku sudah mati.

Yang datang ke kampus dengan wajahnya, yang duduk di sebelahku, yang mengirim pesan untuk memastikan aku sudah sampai rumah—ada sesuatu yang lain di dalam tubuh itu.

Aku tahu.

Tetapi tadi kau tertidur di bahuku dalam perjalanan pulang, dan aku tidak membangunkanmu meskipun lenganku kesemutan.

Aku malah merendahkan suara ketika sopir bertanya kita turun di mana.

What yang sedang kulindungi?

—

**2 oktober · 22.39**

Mungkin aku seharusnya bersyukur.

Ragamu masih utuh. Aku masih bisa melihatmu. Nomormu masih bisa kuhubungi, dan hampir setiap kali aku menelepon, kau mengangkatnya.

Ada orang yang kehilangan seseorang dan bahkan tidak sempat berpamitan.

Aku masih bisa mengajakmu makan. Aku masih bisa membelikan kue ulang tahunmu.

Tapi aku mulai merasa sedang memakai wajahmu sebagai alasan untuk membiarkan semuanya terjadi.

Kalau aku tidak mengenalmu, apakah aku masih akan mencari pembenaran sebanyak ini?

Kalau yang mati berikutnya seseorang yang bisa kuselamatkan, apa yang harus kukatakan?

Bahwa kau baik padaku?

—

**6 oktober · 03.08**

Haruskah aku membunuhmu?

Aku sudah mengetik pertanyaan itu three kali. Dua kali kuhapus.

Kali ini akan kubiarkan.

Aku belum tahu apakah aku sanggup. Aku bahkan belum tahu apakah caraku akan berhasil.

Yang paling membuatku takut: aku masih berharap ada jawaban darimu. Seolah aku bisa datang, menunjukkan catatan ini, lalu kau akan membantuku memutuskan apa yang harus kulakukan.

Dulu, kalau ada masalah, aku selalu mencarimu.

Sekarang aku tidak tahu harus pergi ke siapa.

—

**9 oktober · 23.26**

Besok ulang tahunmu.

Pesanan kuenya sudah dikonfirmasi. Mango pudding cake. Aku meminta mereka menuliskan namamu dengan benar.

Kau bertanya apakah aku akan datang.

Aku bilang tentu saja.

Setelah itu kau mengirim pesan lagi.

“Jangan batal, ya.”

Aku sudah memasang alarm. Bunganya kuambil sebelum menemuimu.

Aku akan datang, Yan.

Aku hanya tidak tahu bagaimana caranya menatapmu besok.`,
  
  college: `## catatan

### tugas kuliah
*diubah kemarin · 16.42*

- revisi pendahuluan, sumbernya masih kurang
- cek format daftar pustaka
- minta bagian pembahasan ke anggota kelompok
- upload sebelum 23.59, jangan mepet lagi
- pinjam charger laptop, punyaku mulai rusak

Yan belum kirim bagiannya. ingatkan besok.`,
  
  semester: `## catatan

### semester ini
umur 21, masih juga salah masuk kelas.

☐ cek jadwal pengganti  
☐ bayar uang kas kelompok  
☐ print materi sebelum presentasi  
☐ tidur sebelum jam dua, minimal sekali minggu ini  

jangan ambil kelas pagi bareng Yan lagi.  
kalau dia terlambat, aku ikut terlambat.`
};

let currentInputPin = ""; 
let isNoteUnlocked = false; // Status apakah gembok rahasia sudah berhasil dibuka pemain sekali
let activeNoteId = "schedule";

const sidebarItems = document.querySelectorAll('.sidebar-item');
const notesTextarea = document.getElementById('notes-textarea');
const pinOverlay = document.getElementById('pin-screen-overlay');
const pinDots = document.querySelectorAll('.pin-dot');
const pinErrorMsg = document.getElementById('pin-error-msg');

// Mengatur Penukaran Tampilan Catatan
sidebarItems.forEach(item => {
  item.addEventListener('click', function() {
    sidebarItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
    
    activeNoteId = this.getAttribute('data-note');
    resetPinSystem();

    if (activeNoteId === 'important' && !isNoteUnlocked) {
      // Jika pilih catatan penting dan belum unlock -> Munculkan Layar Masukkan PIN
      pinOverlay.classList.add('active');
      notesTextarea.style.display = 'none';
    } else {
      // Catatan biasa langsung terbuka
      pinOverlay.classList.remove('active');
      notesTextarea.style.display = 'block';
      notesTextarea.value = dataCatatanRama[activeNoteId];
      notesTextarea.scrollTop = 0;
    }
  });
});

// Sistem Input Angka PIN via Keyboard Bawaan
const numKeys = document.querySelectorAll('.num-key');
numKeys.forEach(key => {
  key.addEventListener('click', function() {
    // Hanya proses input jika layar kunci PIN sedang aktif di layar
    if (activeNoteId === 'important' && !isNoteUnlocked && currentInputPin.length < 4) {
      const targetNum = this.getAttribute('data-val');
      currentInputPin += targetNum;
      
      updatePinDotsVisual();
      
      // Jika panjang gelembung input sudah mencapai 4 Digit
      if (currentInputPin.length === 4) {
        setTimeout(verifyEnteredPin, 200);
      }
    }
  });
});

// Fungsi Hapus Karakter PIN (Tombol Backspace ⌫)
document.getElementById('kbd-delete-btn').addEventListener('click', () => {
  if (activeNoteId === 'important' && !isNoteUnlocked && currentInputPin.length > 0) {
    currentInputPin = currentInputPin.slice(0, -1);
    updatePinDotsVisual();
    pinErrorMsg.classList.remove('show');
  }
});

// Update bulatan putih penuh/kosong di UI layar
function updatePinDotsVisual() {
  pinDots.forEach((dot, index) => {
    if (index < currentInputPin.length) {
      dot.classList.add('filled');
    } else {
      dot.classList.remove('filled');
    }
  });
}

// Verifikasi Jawaban 1010
function verifyEnteredPin() {
  if (currentInputPin === "1010") {
    // BERHASIL UNLOCK
    isNoteUnlocked = true;
    pinOverlay.classList.remove('active');
    notesTextarea.style.display = 'block';
    notesTextarea.value = dataCatatanRama['important'];
    
    // Ubah meta text sidebar agar gembok terlihat terbuka secara visual
    const lockedSidebarTitle = document.querySelector('[data-note="important"] .note-title');
    const lockedSidebarSnippet = document.querySelector('[data-note="important"] .note-snippet');
    if(lockedSidebarTitle) lockedSidebarTitle.innerHTML = "penting 🔓";
    if(lockedSidebarSnippet) lockedSidebarSnippet.innerHTML = "Aku sudah tahu namanya...";
  } else {
    // PIN SALAH
    pinErrorMsg.classList.add('show');
    currentInputPin = "";
    // Efek getar singkat/reset bulatan kosong
    setTimeout(updatePinDotsVisual, 300);
  }
}

// Reset data input pin jika berpindah-pindah dokumen
function resetPinSystem() {
  currentInputPin = "";
  pinErrorMsg.classList.remove('show');
  updatePinDotsVisual();
        }

// 1. Fungsi Jam Real-Time Otomatis
function updateClock() {
    const now = new Date();
    
    // Format Jam Menit (Contoh: 15:42)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    // Update Jam di Lock Screen & Home Screen
    document.getElementById('lock-time').textContent = formattedTime;
    document.getElementById('home-time').textContent = formattedTime;

// 📌 TAMBAHKAN BARIS INI (Agar jam di bar atas ikut berputar otomatis)
if (document.getElementById('top-time')) {
    document.getElementById('top-time').textContent = formattedTime;
}

    // Format Tanggal Indonesia (Contoh: Kamis, 22 Oktober)
    const opsiHari = { weekday: 'long' };
    const opsiTanggal = { day: 'numeric', month: 'long' };
    const namaHari = now.toLocaleDateString('id-ID', opsiHari);
    const namaTanggal = now.toLocaleDateString('id-ID', opsiTanggal);
    
    document.getElementById('lock-date').textContent = `${namaHari}, ${namaTanggal}`;
    document.getElementById('home-date').textContent = `${namaHari}, ${namaTanggal}`;
}

// Jalankan pencatatan waktu setiap 1 detik
setInterval(updateClock, 1000);
updateClock();

// // 2. Transisi Menuju Layar Kode Akses (PIN)
const swipeTrigger = document.getElementById('swipe-trigger');
let touchStartY = 0;
let touchEndY = 0;

// 1. Catat posisi awal jari saat menyentuh layar
swipeTrigger.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

// 2. Catat posisi akhir jari saat dilepas, lalu hitung jarak gesernya
swipeTrigger.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    
    // Jika jarak geser ke atas lebih dari 50 pixel, buka layar PIN
    if (touchStartY - touchEndY > 50) {
        document.getElementById('lock-screen').classList.remove('active');
        document.getElementById('passcode-screen').classList.add('active');
    }
});

// 3. Tetap pertahankan fungsi klik biasa sebagai alternatif (jika dites di laptop/PC)
swipeTrigger.addEventListener('click', () => {
    document.getElementById('lock-screen').classList.remove('active');
    document.getElementById('passcode-screen').classList.add('active');
});

// 2. Sistem Numpad PIN Kunci
function pressKey(num) {
    if (currentInput.length >= 4) return;
    
    currentInput += num;
    updateDots();

    if (currentInput.length === 4) {
        setTimeout(() => {
            if (currentInput === CORRECT_PASSCODE) {
                // Password Benar -> Buka Home Screen
                document.getElementById('passcode-screen').classList.remove('active');
                document.getElementById('home-screen').classList.add('active');
                
                // Animasi Dynamic Island membesar sekilas
                const island = document.getElementById('dynamic-island');
                island.style.width = "140px";
                setTimeout(() => island.style.width = "110px", 400);
            } else {
                // Password Salah -> Efek Guncang Layar
                const screen = document.getElementById('passcode-screen');
                screen.classList.add('shake');
                currentInput = "";
                updateDots();
                setTimeout(() => screen.classList.remove('shake'), 300);
            }
        }, 200);
    }
}

function clearKey() {
    currentInput = currentInput.slice(0, -1);
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < currentInput.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
  }

// 📌 FUNGSI BATERAI REAL-TIME OTOMATIS
if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        // 1. Fungsi untuk memperbarui angka teks baterai
        function updateBatteryStatus() {
            const level = Math.floor(battery.level * 100);
            const batteryElem = document.getElementById('battery-level');
            
            if (batteryElem) {
                batteryElem.textContent = level;
            }
        }

        // Jalankan fungsi saat pertama kali simulator dimuat
        updateBatteryStatus();

        // 2. Pasang pendengar otomatis jika daya baterai berubah di latar belakang
        battery.addEventListener('levelchange', updateBatteryStatus);
    });
} else {
    // Cadangan jika browser laptop/HP jadul tidak mendukung Battery API
    console.log("Battery Status API tidak didukung di browser ini.");
      }
