import assert from 'assert';
import { simulateTrades } from '../src/algorithm.js';

const trades = simulateTrades([], 100000, {});
assert(Array.isArray(trades), 'simulateTrades should return an array');
console.log('algorithm tests passed');
