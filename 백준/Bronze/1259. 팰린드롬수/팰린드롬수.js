const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const num = input[i];
  if (num === "0") break;

  const reversed = num.split("").reverse().join("");
  console.log(num === reversed ? "yes" : "no");
}
