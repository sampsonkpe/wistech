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

document.addEventListener("click",(e)=>{

const burger = document.getElementById("burger");
const nav = document.getElementById("mobileNav");

if(!nav.contains(e.target) && !burger.contains(e.target)){
nav.classList.remove("active");
}

});

// force render icons
if (window.lucide) {
lucide.createIcons();
}

});