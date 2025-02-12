const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function solution() {
  const t = parseInt(input[0]);
  let currentLine = 1;

  for (let i = 0; i < t; i++) {
    const numbers = input[currentLine].split(" ").map(Number);
    const n = numbers[0]; // 첫 번째 숫자는 개수
    const nums = numbers.slice(1); // 실제 숫자들

    let total = 0;
    // 모든 가능한 쌍의 GCD 계산
    for (let j = 0; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        total += gcd(nums[j], nums[k]);
      }
    }

    console.log(total);
    currentLine++;
  }
}

solution();
