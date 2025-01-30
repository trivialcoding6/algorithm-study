const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const burger = input.slice(0, 3);
const drink = input.slice(3);

function solution(burger, drink) {
  return Math.min(...burger) + Math.min(...drink) - 50;
}

console.log(solution(burger, drink));
