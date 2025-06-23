export function generateMockData() {
  const labels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const investmentData = [];
  const valuationData = [];
  let cumulative = 0;
  for (let i = 0; i < labels.length; i++) {
    cumulative += 100000;
    investmentData.push(cumulative);
    valuationData.push(Math.round(cumulative * (1 + 0.05 * Math.sin(i))));
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

export function init() {
  const ctx = document.getElementById('chart').getContext('2d');
  const data = generateMockData();
  renderChart(ctx, data);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
}
