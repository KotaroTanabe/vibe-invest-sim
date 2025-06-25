import { rmSync, mkdirSync, cpSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist);

cpSync(join(__dirname, '..', 'src'), join(dist, 'src'), { recursive: true });
cpSync(join(__dirname, '..', 'public', 'index.html'), join(dist, 'index.html'));
cpSync(join(__dirname, '..', 'public', 'style.css'), join(dist, 'style.css'));

execSync(`node ${join(__dirname, 'updateIndex.js')} ${join(dist, 'index.html')}`, { stdio: 'inherit' });
