// Toggle Button

let navMenu = document.getElementById("nav-manu");
let navLinks = document.querySelectorAll(".nav-link");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// ---------> Show Scroll Up
window.addEventListener("scroll", () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-botton-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
});

// ---------> Change Background Header

window.addEventListener("scroll", () => {
  const header = document.getElementById("navbar");
  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-yellow-500");
  } else {
    header.classList.remove("border-b", "border-yellow-500");
  }
});

//-----------> Swiper

const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  grabCursor: true,
  breakPoint: {
    640: {
      slidesPreView: 1,
    },
    768: {
      slidesPreView: 2,
    },
    1024: {
      slidesPreView: 3,
    },
  },
});

//----------> Scroll Section Active Link

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((item) => {
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
});

// Scroll Reveal Animation

const sr = scrollReavel({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});

sr.reveal(`.home__data`);
