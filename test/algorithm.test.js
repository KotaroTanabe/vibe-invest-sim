import assert from 'assert';
import { simulateTrades } from '../src/algorithm.js';

const history = [
  { date: '2024-01-01', price: 100 },
  { date: '2024-02-01', price: 110 },
  { date: '2024-03-01', price: 120 }
];

// Default buyAmount (10000)
const trades = simulateTrades(history, 25000, {});
assert(Array.isArray(trades), 'simulateTrades should return an array');
assert.strictEqual(trades.length, 2, 'should stop when cash runs out');
assert.deepStrictEqual(trades[0], { tradeDate: '2024-01-01', action: 'buy', amount: 10000 });
assert.deepStrictEqual(trades[1], { tradeDate: '2024-02-01', action: 'buy', amount: 10000 });

// Custom buyAmount
const trades2 = simulateTrades(history, 15000, { buyAmount: 5000 });
assert.strictEqual(trades2.length, 3, 'should buy each date with smaller amount');
assert.deepStrictEqual(trades2[2], { tradeDate: '2024-03-01', action: 'buy', amount: 5000 });

console.log('algorithm tests passed');
