const fs = require('fs');
const path = require('path');

const rootDir = '.';
const readmePath = path.join(rootDir, 'README.md');

// Detect folders starting with DayXX
const folders = fs.readdirSync(rootDir)
  .filter(name => /^Day\d{2}-/.test(name))
  .sort((a, b) => {
    const numA = parseInt(a.match(/^Day(\d{2})/)[1]);
    const numB = parseInt(b.match(/^Day(\d{2})/)[1]);
    return numA - numB;
  });

// Generate progress table
const tableRows = folders.map(folder => {
  const day = folder.match(/^Day(\d{2})/)[1];
  const title = folder.replace(/^Day\d{2}-/, '').replace(/-/g, ' ');

  const solutionPath = path.join(rootDir, folder, 'solution.js');

  let status = '⏳ Upcoming';
  if (fs.existsSync(solutionPath)) {
    const content = fs.readFileSync(solutionPath, 'utf8').trim();
    // Check if content has code (not just empty or comment lines)
    if (content && !/^\s*(\/\/.*)?$/.test(content) && content.length > 5) {
      status = '✅ Completed';
    }
  }

  return `| ${day}  | ${title} | ${status} |`;
});

const progressTable = `
## ✅ My Progress

| Day | Challenge Title | Status |
|-----|------------------|--------|
${tableRows.join('\n')}
`.trim();

// Read current README.md
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Replace old table section (between "## ✅ My Progress" and the next "##")
const updatedReadme = readmeContent.replace(
  /## ✅ My Progress[\s\S]*?(?=## )/,
  progressTable + '\n\n'
);

// Write back to README.md
fs.writeFileSync(readmePath, updatedReadme, 'utf8');

console.log('✅ README.md updated with accurate daily progress!');

