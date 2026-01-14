// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi komponen
    initNavigation();
    initBackToTop();
    initScrollAnimation();
    initContactForm();
    initNewsletterForm();
    initCounterAnimation();
    
    // Tampilkan halaman home saat pertama kali dimuat
    showSection('home');
});

// Fungsi untuk navigasi antar section
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Event listener untuk link navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Dapatkan id section target
            const targetId = this.getAttribute('href').substring(1);
            
            // Tampilkan section yang sesuai
            showSection(targetId);
            
            // Update active class pada nav link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Tutup menu mobile jika terbuka
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Event listener untuk hamburger menu (mobile)
    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Event listener untuk menutup menu saat klik di luar menu
    document.addEventListener('click', function(e) {
        if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// Fungsi untuk menampilkan section berdasarkan id
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    
    // Sembunyikan semua section
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Tampilkan section yang dipilih
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

 // JavaScript untuk navigasi tab
        document.addEventListener('DOMContentLoaded', function() {
            const navButtons = document.querySelectorAll('.nav-link-profile');
            
            navButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Hapus class active dari semua tombol
                    navButtons.forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    // Tambah class active ke tombol yang diklik
                    this.classList.add('active');
                });
            });
        });

