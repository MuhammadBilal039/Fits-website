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
const nextBtn = document.getElementById("nextButton");
const prevBtn = document.getElementById("prevButton");

console.log(nextBtn);
console.log(prevBtn);

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

const texts = [
  "Technology-Led Innovation",
  "Creative Excellence",
  "Digital Transformation",
];

const textElement = document.getElementById("text");

let textIndex = 0;
let charIndex = 0;

const typingSpeed = 100;
const stayTime = 1200;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    // text complete hone ke baad upar slide
    setTimeout(slideUp, stayTime);
  }
}

function slideUp() {
  textElement.classList.add("slide-up");

  setTimeout(() => {
    // reset
    textElement.classList.remove("slide-up");
    textElement.textContent = "";
    charIndex = 0;
    textIndex = (textIndex + 1) % texts.length;

    typeText();
  }, 1000);
}

typeText();

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

myMap();
