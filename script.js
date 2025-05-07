// script.js - Premium Enhancements for Bright Future Academy

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Scroll Reveal using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-show');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Parallax Scrolling Effect
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-overlay");
  let scrollY = window.scrollY;
  if (hero) {
    hero.style.transform = `translateY(${scrollY * 0.5}px)`;
  }
});

// Floating Label Animations for Form Inputs
const inputs = document.querySelectorAll("input, select");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.classList.add("focused");
  });
  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.classList.remove("focused");
    }
  });
});

// Hero Background Video Control
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  if (video) {
    video.muted = true;
    video.play().catch(error => {
      console.error("Autoplay failed:", error);
    });
  }
});

// Animated Counter for Stats or Milestones
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  const handleScroll = () => {
    if (counter.getBoundingClientRect().top < window.innerHeight) {
      updateCount();
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll);
});
