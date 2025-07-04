import assert from 'assert';
import { generateMockData } from '../src/core.js';

let data = generateMockData();
assert.strictEqual(data.labels.length, 12, 'default should have 12 months');
assert.strictEqual(data.labels.length, data.investmentData.length);
assert.strictEqual(data.labels.length, data.valuationData.length);

data = generateMockData('2024-01', '2024-03');
assert.strictEqual(data.labels.length, 3, 'range should reflect months count');
assert.strictEqual(data.labels[0], '2024-01');
assert.strictEqual(data.labels[2], '2024-03');

data = generateMockData('2024-01', '2024-01', 50000);
assert.strictEqual(data.investmentData[0], 50000, 'monthly amount should be applied');
console.log('All tests passed');
