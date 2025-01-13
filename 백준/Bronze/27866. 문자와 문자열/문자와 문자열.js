const fs = require('fs');
const [s, i] = fs.readFileSync(0, 'utf-8').trim().split('\n');

function solution(s, i) {
  console.log(s[i - 1]);
}

solution(s, i)