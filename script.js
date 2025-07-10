// ============================
// Lease Comparison - v0.2F
// Script File
// ============================

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and hide all content
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((tab) => (tab.style.display = "none"));

      // Activate current
      button.classList.add("active");
      tabContents[index].style.display = "block";
    });
  });

  // Show first tab by default
  tabButtons[0].classList.add("active");
  tabContents[0].style.display = "block";
});
