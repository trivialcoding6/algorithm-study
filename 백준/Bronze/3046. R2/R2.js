const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [R1, R2] = input.map(Number);

function solution(R1, R2) {
  return 2 * R2 - R1;
}

console.log(solution(R1, R2));
