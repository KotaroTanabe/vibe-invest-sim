import assert from 'assert';
import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');
assert(html.includes('src/main.js'), 'index should reference src/main.js');
assert(!html.includes('../src/main.js'), 'index should not use parent path');
assert(!fs.existsSync('dist/public'), 'dist/public should not exist');
console.log('build script test passed');
