const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'industryInteractionData.js');
let content = fs.readFileSync(filePath, 'utf8');

// Remove the corrupt duplicated block between the 3rd closing brace of sections array and the closing of muks content
// The broken block is the 4th entry starting at { images: [muksAcademia] } without a heading
// plus duplicated hardware and interns entries

// Replace the malformed block (lines 344-356 equivalent)
const broken = /\{\s*\r?\n\s*images: \[muksAcademia\]\s*\r?\n\s*\},\s*\r?\n\s*\{\s*\r?\n\s*heading: "Industry Academia Relation: Hardware awarded by Muks \(Rs 51224\/-\)",\s*\r?\n\s*images: \[muksHW\]\s*\r?\n\s*\},\s*\r?\n\s*\{\s*\r?\n\s*heading: "Industry Academia Relation - Our interns with Muks Team",\s*\r?\n\s*images: \[internsMuks\]\s*\r?\n\s*\}\s*\r?\n\s*\]\s*\r?\n\s*\}\s*\r?\n\s*\},/;

const fixed = `                            {
                                heading: "Industry Academia Relation - Our interns with Muks Team",
                                images: [internsMuks]
                            }
                        ]
                }
    },`;

if (broken.test(content)) {
    content = content.replace(broken, fixed);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('SUCCESS: Fixed the corrupted Muks sections block.');
} else {
    console.log('Pattern not found - showing surrounding content for debug:');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
        if (idx >= 342 && idx <= 360) {
            console.log(`${idx + 1}: ${JSON.stringify(line)}`);
        }
    });
}
