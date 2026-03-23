const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        siteNav.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (siteNav) {
            siteNav.classList.remove("active");
        }
    });
});
// Subtle parallax effect for hero background
const hero = document.querySelector(".hero-mountain");

window.addEventListener("scroll", () => {
    if (hero) {
        const offset = window.pageYOffset;
        hero.style.backgroundPositionY = `${offset * 0.4}px`;
    }
});