function solution(s) {
    const stack = [];
    
    for (let i of s) {
        if (i === '(' || stack.length === 0) {
            stack.push(i);
        } else {
            stack.pop();
        }
    }
    
    return stack.length === 0;
}