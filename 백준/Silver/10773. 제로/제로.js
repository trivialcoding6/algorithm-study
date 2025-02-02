const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const stack = [];
const k = parseInt(input[0]);

for (let i = 1; i <= k; i++) {
    const num = parseInt(input[i]);
    if (num === 0) {
        stack.pop();
    } else {
        stack.push(num);
    }
}

console.log(stack.reduce((sum, curr) => sum + curr, 0));