const fs = require('fs');
const [N, B] = fs.readFileSync(0, 'utf-8').trim().split(' ');

function solution(N, B) {
    console.log(parseInt(N, B));
}

solution(N, parseInt(B));