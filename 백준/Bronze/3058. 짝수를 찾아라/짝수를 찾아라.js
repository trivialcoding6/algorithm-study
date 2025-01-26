const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const numbers = input[i].split(' ').map(Number);
    let sumEven = 0;
    let minEven = Infinity;
    
    for (const num of numbers) {
        if (num % 2 === 0) {
            sumEven += num;
            if (num < minEven) {
                minEven = num;
            }
        }
    }
    
    console.log(sumEven);
    console.log(minEven);
}