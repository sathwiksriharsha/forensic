const fs = require('fs');
const path = require('path');
const pagesDir = path.join(process.cwd(), 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') && f !== 'Dashboard.tsx' && f !== 'Landing.tsx');

files.forEach(f => {
  const p = path.join(pagesDir, f);
  let content = fs.readFileSync(p, 'utf8');
  if (!content.includes('BackButton')) {
    content = 'import BackButton from \'../components/BackButton\';\n' + content;
    content = content.replace(/className="section-supertitle/g, 'className="mb-4 lg:mb-6" />\n        <div className="section-supertitle');
    content = content.replace(/<div className="mb-4 lg:mb-6" \/>/g, '<BackButton className="mb-4 lg:mb-6" />');
    fs.writeFileSync(p, content);
  }
});
console.log('Done replacing');
