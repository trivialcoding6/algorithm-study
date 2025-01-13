const fs = require('fs');
const [A, B] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

function compareNumber(a, b) {
    return a > b ? '>' : a == b ? '==' : '<' 
}

console.log(compareNumber(A, B))