import sys

input = sys.stdin.readline

class Stack:
    def __init__(self):
        self.stack = []
        
    def push(self, item):
        self.stack.append(item)
        
    def pop(self):
        if self.stack:
            return self.stack.pop()
        return -1
        
    def top(self):
        if self.stack:
            return self.stack[-1]
        return -1
        
    def empty(self):
        return 1 if not self.stack else 0
        
    def size(self):
        return len(self.stack)
    
N = int(input())
stack = Stack()
output = []

for _ in range(N):
    command = input().split()
    if command[0] == '1':
        stack.push(command[1])
    elif command[0] == '2':
        output.append(str(stack.pop()))
    elif command[0] == '3':
        output.append(str(stack.size()))
    elif command[0] == '4':
        output.append(str(stack.empty()))
    elif command[0] == '5':
        output.append(str(stack.top()))

sys.stdout.write("\n".join(output))
