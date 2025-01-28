const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
const [N, M] = input;
console.log(N * M - 1);