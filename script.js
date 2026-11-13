// 1. Logika Menu Mobile (Navigasi Interaktif)
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// 2. Logika Tabs Flower Fairy
function openFairy(evt, fairyName) {
    // Sembunyikan semua konten tab
    let tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Hapus kelas 'active' dari semua tombol
    let tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].className = tabBtns[i].className.replace(" active", "");
    }

    // Tampilkan tab yang dipilih dan tambahkan kelas 'active' pada tombolnya
    document.getElementById(fairyName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 3. Logika Perhitungan Kalkulasi Damage (Kalkulator Tank)
function hitungDamage() {
    let rawDamage = parseFloat(document.getElementById('rawDamage').value);
    let dmgReduc = parseFloat(document.getElementById('dmgReduc').value);
    let isBlocked = document.getElementById('isBlocked').value;
    let hasilText = document.getElementById('hasilCalc');

    if (isNaN(rawDamage) || isNaN(dmgReduc)) {
        hasilText.innerHTML = "Harap masukkan angka yang valid!";
        return;
    }

    // Batasi maksimum damage reduction di 100%
    if (dmgReduc > 100) dmgReduc = 100;

    // Rumus: Damage Akhir = Raw Damage - (Raw Damage * (Damage Reduction / 100))
    let finalDamage = rawDamage - (rawDamage * (dmgReduc / 100));

    // Jika serangan di-block (simulasi mekanik Block stat mengurangi 50% damage yang tersisa)
    if (isBlocked === 'yes') {
        finalDamage = finalDamage * 0.5;
    }

    hasilText.innerHTML = `🛡️ Damage Diterima Ree: ${Math.round(finalDamage).toLocaleString('id-ID')}`;
}

// 4. Logika Database / Mock Backend Upload
const uploadForm = document.getElementById('uploadForm');
const uploadStatus = document.getElementById('uploadStatus');

uploadForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman
    
    // Mengambil nilai input
    const title = document.getElementById('infoTitle').value;
    const desc = document.getElementById('infoDesc').value;
    
    // Di sini biasanya Anda mengirim data menggunakan fetch() ke API XAMPP/MySQL atau Firebase.
    // Simulasi pengiriman data backend:
    uploadStatus.style.display = "block";
    uploadStatus.style.color = "black";
    uploadStatus.innerHTML = "Mengirim data ke database akun...";

    setTimeout(() => {
        uploadStatus.style.color = "green";
        uploadStatus.innerHTML = `Berhasil! Data "${title}" telah dikirim ke backend. Menunggu sinkronisasi ke stat Ree.`;
        uploadForm.reset();
        
        // Sembunyikan pesan setelah 4 detik
        setTimeout(() => {
            uploadStatus.style.display = "none";
        }, 4000);
    }, 1500);
});