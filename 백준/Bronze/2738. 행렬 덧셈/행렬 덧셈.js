const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const matrixA = [];
const matrixB = [];
let result = '';

for (let i = 0; i < N * 2; i++) {
    const row = input[i + 1].split(' ').map(Number);
    if (i < N) {
        matrixA.push(row);
    } else {
        matrixB.push(row);
    }
}


for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        result += (matrixA[i][j] + matrixB[i][j]) + ' ';
    }
    result = result.trim() + '\n';
}

console.log(result.trim());