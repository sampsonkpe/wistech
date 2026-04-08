document.addEventListener("DOMContentLoaded", () => {

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

if (burger && mobileNav){
burger.addEventListener("click", () => {
mobileNav.classList.toggle("active");
});
}

document.querySelectorAll(".faq-question").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.parentElement.classList.toggle("active")
})
})

// force render icons
if (window.lucide) {
lucide.createIcons();
}

});