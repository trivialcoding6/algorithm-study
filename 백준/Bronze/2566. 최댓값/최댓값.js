const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let maxNumber = -1;
let maxNumberCoordinate = [0, 0];

for (let i = 0; i < 9; i++) {
  const row = input[i].split(" ").map(Number);
  for (let j = 0; j < 9; j++) {
    if (row[j] > maxNumber) {
      maxNumber = row[j];
      maxNumberCoordinate = [i + 1, j + 1];
    }
  }
}

console.log(maxNumber);
console.log(`${maxNumberCoordinate[0]} ${maxNumberCoordinate[1]}`);
