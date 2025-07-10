// ============================
// Lease Comparison - v0.2F
// Script File
// ============================

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const scenarioBlocks = {
    A: document.getElementById("scenario-A"),
    B: document.getElementById("scenario-B")
  };

  // Tab click handler
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.getAttribute("data-tab");

      // Update active tab styling
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Show selected block, hide others
      for (const key in scenarioBlocks) {
        scenarioBlocks[key].classList.toggle("hidden", key !== selected);
      }
    });
  });

  // Show Scenario A by default
  scenarioBlocks.A.classList.remove("hidden");
  scenarioBlocks.B.classList.add("hidden");
});
