const fs = require('fs');
const path = require('path');

const dataFile = path.resolve(__dirname, 'frontend/src/data/aimsaData.js');
let dataContent = fs.readFileSync(dataFile, 'utf8');

const imageDir = path.resolve(__dirname, 'frontend/src/assets/simsaa');
const images = fs.readdirSync(imageDir).filter(f => f.endsWith('.webp'));

let imports = '';
images.forEach(img => {
  // e.g. ruturaj_pandharkar.webp
  const varName = img.replace('.webp', '').split('_').map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)).join('');
  imports += `import ${varName} from '../assets/simsaa/${img}';\n`;
});

// For each image, replace the pattern if name matches
// Since names have spaces and upper cases, we'll brute force match logic
images.forEach(img => {
    const varName = img.replace('.webp', '').split('_').map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)).join('');
    // e.g. ruturaj pandharkar
    const nameWithoutExt = img.replace('.webp', '').replace('_', ' ');
    // We construct a regex to match the name (case insensitive) along with placeholder
    const regex = new RegExp(`{ name: "([^"]*${nameWithoutExt.split(' ')[0]}[^"]*)", role: "([^"]+)", image: "https://via.placeholder.com/150"`, "gi");
    
    dataContent = dataContent.replace(regex, (match, p1, p2) => {
        return `{ name: "${p1}", role: "${p2}", image: ${varName}`;
    });
});

dataContent = imports + "\n" + dataContent;

fs.writeFileSync(dataFile, dataContent);
console.log("Updated aimsaData.js");
