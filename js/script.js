// MOBILE NAV TOGGLE
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

burger.addEventListener("click", () => {
mobileNav.classList.toggle("active");
burger.classList.toggle("open");
});


// CLOSE NAV WHEN CLICK LINK
document.querySelectorAll(".mobile-nav a").forEach(link => {
link.addEventListener("click", () => {
mobileNav.classList.remove("active");
burger.classList.remove("open");
});
});


// CLICK OUTSIDE TO CLOSE
document.addEventListener("click", (e) => {
if (
!burger.contains(e.target) &&
!mobileNav.contains(e.target)
){
mobileNav.classList.remove("active");
burger.classList.remove("open");
}
});


// ESC KEY CLOSE
document.addEventListener("keydown", (e) => {
if(e.key === "Escape"){
mobileNav.classList.remove("active");
burger.classList.remove("open");
}
});


// LUCIDE ICON INIT
if (window.lucide) {
lucide.createIcons();
}