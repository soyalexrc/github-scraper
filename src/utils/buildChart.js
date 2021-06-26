import {Chart, registerables } from 'chart.js'

const buildScales = axes => {
  const scales = {
    xAxes: [
      {
        ticks: {
          fontFamily: 'Inter, system, -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Arial, sans-serif',
          fontSize: 12,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontFamily: 'Inter, system, -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Arial, sans-serif',
          fontSize: 12,
        },
      },
    ],
  };
  return axes ? scales : null;
};

const buildLegend = legend => {
  const leg = {
    position: 'right',
    labels: {
      fontFamily: 'Inter, system, -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Arial, sans-serif',
    },
  };
  return legend ? leg : null;
};

const buildChart = config => {
  Chart.register(...registerables);
  const { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend } = config;

  return new Chart(ctx, {
    type: chartType,
    responsive: true,
    maintainAspectRatio: false,
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          borderColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: buildScales(axes),
      legend: buildLegend(legend),
      tooltips: {
        titleFontFamily: 'Inter, system, -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Arial, sans-serif',
        bodyFontFamily: 'Inter, system, -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Arial, sans-serif',
        cornerRadius: 3,
      },
    },
  });
};

export default buildChart;
