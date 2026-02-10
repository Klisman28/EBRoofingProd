
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, '../public/assets');

let renameCount = 0;

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
                const oldName = file;
                const newName = file.slice(0, -ext.length) + ext.toLowerCase();
                const newPath = path.join(dir, newName);

                const relativeOld = path.relative(path.resolve(__dirname, '..'), filePath).replace(/\\/g, '/');
                const relativeNew = path.relative(path.resolve(__dirname, '..'), newPath).replace(/\\/g, '/');

                console.log(`[GIT RENAME] ${relativeOld} -> ${relativeNew}`);

                try {
                    // Force git to rename properly
                    if (process.platform === 'win32') {
                        // On Windows, rename to temp first for git to catch it
                        const tmpName = relativeOld + '.tmp_rename';
                        execSync(`git mv "${relativeOld}" "${tmpName}"`);
                        execSync(`git mv "${tmpName}" "${relativeNew}"`);
                    } else {
                        execSync(`git mv "${relativeOld}" "${relativeNew}"`);
                    }
                    renameCount++;
                } catch (error) {
                    console.error(`Failed to rename ${relativeOld}:`, error.message);
                }
            }
        }
    }
}

console.log('--- Starting Git Asset Rename ---');
walk(PUBLIC_DIR);
console.log(`--- Renamed ${renameCount} files using git mv ---`);
