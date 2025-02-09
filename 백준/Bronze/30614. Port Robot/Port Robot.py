n = int(input())
log = input().strip()
stack = []

for ch in log:
    if ch.islower():
        stack.append(ch)
    else:
        if not stack or stack[-1] != ch.lower():
            print(0)
            exit()
        stack.pop()

print(1 if not stack else 0)
