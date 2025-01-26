const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let sum = 0;

for (let i = 0; i < 5; i++) {
  sum += parseInt(input[i]);
}

console.log(sum);