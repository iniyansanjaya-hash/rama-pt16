// Konfigurasi Kunci Keamanan
const CORRECT_PASSCODE = "1010";
let currentInput = "";
// Database Konten Tetap Sama Seperti Sebelumnya
const dataCatatanRama = {
  schedule: `## catatan\n\n### schedule today\n☐ ambil mango pudding cake\n☐ bawa lilin. jangan lupa korek.\n☐ ambil buket bunga\n☐ membawa pisau\n☐ temui Yan\n\nYan Birthday — 10 Oct 🎂\npassword kotak kuenya jangan sampai lupa.\n\ndia billing tidak perlu hadiah.\naku tetap mau membawanya.`,
  forget: `## catatan\n\n### aku lupa...\naku tadi mau menulis sesuatu.\n\nsepertinya penting, tapi kau menelepon dan setelah mendengar suaramu aku malah lupa.\n\nnanti kalau ingat kutulis lagi.`,
  important: `## catatan\n\n### penting 🔒\n*catatan terkunci*\n\n**12 september · 23.48**\n\nAku sudah tahu namanya.\n\nHún Zhì. Lintah jiwa.\n...\n[Sesuai teks lengkap di atas]`,
  college: `## catatan\n\n### tugas kuliah\n...\n[Sesuai teks lengkap di atas]`,
  semester: `## catatan\n\n### semester ini\n...\n[Sesuai teks lengkap di atas]`
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
