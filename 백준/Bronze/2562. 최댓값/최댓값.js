const fs = require("fs");
const numbers = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const maxNum = Math.max(...numbers);
console.log(maxNum);
console.log(numbers.indexOf(maxNum) + 1);
