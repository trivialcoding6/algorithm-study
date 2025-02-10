const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return Math.floor((a * b) / gcd(a, b));
}

const n = parseInt(input[0]);
const results = [];

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  results.push(lcm(a, b));
}

console.log(results.join("\n"));
