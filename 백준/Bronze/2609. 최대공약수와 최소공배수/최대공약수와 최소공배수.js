const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const [a, b] = input.split(' ').map(Number);

console.log(gcd(a, b));
console.log(lcm(a, b));