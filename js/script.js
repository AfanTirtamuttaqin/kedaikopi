//toggle class active

const Navbarnav = document.querySelector(".Navbar-nav");

//ketika di klik
document.querySelector("#Hamburger-menu").onclick = () => {
  Navbarnav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilang

const Hamburger = document.querySelector("#Hamburger-menu");
document.addEventListener("click", function (e) {
  if (!Hamburger.contains(e.target) && !Navbarnav.contains(e.target)) {
    Navbarnav.classList.remove("active");
  }
});


