// // MEGA DROPDOWN OPEN/CLOSE
// const servicesBtn = document.getElementById("servicesBtn");
// const servicesDropdown = document.getElementById("servicesDropdown");

// servicesBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   servicesDropdown.style.display =
//     servicesDropdown.style.display === "block" ? "none" : "block";
// });

// // MOBILE MENU TOGGLE
// const mobileMenuBtn = document.getElementById("mobileMenuBtn");
// const navLinks = document.querySelector(".nav-links");

// mobileMenuBtn.addEventListener("click", () => {
//   navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
// });

// const track = document.getElementById("track");
// const cards = Array.from(track.children);

// // Duplicate cards
// cards.forEach((card) => {
//   const clone = card.cloneNode(true);
//   track.appendChild(clone);
// });

const menuBtn = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // icon change
  if (navLinks.classList.contains("active")) {
    menuBtn.innerHTML = "✖";
  } else {
    menuBtn.innerHTML = "☰";
  }
});

// Carousel Card Slider
const carouselTrack = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const cardWidth = 344; // 320 + 24 gap
const totalCards = document.querySelectorAll(".service-card").length;
const visibleCards = 3;

let index = 0;

nextBtn.addEventListener("click", () => {
  if (index < totalCards - visibleCards) {
    index++;
    carouselTrack.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    carouselTrack.style.transform = `translateX(-${index * cardWidth}px)`;
  }
});

// .left-top-section .email-title {
//   /* background-image: url("../Images/email.png");
// background-position: 460px 10px;
// background-size: 20%; */
// }
