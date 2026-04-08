document.addEventListener("DOMContentLoaded", function(){

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

if (burger && mobileNav){
burger.addEventListener("click", () => {
mobileNav.classList.toggle("active");
});
}

// init lucide AFTER DOM loads
if (window.lucide){
lucide.createIcons();
}

});