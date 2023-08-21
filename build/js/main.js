const hamburgerMenuBtn = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");

const toggleMenu = () => {
  hamburgerMenuBtn.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
};

hamburgerMenuBtn.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("click", toggleMenu);
