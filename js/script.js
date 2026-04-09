document.addEventListener("DOMContentLoaded", () => {

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");


// TOGGLE MENU
if (burger && mobileNav){
burger.addEventListener("click", () => {
mobileNav.classList.toggle("active");

if (overlay){
overlay.classList.toggle("active");
}

});
}


// CLOSE WHEN CLICK OVERLAY
if (overlay){
overlay.addEventListener("click", () => {
mobileNav.classList.remove("active");
overlay.classList.remove("active");
});
}


// CLOSE WHEN CLICK OUTSIDE
document.addEventListener("click",(e)=>{

if(
mobileNav &&
burger &&
!mobileNav.contains(e.target) &&
!burger.contains(e.target)
){
mobileNav.classList.remove("active");

if (overlay){
overlay.classList.remove("active");
}
}

});


// FAQ
document.querySelectorAll(".faq-question").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.parentElement.classList.toggle("active")
})
});


// LUCIDE
if (window.lucide) {
lucide.createIcons();
}

});