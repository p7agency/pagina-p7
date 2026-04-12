const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\pedro\\.gemini\\antigravity\\scratch\\pagina-p7';
const oldText = 'https://api.whatsapp.com/send/?phone=5527999572486&text&type=phone_number&app_absent=0';
const newText = 'https://forms.gle/QF1tvGkUUNRj7FLL7';

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && file !== '.git' && file !== 'node_modules') {
            replaceInDir(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes(oldText)) {
                content = content.split(oldText).join(newText);
                fs.writeFileSync(fullPath, content);
                console.log(`Replaced in ${fullPath}`);
            }
        }
    }
}

replaceInDir(targetDir);
