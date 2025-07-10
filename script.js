// ============================
// Lease Comparison - v0.2F
// Script File (Fixed Tab Logic)
// ============================

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const scenarioBlocks = {
    A: document.getElementById("scenario-A"),
    B: document.getElementById("scenario-B")
  };

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Get selected tab
      const selected = button.dataset.tab;

      // Show the correct scenario block, hide the other
      Object.keys(scenarioBlocks).forEach((key) => {
        if (key === selected) {
          scenarioBlocks[key].classList.remove("hidden");
        } else {
          scenarioBlocks[key].classList.add("hidden");
        }
      });
    });
  });

  // Default: show A, hide B
  scenarioBlocks.A.classList.remove("hidden");
  scenarioBlocks.B.classList.add("hidden");
});
