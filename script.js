// Set current year in footer for light maintenance
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scroll for header nav and primary contact CTA
  const scrollButtons = document.querySelectorAll("[data-scroll-to]");
  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-scroll-to");
      if (!targetId) return;
      const section = document.getElementById(targetId);
      if (!section) return;
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});


