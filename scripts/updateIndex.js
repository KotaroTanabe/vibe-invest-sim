import { readFileSync, writeFileSync } from 'fs';
import { argv } from 'process';

const file = argv[2] || 'dist/index.html';
let html = readFileSync(file, 'utf8');
html = html.replace(/\.\.\/src\/main.js/g, 'src/main.js');
writeFileSync(file, html);
