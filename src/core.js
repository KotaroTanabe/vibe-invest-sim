export function generateMockData(start = '2024-01', end = '2024-12', monthly = 100000) {
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
    cumulative += monthly;
    investmentData.push(cumulative);
    valuationData.push(Math.round(cumulative * (1 + 0.05 * Math.sin(i))));
    i += 1;
  }
  return { labels, investmentData, valuationData };
}

export function generateCSV(data) {
  let csv = 'Month,Investment,Valuation\n';
  data.labels.forEach((label, idx) => {
    csv += `${label},${data.investmentData[idx]},${data.valuationData[idx]}\n`;
  });
  return csv;
}
