
window.onload = function () {
  const ctx = document.getElementById("rentChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      datasets: [
        {
          label: "Scenario A",
          data: [60000, 61800, 63654, 65564, 67531],
          borderColor: "green",
          borderWidth: 2,
          fill: false,
        },
        {
          label: "Scenario B",
          data: [60000, 62000, 64000, 66000, 68000],
          borderColor: "blue",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: false,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
};
