document.addEventListener("DOMContentLoaded", () => {

  /* ─── Element refs ─── */
  const burger    = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");
  const overlay   = document.getElementById("overlay");

  function closeNav() {
    if (mobileNav) mobileNav.classList.remove("active");
    if (overlay)   overlay.classList.remove("active");
  }

  /* ─── Toggle menu on burger click ─── */
  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
      if (overlay) overlay.classList.toggle("active");
    });
  }

  /* ─── Close on overlay click ─── */
  if (overlay) {
    overlay.addEventListener("click", closeNav);
  }

  /* ─── Close on click outside nav/burger ─── */
  document.addEventListener("click", (e) => {
    if (
      mobileNav &&
      burger &&
      !mobileNav.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      closeNav();
    }
  });

  /* ─── FAQ accordion ─── */
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("active");
    });
  });

  /* ─── Lucide icons ─── */
  if (window.lucide) {
    lucide.createIcons();
  }

});