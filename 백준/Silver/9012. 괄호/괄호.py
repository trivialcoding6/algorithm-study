import sys

input = sys.stdin.readline

n = int(input())
texts = [input().strip() for _ in range(n)]

def solution(s):
    stack = []
    for c in s:
        if c == '(':
            stack.append(c)
        else:
            if not stack:
                return "NO"
            stack.pop()
    return "YES" if not stack else "NO"

for s in texts:
    print(solution(s))