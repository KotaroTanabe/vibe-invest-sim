import { generateMockData, generateCSV } from './core.js';

export function renderChart(ctx, data) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: '累積投資額',
          borderColor: 'blue',
          fill: false,
          data: data.investmentData
        },
        {
          label: '評価額',
          borderColor: 'green',
          fill: false,
          data: data.valuationData
        }
      ]
    }
  });
}


export function downloadCSV(start, end, monthly) {
  const data = generateMockData(start, end, monthly);
  const csv = generateCSV(data);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'simulation.csv';
  a.click();
  URL.revokeObjectURL(url);
}

let chartInstance;

export function updateChart() {
  const start = document.getElementById('start-date').value;
  const end = document.getElementById('end-date').value;
  const monthly = parseInt(document.getElementById('monthly-amount').value, 10);
  const ctx = document.getElementById('chart').getContext('2d');
  const data = generateMockData(start, end, monthly);
  if (chartInstance) {
    chartInstance.destroy();
  }
  chartInstance = renderChart(ctx, data);
}

export function init() {
  document.getElementById('simulate-btn').addEventListener('click', updateChart);
  const csvBtn = document.getElementById('csv-btn');
  if (csvBtn) {
    csvBtn.addEventListener('click', () => {
      const start = document.getElementById('start-date').value;
      const end = document.getElementById('end-date').value;
      const monthly = parseInt(document.getElementById('monthly-amount').value, 10);
      downloadCSV(start, end, monthly);
    });
  }
  updateChart();
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
}
