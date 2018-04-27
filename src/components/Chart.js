import { Bar } from "vue-chartjs";
let yLabels = {
  20: "Slow & Steady",
  40: "Rookie",
  60: "Pretty Good",
  80: "Smokin`",
  100: "Rockstar ★"
};
let defaults = {
  fontColor: "white",
  gridColor: "#314149",
  fontSize: 12,
  fontFamily: '"Varela Round", sans-serif'
};
export default {
  extends: Bar,
  data() {
    return {
      chartData: {
        labels: [
          "UX/UI Design",
          "HTML/CSS",
          "JavaScript",
          "PHP",
          "Java",
          "SQL",
          "Photoshop"
        ],
        datasets: [
          {
            data: [90, 100, 78, 87, 45, 75, 92],
            backgroundColor: [
              "rgba(29,233,182, 0.9)",
              "rgba(167,255,235, 0.9)",
              "rgba(29,233,182, 0.9)",
              "rgba(167,255,235, 0.9)",
              "rgba(29,233,182, 0.9)",
              "rgba(167,255,235, 0.9)",
              "rgba(29,233,182, 0.9)"
            ]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                color: defaults.gridColor
              },
              ticks: {
                fontColor: defaults.fontColor,
                fontSize: defaults.fontSize,
                fontFamily: defaults.fontFamily,
                beginAtZero: true,
                callback: value => yLabels[value]
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                color: defaults.gridColor
              },
              ticks: {
                fontColor: defaults.fontColor,
                fontSize: defaults.fontSize,
                fontFamily: defaults.fontFamily
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  }
};
