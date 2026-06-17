// Chats Bar & Cafe — shared interactions

// Intro overlay fade-out
window.addEventListener("load", () => {
  const intro = document.querySelector(".intro");
  if (intro) setTimeout(() => intro.classList.add("hide"), 900);
});

// Nav scroll state
const nav = document.querySelector(".nav");
if (nav) {
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
}

// Hero rolling images
const slides = document.querySelectorAll(".hero-slide");
if (slides.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
  }, 6000);
}

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach((el) => io.observe(el));
}

// Year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
