const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [hour, minute] = input[0].split(" ").map(Number);
const time = Number(input[1]);

const total_minutes = minute + time;
const newHour = (hour + Math.floor(total_minutes / 60)) % 24;
const newMinute = total_minutes % 60;

console.log(newHour, newMinute);