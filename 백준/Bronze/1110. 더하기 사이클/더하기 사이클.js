const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(N) {
  const original = parseInt(N);
  let current = original;
  let count = 0;

  while (true) {
    count += 1;
    const tens = Math.floor(current / 10);
    const units = current % 10;
    const sumDigits = tens + units;
    const newNumber = units * 10 + (sumDigits % 10);

    if (newNumber === original) {
      break;
    }
    current = newNumber;
  }
  return count;
}

console.log(solution(input));
