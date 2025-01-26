const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();
const year = parseInt(input);

console.log(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 1 : 0);