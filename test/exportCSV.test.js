import assert from 'assert';
import { generateMockData, generateCSV } from '../src/main.js';

const data = generateMockData('2024-01', '2024-03', 200000);
const csv = generateCSV(data);
const lines = csv.trim().split('\n');
assert.strictEqual(lines[0], 'Month,Investment,Valuation');
assert.strictEqual(lines.length, 1 + data.labels.length);
assert(lines[1].startsWith('2024-01,200000,'));
console.log('exportCSV tests passed');
