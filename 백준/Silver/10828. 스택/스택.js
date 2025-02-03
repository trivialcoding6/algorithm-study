const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Stack {
  constructor() {
    this.items = [];
  }

  push(x) {
    this.items.push(x);
  }

  pop() {
    return this.empty() ? -1 : this.items.pop();
  }

  top() {
    return this.empty() ? -1 : this.items[this.items.length - 1];
  }

  empty() {
    return this.items.length === 0 ? 1 : 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
const result = [];
const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const [cmd, arg] = input[i].split(" ");
  switch (cmd) {
    case "push":
      stack.push(Number(arg));
      break;
    case "pop":
      result.push(stack.pop());
      break;
    case "top":
      result.push(stack.top());
      break;
    case "size":
      result.push(stack.size());
      break;
    case "empty":
      result.push(stack.empty());
      break;
  }
}

console.log(result.join("\n"));
