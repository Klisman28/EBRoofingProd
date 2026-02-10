
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const SRC_DIRS = [
    path.resolve(__dirname, '../app'),
    path.resolve(__dirname, '../components'),
    path.resolve(__dirname, '../lib')
];

// Helper to check if file has uppercase extension
function hasUppercaseExt(filename) {
    const ext = path.extname(filename);
    return ext && ext !== ext.toLowerCase() && ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'].includes(ext.toLowerCase());
}

// Rename file to lowercase extension, handling case-insensitive FS
function renameToLowercase(filePath) {
    const dir = path.dirname(filePath);
    const oldName = path.basename(filePath);
    const ext = path.extname(oldName);
    const newName = oldName.slice(0, -ext.length) + ext.toLowerCase();
    const newPath = path.join(dir, newName);

    if (filePath === newPath) return;

    console.log(`Renaming: ${oldName} -> ${newName}`);

    // Rename to tmp first to handle case-insensitive OS
    const tmpPath = filePath + '.tmp_rename';
    fs.renameSync(filePath, tmpPath);
    fs.renameSync(tmpPath, newPath);

    return { oldName, newName, dir };
}

// Recursively walk directory
function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath, callback);
        } else {
            callback(filePath);
        }
    }
}

// 1. Normalize Assets
const renovationMap = [];

console.log('--- Warning: Starting Asset Normalization ---');

walkDir(PUBLIC_DIR, (filePath) => {
    if (hasUppercaseExt(filePath)) {
        const result = renameToLowercase(filePath);
        if (result) renovationMap.push(result);
    }
});

console.log(`Renamed ${renovationMap.length} files.`);

// 2. Update Source Code
if (renovationMap.length > 0) {
    console.log('--- Updating Source Code References ---');

    // Create a map of old ext -> new ext for regex replacement
    // Actually, we can just do a replace for specific extensions globally to be safe 
    // but targeted replacement is better.
    // However, the prompt asks to "Update code to replace references .JPG/.PNG...". 
    // Let's do a scan and replace of the extensions.

    function updateFileContent(filePath) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Replace classic extensions
        content = content.replace(/\.JPG/g, '.jpg');
        content = content.replace(/\.PNG/g, '.png');
        content = content.replace(/\.JPEG/g, '.jpeg');
        // content = content.replace(/\.SVG/g, '.svg'); // usually svg is lowercase but just in case

        if (content !== originalContent) {
            console.log(`Updating references in: ${path.relative(path.resolve(__dirname, '..'), filePath)}`);
            fs.writeFileSync(filePath, content, 'utf8');
        }
    }

    SRC_DIRS.forEach(dir => {
        walkDir(dir, (filePath) => {
            if (['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json'].includes(path.extname(filePath))) {
                updateFileContent(filePath);
            }
        });
    });
}

console.log('--- Normalization Complete ---');
