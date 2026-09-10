//toggle class active untuk hamburger menu

const Navbarnav = document.querySelector(".Navbar-nav");

//ketika di klik
document.querySelector("#Hamburger-menu").onclick = () => {
  Navbarnav.classList.toggle("active");
};

//toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#Shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik di luar elemen

const hm = document.querySelector("#Hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#Shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !Navbarnav.contains(e.target)) {
    Navbarnav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal Box

// const itemDetailModal= document.querySelector('#item-detail-modal');
// const itemDetailButtons= document.querySelectorAll('.item-detail-button');

// itemDetailButtons.forEach((btn) => {
// btn.onclick = (e) => {
//   itemDetailModal.style.display = 'flex';
//   e.preventDefault();
// };
// });

// itemDetailButtons.onclick = (e) => {
//   itemDetailModal.style.display = 'flex';
//   e.preventDefault();
// };

// // klik tombol close modal

// document.querySelector('.close-icon').onclick = (e) => {
//   itemDetailModal.style.display = 'none';
//   e.preventDefault();
// };

// Ambil semua tombol detail produk
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// Ketika tombol detail diklik
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();

    // Ambil ID modal dari href
    const modalId = btn.getAttribute("href");

    // Cari modal sesuai href
    const modal = document.querySelector(modalId);

    // Tampilkan modal
    modal.style.display = "flex";
  };
});

// Klik tombol close modal
const closeButtons = document.querySelectorAll(".close-icon");

closeButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();

    // Cari modal terdekat
    const modal = btn.closest(".modal");

    // Sembunyikan modal
    modal.style.display = "none";
  };
});
