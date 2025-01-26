const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let maxLength = 0;
let result = '';

for (let i = 0; i < 5; i++) {
    maxLength = Math.max(maxLength, input[i].length);
}

for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < 5; j++) {
        if (i < input[j].length) {
            result += input[j][i];
        }
    }
}

console.log(result);