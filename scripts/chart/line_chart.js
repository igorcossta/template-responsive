var ctx = document.getElementById("myChart3");
var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Ganhos",
        data: [
          10354100,
          11454200,
          12354100,
          16354100,
          22354100,
          24354100,
          33354100,
          35354100,
          24354100,
          15354100,
          27354100,
          54354100,
        ],
        backgroundColor: "rgba(78, 115, 223, 0.01)",
        borderColor: "rgba(78, 115, 223, 1)",
        borderWidth: 1,
        lineTension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: "rgba(78, 115, 223, 1)",
        pointBorderColor: "rgba(78, 115, 223, 1)",
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgb(234, 236, 244)",
            borderDash: [2],
            display: true,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 25,
        bottom: 0,
      },
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: "#6e707e",
      titleFontSize: 14,
      borderColor: "#dddfeb",
      borderWidth: 1,
      xPadding: 10,
      yPadding: 10,
      displayColors: false,
      intersect: false,
      mode: "index",
      caretPadding: 10,
    },
    callbacks: {
      label: function (tooltipItem, chart) {
        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || "";
        // return datasetLabel + ": $" + tooltipItem.yLabel;
        return (
          datasetLabel +
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(tooltipItem.yLabel)
        );
      },
    },
  },
});

console.log(
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    154120450
  )
);
