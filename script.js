var chart;
var multipliers = [];

function generateRandomMultiplier() {
  return Math.floor(Math.random() * 10) + 1;
}

function initializeChart() {
  var multiplierChart = document.getElementById("multiplierChart");
  chart = new Chart(multiplierChart, {
    type: "line",
    data: {
      labels: Array.from(Array(11).keys()).map((i) => "Lanzamiento " + (i + 1)),
      datasets: [
        {
          label: "Multiplicadores",
          data: multipliers,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          pointRadius: 5,
          pointBackgroundColor: "rgba(54, 162, 235, 1)",
          pointBorderColor: "#fff",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(54, 162, 235, 1)",
          pointHoverBorderColor: "#fff"
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function updateChart() {
  chart.data.labels = Array.from(Array(11).keys()).map((i) => "" + (i + 1));
  chart.data.datasets[0].data = multipliers;
  chart.update();
}

function updateMultipliersContainer() {
  var multipliersContainer = document.getElementById("multipliersContainer");
  multipliersContainer.innerHTML = "";
  for (var i = multipliers.length - 10; i < multipliers.length; i++) {
    var multiplier = multipliers[i] ? multipliers[i] : "-";
    var multiplierElement = document.createElement("span");
    multiplierElement.innerText = multiplier;
    multipliersContainer.appendChild(multiplierElement);
  }
}

function predictNextMultiplier() {
  var lastMultiplier = multipliers[multipliers.length - 1];
  var predictedMultiplier = generateRandomMultiplier();

  var trend = "";
  if (predictedMultiplier > lastMultiplier) {
    trend = "Alcista";
  } else if (predictedMultiplier < lastMultiplier) {
    trend = "Bajista";
  } else {
    trend = "Sin tendencia clara";
  }

  alert(
    "Próximo Multiplicador: " + predictedMultiplier + "\nTendencia: " + trend
  );
}

function resetChart() {
  multipliers = [];
  updateChart();
  updateMultipliersContainer();
}

window.onload = function () {
  initializeChart();
  resetChart();
};