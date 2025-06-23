import assert from 'assert';
import { generateMockData } from '../src/main.js';

const data = generateMockData();
assert.strictEqual(data.labels.length, 12, 'should have 12 months');
assert.strictEqual(data.labels.length, data.investmentData.length);
assert.strictEqual(data.labels.length, data.valuationData.length);
console.log('All tests passed');
