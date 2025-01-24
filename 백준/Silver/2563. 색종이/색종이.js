const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const paper = Array.from(Array(100), () => Array(100).fill(0));

for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    
    for (let j = x; j < x + 10; j++) {
        for (let k = y; k < y + 10; k++) {
            paper[j][k] = 1;
        }
    }
}

const area = paper.reduce((acc, row) => {
    return acc + row.reduce((sum, cell) => sum + cell, 0);
}, 0);

console.log(area);