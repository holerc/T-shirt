// ======= Navbar Toggle for Mobile =======
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Create menu icon dynamically
const menuIcon = document.createElement("div");
menuIcon.classList.add("menu-icon");
menuIcon.innerHTML = `<i class="ri-menu-line"></i>`;
navbar.insertBefore(menuIcon, navLinks);

// Toggle menu on click
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.innerHTML = navLinks.classList.contains("active")
    ? `<i class="ri-close-line"></i>`
    : `<i class="ri-menu-line"></i>`;
});

// ======= Smooth Scroll for Anchor Links =======
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ======= “Buy” Button Function =======
document.querySelectorAll(".btn-buy").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.closest(".box-item");
    const name = product.querySelector(".h1-name").textContent;
    const price = product.querySelector(".price h1").textContent;

    alert(`🛒 You've selected: ${name}\n💲 Price: ${price}`);
  });
});

// ======= “See” Button Function =======
document.querySelectorAll(".btn-see").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.closest(".box-item");
    const name = product.querySelector(".h1-name").textContent;
    const desc = product.querySelector(".des-p").textContent;

    alert(`👕 ${name}\n📄 Description: ${desc}`);
  });
});

// ======= Poster Button =======
document.getElementById("poster-btn").addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".container-products").offsetTop - 50,
    behavior: "smooth",
  });
});

// ======= Small Scroll Animation =======
window.addEventListener("scroll", () => {
  const poster = document.querySelector(".main-poster");
  const scrollY = window.scrollY;

  poster.style.backgroundPositionY = `${scrollY * 0.4}px`;
});
