const fs = require('fs');
const filePath = 'src/data/industryInteractionData.js';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// Lines 344-354 (0-indexed: 343-353) need to be replaced with:
// { heading: "...interns...", images: [internsMuks] }
// and then close the sections array + content object + entry

// Remove lines 344-354 (0-indexed 343-353) and replace line 344 with the interns entry
const before = lines.slice(0, 343);  // lines 1-343
const interns = [
    '                            {',
    '                                heading: "Industry Academia Relation - Our interns with Muks Team",',
    '                                images: [internsMuks]',
    '                            }',
    '                        ]',
    '                }',
    '    },'
];
const after = lines.slice(357); // from line 358 onwards (expert_sessions)

const result = [...before, ...interns, ...after];
fs.writeFileSync(filePath, result.join('\n'), 'utf8');
console.log('SUCCESS: Fixed Muks corrupted sections. New line count:', result.length);

// Verify fix
const verify = fs.readFileSync(filePath, 'utf8').split('\n');
for (let i = 338; i <= 360; i++) {
    console.log(`Line ${i+1}: ${verify[i]}`);
}
