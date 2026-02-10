
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, '../public/assets');

let hasError = false;

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath);
        } else {
            const ext = path.extname(file);
            if (ext && ext !== ext.toLowerCase() && ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'].includes(ext.toLowerCase())) {
                console.error(`[ERROR] Uppercase extension found: ${path.relative(PUBLIC_DIR, filePath)}`);
                hasError = true;
            }
        }
    }
}

console.log('--- Checking for uppercase asset extensions ---');
walk(PUBLIC_DIR);

if (hasError) {
    console.error('--- VALIDATION FAILED: Please rename assets to lowercase ---');
    console.error('Run "npm run normalize:assets" to fix automatically.');
    process.exit(1);
} else {
    console.log('--- Asset Validation Passed ---');
}
