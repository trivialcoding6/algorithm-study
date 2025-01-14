const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  solution(a, b);
}

function solution(a, b) {
  if (b % a === 0) {
    console.log("factor");
  } else if (a % b === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}