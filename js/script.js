// Ambil elemen navbar (bagian menu navigasi yang tersembunyi di versi mobile)
const navbarNav = document.querySelector(`.navbar-nav`);

// Saat ikon hamburger (menu garis tiga) diklik, tampilkan atau sembunyikan menu navigasi
document.querySelector(`#hamburger-menu`).onclick = () => {
  navbarNav.classList.toggle("active"); // tambahkan atau hilangkan kelas 'active'
};

// Ambil elemen ikon hamburger
const hamburger = document.querySelector("#hamburger-menu");

// Jika pengguna klik di luar menu navigasi dan di luar ikon hamburger,
// maka menu navigasi akan ditutup otomatis
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active"); // tutup menu navigasi
  }
});
