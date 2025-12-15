// MEGA DROPDOWN OPEN/CLOSE
const servicesBtn = document.getElementById("servicesBtn");
const servicesDropdown = document.getElementById("servicesDropdown");

servicesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  servicesDropdown.style.display =
    servicesDropdown.style.display === "block" ? "none" : "block";
});

// MOBILE MENU TOGGLE
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

const track = document.getElementById("track");
const cards = Array.from(track.children);

// Duplicate cards
cards.forEach((card) => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});
