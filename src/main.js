export function generateMockData(start = '2024-01', end = '2024-12') {
  const startDate = new Date(`${start}-01`);
  const endDate = new Date(`${end}-01`);
  const labels = [];
  const investmentData = [];
  const valuationData = [];
  let cumulative = 0;
  let i = 0;
  for (let d = new Date(startDate); d <= endDate; d.setMonth(d.getMonth() + 1)) {
    const label = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    labels.push(label);
    cumulative += 100000;
    investmentData.push(cumulative);
    valuationData.push(Math.round(cumulative * (1 + 0.05 * Math.sin(i))));
    i += 1;
  }
  return { labels, investmentData, valuationData };
}

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

let chartInstance;

export function updateChart() {
  const start = document.getElementById('start-date').value;
  const end = document.getElementById('end-date').value;
  const ctx = document.getElementById('chart').getContext('2d');
  const data = generateMockData(start, end);
  if (chartInstance) {
    chartInstance.destroy();
  }
  chartInstance = renderChart(ctx, data);
}

export function init() {
  document.getElementById('simulate-btn').addEventListener('click', updateChart);
  updateChart();
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
}
